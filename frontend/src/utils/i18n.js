// Simple internationalization utility for English and Serbian
const translations = {
  en: {
    // Common
    'loading': 'Loading...',
    'error': 'Error',
    'success': 'Success',
    'cancel': 'Cancel',
    'save': 'Save',
    'delete': 'Delete',
    'edit': 'Edit',
    'add': 'Add',
    'search': 'Search',
    'filter': 'Filter',
    'export': 'Export',
    'import': 'Import',
    
    // Authentication
    'login': 'Login',
    'logout': 'Logout',
    'register': 'Register',
    'email': 'Email',
    'password': 'Password',
    'first_name': 'First Name',
    'last_name': 'Last Name',
    'welcome': 'Welcome',
    'login_success': 'Login successful',
    'logout_success': 'Logout successful',
    'invalid_credentials': 'Invalid email or password',
    
    // Navigation
    'dashboard': 'Dashboard',
    'expenses': 'Expenses',
    'my_expenses': 'My Expenses',
    'categories': 'Categories',
    'reports': 'Reports',
    'approvals': 'Approvals',
    'settings': 'Settings',
    
    // Expenses
    'create_expense': 'Create Expense',
    'expense_title': 'Expense Title',
    'description': 'Description',
    'amount': 'Amount',
    'currency': 'Currency',
    'category': 'Category',
    'date': 'Date',
    'receipt': 'Receipt',
    'upload_receipt': 'Upload Receipt',
    'status': 'Status',
    'pending': 'Pending',
    'approved': 'Approved',
    'rejected': 'Rejected',
    'expense_created': 'Expense created successfully',
    'expense_updated': 'Expense updated successfully',
    'expense_deleted': 'Expense deleted successfully',
    
    // OCR
    'processing_receipt': 'Processing receipt...',
    'ocr_detected_amount': 'Detected Amount',
    'ocr_detected_date': 'Detected Date',
    'ocr_confidence': 'Detection Confidence',
    'use_detected_data': 'Use Detected Data',
    
    // Dashboard
    'total_expenses': 'Total Expenses',
    'pending_expenses': 'Pending Expenses',
    'approved_expenses': 'Approved Expenses',
    'total_amount': 'Total Amount',
    'recent_expenses': 'Recent Expenses',
    'expense_summary': 'Expense Summary',
    
    // Roles
    'employee': 'Employee',
    'manager': 'Manager',
    'finance': 'Finance',
    'admin': 'Administrator',
  },
  
  sr: {
    // Common - Serbian
    'loading': 'Učitavanje...',
    'error': 'Greška',
    'success': 'Uspešno',
    'cancel': 'Otkaži',
    'save': 'Sačuvaj',
    'delete': 'Obriši',
    'edit': 'Izmeni',
    'add': 'Dodaj',
    'search': 'Pretraži',
    'filter': 'Filter',
    'export': 'Izvezi',
    'import': 'Uvezi',
    
    // Authentication
    'login': 'Prijava',
    'logout': 'Odjava',
    'register': 'Registracija',
    'email': 'Email',
    'password': 'Lozinka',
    'first_name': 'Ime',
    'last_name': 'Prezime',
    'welcome': 'Dobrodošli',
    'login_success': 'Uspešna prijava',
    'logout_success': 'Uspešna odjava',
    'invalid_credentials': 'Neispravni podaci za prijavu',
    
    // Navigation
    'dashboard': 'Kontrolna tabla',
    'expenses': 'Troškovi',
    'my_expenses': 'Moji troškovi',
    'categories': 'Kategorije',
    'reports': 'Izveštaji',
    'approvals': 'Odobrenja',
    'settings': 'Podešavanja',
    
    // Expenses
    'create_expense': 'Kreiranje troška',
    'expense_title': 'Naziv troška',
    'description': 'Opis',
    'amount': 'Iznos',
    'currency': 'Valuta',
    'category': 'Kategorija',
    'date': 'Datum',
    'receipt': 'Račun',
    'upload_receipt': 'Otpremi račun',
    'status': 'Status',
    'pending': 'Na čekanju',
    'approved': 'Odobreno',
    'rejected': 'Odbačeno',
    'expense_created': 'Trošak je uspešno kreiran',
    'expense_updated': 'Trošak je uspešno ažuriran',
    'expense_deleted': 'Trošak je uspešno obrisan',
    
    // OCR
    'processing_receipt': 'Obrađujem račun...',
    'ocr_detected_amount': 'Detektovan iznos',
    'ocr_detected_date': 'Detektovan datum',
    'ocr_confidence': 'Pouzdanost detekcije',
    'use_detected_data': 'Koristi detektovane podatke',
    
    // Dashboard
    'total_expenses': 'Ukupni troškovi',
    'pending_expenses': 'Troškovi na čekanju',
    'approved_expenses': 'Odobreni troškovi',
    'total_amount': 'Ukupan iznos',
    'recent_expenses': 'Skorašnji troškovi',
    'expense_summary': 'Pregled troškova',
    
    // Roles
    'employee': 'Zaposleni',
    'manager': 'Menadžer',
    'finance': 'Finansije',
    'admin': 'Administrator',
  }
};

export const t = (key, language = 'en') => {
  return translations[language]?.[key] || translations['en']?.[key] || key;
};

export const getCurrentLanguage = () => {
  return localStorage.getItem('expense_language') || 'en';
};

export const setLanguage = (language) => {
  localStorage.setItem('expense_language', language);
};

export default { t, getCurrentLanguage, setLanguage };
