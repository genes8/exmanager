import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { apiEndpoints } from '../utils/api';
import { t } from '../utils/i18n';
import { format } from 'date-fns';

const ExpenseDetail = ({ user, language }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expense, setExpense] = useState(null);
  const [loading, setLoading] = useState(true);
  const [approvalComment, setApprovalComment] = useState('');
  const [submittingApproval, setSubmittingApproval] = useState(false);

  useEffect(() => {
    if (id) {
      loadExpense();
    }
  }, [id]);

  const loadExpense = async () => {
    try {
      setLoading(true);
      const response = await apiEndpoints.getExpense(id);
      setExpense(response.data);
    } catch (error) {
      console.error('Error loading expense:', error);
      toast.error('Failed to load expense details');
      navigate('/expenses');
    } finally {
      setLoading(false);
    }
  };

  const handleApproval = async (status) => {
    if (!window.confirm(`Are you sure you want to ${status} this expense?`)) {
      return;
    }

    setSubmittingApproval(true);
    try {
      await apiEndpoints.approveExpense(id, {
        expense_id: id,
        status,
        comment: approvalComment
      });
      
      toast.success(`Expense ${status} successfully`);
      await loadExpense(); // Reload to get updated status
    } catch (error) {
      console.error('Error processing approval:', error);
      toast.error('Failed to process approval');
    } finally {
      setSubmittingApproval(false);
      setApprovalComment('');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const canApprove = user?.role && ['manager', 'finance', 'admin'].includes(user.role) && 
                    expense?.status === 'pending';

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!expense) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900">Expense not found</h3>
        <p className="text-gray-500">The expense you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Expense Details</h1>
          <p className="text-gray-600">View and manage expense information</p>
        </div>
        <button
          onClick={() => navigate('/expenses')}
          className="btn-secondary inline-flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Expenses</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-gray-900">Expense Information</h2>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(expense.status)}`}>
                {t(expense.status, language)}
              </span>
            </div>

            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <dt className="text-sm font-medium text-gray-500">{t('expense_title', language)}</dt>
                <dd className="mt-1 text-sm text-gray-900">{expense.title}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">{t('category', language)}</dt>
                <dd className="mt-1">
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {expense.category}
                  </span>
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">{t('amount', language)}</dt>
                <dd className="mt-1 text-sm text-gray-900 font-semibold">
                  {expense.currency} {expense.amount.toFixed(2)}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">{t('date', language)}</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {format(new Date(expense.date), 'dd MMMM yyyy')}
                </dd>
              </div>

              <div className="md:col-span-2">
                <dt className="text-sm font-medium text-gray-500">{t('description', language)}</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {expense.description || 'No description provided'}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">Created</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {format(new Date(expense.created_at), 'dd MMM yyyy, HH:mm')}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">Last Updated</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {format(new Date(expense.updated_at), 'dd MMM yyyy, HH:mm')}
                </dd>
              </div>
            </dl>
          </div>

          {/* OCR Data */}
          {expense.ocr_data && !expense.ocr_data.error && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">OCR Processing Results</h3>
              
              <div className="space-y-4">
                {expense.ocr_data.detected_amounts && expense.ocr_data.detected_amounts.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Detected Amounts</h4>
                    <div className="flex flex-wrap gap-2">
                      {expense.ocr_data.detected_amounts.map((amount, index) => (
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                          {amount}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {expense.ocr_data.detected_dates && expense.ocr_data.detected_dates.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Detected Dates</h4>
                    <div className="flex flex-wrap gap-2">
                      {expense.ocr_data.detected_dates.map((date, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                          {date}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {expense.ocr_data.language && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Detected Language</h4>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">
                      {expense.ocr_data.language}
                    </span>
                  </div>
                )}

                {expense.ocr_data.confidence && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Detection Confidence</h4>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${Math.min(expense.ocr_data.confidence * 100, 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">
                        {(expense.ocr_data.confidence * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Receipt */}
          {expense.receipt_url && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Receipt</h3>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mb-4">Receipt file attached</p>
                {expense.ocr_data && !expense.ocr_data.error && (
                  <div className="mb-4">
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      OCR Processed
                    </span>
                  </div>
                )}
                <button className="btn-secondary w-full">
                  View Receipt
                </button>
              </div>
            </div>
          )}

          {/* Approval Section */}
          {canApprove && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Approval</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                    Comment (Optional)
                  </label>
                  <textarea
                    id="comment"
                    rows={3}
                    value={approvalComment}
                    onChange={(e) => setApprovalComment(e.target.value)}
                    className="input-field"
                    placeholder="Add a comment about your decision..."
                  />
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => handleApproval('approved')}
                    disabled={submittingApproval}
                    className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors duration-200"
                  >
                    {submittingApproval ? 'Processing...' : 'Approve'}
                  </button>
                  <button
                    onClick={() => handleApproval('rejected')}
                    disabled={submittingApproval}
                    className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors duration-200"
                  >
                    {submittingApproval ? 'Processing...' : 'Reject'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Metadata */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Metadata</h3>
            <dl className="space-y-3">
              <div>
                <dt className="text-sm font-medium text-gray-500">Expense ID</dt>
                <dd className="mt-1 text-sm text-gray-900 font-mono">{expense.id}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Submitted by</dt>
                <dd className="mt-1 text-sm text-gray-900">{expense.user_id}</dd>
              </div>
              {expense.ocr_data && (
                <div>
                  <dt className="text-sm font-medium text-gray-500">OCR Processing</dt>
                  <dd className="mt-1">
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      Completed
                    </span>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseDetail;
