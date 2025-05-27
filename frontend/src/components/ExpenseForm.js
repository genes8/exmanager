import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { apiEndpoints } from '../utils/api';
import { t } from '../utils/i18n';

const ExpenseForm = ({ user, language }) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ocrProcessing, setOcrProcessing] = useState(false);
  const [receiptFile, setReceiptFile] = useState(null);
  const [ocrData, setOcrData] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    amount: '',
    currency: 'EUR',
    category: '',
    date: new Date()
  });

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const response = await apiEndpoints.getCategories();
      setCategories(response.data);
      if (response.data.length > 0) {
        setFormData(prev => ({
          ...prev,
          category: response.data[0].name
        }));
      }
    } catch (error) {
      console.error('Error loading categories:', error);
      toast.error('Failed to load categories');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      date
    }));
  };

  const onDropAccepted = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setReceiptFile(file);
      await processReceiptOCR(file);
    }
  }, []);

  const processReceiptOCR = async (file) => {
    setOcrProcessing(true);
    try {
      const formDataForOCR = new FormData();
      formDataForOCR.append('title', 'OCR Processing');
      formDataForOCR.append('amount', '0');
      formDataForOCR.append('category', categories[0]?.name || 'Other');
      formDataForOCR.append('date', new Date().toISOString());
      formDataForOCR.append('file', file);

      const response = await apiEndpoints.createExpense(formDataForOCR);
      
      if (response.data.ocr_data && !response.data.ocr_data.error) {
        setOcrData(response.data.ocr_data);
        
        // Auto-fill form with detected data
        if (response.data.ocr_data.detected_amounts && response.data.ocr_data.detected_amounts.length > 0) {
          const detectedAmount = parseFloat(
            response.data.ocr_data.detected_amounts[0].replace(/[^\d.,]/g, '').replace(',', '.')
          );
          if (!isNaN(detectedAmount)) {
            setFormData(prev => ({
              ...prev,
              amount: detectedAmount.toString()
            }));
          }
        }

        if (response.data.ocr_data.detected_dates && response.data.ocr_data.detected_dates.length > 0) {
          try {
            const dateStr = response.data.ocr_data.detected_dates[0];
            const detectedDate = new Date(dateStr.replace(/(\d{1,2})[/.](\d{1,2})[/.](\d{2,4})/, '$3-$2-$1'));
            if (!isNaN(detectedDate.getTime())) {
              setFormData(prev => ({
                ...prev,
                date: detectedDate
              }));
            }
          } catch (err) {
            console.warn('Could not parse detected date');
          }
        }

        toast.success('Receipt processed successfully! Check the detected data below.');
      } else {
        toast.warning('OCR processing completed but no data was detected');
      }

      // Delete the temporary expense created for OCR
      // Note: In production, you might want a dedicated OCR endpoint
      
    } catch (error) {
      console.error('OCR processing error:', error);
      toast.error('Failed to process receipt');
    } finally {
      setOcrProcessing(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDropAccepted,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
      'application/pdf': ['.pdf']
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024 // 10MB
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.amount || !formData.category) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      const submitData = new FormData();
      submitData.append('title', formData.title);
      submitData.append('description', formData.description || '');
      submitData.append('amount', parseFloat(formData.amount));
      submitData.append('currency', formData.currency);
      submitData.append('category', formData.category);
      submitData.append('date', formData.date.toISOString());
      
      if (receiptFile) {
        submitData.append('file', receiptFile);
      }

      await apiEndpoints.createExpense(submitData);
      toast.success(t('expense_created', language));
      navigate('/expenses');
    } catch (error) {
      console.error('Error creating expense:', error);
      toast.error('Failed to create expense');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{t('create_expense', language)}</h1>
        <p className="text-gray-600">Add a new expense with optional receipt scanning</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                {t('expense_title', language)} *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleInputChange}
                className="input-field"
                placeholder="Enter expense title"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                {t('description', language)}
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleInputChange}
                className="input-field"
                placeholder="Optional description"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('amount', language)} *
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  step="0.01"
                  min="0"
                  required
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('currency', language)}
                </label>
                <select
                  id="currency"
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="EUR">EUR (€)</option>
                  <option value="RSD">RSD (din)</option>
                  <option value="USD">USD ($)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                {t('category', language)} *
              </label>
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleInputChange}
                className="input-field"
              >
                <option value="">Select category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('date', language)} *
              </label>
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                maxDate={new Date()}
                className="input-field"
                placeholderText="Select date"
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => navigate('/expenses')}
                className="btn-secondary flex-1"
              >
                {t('cancel', language)}
              </button>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary flex-1"
              >
                {loading ? t('loading', language) : t('save', language)}
              </button>
            </div>
          </form>
        </div>

        {/* Receipt Upload & OCR Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {t('upload_receipt', language)} (OCR)
          </h3>

          {/* File Upload Area */}
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive 
                ? 'border-blue-400 bg-blue-50' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <input {...getInputProps()} />
            <div className="space-y-4">
              <div className="flex justify-center">
                {ocrProcessing ? (
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                ) : (
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                )}
              </div>
              {ocrProcessing ? (
                <p className="text-blue-600 font-medium">{t('processing_receipt', language)}</p>
              ) : (
                <>
                  <p className="text-gray-600">
                    {isDragActive ? 'Drop the file here' : 'Drag and drop receipt file here, or click to select'}
                  </p>
                  <p className="text-sm text-gray-500">
                    Supports: JPG, PNG, PDF (max 10MB)
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Uploaded File Info */}
          {receiptFile && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{receiptFile.name}</p>
                  <p className="text-xs text-gray-500">{(receiptFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setReceiptFile(null);
                    setOcrData(null);
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* OCR Results */}
          {ocrData && !ocrData.error && (
            <div className="mt-6 space-y-4">
              <h4 className="text-md font-medium text-gray-900">OCR Detection Results</h4>
              
              {ocrData.detected_amounts && ocrData.detected_amounts.length > 0 && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h5 className="text-sm font-medium text-green-800 mb-2">
                    {t('ocr_detected_amount', language)}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {ocrData.detected_amounts.map((amount, index) => (
                      <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                        {amount}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {ocrData.detected_dates && ocrData.detected_dates.length > 0 && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h5 className="text-sm font-medium text-blue-800 mb-2">
                    {t('ocr_detected_date', language)}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {ocrData.detected_dates.map((date, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                        {date}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {ocrData.confidence && (
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <h5 className="text-sm font-medium text-gray-800 mb-2">
                    {t('ocr_confidence', language)}
                  </h5>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${Math.min(ocrData.confidence * 100, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {(ocrData.confidence * 100).toFixed(1)}% confidence
                  </p>
                </div>
              )}

              {ocrData.full_text && (
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <h5 className="text-sm font-medium text-gray-800 mb-2">Full OCR Text</h5>
                  <p className="text-xs text-gray-600 max-h-32 overflow-y-auto whitespace-pre-wrap">
                    {ocrData.full_text}
                  </p>
                </div>
              )}
            </div>
          )}

          {ocrData && ocrData.error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">{ocrData.error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;
