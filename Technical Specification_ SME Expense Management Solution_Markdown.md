# Technical Specification: SME Expense Management Solution


[Executive Summary	5](#executivesummary5)
[Key Competitive Functionalities (MVP Requirements)	5](#keycompetitivefunctionalitiesmvprequirements5)
[Strategic Differentiators	6](#strategicdifferentiators6)
[Technical Alignment	7](#technicalalignment7)
[Implementation Roadmap	7](#implementationroadmap7)
[Conclusion	8](#conclusion8)
[1. System Architecture Overview	8](#1systemarchitectureoverview8)
	[1.1 Architecture Pattern	8](#11architecturepattern8)
	[1.2 Core Services Architecture	8](#12coreservicesarchitecture8)
	[1.3 Technology Stack	9](#13technologystack9)
		[Backend Technology Stack	9](#backendtechnologystack9)
		[Frontend Technology Stack	9](#frontendtechnologystack9)
		[Mobile Technology Stack	10](#mobiletechnologystack10)
	[1.4 Communication Patterns	10](#14communicationpatterns10)
[2. Data Architecture	11](#2dataarchitecture11)
	[2.1 Database Architecture	11](#21databasearchitecture11)
	[2.2 Core Data Models	11](#22coredatamodels11)
		[2.2.1 Company Data Model	11](#221companydatamodel11)
		[2.2.2 User Data Model	12](#222userdatamodel12)
		[2.2.3 Expense Data Model	13](#223expensedatamodel13)
		[2.2.4 Travel Order Data Model	14](#224travelorderdatamodel14)
		[2.2.5 Report Data Model	16](#225reportdatamodel16)
	[2.3 Database Schema	18](#23databaseschema18)
		[2.3.1 Auth Service Schema	18](#231authserviceschema18)
		[2.3.2 Expense Service Schema	19](#232expenseserviceschema19)
		[2.3.3 Travel Service Schema	21](#233travelserviceschema21)
	[2.4 Database Migration Strategy	22](#24databasemigrationstrategy22)
[3. API Specifications	23](#3apispecifications23)
	[3.1 API Design Principles	24](#31apidesignprinciples24)
	[3.2 API Authentication and Authorization	24](#32apiauthenticationandauthorization24)
	[3.3 Core API Endpoints	25](#33coreapiendpoints25)
		[3.3.1 Authentication API	25](#331authenticationapi25)
		[3.3.2 User API	25](#332userapi25)
		[3.3.3 Expense API	26](#333expenseapi26)
		[3.3.4 Travel Order API	26](#334travelorderapi26)
		[3.3.5 OCR API	27](#335ocrapi27)
		[3.3.6 Report API	27](#336reportapi27)
		[3.3.7 Integration API	28](#337integrationapi28)
	[3.4 API Request/Response Examples	28](#34apirequestresponseexamples28)
		[Example: Creating an Expense	28](#examplecreatinganexpense28)
		[Example: Error Response	29](#exampleerrorresponse29)
	[3.5 API Documentation	30](#35apidocumentation30)
[4. Security Architecture	30](#4securityarchitecture30)
	[4.1 Authentication and Authorization Framework	30](#41authenticationandauthorizationframework30)
		[4.1.1 Authentication Methods	30](#411authenticationmethods30)
		[4.1.2 Authorization Model	30](#412authorizationmodel30)
		[4.1.3 JWT Implementation	31](#413jwtimplementation31)
	[4.2 Data Protection	31](#42dataprotection31)
		[4.2.1 Encryption	31](#421encryption31)
		[4.2.2 Data Classification	31](#422dataclassification31)
	[4.3 API Security	31](#43apisecurity31)
	[4.4 GDPR Compliance	32](#44gdprcompliance32)
	[4.5 Security Monitoring	32](#45securitymonitoring32)
[5. Frontend Architecture	32](#5frontendarchitecture32)
	[5.1 Web Application Architecture	33](#51webapplicationarchitecture33)
		[5.1.1 Component Architecture	33](#511componentarchitecture33)
		[5.1.2 State Management	38](#512statemanagement38)
		[5.1.3 Routing Architecture	40](#513routingarchitecture40)
		[5.1.4 Localization Architecture	43](#514localizationarchitecture43)
	[5.2 Mobile Application Architecture	46](#52mobileapplicationarchitecture46)
		[5.2.1 React Native Architecture	46](#521reactnativearchitecture46)
		[5.2.2 Mobile-Specific Features	48](#522mobilespecificfeatures48)
[6. Backend Services	56](#6backendservices56)
	[6.1 Service Architecture	56](#61servicearchitecture56)
		[6.1.1 Microservices Organization	56](#611microservicesorganization56)
		[6.1.2 Service Example	57](#612serviceexample57)
	[6.2 API Gateway	59](#62apigateway59)
	[6.3 Authorization Service	61](#63authorizationservice61)
	[6.4 OCR Service	67](#64ocrservice67)
	[6.5 Notification Service	76](#65notificationservice76)
[7. Integration Architecture	82](#7integrationarchitecture82)
	[7.1 Integration Patterns	82](#71integrationpatterns82)
		[7.1.1 Integration Service Design	82](#711integrationservicedesign82)
		[7.1.2 Integration Provider Pattern	83](#712integrationproviderpattern83)
		[7.1.3 Accounting System Integration	84](#713accountingsystemintegration84)
		[7.1.4 Provider Factory	89](#714providerfactory89)
	[7.2 CSV Import/Export	90](#72csvimportexport90)
[8. Deployment Architecture	96](#8deploymentarchitecture96)
	[8.1 Containerization Strategy	96](#81containerizationstrategy96)
	[8.2 Kubernetes Deployment	97](#82kubernetesdeployment97)
	[8.3 CI/CD Pipeline	99](#83cicdpipeline99)
	[8.4 Infrastructure as Code	101](#84infrastructureascode101)
[9. Performance and Scalability	104](#9performanceandscalability104)
	[9.1 Performance Requirements	104](#91performancerequirements104)
	[9.2 Performance Optimization Strategies	104](#92performanceoptimizationstrategies104)
		[9.2.1 Database Optimization	104](#921databaseoptimization104)
		[9.2.2 Caching Strategy	106](#922cachingstrategy106)
		[9.2.3 API Optimization	108](#923apioptimization108)
	[9.3 Scalability Architecture	111](#93scalabilityarchitecture111)
[10. Support Service Architecture	112](#10supportservicearchitecture112)
	[10.1 Help Center Service	112](#101helpcenterservice112)
	[10.2 Support Ticket Service	114](#102supportticketservice114)
	[10.3 Live Chat Service	118](#103livechatservice118)
[11. Testing Strategy	122](#11testingstrategy122)
	[11.1 Unit Testing	122](#111unittesting122)
	[11.2 Integration Testing	125](#112integrationtesting125)
	[11.3 End-to-End Testing	130](#113endtoendtesting130)
	[11.4 Performance Testing	132](#114performancetesting132)
	[11.5 Security Testing	135](#115securitytesting135)
	[11.6 Accessibility Testing	139](#116accessibilitytesting139)
[12. Monitoring and Logging Architecture	140](#12monitoringandloggingarchitecture140)
	[12.1 Logging Strategy	140](#121loggingstrategy140)
	[12.2 Application Monitoring	143](#122applicationmonitoring143)
	[12.3 Alert Configuration	153](#123alertconfiguration153)
[13. Disaster Recovery and Backup Strategies	155](#13disasterrecoveryandbackupstrategies155)
	[13.1 Database Backup Strategy	155](#131databasebackupstrategy155)
	[13.2 Database Restore Procedure	158](#132databaserestoreprocedure158)
	[13.3 Disaster Recovery Plan	162](#133disasterrecoveryplan162)
	[4.2 Service Outage Recovery	164](#42serviceoutagerecovery164)
	[4.3 Infrastructure Failure Recovery	164](#43infrastructurefailurerecovery164)
	[4.4 Data Center Outage Recovery	164](#44datacenteroutagerecovery164)
[7. Testing and Maintenance	165](#7testingandmaintenance165)
[8. Recovery Completion	165](#8recoverycompletion165)
[15. Conclusion	165](#15conclusion165)
# Executive Summary

This document integrates the complete technical specification for the SME Expense Management Solution, a cloud-based platform designed to streamline expense tracking, approval, and reporting for small and medium enterprises (SMEs). It consolidates requirements derived from competitive analysis and outlines a robust, scalable, and user-friendly system to meet market demands. Below is a summary of key competitive functionalities (MVP requirements) and strategic differentiators, aligning with the integrated technical specification.

## Key Competitive Functionalities (MVP Requirements)

To compete with established solutions like SAP Concur, Expensify, Zoho Expense, and Certify, the MVP must include the following core functionalities, identified through competitive analysis:

1. **Mobile App with OCR Receipt Scanning**:

- Enables employees to capture receipts via smartphone, with OCR extracting key data (amount, date, merchant, category) to create expense entries automatically.

- Eliminates manual input, accelerating expense logging.

- Competitors like Expensify (SmartScan), Zoho Expense, and Certify offer similar capabilities.

- **Expense Report Creation and Submission**:

- Allows grouping multiple expenses into reports for submission to managers.

- Supports combining receipts into a single report (Expensify) and auto-generating periodic reports (Certify).

- MVP must enable report creation and submission for approval.

- **Approval Workflow (Single and Multi-Level)**:

- Routes reports to one or more managers based on defined rules.

- Certify supports complex multi-level approvals; Expensify offers multi-approver flows in higher plans.

- MVP requires basic single-level approval (e.g., line manager), with plans for multi-level expansion.

- **Automatic Categorization and Expense Policies**:

- Supports expense categories (travel, lodging, entertainment) and company policies (e.g., per diem limits, receipt requirements).

- Flags non-compliant expenses during entry (SAP Concur model).

- MVP needs basic policy enforcement (e.g., mandatory receipts above a threshold, category limits).

- **Travel Order and Expense Tracking**:

- Facilitates travel order creation (pre-trip approval, destination, duration) and per diem calculations.

- Links expenses to travel orders; supports automated per diem calculations per company/country rules (Zoho Expense model).

- MVP should allow basic travel details input, per diem automation, and expense association, with future booking integrations planned.

- **Mileage and Location Tracking**:

- Tracks vehicle-related expenses via manual or route-based mileage input, calculating costs at predefined rates.

- Expensify and Zoho Expense provide mileage tracking for field vehicles.

- MVP must include mileage logging with cost calculation.

- **Corporate Card and Bank Integration**:

- Imports transactions from corporate cards to auto-populate expenses.

- Expensify and SAP Concur sync with personal/corporate cards.

- MVP should support CSV import of card transactions, with real-time bank integrations planned.

- **Accounting and ERP Integrations**:

- Exports expense data to accounting systems (QuickBooks, Xero, NetSuite, Sage) for reimbursement and booking.

- Expensify and Zoho Expense offer seamless integrations.

- MVP requires CSV/Excel export compatible with accounting, with API integrations for later phases.

- **Multi-Currency and Local Tax Support**:

- Handles expenses in multiple currencies with automatic conversion and tax (e.g., VAT) tracking.

- SAP Concur supports 35 countries; Certify and Zoho offer customizable tax rates.

- MVP must support multiple currencies, local languages (English, German, French, Serbian, Arabic for UAE), and tax compliance for Europe and UAE.

- **Reporting and Analytics**:

- Provides insights into spending by employee, project, category, or period.

- Certify offers 40+ analytical templates; Expensify provides customizable reports.

- MVP needs basic reports (totals by user/category, approval status), with advanced dashboards planned.

- **User Accounts and Permissions**:

- Supports roles: submitter (employee), approver (manager), and administrator.

- MVP requires employee and admin roles, with basic approval assignments and plans for granular permissions.

## Strategic Differentiators

To stand out in a competitive market, the solution emphasizes three key differentiators, addressing gaps in competitor offerings:

1. **Superior Localized Customer Support**:

- Offers multilingual support (help center, live chat, phone) tailored to SMEs, unlike Expensify’s email-only model or Zoho’s paid onboarding.

- Provides video tutorials and in-app guidance in local languages, building trust and easing adoption for non-technical users.

- Contrasts with SAP Concur’s English-centric, partner-driven support.

- **Fast Implementation and Seamless Integrations**:

- Simplifies onboarding with plug-and-play connectors, CSV import/export, and API keys, avoiding complex setups like Concur’s HR integrations.

- Plans regional partnerships (e.g., local travel agencies, accounting services) to create an ecosystem, enhancing interoperability for SMEs.

- Focuses on quick deployment to meet SME resource constraints.

- **Intuitive UI/UX Optimized for SMEs**:

- Delivers a minimalist, step-by-step interface, reducing the learning curve seen in enterprise tools.

- Incorporates conversational interactions (inspired by Expensify’s chat-style UI) for expense entry and travel orders.

- Ensures mobile-first design, appealing to small firms needing accessible, training-free solutions.

## 1. System Architecture Overview

### 1.1 Architecture Pattern

The system will implement a microservices architecture to enable independent scaling, deployment, and development of different functional components. This approach facilitates:

- **Independent Service Deployment**: Each service can be deployed without affecting others

- **Technology Heterogeneity**: Different services can use appropriate technologies

- **Resilience**: Failure in one service does not cascade to others

- **Scalability**: Individual services can scale based on demand

- **Team Autonomy**: Different teams can work on different services

![System Architecture Diagram]

### 1.2 Core Services Architecture

The system will be composed of the following microservices:

| Service | Primary Responsibility | Internal Endpoints | External API
  |
|---|---|---|---|
| Authentication Service | User authentication, authorization, session management | /auth/* | /api/auth/* |
| User Service | User and company management, roles, permissions | /users/* | /api/users/* |
| Expense Service | Core expense tracking, categories, approvals | /expenses/* | /api/expenses/* |
| Travel Order Service | Travel order management, per diems | /travel/* | /api/travel/* |
| Reporting Service | Analytics, exports, data visualization | /reports/* | /api/reports/* |
| OCR Service | Receipt scanning and text extraction | /ocr/* | /api/ocr/* |
| Notification Service | Email, push, in-app notifications | /notifications/* | /api/notifications/* |
| Integration Service | Third-party integrations, API gateway | /integrations/* | /api/integrations/* |
| Support Service | Chat, ticketing, knowledge base | /support/* | /api/support/* |

### 1.3 Technology Stack

#### Backend Technology Stack

| Component | Technology | Justification
  |
|---|---|---|
| Programming Language | Node.js with TypeScript | Type safety, large ecosystem, developer availability |
| API Framework | Express.js | Mature, well-documented, flexible |
| Database | PostgreSQL | Relational data, ACID compliance, strong ecosystem |
| Cache | Redis | Fast in-memory data structure store, pub/sub capabilities |
| Search | Elasticsearch | Full-text search capabilities for receipts and documentation |
| Message Queue | RabbitMQ | Reliable message delivery, multiple exchange types |
| Container | Docker | Standardized deployment, isolation |
| Orchestration | Kubernetes | Service discovery, scaling, high availability |
| API Documentation | OpenAPI (Swagger) | Industry standard, interactive documentation |

#### Frontend Technology Stack

| Component | Technology | Justification
  |
|---|---|---|
| Web Framework | React with TypeScript | Component-based, state management, type safety |
| State Management | Redux Toolkit | Predictable state container, developer tools |
| UI Component Library | Material-UI with custom theming | Rich component set, customizable |
| Form Management | React Hook Form | Performance, flexible validation |
| API Client | Axios | Promise-based, interceptors, error handling |
| Internationalization | i18next | Robust localization support, pluralization |

#### Mobile Technology Stack

| Component | Technology | Justification
  |
|---|---|---|
| Framework | React Native | Code sharing with web, native performance |
| State Management | Redux Toolkit | Shared with web frontend |
| Navigation | React Navigation | De-facto standard for React Native |
| Camera/Image Processing | React Native Camera | OCR capabilities, image manipulation |
| Offline Storage | Realm | Performance, object-oriented data model |

### 1.4 Communication Patterns

Services will communicate using the following patterns:

1. **Synchronous Communication**: REST APIs for direct request/response interactions

2. **Asynchronous Communication**: Event-based communication via RabbitMQ for decoupled operations

3. **API Gateway**: All external communications routed through a centralized API Gateway

Communication patterns by scenario:

| Scenario | Pattern | Technology | Notes
  |
|---|---|---|---|
| UI to Backend | Synchronous | REST API | JWT authentication |
| Service to Service (time-sensitive) | Synchronous | REST API | Internal authentication |
| Service to Service (background) | Asynchronous | RabbitMQ | Event-based |
| Notifications | Asynchronous | RabbitMQ + WebSockets | Real-time updates |
| Long-running processes | Asynchronous | RabbitMQ + Worker services | Receipt processing, reports |

## 2. Data Architecture

### 2.1 Database Architecture

The system will use a hybrid database approach:

1. **Primary Database**: PostgreSQL (relational)

- Handles structured business data with complex relationships

- Ensures ACID compliance for financial transactions

- Separate database instances per service for isolation

- **Caching Layer**: Redis

- Session data

- Frequently accessed lookup data

- Rate limiting and throttling

- **Search Database**: Elasticsearch

- Full-text search for knowledge base

- Receipt content search

- Log aggregation

### 2.2 Core Data Models

#### 2.2.1 Company Data Model

interface Company { \
  id: string;                    // UUID \
  name: string;                  // Company name \
  taxId: string;                 // Tax identification number \
  address: Address;              // Company address \
  settings: CompanySettings;     // Company-wide settings \
  createdAt: Date;               // Creation timestamp \
  updatedAt: Date;               // Last update timestamp \
  status: CompanyStatus;         // Active, Suspended, Deleted \
  subscription: SubscriptionInfo;// Subscription details \
  billingInfo: BillingInfo;      // Billing information \
} \
 \
interface CompanySettings { \
  approvalWorkflows: WorkflowDefinition[];  // Configurable approval workflows \
  expenseCategories: ExpenseCategory[];     // Company expense categories \
  expensePolicies: ExpensePolicy[];         // Expense policies \
  perDiemRates: PerDiemRate[];              // Per diem rates by country/region \
  integrations: IntegrationSettings[];      // Integration configurations \
  defaultCurrency: string;                  // Default currency code \
  supportedCurrencies: string[];            // Supported currency codes \
  taxRates: TaxRate[];                      // Tax rates for expenses \
} \
 \
enum CompanyStatus { \
  ACTIVE = 'active', \
  SUSPENDED = 'suspended', \
  DELETED = 'deleted' \
}

#### 2.2.2 User Data Model

interface User { \
  id: string;                    // UUID \
  companyId: string;             // Reference to company \
  email: string;                 // Email address (unique) \
  passwordHash: string;          // Hashed password \
  firstName: string;             // First name \
  lastName: string;              // Last name \
  role: UserRole;                // User role \
  department: string;            // Department name \
  position: string;              // Job position \
  manager: string | null;        // Manager user ID \
  status: UserStatus;            // Active, Inactive, Locked \
  preferredLanguage: string;     // Language preference \
  createdAt: Date;               // Creation timestamp \
  updatedAt: Date;               // Last update timestamp \
  lastLogin: Date | null;        // Last login timestamp \
  settings: UserSettings;        // User preferences \
  permissions: Permission[];     // Explicit permissions \
} \
 \
enum UserRole { \
  ADMIN = 'admin',               // Company administrator \
  MANAGER = 'manager',           // Approving manager \
  FINANCE = 'finance',           // Finance department \
  EMPLOYEE = 'employee',         // Standard employee \
  SUPPORT = 'support'            // Support staff \
} \
 \
enum UserStatus { \
  ACTIVE = 'active', \
  INACTIVE = 'inactive', \
  LOCKED = 'locked' \
} \
 \
interface Permission { \
  resource: string;              // Resource identifier \
  action: string;                // Allowed action (create, read, update, delete) \
  constraints: object | null;    // Optional constraints \
}

#### 2.2.3 Expense Data Model

interface Expense { \
  id: string;                    // UUID \
  companyId: string;             // Company ID \
  userId: string;                // User ID who submitted \
  description: string;           // Expense description \
  amount: number;                // Amount (store as integer, e.g. cents) \
  currency: string;              // Currency code (ISO 4217) \
  exchangeRate: number | null;   // Exchange rate to company currency \
  category: string;              // Expense category \
  date: Date;                    // Date of expense \
  travelOrderId: string | null;  // Associated travel order (if applicable) \
  paymentMethod: PaymentMethod;  // How expense was paid \
  status: ExpenseStatus;         // Current status \
  receiptUrls: string[];         // URLs to receipt images \
  receiptData: ReceiptData | null; // Extracted data from receipt \
  taxAmount: number | null;      // Tax amount \
  taxRate: number | null;        // Tax rate percentage \
  approvals: Approval[];         // Approval history \
  notes: Note[];                 // Notes and comments \
  customFields: CustomField[];   // Custom fields \
  createdAt: Date;               // Creation timestamp \
  updatedAt: Date;               // Last update timestamp \
} \
 \
enum ExpenseStatus { \
  DRAFT = 'draft', \
  SUBMITTED = 'submitted', \
  UNDER_REVIEW = 'under_review', \
  APPROVED = 'approved', \
  REJECTED = 'rejected', \
  REIMBURSED = 'reimbursed' \
} \
 \
enum PaymentMethod { \
  CASH = 'cash', \
  PERSONAL_CARD = 'personal_card', \
  COMPANY_CARD = 'company_card', \
  BANK_TRANSFER = 'bank_transfer', \
  ADVANCE = 'advance' \
} \
 \
interface Approval { \
  userId: string;                // Approver user ID \
  status: ApprovalStatus;        // Approved, Rejected \
  timestamp: Date;               // When the approval/rejection happened \
  notes: string | null;          // Optional notes \
} \
 \
enum ApprovalStatus { \
  PENDING = 'pending', \
  APPROVED = 'approved', \
  REJECTED = 'rejected' \
} \
 \
interface ReceiptData { \
  merchantName: string | null;   // Extracted merchant name \
  date: Date | null;             // Extracted date \
  amount: number | null;         // Extracted amount \
  taxAmount: number | null;      // Extracted tax amount \
  currency: string | null;       // Extracted currency \
  items: ReceiptItem[] | null;   // Extracted line items \
  confidence: number;            // OCR confidence score (0-1) \
} \
 \
interface ReceiptItem { \
  description: string;           // Item description \
  quantity: number | null;       // Quantity \
  unitPrice: number | null;      // Unit price \
  totalPrice: number | null;     // Total price \
}

#### 2.2.4 Travel Order Data Model

interface TravelOrder { \
  id: string;                    // UUID \
  companyId: string;             // Company ID \
  userId: string;                // User who requested travel \
  purpose: string;               // Purpose of travel \
  description: string;           // Detailed description \
  startDate: Date;               // Start date \
  endDate: Date;                 // End date \
  destinations: Destination[];   // Travel destinations \
  status: TravelOrderStatus;     // Current status \
  transport: TransportDetails[]; // Transportation details \
  accommodation: AccommodationDetails | null; // Accommodation details \
  estimatedCost: number;         // Estimated total cost \
  currency: string;              // Currency code \
  advances: Advance[];           // Advance payments \
  perDiems: PerDiem[];           // Per diem calculations \
  approvals: Approval[];         // Approval history \
  attachments: string[];         // URLs to attachments \
  expenses: string[];            // Associated expense IDs \
  customFields: CustomField[];   // Custom fields \
  createdAt: Date;               // Creation timestamp \
  updatedAt: Date;               // Last update timestamp \
} \
 \
enum TravelOrderStatus { \
  DRAFT = 'draft', \
  SUBMITTED = 'submitted', \
  APPROVED = 'approved', \
  REJECTED = 'rejected', \
  IN_PROGRESS = 'in_progress', \
  COMPLETED = 'completed', \
  CANCELLED = 'cancelled' \
} \
 \
interface Destination { \
  country: string;               // Country code \
  city: string;                  // City name \
  arrivalDate: Date;             // Arrival date \
  departureDate: Date;           // Departure date \
  purpose: string | null;        // Purpose at this destination \
} \
 \
interface Advance { \
  id: string;                    // UUID \
  amount: number;                // Amount \
  currency: string;              // Currency code \
  paymentMethod: PaymentMethod;  // How advance was paid \
  paymentDate: Date | null;      // When payment was made \
  status: AdvanceStatus;         // Current status \
  notes: string | null;          // Optional notes \
} \
 \
enum AdvanceStatus { \
  REQUESTED = 'requested', \
  APPROVED = 'approved', \
  PAID = 'paid', \
  RECONCILED = 'reconciled' \
} \
 \
interface PerDiem { \
  destinationIndex: number;      // Index in destinations array \
  dailyRate: number;             // Daily rate amount \
  currency: string;              // Currency code \
  days: number;                  // Number of days \
  adjustments: PerDiemAdjustment[]; // Adjustments (meals provided, etc.) \
  totalAmount: number;           // Calculated total amount \
} \
 \
interface PerDiemAdjustment { \
  date: Date;                    // Date of adjustment \
  type: AdjustmentType;          // Type of adjustment \
  percentage: number;            // Percentage to deduct (0-100) \
  description: string | null;    // Optional description \
} \
 \
enum AdjustmentType { \
  BREAKFAST = 'breakfast', \
  LUNCH = 'lunch', \
  DINNER = 'dinner', \
  ACCOMMODATION = 'accommodation', \
  OTHER = 'other' \
}

#### 2.2.5 Report Data Model

interface Report { \
  id: string;                    // UUID \
  companyId: string;             // Company ID \
  userId: string;                // User who created report \
  title: string;                 // Report title \
  description: string | null;    // Optional description \
  type: ReportType;              // Type of report \
  dateRange: DateRange;          // Date range covered \
  filters: ReportFilter[];       // Applied filters \
  groupBy: string[];             // Grouping dimensions \
  sortBy: string;                // Sort field \
  sortDirection: SortDirection;  // Sort direction \
  format: ReportFormat;          // Output format \
  schedule: ReportSchedule | null; // Schedule (if recurring) \
  createdAt: Date;               // Creation timestamp \
  lastRun: Date | null;          // Last execution timestamp \
  status: ReportStatus;          // Current status \
  resultUrl: string | null;      // URL to generated report \
} \
 \
enum ReportType { \
  EXPENSE_SUMMARY = 'expense_summary', \
  EXPENSE_DETAIL = 'expense_detail', \
  TRAVEL_SUMMARY = 'travel_summary', \
  TRAVEL_DETAIL = 'travel_detail', \
  USER_ACTIVITY = 'user_activity', \
  APPROVAL_TIMES = 'approval_times', \
  CUSTOM = 'custom' \
} \
 \
interface DateRange { \
  startDate: Date;               // Start date \
  endDate: Date;                 // End date \
  type: DateRangeType;           // Predefined range type \
} \
 \
enum DateRangeType { \
  CUSTOM = 'custom', \
  CURRENT_MONTH = 'current_month', \
  PREVIOUS_MONTH = 'previous_month', \
  CURRENT_QUARTER = 'current_quarter', \
  PREVIOUS_QUARTER = 'previous_quarter', \
  CURRENT_YEAR = 'current_year', \
  PREVIOUS_YEAR = 'previous_year' \
} \
 \
interface ReportFilter { \
  field: string;                 // Field to filter on \
  operator: FilterOperator;      // Comparison operator \
  value: any;                    // Filter value \
} \
 \
enum FilterOperator { \
  EQUALS = 'eq', \
  NOT_EQUALS = 'neq', \
  GREATER_THAN = 'gt', \
  LESS_THAN = 'lt', \
  CONTAINS = 'contains', \
  IN = 'in' \
} \
 \
enum SortDirection { \
  ASCENDING = 'asc', \
  DESCENDING = 'desc' \
} \
 \
enum ReportFormat { \
  PDF = 'pdf', \
  EXCEL = 'excel', \
  CSV = 'csv', \
  JSON = 'json' \
} \
 \
interface ReportSchedule { \
  frequency: ScheduleFrequency;  // How often to run \
  dayOfWeek: number | null;      // Day of week (0-6, 0 is Sunday) \
  dayOfMonth: number | null;     // Day of month (1-31) \
  time: string;                  // Time of day (HH:MM) \
  timezone: string;              // Timezone \
  recipients: string[];          // Email recipients \
  active: boolean;               // Whether schedule is active \
} \
 \
enum ScheduleFrequency { \
  DAILY = 'daily', \
  WEEKLY = 'weekly', \
  MONTHLY = 'monthly', \
  QUARTERLY = 'quarterly' \
} \
 \
enum ReportStatus { \
  READY = 'ready', \
  RUNNING = 'running', \
  COMPLETED = 'completed', \
  FAILED = 'failed' \
}

### 2.3 Database Schema

The PostgreSQL schema will be divided by service domain:

#### 2.3.1 Auth Service Schema

CREATE TABLE companies ( \
  id UUID PRIMARY KEY, \
  name VARCHAR(255) NOT NULL, \
  tax_id VARCHAR(50) NOT NULL, \
  address JSONB NOT NULL, \
  settings JSONB NOT NULL, \
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), \
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), \
  status VARCHAR(20) NOT NULL, \
  subscription JSONB NOT NULL, \
  billing_info JSONB NOT NULL \
); \
 \
CREATE TABLE users ( \
  id UUID PRIMARY KEY, \
  company_id UUID NOT NULL REFERENCES companies(id), \
  email VARCHAR(255) NOT NULL UNIQUE, \
  password_hash VARCHAR(255) NOT NULL, \
  first_name VARCHAR(100) NOT NULL, \
  last_name VARCHAR(100) NOT NULL, \
  role VARCHAR(20) NOT NULL, \
  department VARCHAR(100), \
  position VARCHAR(100), \
  manager UUID REFERENCES users(id), \
  status VARCHAR(20) NOT NULL, \
  preferred_language VARCHAR(10) NOT NULL DEFAULT 'en', \
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), \
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), \
  last_login TIMESTAMP WITH TIME ZONE, \
  settings JSONB NOT NULL DEFAULT '{}', \
  permissions JSONB NOT NULL DEFAULT '[]' \
); \
 \
CREATE TABLE refresh_tokens ( \
  id UUID PRIMARY KEY, \
  user_id UUID NOT NULL REFERENCES users(id), \
  token VARCHAR(255) NOT NULL UNIQUE, \
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL, \
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), \
  revoked BOOLEAN NOT NULL DEFAULT FALSE, \
  revoked_reason VARCHAR(100) \
); \
 \
CREATE INDEX idx_users_company_id ON users(company_id); \
CREATE INDEX idx_users_email ON users(email); \
CREATE INDEX idx_refresh_tokens_user_id ON refresh_tokens(user_id);

#### 2.3.2 Expense Service Schema

CREATE TABLE expenses ( \
  id UUID PRIMARY KEY, \
  company_id UUID NOT NULL, \
  user_id UUID NOT NULL, \
  description TEXT NOT NULL, \
  amount BIGINT NOT NULL, -- Store in cents to avoid floating point issues \
  currency VARCHAR(3) NOT NULL, \
  exchange_rate DECIMAL(10, 6), \
  category VARCHAR(100) NOT NULL, \
  expense_date DATE NOT NULL, \
  travel_order_id UUID, \
  payment_method VARCHAR(50) NOT NULL, \
  status VARCHAR(20) NOT NULL, \
  receipt_urls JSONB NOT NULL DEFAULT '[]', \
  receipt_data JSONB, \
  tax_amount BIGINT, \
  tax_rate DECIMAL(5, 2), \
  approvals JSONB NOT NULL DEFAULT '[]', \
  notes JSONB NOT NULL DEFAULT '[]', \
  custom_fields JSONB NOT NULL DEFAULT '[]', \
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), \
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW() \
); \
 \
CREATE TABLE expense_categories ( \
  id UUID PRIMARY KEY, \
  company_id UUID NOT NULL, \
  name VARCHAR(100) NOT NULL, \
  description TEXT, \
  parent_id UUID REFERENCES expense_categories(id), \
  tax_deductible BOOLEAN NOT NULL DEFAULT FALSE, \
  requires_receipt BOOLEAN NOT NULL DEFAULT TRUE, \
  active BOOLEAN NOT NULL DEFAULT TRUE, \
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), \
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), \
  UNIQUE(company_id, name) \
); \
 \
CREATE TABLE expense_policies ( \
  id UUID PRIMARY KEY, \
  company_id UUID NOT NULL, \
  name VARCHAR(100) NOT NULL, \
  description TEXT, \
  category_id UUID REFERENCES expense_categories(id), \
  amount_limit BIGINT, -- NULL means no limit \
  currency VARCHAR(3) NOT NULL, \
  approval_threshold BIGINT, -- Amounts above this require additional approval \
  active BOOLEAN NOT NULL DEFAULT TRUE, \
  applies_to JSONB NOT NULL, -- Can be departments, roles, or specific users \
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), \
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW() \
); \
 \
CREATE TABLE custom_fields ( \
  id UUID PRIMARY KEY, \
  company_id UUID NOT NULL, \
  name VARCHAR(100) NOT NULL, \
  description TEXT, \
  field_type VARCHAR(20) NOT NULL, -- text, number, date, select, etc. \
  options JSONB, -- For select fields \
  required BOOLEAN NOT NULL DEFAULT FALSE, \
  applies_to VARCHAR(20) NOT NULL, -- expense, travel_order, etc. \
  active BOOLEAN NOT NULL DEFAULT TRUE, \
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), \
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), \
  UNIQUE(company_id, name, applies_to) \
); \
 \
CREATE INDEX idx_expenses_company_id ON expenses(company_id); \
CREATE INDEX idx_expenses_user_id ON expenses(user_id); \
CREATE INDEX idx_expenses_status ON expenses(status); \
CREATE INDEX idx_expenses_expense_date ON expenses(expense_date); \
CREATE INDEX idx_expenses_travel_order_id ON expenses(travel_order_id); \
CREATE INDEX idx_expense_categories_company_id ON expense_categories(company_id); \
CREATE INDEX idx_expense_policies_company_id ON expense_policies(company_id); \
CREATE INDEX idx_custom_fields_company_id ON custom_fields(company_id, applies_to);

#### 2.3.3 Travel Service Schema

CREATE TABLE travel_orders ( \
  id UUID PRIMARY KEY, \
  company_id UUID NOT NULL, \
  user_id UUID NOT NULL, \
  purpose VARCHAR(255) NOT NULL, \
  description TEXT, \
  start_date DATE NOT NULL, \
  end_date DATE NOT NULL, \
  destinations JSONB NOT NULL, \
  status VARCHAR(20) NOT NULL, \
  transport JSONB NOT NULL DEFAULT '[]', \
  accommodation JSONB, \
  estimated_cost BIGINT NOT NULL, \
  currency VARCHAR(3) NOT NULL, \
  advances JSONB NOT NULL DEFAULT '[]', \
  per_diems JSONB NOT NULL DEFAULT '[]', \
  approvals JSONB NOT NULL DEFAULT '[]', \
  attachments JSONB NOT NULL DEFAULT '[]', \
  expenses JSONB NOT NULL DEFAULT '[]', -- References to related expense IDs \
  custom_fields JSONB NOT NULL DEFAULT '[]', \
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), \
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW() \
); \
 \
CREATE TABLE per_diem_rates ( \
  id UUID PRIMARY KEY, \
  company_id UUID NOT NULL, \
  country VARCHAR(2) NOT NULL, -- ISO country code \
  region VARCHAR(100), -- Optional region/state/province \
  city VARCHAR(100), -- Optional city \
  amount BIGINT NOT NULL, -- Daily rate in cents \
  currency VARCHAR(3) NOT NULL, \
  accommodation_included BOOLEAN NOT NULL DEFAULT FALSE, \
  meal_breakdowns JSONB, -- Optional breakdown of meal percentages \
  effective_date DATE NOT NULL, \
  expiry_date DATE, -- NULL means no expiry \
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), \
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW() \
); \
 \
CREATE INDEX idx_travel_orders_company_id ON travel_orders(company_id); \
CREATE INDEX idx_travel_orders_user_id ON travel_orders(user_id); \
CREATE INDEX idx_travel_orders_status ON travel_orders(status); \
CREATE INDEX idx_travel_orders_date_range ON travel_orders(start_date, end_date); \
CREATE INDEX idx_per_diem_rates_company_id ON per_diem_rates(company_id); \
CREATE INDEX idx_per_diem_rates_location ON per_diem_rates(country, region, city); \
CREATE INDEX idx_per_diem_rates_date_range ON per_diem_rates(effective_date, expiry_date);

### 2.4 Database Migration Strategy

The system will use a robust database migration strategy:

1. **Versioned Migrations**: Each database change will be tracked through versioned migration scripts

2. **Automated Deployment**: Migrations will be part of CI/CD pipeline

3. **Rollback Support**: All migrations will have corresponding rollback scripts

4. **Data Integrity**: Migrations will include data transformations where needed

Migration tooling: Node.js-based umzug with Sequelize for SQL migrations

Example migration script:

// Migration: 20240101000001-create-expenses-table.js \
'use strict'; \
 \
module.exports = { \
  up: async (queryInterface, Sequelize) => { \
    await queryInterface.createTable('expenses', { \
      id: { \
        type: Sequelize.UUID, \
        primaryKey: true, \
        defaultValue: Sequelize.UUIDV4 \
      }, \
      company_id: { \
        type: Sequelize.UUID, \
        allowNull: false \
      }, \
      // ... other fields \
      created_at: { \
        type: Sequelize.DATE, \
        allowNull: false, \
        defaultValue: Sequelize.NOW \
      }, \
      updated_at: { \
        type: Sequelize.DATE, \
        allowNull: false, \
        defaultValue: Sequelize.NOW \
      } \
    }); \
     \
    // Create indexes \
    await queryInterface.addIndex('expenses', ['company_id']); \
    await queryInterface.addIndex('expenses', ['user_id']); \
    // ... other indexes \
  }, \
 \
  down: async (queryInterface, Sequelize) => { \
    // Drop indexes first \
    await queryInterface.removeIndex('expenses', ['company_id']); \
    await queryInterface.removeIndex('expenses', ['user_id']); \
    // ... other indexes \
     \
    await queryInterface.dropTable('expenses'); \
  } \
};

## 3. API Specifications

### 3.1 API Design Principles

The API will follow these key principles:

1. **RESTful Design**: Resource-oriented endpoints with appropriate HTTP methods

2. **Versioning**: APIs will be versioned to ensure backward compatibility

3. **Consistency**: Consistent naming conventions and response formats

4. **Pagination**: All list endpoints will support pagination

5. **Filtering**: Support for filtering results by query parameters

6. **Field Selection**: Ability to request only needed fields

7. **JSON Schema**: All request/response schemas will be documented using JSON Schema

8. **Error Handling**: Consistent error formats with descriptive messages

### 3.2 API Authentication and Authorization

All APIs will be secured using:

1. **JSON Web Tokens (JWT)**: For stateless authentication

2. **Role-Based Access Control (RBAC)**: Permissions based on user roles

3. **API Keys**: For service-to-service communication and integrations

4. **OAuth 2.0**: For third-party integrations

Authentication flow:

POST /api/auth/login \
Request: \
{ \
  "email": "user@example.com", \
  "password": "password123" \
} \
 \
Response: \
{ \
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", \
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", \
  "expiresIn": 3600, \
  "tokenType": "Bearer", \
  "user": { \
    "id": "123e4567-e89b-12d3-a456-426614174000", \
    "email": "user@example.com", \
    "firstName": "John", \
    "lastName": "Doe", \
    "role": "admin" \
  } \
}

JWT payload structure:

{ \
  "sub": "123e4567-e89b-12d3-a456-426614174000", // User ID \
  "email": "user@example.com", \
  "role": "admin", \
  "companyId": "123e4567-e89b-12d3-a456-426614174001", \
  "permissions": ["expenses:create", "expenses:approve"], \
  "iat": 1617293171, // Issued at \
  "exp": 1617296771, // Expiration time \
  "iss": "expense-management-api" // Issuer \
}

### 3.3 Core API Endpoints

#### 3.3.1 Authentication API

| Endpoint | Method | Description | Request | Response
  |
|---|---|---|---|---|
| /api/auth/login | POST | User login | { email, password } | { accessToken, refreshToken, expiresIn, tokenType, user } |
| /api/auth/refresh | POST | Refresh token | { refreshToken } | { accessToken, refreshToken, expiresIn, tokenType } |
| /api/auth/logout | POST | Log out user | { refreshToken } | { success: true } |
| /api/auth/password/reset | POST | Request password reset | { email } | { success: true } |
| /api/auth/password/change | POST | Change password | { oldPassword, newPassword } | { success: true } |

#### 3.3.2 User API

| Endpoint | Method | Description | Request | Response
  |
|---|---|---|---|---|
| /api/users | GET | List users | Query params | { data: User[], pagination: { total, page, limit } } |
| /api/users/:id | GET | Get user details | - | User |
| /api/users | POST | Create user | UserCreateDTO | User |
| /api/users/:id | PUT | Update user | UserUpdateDTO | User |
| /api/users/:id | DELETE | Delete user | - | { success: true } |
| /api/users/me | GET | Get current user | - | User |
| /api/users/me | PUT | Update current user | UserUpdateDTO | User |

#### 3.3.3 Expense API

| Endpoint | Method | Description | Request | Response
  |
|---|---|---|---|---|
| /api/expenses | GET | List expenses | Query params | { data: Expense[], pagination: { total, page, limit } } |
| /api/expenses/:id | GET | Get expense details | - | Expense |
| /api/expenses | POST | Create expense | ExpenseCreateDTO | Expense |
| /api/expenses/:id | PUT | Update expense | ExpenseUpdateDTO | Expense |
| /api/expenses/:id | DELETE | Delete expense | - | { success: true } |
| /api/expenses/:id/submit | POST | Submit expense for approval | - | Expense |
| /api/expenses/:id/approve | POST | Approve expense | { notes } | Expense |
| /api/expenses/:id/reject | POST | Reject expense | { reason } | Expense |
| /api/expenses/:id/receipts | POST | Upload receipt | Multipart form | { urls: string[] } |
| /api/expenses/categories | GET | List expense categories | Query params | { data: ExpenseCategory[], pagination: { total, page, limit } } |

#### 3.3.4 Travel Order API

| Endpoint | Method | Description | Request | Response
  |
|---|---|---|---|---|
| /api/travel-orders | GET | List travel orders | Query params | { data: TravelOrder[], pagination: { total, page, limit } } |
| /api/travel-orders/:id | GET | Get travel order details | - | TravelOrder |
| /api/travel-orders | POST | Create travel order | TravelOrderCreateDTO | TravelOrder |
| /api/travel-orders/:id | PUT | Update travel order | TravelOrderUpdateDTO | TravelOrder |
| /api/travel-orders/:id | DELETE | Delete travel order | - | { success: true } |
| /api/travel-orders/:id/submit | POST | Submit for approval | - | TravelOrder |
| /api/travel-orders/:id/approve | POST | Approve travel order | { notes } | TravelOrder |
| /api/travel-orders/:id/reject | POST | Reject travel order | { reason } | TravelOrder |
| /api/travel-orders/:id/complete | POST | Mark as completed | { notes } | TravelOrder |
| /api/travel-orders/:id/advances | POST | Request advance | AdvanceRequestDTO | TravelOrder |
| /api/per-diem-rates | GET | List per diem rates | Query params | { data: PerDiemRate[], pagination: { total, page, limit } } |

#### 3.3.5 OCR API

| Endpoint | Method | Description | Request | Response
  |
|---|---|---|---|---|
| /api/ocr/scan | POST | Scan receipt image | Multipart form | ReceiptData |
| /api/ocr/validate | POST | Validate OCR results | { receiptData, originalImage } | { validationResults, suggestedCorrections } |
| /api/ocr/train | POST | Train OCR for company | { companyId, sampleImages } | { success: true, modelId } |

#### 3.3.6 Report API

| Endpoint | Method | Description | Request | Response
  |
|---|---|---|---|---|
| /api/reports | GET | List reports | Query params | { data: Report[], pagination: { total, page, limit } } |
| /api/reports/:id | GET | Get report details | - | Report |
| /api/reports | POST | Create report | ReportCreateDTO | Report |
| /api/reports/:id | PUT | Update report | ReportUpdateDTO | Report |
| /api/reports/:id | DELETE | Delete report | - | { success: true } |
| /api/reports/:id/run | POST | Run report | { parameters } | { reportId, status, estimatedCompletion } |
| /api/reports/:id/results | GET | Get report results | - | Report data or download URL |
| /api/reports/templates | GET | List report templates | Query params | { data: ReportTemplate[], pagination: { total, page, limit } } |

#### 3.3.7 Integration API

| Endpoint | Method | Description | Request | Response
  |
|---|---|---|---|---|
| /api/integrations | GET | List available integrations | Query params | { data: Integration[], pagination: { total, page, limit } } |
| /api/integrations/:provider | GET | Get integration details | - | Integration |
| /api/integrations/:provider/connect | POST | Connect integration | { connectionDetails } | { success: true, connectionId } |
| /api/integrations/:provider/disconnect | POST | Disconnect integration | - | { success: true } |
| /api/integrations/:provider/sync | POST | Trigger sync | { entities, options } | { success: true, syncId } |
| /api/integrations/:provider/status | GET | Get sync status | - | { status, lastSync, nextSync } |
| /api/integrations/:provider/webhook | POST | Integration webhook | Integration-specific | { success: true } |

### 3.4 API Request/Response Examples

#### Example: Creating an Expense

Request:

POST /api/expenses HTTP/1.1 \
Content-Type: application/json \
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... \
 \
{ \
  "description": "Business lunch with client", \
  "amount": 3500, // $35.00 \
  "currency": "USD", \
  "category": "meals", \
  "date": "2025-03-15T12:30:00Z", \
  "paymentMethod": "company_card", \
  "receiptUrls": ["https://storage.example.com/receipts/image1.jpg"], \
  "notes": "Meeting with Acme Corp about new project" \
}

Response:

HTTP/1.1 201 Created \
Content-Type: application/json \
 \
{ \
  "id": "123e4567-e89b-12d3-a456-426614174000", \
  "description": "Business lunch with client", \
  "amount": 3500, \
  "currency": "USD", \
  "category": "meals", \
  "date": "2025-03-15T12:30:00Z", \
  "paymentMethod": "company_card", \
  "status": "draft", \
  "receiptUrls": ["https://storage.example.com/receipts/image1.jpg"], \
  "notes": [{ \
    "text": "Meeting with Acme Corp about new project", \
    "userId": "123e4567-e89b-12d3-a456-426614174001", \
    "timestamp": "2025-04-12T10:15:30Z" \
  }], \
  "createdAt": "2025-04-12T10:15:30Z", \
  "updatedAt": "2025-04-12T10:15:30Z", \
  "userId": "123e4567-e89b-12d3-a456-426614174001", \
  "companyId": "123e4567-e89b-12d3-a456-426614174002" \
}

#### Example: Error Response

HTTP/1.1 400 Bad Request \
Content-Type: application/json \
 \
{ \
  "error": { \
    "code": "VALIDATION_ERROR", \
    "message": "Invalid request data", \
    "details": [ \
      { \
        "field": "amount", \
        "message": "Amount must be greater than 0" \
      }, \
      { \
        "field": "date", \
        "message": "Date cannot be in the future" \
      } \
    ] \
  }, \
  "requestId": "req_123456789" \
}

### 3.5 API Documentation

API documentation will be generated using OpenAPI (Swagger) and will include:

1. Endpoint descriptions

2. Request/response schemas

3. Authentication requirements

4. Example requests and responses

5. Error codes and descriptions

The documentation will be accessible at /api/docs and will be interactive, allowing users to test the APIs directly.

## 4. Security Architecture

### 4.1 Authentication and Authorization Framework

The system will implement a comprehensive security framework:

#### 4.1.1 Authentication Methods

1. **Password-based**: Email/password authentication with security policies:

- Minimum 10 characters

- Requires uppercase, lowercase, number, and symbol

- Password expiration after 90 days

- Password history (last 5 passwords)

- **Single Sign-On (SSO)**: Support for:

- OAuth 2.0/OpenID Connect

- SAML 2.0

- Integration with Google Workspace, Microsoft 365

- **Multi-Factor Authentication (MFA)**:

- Time-based One-Time Password (TOTP)

- SMS verification codes

- Email verification codes

#### 4.1.2 Authorization Model

1. **Role-Based Access Control (RBAC)**:

- Predefined roles (Admin, Manager, Finance, Employee, Support)

- Custom roles can be defined by company administrators

- **Attribute-Based Access Control (ABAC)**:

- Contextual attributes (time of day, location, device)

- Resource attributes (sensitivity, owner)

- Environmental attributes (risk level, security events)

- **Permission Structure**: \
<resource>:<action>:<constraints> \
 \
Examples:

- expenses:create:* - Can create any expense

- expenses:approve:amount<1000 - Can approve expenses under $1000

- reports:view:department=sales - Can view reports for Sales department

#### 4.1.3 JWT Implementation

1. **Token Structure**:

- Short-lived access tokens (1 hour)

- Longer-lived refresh tokens (7 days)

- JWT payload contains minimal data (user ID, company ID, roles)

- **Token Storage**:

- Access tokens: Memory or secure local storage

- Refresh tokens: HTTP-only cookies with Secure and SameSite flags

- **Token Revocation**:

- Refresh tokens stored in database with revocation flag

- Blacklisting of compromised access tokens via Redis

### 4.2 Data Protection

#### 4.2.1 Encryption

1. **Data in Transit**:

- TLS 1.3 for all HTTP communication

- Certificate pinning for mobile applications

- Perfect Forward Secrecy (PFS) support

- **Data at Rest**:

- Database-level encryption using PostgreSQL's encryption features

- File-level encryption for stored receipts and attachments

- Encryption keys managed via AWS KMS or Azure Key Vault

- **Sensitive Data**:

- PII and financial data encrypted with separate keys

- Credit card information tokenized, not stored directly

#### 4.2.2 Data Classification

1. **Public Data**: Company name, public documentation

2. **Internal Data**: Expense categories, departments

3. **Sensitive Data**: Employee names, travel details

4. **Highly Sensitive Data**: Salary information, bank details

### 4.3 API Security

1. **Rate Limiting**:

- IP-based rate limiting

- User-based rate limiting

- Graduated response (warning, temporary block, permanent block)

- **Input Validation**:

- Schema validation for all API requests

- Sanitization of user input

- Parameterized queries to prevent SQL injection

- **Output Encoding**:

- JSON encoding to prevent XSS

- Content Security Policy (CSP) headers

- Proper MIME type setting

### 4.4 GDPR Compliance

1. **Data Subject Rights**:

- Right to access personal data

- Right to rectification

- Right to erasure (right to be forgotten)

- Right to restrict processing

- Right to data portability

- **Implementation**:

- Data export functionality

- Account deletion with proper data handling

- Consent management

- Data processing records

- **Data Retention Policies**:

- Configurable retention periods

- Automated data purging

- Audit trails for data deletion

### 4.5 Security Monitoring

1. **Logging**:

- Centralized logging with Elasticsearch

- Structured log format (JSON)

- Sensitive data masking in logs

- **Alerting**:

- Real-time alerts for security events

- Escalation paths for critical issues

- Integration with incident management

- **Auditing**:

- Comprehensive audit trails for all actions

- Immutable audit logs

- Regular audit log review

## 5. Frontend Architecture

### 5.1 Web Application Architecture

#### 5.1.1 Component Architecture

The web application will follow a component-based architecture using React:

1. **Atomic Design Methodology**:

- Atoms: Basic UI elements (buttons, inputs, labels)

- Molecules: Combinations of atoms (form fields, search bars)

- Organisms: Functional sections (expense forms, approval workflows)

- Templates: Page layouts

- Pages: Complete screens

- **Component Structure**: \
src/ \
├── components/ \
│   ├── atoms/ \
│   │   ├── Button/ \
│   │   │   ├── Button.tsx \
│   │   │   ├── Button.test.tsx \
│   │   │   ├── Button.module.css \
│   │   │   └── index.ts \
│   │   ├── Input/ \
│   │   └── ... \
│   ├── molecules/ \
│   ├── organisms/ \
│   ├── templates/ \
│   └── pages/ \
├── hooks/ \
├── services/ \
├── utils/ \
├── contexts/ \
├── store/ \
└── assets/ \


- **Component Example**: \
// src/components/organisms/ExpenseForm/ExpenseForm.tsx \
import React, { useState, useEffect } from 'react'; \
import { useFormik } from 'formik'; \
import * as Yup from 'yup'; \
import { useTranslation } from 'react-i18next'; \
import { useDispatch, useSelector } from 'react-redux'; \
 \
import { TextInput } from '../../atoms/TextInput'; \
import { Select } from '../../atoms/Select'; \
import { DatePicker } from '../../molecules/DatePicker'; \
import { FileUpload } from '../../molecules/FileUpload'; \
import { Button } from '../../atoms/Button'; \
import { CurrencyInput } from '../../molecules/CurrencyInput'; \
 \
import { createExpense, updateExpense } from '../../../store/expenses/actions'; \
import { selectCategories } from '../../../store/categories/selectors'; \
import { selectCurrentUser } from '../../../store/auth/selectors'; \
 \
import styles from './ExpenseForm.module.css'; \
 \
interface ExpenseFormProps { \
  initialValues?: Partial<Expense>; \
  onSubmit?: (expense: Expense) => void; \
  onCancel?: () => void; \
  mode?: 'create' | 'edit'; \
} \
 \
export const ExpenseForm: React.FC<ExpenseFormProps> = ({ \
  initialValues = {}, \
  onSubmit, \
  onCancel, \
  mode = 'create' \
}) => { \
  const { t } = useTranslation(); \
  const dispatch = useDispatch(); \
  const categories = useSelector(selectCategories); \
  const currentUser = useSelector(selectCurrentUser); \
   \
  const validationSchema = Yup.object({ \
    description: Yup.string() \
      .required(t('expense.errors.descriptionRequired')) \
      .max(255, t('expense.errors.descriptionTooLong')), \
    amount: Yup.number() \
      .required(t('expense.errors.amountRequired')) \
      .positive(t('expense.errors.amountPositive')), \
    currency: Yup.string() \
      .required(t('expense.errors.currencyRequired')), \
    category: Yup.string() \
      .required(t('expense.errors.categoryRequired')), \
    date: Yup.date() \
      .required(t('expense.errors.dateRequired')) \
      .max(new Date(), t('expense.errors.dateNotFuture')) \
  }); \
   \
  const formik = useFormik({ \
    initialValues: { \
      description: initialValues.description || '', \
      amount: initialValues.amount || 0, \
      currency: initialValues.currency || currentUser?.company?.settings?.defaultCurrency || 'USD', \
      category: initialValues.category || '', \
      date: initialValues.date || new Date(), \
      paymentMethod: initialValues.paymentMethod || 'company_card', \
      notes: initialValues.notes || '', \
      receiptUrls: initialValues.receiptUrls || [] \
    }, \
    validationSchema, \
    onSubmit: (values) => { \
      const expenseData = { \
        ...values, \
        amount: Math.round(values.amount * 100) // Convert to cents \
      }; \
       \
      if (mode === 'create') { \
        dispatch(createExpense(expenseData)); \
      } else { \
        dispatch(updateExpense(initialValues.id, expenseData)); \
      } \
       \
      if (onSubmit) { \
        onSubmit(expenseData as Expense); \
      } \
    } \
  }); \
   \
  return ( \
    <form onSubmit={formik.handleSubmit} className={styles.form}> \
      <TextInput \
        name="description" \
        label={t('expense.fields.description')} \
        value={formik.values.description} \
        onChange={formik.handleChange} \
        onBlur={formik.handleBlur} \
        error={formik.touched.description && formik.errors.description} \
        placeholder={t('expense.placeholders.description')} \
      /> \
       \
      <div className={styles.formRow}> \
        <CurrencyInput \
          name="amount" \
          label={t('expense.fields.amount')} \
          value={formik.values.amount} \
          onChange={formik.handleChange} \
          onBlur={formik.handleBlur} \
          error={formik.touched.amount && formik.errors.amount} \
          currency={formik.values.currency} \
        /> \
         \
        <Select \
          name="currency" \
          label={t('expense.fields.currency')} \
          value={formik.values.currency} \
          onChange={formik.handleChange} \
          onBlur={formik.handleBlur} \
          error={formik.touched.currency && formik.errors.currency} \
          options={currentUser?.company?.settings?.supportedCurrencies.map(code => ({ \
            value: code, \
            label: code \
          })) || []} \
        /> \
      </div> \
       \
      <Select \
        name="category" \
        label={t('expense.fields.category')} \
        value={formik.values.category} \
        onChange={formik.handleChange} \
        onBlur={formik.handleBlur} \
        error={formik.touched.category && formik.errors.category} \
        options={categories.map(category => ({ \
          value: category.id, \
          label: category.name \
        }))} \
      /> \
       \
      <DatePicker \
        name="date" \
        label={t('expense.fields.date')} \
        value={formik.values.date} \
        onChange={(date) => formik.setFieldValue('date', date)} \
        onBlur={formik.handleBlur} \
        error={formik.touched.date && formik.errors.date} \
        maxDate={new Date()} \
      /> \
       \
      <Select \
        name="paymentMethod" \
        label={t('expense.fields.paymentMethod')} \
        value={formik.values.paymentMethod} \
        onChange={formik.handleChange} \
        onBlur={formik.handleBlur} \
        error={formik.touched.paymentMethod && formik.errors.paymentMethod} \
        options={[ \
          { value: 'cash', label: t('expense.paymentMethods.cash') }, \
          { value: 'personal_card', label: t('expense.paymentMethods.personalCard') }, \
          { value: 'company_card', label: t('expense.paymentMethods.companyCard') }, \
          { value: 'bank_transfer', label: t('expense.paymentMethods.bankTransfer') } \
        ]} \
      /> \
       \
      <TextInput \
        name="notes" \
        label={t('expense.fields.notes')} \
        value={formik.values.notes} \
        onChange={formik.handleChange} \
        multiline \
        rows={3} \
        placeholder={t('expense.placeholders.notes')} \
      /> \
       \
      <FileUpload \
        name="receipts" \
        label={t('expense.fields.receipts')} \
        value={formik.values.receiptUrls} \
        onChange={(urls) => formik.setFieldValue('receiptUrls', urls)} \
        accept="image/*,.pdf" \
        multiple \
        maxSize={10 * 1024 * 1024} // 10MB \
        endpoint="/api/expenses/upload-receipt" \
      /> \
       \
      <div className={styles.formActions}> \
        {onCancel && ( \
          <Button \
            type="button" \
            variant="secondary" \
            onClick={onCancel} \
          > \
            {t('common.cancel')} \
          </Button> \
        )} \
         \
        <Button \
          type="submit" \
          variant="primary" \
          disabled={formik.isSubmitting} \
        > \
          {mode === 'create' \
            ? t('expense.actions.create') \
            : t('expense.actions.update')} \
        </Button> \
      </div> \
    </form> \
  ); \
}; \


#### 5.1.2 State Management

1. **Redux Architecture**:

- Redux Toolkit for state management

- Slice-based organization

- Normalized state shape

- **Store Structure**: \
store/ \
├── index.ts         # Store configuration \
├── rootReducer.ts   # Combined reducers \
├── auth/            \
│   ├── slice.ts     # Auth reducer and actions \
│   ├── selectors.ts # Selectors for auth state \
│   ├── thunks.ts    # Async actions \
│   └── types.ts     # Type definitions \
├── expenses/ \
├── travelOrders/ \
├── users/ \
└── ... \


- **State Example**: \
// store/expenses/slice.ts \
import { createSlice, PayloadAction } from '@reduxjs/toolkit'; \
import { Expense, ExpenseStatus } from './types'; \
 \
interface ExpensesState { \
  byId: Record<string, Expense>; \
  allIds: string[]; \
  status: 'idle' | 'loading' | 'succeeded' | 'failed'; \
  error: string | null; \
  filters: { \
    status: ExpenseStatus | 'all'; \
    dateRange: { \
      start: string | null; \
      end: string | null; \
    }; \
    category: string | null; \
  }; \
} \
 \
const initialState: ExpensesState = { \
  byId: {}, \
  allIds: [], \
  status: 'idle', \
  error: null, \
  filters: { \
    status: 'all', \
    dateRange: { \
      start: null, \
      end: null \
    }, \
    category: null \
  } \
}; \
 \
const expensesSlice = createSlice({ \
  name: 'expenses', \
  initialState, \
  reducers: { \
    setExpenses(state, action: PayloadAction<Expense[]>) { \
      state.byId = {}; \
      state.allIds = []; \
       \
      action.payload.forEach(expense => { \
        state.byId[expense.id] = expense; \
        state.allIds.push(expense.id); \
      }); \
    }, \
    addExpense(state, action: PayloadAction<Expense>) { \
      const expense = action.payload; \
      state.byId[expense.id] = expense; \
      if (!state.allIds.includes(expense.id)) { \
        state.allIds.push(expense.id); \
      } \
    }, \
    updateExpense(state, action: PayloadAction<Expense>) { \
      const expense = action.payload; \
      if (state.byId[expense.id]) { \
        state.byId[expense.id] = expense; \
      } \
    }, \
    removeExpense(state, action: PayloadAction<string>) { \
      const id = action.payload; \
      delete state.byId[id]; \
      state.allIds = state.allIds.filter(expenseId => expenseId !== id); \
    }, \
    setLoading(state) { \
      state.status = 'loading'; \
      state.error = null; \
    }, \
    setError(state, action: PayloadAction<string>) { \
      state.status = 'failed'; \
      state.error = action.payload; \
    }, \
    setFilters(state, action: PayloadAction<Partial<ExpensesState['filters']>>) { \
      state.filters = { \
        ...state.filters, \
        ...action.payload \
      }; \
    } \
  } \
}); \
 \
export const { \
  setExpenses, \
  addExpense, \
  updateExpense, \
  removeExpense, \
  setLoading, \
  setError, \
  setFilters \
} = expensesSlice.actions; \
 \
export default expensesSlice.reducer; \


#### 5.1.3 Routing Architecture

1. **Route Structure**: \
// App.tsx \
import { Routes, Route, Navigate } from 'react-router-dom'; \
import { useSelector } from 'react-redux'; \
import { selectIsAuthenticated, selectCurrentUserRole } from './store/auth/selectors'; \
 \
import { AuthLayout } from './components/layouts/AuthLayout'; \
import { MainLayout } from './components/layouts/MainLayout'; \
import { ProtectedRoute } from './components/utils/ProtectedRoute'; \
 \
import { Login, Register, ForgotPassword } from './components/pages/auth'; \
import { Dashboard, Expenses, ExpenseDetail, CreateExpense } from './components/pages/expenses'; \
import { TravelOrders, TravelOrderDetail, CreateTravelOrder } from './components/pages/travel'; \
import { Reports, ReportDetail, CreateReport } from './components/pages/reports'; \
import { Settings, UserProfile, CompanySettings } from './components/pages/settings'; \
 \
export const App = () => { \
  const isAuthenticated = useSelector(selectIsAuthenticated); \
  const userRole = useSelector(selectCurrentUserRole); \
   \
  return ( \
    <Routes> \
      {/* Auth Routes */} \
      <Route element={<AuthLayout />}> \
        <Route path="/login" element={<Login />} /> \
        <Route path="/register" element={<Register />} /> \
        <Route path="/forgot-password" element={<ForgotPassword />} /> \
      </Route> \
       \
      {/* Main Application Routes */} \
      <Route element={ \
        <ProtectedRoute isAuthenticated={isAuthenticated}> \
          <MainLayout /> \
        </ProtectedRoute> \
      }> \
        <Route path="/" element={<Navigate to="/dashboard" replace />} /> \
        <Route path="/dashboard" element={<Dashboard />} /> \
         \
        {/* Expense Routes */} \
        <Route path="/expenses" element={<Expenses />} /> \
        <Route path="/expenses/create" element={<CreateExpense />} /> \
        <Route path="/expenses/:id" element={<ExpenseDetail />} /> \
         \
        {/* Travel Order Routes */} \
        <Route path="/travel-orders" element={<TravelOrders />} /> \
        <Route path="/travel-orders/create" element={<CreateTravelOrder />} /> \
        <Route path="/travel-orders/:id" element={<TravelOrderDetail />} /> \
         \
        {/* Report Routes */} \
        <Route path="/reports" element={<Reports />} /> \
        <Route path="/reports/create" element={<CreateReport />} /> \
        <Route path="/reports/:id" element={<ReportDetail />} /> \
         \
        {/* Settings Routes */} \
        <Route path="/settings" element={<Settings />} /> \
        <Route path="/settings/profile" element={<UserProfile />} /> \
        <Route  \
          path="/settings/company"  \
          element={ \
            <ProtectedRoute \
              isAuthenticated={isAuthenticated} \
              requiredRole={['admin']} \
              userRole={userRole} \
              redirectPath="/dashboard" \
            > \
              <CompanySettings /> \
            </ProtectedRoute> \
          }  \
        /> \
      </Route> \
       \
      {/* Catch-all Route */} \
      <Route path="*" element={<Navigate to="/" replace />} /> \
    </Routes> \
  ); \
}; \


2. **Protected Routes**: \
// components/utils/ProtectedRoute.tsx \
import { ReactNode } from 'react'; \
import { Navigate, useLocation } from 'react-router-dom'; \
 \
interface ProtectedRouteProps { \
  isAuthenticated: boolean; \
  children: ReactNode; \
  requiredRole?: string[]; \
  userRole?: string; \
  redirectPath?: string; \
} \
 \
export const ProtectedRoute = ({ \
  isAuthenticated, \
  children, \
  requiredRole, \
  userRole, \
  redirectPath = '/login' \
}: ProtectedRouteProps) => { \
  const location = useLocation(); \
   \
  if (!isAuthenticated) { \
    return <Navigate to={redirectPath} state={{ from: location }} replace />; \
  } \
   \
  if (requiredRole && userRole && !requiredRole.includes(userRole)) { \
    return <Navigate to="/dashboard" replace />; \
  } \
   \
  return <>{children}</>; \
}; \


#### 5.1.4 Localization Architecture

1. **Translation Structure**: \
src/ \
├── locales/ \
│   ├── en/ \
│   │   ├── common.json \
│   │   ├── auth.json \
│   │   ├── expenses.json \
│   │   ├── travel.json \
│   │   └── ... \
│   ├── sr/ \
│   ├── hr/ \
│   ├── bs/ \
│   ├── sl/ \
│   └── mk/ \


2. **i18next Integration**: \
// src/i18n.ts \
import i18n from 'i18next'; \
import { initReactI18next } from 'react-i18next'; \
import Backend from 'i18next-http-backend'; \
import LanguageDetector from 'i18next-browser-languagedetector'; \
 \
i18n \
  .use(Backend) \
  .use(LanguageDetector) \
  .use(initReactI18next) \
  .init({ \
    fallbackLng: 'en', \
    debug: process.env.NODE_ENV === 'development', \
    supportedLngs: ['en', 'sr', 'hr', 'bs', 'sl', 'mk'], \
     \
    ns: ['common', 'auth', 'expenses', 'travel', 'reports', 'settings'], \
    defaultNS: 'common', \
     \
    interpolation: { \
      escapeValue: false // React already escapes values \
    }, \
     \
    backend: { \
      loadPath: '/locales/{{lng}}/{{ns}}.json' \
    }, \
     \
    detection: { \
      order: ['cookie', 'localStorage', 'navigator'], \
      caches: ['cookie', 'localStorage'] \
    } \
  }); \
 \
export default i18n; \


3. **Translation Example**: \
// locales/en/expenses.json \
{ \
  "title": "Expenses", \
  "fields": { \
    "description": "Description", \
    "amount": "Amount", \
    "currency": "Currency", \
    "category": "Category", \
    "date": "Date", \
    "paymentMethod": "Payment Method", \
    "notes": "Notes", \
    "receipts": "Receipts" \
  }, \
  "paymentMethods": { \
    "cash": "Cash", \
    "personalCard": "Personal Card", \
    "companyCard": "Company Card", \
    "bankTransfer": "Bank Transfer" \
  }, \
  "status": { \
    "draft": "Draft", \
    "submitted": "Submitted", \
    "underReview": "Under Review", \
    "approved": "Approved", \
    "rejected": "Rejected", \
    "reimbursed": "Reimbursed" \
  }, \
  "actions": { \
    "create": "Create Expense", \
    "update": "Update Expense", \
    "submit": "Submit for Approval", \
    "approve": "Approve", \
    "reject": "Reject", \
    "delete": "Delete", \
    "upload": "Upload Receipt" \
  }, \
  "placeholders": { \
    "description": "Enter a brief description of the expense", \
    "notes": "Add any additional notes or information" \
  }, \
  "errors": { \
    "descriptionRequired": "Description is required", \
    "descriptionTooLong": "Description is too long (max 255 characters)", \
    "amountRequired": "Amount is required", \
    "amountPositive": "Amount must be positive", \
    "currencyRequired": "Currency is required", \
    "categoryRequired": "Category is required", \
    "dateRequired": "Date is required", \
    "dateNotFuture": "Date cannot be in the future" \
  }, \
  "filters": { \
    "title": "Filters", \
    "status": "Status", \
    "dateRange": "Date Range", \
    "category": "Category", \
    "apply": "Apply Filters", \
    "reset": "Reset" \
  }, \
  "emptyState": { \
    "title": "No expenses found", \
    "description": "You haven't created any expenses yet", \
    "cta": "Create your first expense" \
  } \
} \


4. **Translation Usage**: \
import { useTranslation } from 'react-i18next'; \
 \
export const ExpensesList = () => { \
  const { t } = useTranslation(['expenses', 'common']); \
   \
  return ( \
    <div> \
      <h1>{t('expenses:title')}</h1> \
      {/* ... */} \
      <button>{t('expenses:actions.create')}</button> \
    </div> \
  ); \
}; \


### 5.2 Mobile Application Architecture

#### 5.2.1 React Native Architecture

1. **Project Structure**: \
mobile/ \
├── src/ \
│   ├── components/     # UI components \
│   ├── screens/        # Screen components \
│   ├── navigation/     # Navigation configuration \
│   ├── hooks/          # Custom hooks \
│   ├── services/       # API services \
│   ├── store/          # Redux store (shared with web) \
│   ├── utils/          # Utility functions \
│   ├── assets/         # Images, fonts, etc. \
│   └── locales/        # Translation files \
├── android/            # Android-specific code \
├── ios/                # iOS-specific code \
└── ... \


2. **Navigation Structure**: \
// src/navigation/index.tsx \
import React from 'react'; \
import { NavigationContainer } from '@react-navigation/native'; \
import { createNativeStackNavigator } from '@react-navigation/native-stack'; \
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; \
import { useSelector } from 'react-redux'; \
import { selectIsAuthenticated } from '../store/auth/selectors'; \
 \
import { LoginScreen, RegisterScreen, ForgotPasswordScreen } from '../screens/auth'; \
import { DashboardScreen } from '../screens/dashboard'; \
import {  \
  ExpensesListScreen,  \
  ExpenseDetailScreen,  \
  CreateExpenseScreen  \
} from '../screens/expenses'; \
import {  \
  TravelOrdersListScreen,  \
  TravelOrderDetailScreen,  \
  CreateTravelOrderScreen  \
} from '../screens/travel'; \
import { SettingsScreen, ProfileScreen } from '../screens/settings'; \
 \
const Stack = createNativeStackNavigator(); \
const Tab = createBottomTabNavigator(); \
 \
const ExpensesStack = () => ( \
  <Stack.Navigator> \
    <Stack.Screen name="ExpensesList" component={ExpensesListScreen} /> \
    <Stack.Screen name="ExpenseDetail" component={ExpenseDetailScreen} /> \
    <Stack.Screen name="CreateExpense" component={CreateExpenseScreen} /> \
  </Stack.Navigator> \
); \
 \
const TravelStack = () => ( \
  <Stack.Navigator> \
    <Stack.Screen name="TravelOrdersList" component={TravelOrdersListScreen} /> \
    <Stack.Screen name="TravelOrderDetail" component={TravelOrderDetailScreen} /> \
    <Stack.Screen name="CreateTravelOrder" component={CreateTravelOrderScreen} /> \
  </Stack.Navigator> \
); \
 \
const SettingsStack = () => ( \
  <Stack.Navigator> \
    <Stack.Screen name="SettingsList" component={SettingsScreen} /> \
    <Stack.Screen name="Profile" component={ProfileScreen} /> \
  </Stack.Navigator> \
); \
 \
const MainTabs = () => ( \
  <Tab.Navigator> \
    <Tab.Screen name="Dashboard" component={DashboardScreen} /> \
    <Tab.Screen name="Expenses" component={ExpensesStack} /> \
    <Tab.Screen name="Travel" component={TravelStack} /> \
    <Tab.Screen name="Settings" component={SettingsStack} /> \
  </Tab.Navigator> \
); \
 \
const AuthStack = () => ( \
  <Stack.Navigator> \
    <Stack.Screen name="Login" component={LoginScreen} /> \
    <Stack.Screen name="Register" component={RegisterScreen} /> \
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> \
  </Stack.Navigator> \
); \
 \
export const Navigation = () => { \
  const isAuthenticated = useSelector(selectIsAuthenticated); \
   \
  return ( \
    <NavigationContainer> \
      {isAuthenticated ? <MainTabs /> : <AuthStack />} \
    </NavigationContainer> \
  ); \
}; \


#### 5.2.2 Mobile-Specific Features

1. **Receipt Scanning**: \
// src/screens/expenses/CreateExpenseScreen.tsx (partial) \
import React, { useState } from 'react'; \
import { View, Text, StyleSheet, Alert } from 'react-native'; \
import { useDispatch } from 'react-redux'; \
import { useTranslation } from 'react-i18next'; \
import { Camera } from 'react-native-camera'; \
import { useNavigation } from '@react-navigation/native'; \
 \
import { Button } from '../../components/Button'; \
import { scanReceipt } from '../../store/expenses/thunks'; \
 \
export const ScanReceiptScreen = () => { \
  const { t } = useTranslation(); \
  const dispatch = useDispatch(); \
  const navigation = useNavigation(); \
  const [scanning, setScanning] = useState(false); \
   \
  const handleCapture = async (data) => { \
    if (scanning) return; \
     \
    setScanning(true); \
    try { \
      const result = await dispatch(scanReceipt(data.uri)); \
      navigation.navigate('CreateExpense', { receiptData: result.payload }); \
    } catch (error) { \
      Alert.alert( \
        t('common:error.title'), \
        t('expenses:scan.error'), \
        [{ text: t('common:ok') }] \
      ); \
    } finally { \
      setScanning(false); \
    } \
  }; \
   \
  return ( \
    <View style={styles.container}> \
      <Camera \
        style={styles.camera} \
        type={Camera.Constants.Type.back} \
        captureAudio={false} \
        onBarCodeRead={handleCapture} \
      > \
        <View style={styles.overlay}> \
          <View style={styles.scanArea} /> \
        </View> \
      </Camera> \
       \
      <View style={styles.instructions}> \
        <Text style={styles.instructionsText}> \
          {t('expenses:scan.instructions')} \
        </Text> \
      </View> \
       \
      <View style={styles.buttonContainer}> \
        <Button \
          title={t('expenses:scan.capture')} \
          onPress={() => { \
            this.camera.capture() \
              .then(handleCapture) \
              .catch(error => { \
                Alert.alert( \
                  t('common:error.title'), \
                  t('expenses:scan.captureError'), \
                  [{ text: t('common:ok') }] \
                ); \
              }); \
          }} \
          loading={scanning} \
          disabled={scanning} \
        /> \
         \
        <Button \
          title={t('common:cancel')} \
          onPress={() => navigation.goBack()} \
          variant="secondary" \
          disabled={scanning} \
        /> \
      </View> \
    </View> \
  ); \
}; \
 \
const styles = StyleSheet.create({ \
  container: { \
    flex: 1, \
  }, \
  camera: { \
    flex: 1, \
  }, \
  overlay: { \
    flex: 1, \
    backgroundColor: 'rgba(0,0,0,0.5)', \
    justifyContent: 'center', \
    alignItems: 'center', \
  }, \
  scanArea: { \
    width: 300, \
    height: 200, \
    borderWidth: 2, \
    borderColor: 'white', \
    backgroundColor: 'transparent', \
  }, \
  instructions: { \
    padding: 20, \
    backgroundColor: 'white', \
  }, \
  instructionsText: { \
    textAlign: 'center', \
    fontSize: 16, \
  }, \
  buttonContainer: { \
    flexDirection: 'row', \
    justifyContent: 'space-between', \
    padding: 20, \
    backgroundColor: 'white', \
  }, \
}); \


2. **Offline Mode**: \
// src/utils/offlineSync.ts \
import Realm from 'realm'; \
import NetInfo from '@react-native-community/netinfo'; \
import { Platform } from 'react-native'; \
import { store } from '../store'; \
import {  \
  syncPendingExpenses,  \
  markExpenseAsPending  \
} from '../store/expenses/actions'; \
 \
// Define Realm schema \
const ExpenseSchema = { \
  name: 'Expense', \
  primaryKey: 'localId', \
  properties: { \
    localId: 'string', \
    id: 'string?', // Server ID, if available \
    data: 'string', // JSON stringified expense data \
    status: 'string', // 'pending', 'synced', 'error' \
    lastSyncAttempt: 'date?', \
    errorMessage: 'string?', \
    createdAt: 'date', \
    updatedAt: 'date' \
  } \
}; \
 \
// Initialize Realm \
let realm; \
 \
export const initOfflineStorage = async () => { \
  realm = await Realm.open({ \
    schema: [ExpenseSchema], \
    schemaVersion: 1, \
  }); \
   \
  // Register for connectivity changes \
  NetInfo.addEventListener(state => { \
    if (state.isConnected) { \
      syncPendingData(); \
    } \
  }); \
   \
  return realm; \
}; \
 \
export const saveExpenseOffline = (expenseData) => { \
  const localId = Platform.OS === 'ios'  \
    ? NSUUID.UUID().UUIDString  \
    : require('uuid').v4(); \
   \
  realm.write(() => { \
    realm.create('Expense', { \
      localId, \
      data: JSON.stringify(expenseData), \
      status: 'pending', \
      createdAt: new Date(), \
      updatedAt: new Date() \
    }); \
  }); \
   \
  store.dispatch(markExpenseAsPending(localId, expenseData)); \
   \
  // Try to sync immediately if connected \
  NetInfo.fetch().then(state => { \
    if (state.isConnected) { \
      syncPendingData(); \
    } \
  }); \
   \
  return localId; \
}; \
 \
export const syncPendingData = async () => { \
  const pendingExpenses = realm.objects('Expense').filtered('status = "pending"'); \
   \
  if (pendingExpenses.length === 0) { \
    return; \
  } \
   \
  store.dispatch(syncPendingExpenses(Array.from(pendingExpenses).map(item => ({ \
    localId: item.localId, \
    data: JSON.parse(item.data) \
  })))); \
}; \
 \
export const updateSyncStatus = (localId, status, serverId = null, errorMessage = null) => { \
  const expense = realm.objectForPrimaryKey('Expense', localId); \
   \
  if (expense) { \
    realm.write(() => { \
      expense.status = status; \
      expense.lastSyncAttempt = new Date(); \
       \
      if (serverId) { \
        expense.id = serverId; \
      } \
       \
      if (errorMessage) { \
        expense.errorMessage = errorMessage; \
      } \
       \
      expense.updatedAt = new Date(); \
    }); \
  } \
}; \
 \
export const getPendingExpenses = () => { \
  return Array.from(realm.objects('Expense').filtered('status = "pending"')) \
    .map(item => ({ \
      localId: item.localId, \
      data: JSON.parse(item.data), \
      createdAt: item.createdAt \
    })); \
}; \
 \
export const cleanSyncedData = (maxAge = 30) => { \
  const cutoffDate = new Date(); \
  cutoffDate.setDate(cutoffDate.getDate() - maxAge); \
   \
  const oldSyncedExpenses = realm.objects('Expense') \
    .filtered('status = "synced" AND updatedAt < $0', cutoffDate); \
   \
  realm.write(() => { \
    realm.delete(oldSyncedExpenses); \
  }); \
}; \


3. **Push Notifications**: \
// src/services/pushNotifications.ts \
import messaging from '@react-native-firebase/messaging'; \
import AsyncStorage from '@react-native-async-storage/async-storage'; \
import { Platform } from 'react-native'; \
import { store } from '../store'; \
import {  \
  addNotification, \
  updateNotificationSettings \
} from '../store/notifications/actions'; \
 \
export const initNotifications = async () => { \
  // Request permissions \
  const authStatus = await messaging().requestPermission(); \
  const enabled = \
    authStatus === messaging.AuthorizationStatus.AUTHORIZED || \
    authStatus === messaging.AuthorizationStatus.PROVISIONAL; \
   \
  if (enabled) { \
    // Get FCM token \
    const fcmToken = await messaging().getToken(); \
    await AsyncStorage.setItem('fcmToken', fcmToken); \
     \
    // Listen for token refreshes \
    return messaging().onTokenRefresh(async token => { \
      await AsyncStorage.setItem('fcmToken', token); \
      updateDeviceToken(token); \
    }); \
  } \
}; \
 \
export const registerDeviceForNotifications = async (userId) => { \
  try { \
    const fcmToken = await AsyncStorage.getItem('fcmToken'); \
     \
    if (!fcmToken) return; \
     \
    const response = await fetch('/api/users/register-device', { \
      method: 'POST', \
      headers: { \
        'Content-Type': 'application/json', \
      }, \
      body: JSON.stringify({ \
        userId, \
        token: fcmToken, \
        platform: Platform.OS, \
        appVersion: require('../../package.json').version \
      }) \
    }); \
     \
    const result = await response.json(); \
     \
    return result.success; \
  } catch (error) { \
    console.error('Error registering device for notifications:', error); \
    return false; \
  } \
}; \
 \
export const updateDeviceToken = async (token) => { \
  try { \
    const userId = store.getState().auth.user?.id; \
     \
    if (!userId) return; \
     \
    await fetch('/api/users/update-device-token', { \
      method: 'PUT', \
      headers: { \
        'Content-Type': 'application/json', \
      }, \
      body: JSON.stringify({ \
        userId, \
        token, \
        platform: Platform.OS \
      }) \
    }); \
  } catch (error) { \
    console.error('Error updating device token:', error); \
  } \
}; \
 \
export const handleNotification = (notification) => { \
  // Add notification to Redux store \
  store.dispatch(addNotification({ \
    id: notification.messageId, \
    title: notification.notification.title, \
    body: notification.notification.body, \
    data: notification.data, \
    read: false, \
    timestamp: new Date().toISOString() \
  })); \
   \
  // Handle different notification types \
  switch (notification.data.type) { \
    case 'expense_approved': \
      // Navigate to expense details \
      // ... \
      break; \
    case 'expense_rejected': \
      // Navigate to expense details \
      // ... \
      break; \
    case 'travel_approved': \
      // Navigate to travel order details \
      // ... \
      break; \
    // ... other notification types \
  } \
}; \
 \
export const setupForegroundNotificationHandler = () => { \
  return messaging().onMessage(async remoteMessage => { \
    handleNotification(remoteMessage); \
  }); \
}; \
 \
export const setupBackgroundNotificationHandler = () => { \
  // Register background handler \
  messaging().setBackgroundMessageHandler(async remoteMessage => { \
    handleNotification(remoteMessage); \
  }); \
}; \


## 6. Backend Services

### 6.1 Service Architecture

#### 6.1.1 Microservices Organization

Each microservice will be designed following these principles:

1. **Single Responsibility**: Each service handles one specific domain

2. **Autonomy**: Services can be developed, deployed, and scaled independently

3. **Domain-Driven Design**: Services are organized around business domains

4. **API-First**: All services expose well-defined APIs

Service organization:

services/ \
├── auth-service/ \
│   ├── src/ \
│   │   ├── controllers/ \
│   │   ├── middlewares/ \
│   │   ├── models/ \
│   │   ├── routes/ \
│   │   ├── services/ \
│   │   ├── utils/ \
│   │   └── app.js \
│   ├── tests/ \
│   ├── Dockerfile \
│   └── package.json \
├── expense-service/ \
├── travel-service/ \
├── user-service/ \
├── ocr-service/ \
├── report-service/ \
├── notification-service/ \
├── integration-service/ \
└── api-gateway/

#### 6.1.2 Service Example

// Auth Service - src/app.js \
import express from 'express'; \
import cors from 'cors'; \
import helmet from 'helmet'; \
import rateLimit from 'express-rate-limit'; \
import compression from 'compression'; \
import bodyParser from 'body-parser'; \
import { createLogger } from './utils/logger'; \
import { errorHandler } from './middlewares/errorHandler'; \
import { setupMetrics } from './utils/metrics'; \
import { connectToDatabase } from './utils/database'; \
 \
// Routes \
import authRoutes from './routes/auth'; \
import healthRoutes from './routes/health'; \
 \
const app = express(); \
const logger = createLogger('app'); \
 \
// Middleware \
app.use(cors()); \
app.use(helmet()); \
app.use(compression()); \
app.use(bodyParser.json()); \
app.use(bodyParser.urlencoded({ extended: true })); \
 \
// Rate limiting \
const limiter = rateLimit({ \
  windowMs: 15 * 60 * 1000, // 15 minutes \
  max: 100, // limit each IP to 100 requests per windowMs \
  standardHeaders: true, \
  legacyHeaders: false, \
}); \
app.use('/api/', limiter); \
 \
// Metrics \
setupMetrics(app); \
 \
// Routes \
app.use('/health', healthRoutes); \
app.use('/api/auth', authRoutes); \
 \
// Error handling \
app.use(errorHandler); \
 \
// Start server \
const PORT = process.env.PORT || 3000; \
 \
const startServer = async () => { \
  try { \
    await connectToDatabase(); \
     \
    app.listen(PORT, () => { \
      logger.info(<code>Auth service running on port ${PORT}</code>); \
    }); \
  } catch (error) { \
    logger.error('Failed to start server:', error); \
    process.exit(1); \
  } \
}; \
 \
// Handle graceful shutdown \
process.on('SIGTERM', () => { \
  logger.info('SIGTERM received, shutting down gracefully'); \
  // Close database connections, etc. \
  process.exit(0); \
}); \
 \
startServer(); \
 \
export default app;

### 6.2 API Gateway

The API Gateway will handle the following responsibilities:

1. **Routing**: Route requests to appropriate microservices

2. **Authentication**: Verify JWT tokens

3. **Rate Limiting**: Prevent abuse

4. **Request/Response Transformation**: Transform data as needed

5. **Logging and Monitoring**: Log requests and track metrics

6. **Caching**: Cache responses for better performance

Implementation:

// api-gateway/src/app.js \
import express from 'express'; \
import { createProxyMiddleware } from 'http-proxy-middleware'; \
import cors from 'cors'; \
import helmet from 'helmet'; \
import rateLimit from 'express-rate-limit'; \
import { createLogger } from './utils/logger'; \
import { verifyToken } from './middlewares/auth'; \
import { setupMetrics } from './utils/metrics'; \
import { cacheMiddleware } from './middlewares/cache'; \
import { errorHandler } from './middlewares/errorHandler'; \
 \
const app = express(); \
const logger = createLogger('api-gateway'); \
 \
// Middleware \
app.use(cors()); \
app.use(helmet()); \
app.use(express.json()); \
 \
// Rate limiting \
const limiter = rateLimit({ \
  windowMs: 15 * 60 * 1000, // 15 minutes \
  max: 100, // limit each IP to 100 requests per windowMs \
  standardHeaders: true, \
  legacyHeaders: false, \
}); \
app.use('/api/', limiter); \
 \
// Metrics \
setupMetrics(app); \
 \
// Health check \
app.get('/health', (req, res) => { \
  res.status(200).json({ status: 'ok' }); \
}); \
 \
// Public routes \
app.use('/api/auth', createProxyMiddleware({ \
  target: process.env.AUTH_SERVICE_URL || 'http://auth-service:3000', \
  changeOrigin: true, \
  pathRewrite: { \
    '^/api/auth': '/api/auth' \
  }, \
  logLevel: 'silent', \
  onError: (err, req, res) => { \
    logger.error('Proxy error:', err); \
    res.status(500).json({ error: 'Internal Server Error' }); \
  } \
})); \
 \
// Protected routes \
app.use('/api/users', verifyToken, createProxyMiddleware({ \
  target: process.env.USER_SERVICE_URL || 'http://user-service:3000', \
  changeOrigin: true, \
  pathRewrite: { \
    '^/api/users': '/api/users' \
  }, \
  logLevel: 'silent', \
  onError: (err, req, res) => { \
    logger.error('Proxy error:', err); \
    res.status(500).json({ error: 'Internal Server Error' }); \
  } \
})); \
 \
app.use('/api/expenses', verifyToken, createProxyMiddleware({ \
  target: process.env.EXPENSE_SERVICE_URL || 'http://expense-service:3000', \
  changeOrigin: true, \
  pathRewrite: { \
    '^/api/expenses': '/api/expenses' \
  }, \
  logLevel: 'silent', \
  onError: (err, req, res) => { \
    logger.error('Proxy error:', err); \
    res.status(500).json({ error: 'Internal Server Error' }); \
  } \
})); \
 \
// Cached routes \
app.use('/api/reports', verifyToken, cacheMiddleware(300), createProxyMiddleware({ \
  target: process.env.REPORT_SERVICE_URL || 'http://report-service:3000', \
  changeOrigin: true, \
  pathRewrite: { \
    '^/api/reports': '/api/reports' \
  }, \
  logLevel: 'silent', \
  onError: (err, req, res) => { \
    logger.error('Proxy error:', err); \
    res.status(500).json({ error: 'Internal Server Error' }); \
  } \
})); \
 \
// ... routes for other services \
 \
// Error handling \
app.use(errorHandler); \
 \
// Start server \
const PORT = process.env.PORT || 8000; \
 \
app.listen(PORT, () => { \
  logger.info(<code>API Gateway running on port ${PORT}</code>); \
}); \
 \
// Handle graceful shutdown \
process.on('SIGTERM', () => { \
  logger.info('SIGTERM received, shutting down gracefully'); \
  process.exit(0); \
}); \
 \
export default app;

### 6.3 Authorization Service

The authorization service will handle user authentication and authorization:

// auth-service/src/controllers/authController.js \
import jwt from 'jsonwebtoken'; \
import bcrypt from 'bcrypt'; \
import { v4 as uuidv4 } from 'uuid'; \
import { User } from '../models/User'; \
import { RefreshToken } from '../models/RefreshToken'; \
import { createLogger } from '../utils/logger'; \
import { AppError } from '../utils/appError'; \
 \
const logger = createLogger('authController'); \
 \
// Create JWT token \
const generateAccessToken = (user) => { \
  return jwt.sign( \
    { \
      sub: user.id, \
      email: user.email, \
      role: user.role, \
      companyId: user.companyId, \
      permissions: user.permissions \
    }, \
    process.env.JWT_SECRET, \
    { expiresIn: '1h', issuer: 'expense-management-api' } \
  ); \
}; \
 \
// Create refresh token \
const generateRefreshToken = async (userId) => { \
  const token = uuidv4(); \
  const expiresAt = new Date(); \
  expiresAt.setDate(expiresAt.getDate() + 7); // 7 days \
   \
  await RefreshToken.create({ \
    userId, \
    token, \
    expiresAt \
  }); \
   \
  return token; \
}; \
 \
// Login \
export const login = async (req, res, next) => { \
  try { \
    const { email, password } = req.body; \
     \
    // Validate input \
    if (!email || !password) { \
      throw new AppError('Email and password are required', 400); \
    } \
     \
    // Find user \
    const user = await User.findOne({ where: { email } }); \
     \
    if (!user) { \
      throw new AppError('Invalid email or password', 401); \
    } \
     \
    // Check user status \
    if (user.status !== 'active') { \
      throw new AppError('User account is not active', 403); \
    } \
     \
    // Verify password \
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash); \
     \
    if (!isPasswordValid) { \
      throw new AppError('Invalid email or password', 401); \
    } \
     \
    // Generate tokens \
    const accessToken = generateAccessToken(user); \
    const refreshToken = await generateRefreshToken(user.id); \
     \
    // Update last login \
    await user.update({ lastLogin: new Date() }); \
     \
    // Return user info and tokens \
    res.status(200).json({ \
      accessToken, \
      refreshToken, \
      expiresIn: 3600, // 1 hour \
      tokenType: 'Bearer', \
      user: { \
        id: user.id, \
        email: user.email, \
        firstName: user.firstName, \
        lastName: user.lastName, \
        role: user.role \
      } \
    }); \
  } catch (error) { \
    next(error); \
  } \
}; \
 \
// Refresh token \
export const refreshToken = async (req, res, next) => { \
  try { \
    const { refreshToken } = req.body; \
     \
    if (!refreshToken) { \
      throw new AppError('Refresh token is required', 400); \
    } \
     \
    // Find token in database \
    const tokenRecord = await RefreshToken.findOne({ \
      where: { \
        token: refreshToken, \
        revoked: false, \
        expiresAt: { [Op.gt]: new Date() } \
      } \
    }); \
     \
    if (!tokenRecord) { \
      throw new AppError('Invalid or expired refresh token', 401); \
    } \
     \
    // Find user \
    const user = await User.findByPk(tokenRecord.userId); \
     \
    if (!user || user.status !== 'active') { \
      throw new AppError('User not found or inactive', 401); \
    } \
     \
    // Generate new tokens \
    const accessToken = generateAccessToken(user); \
    const newRefreshToken = await generateRefreshToken(user.id); \
     \
    // Revoke old refresh token \
    await tokenRecord.update({ \
      revoked: true, \
      revokedReason: 'Replaced by new token' \
    }); \
     \
    res.status(200).json({ \
      accessToken, \
      refreshToken: newRefreshToken, \
      expiresIn: 3600, \
      tokenType: 'Bearer' \
    }); \
  } catch (error) { \
    next(error); \
  } \
}; \
 \
// Logout \
export const logout = async (req, res, next) => { \
  try { \
    const { refreshToken } = req.body; \
     \
    if (!refreshToken) { \
      throw new AppError('Refresh token is required', 400); \
    } \
     \
    // Find and revoke refresh token \
    const tokenRecord = await RefreshToken.findOne({ \
      where: { \
        token: refreshToken, \
        revoked: false \
      } \
    }); \
     \
    if (tokenRecord) { \
      await tokenRecord.update({ \
        revoked: true, \
        revokedReason: 'User logout' \
      }); \
    } \
     \
    res.status(200).json({ success: true }); \
  } catch (error) { \
    next(error); \
  } \
}; \
 \
// Request password reset \
export const requestPasswordReset = async (req, res, next) => { \
  try { \
    const { email } = req.body; \
     \
    if (!email) { \
      throw new AppError('Email is required', 400); \
    } \
     \
    // Find user \
    const user = await User.findOne({ where: { email } }); \
     \
    // For security reasons, always return success even if user not found \
    if (!user) { \
      logger.info(<code>Password reset requested for non-existent email: ${email}</code>); \
      return res.status(200).json({ success: true }); \
    } \
     \
    // Generate reset token \
    const resetToken = jwt.sign( \
      { sub: user.id, type: 'password_reset' }, \
      process.env.JWT_SECRET, \
      { expiresIn: '1h' } \
    ); \
     \
    // Store token hash in database \
    const resetTokenHash = await bcrypt.hash(resetToken, 10); \
    await user.update({ \
      resetTokenHash, \
      resetTokenExpiresAt: new Date(Date.now() + 3600000) // 1 hour \
    }); \
     \
    // Send email with reset link \
    // This would integrate with notification service \
    await fetch(<code>${process.env.NOTIFICATION_SERVICE_URL}/api/notifications/email</code>, { \
      method: 'POST', \
      headers: { \
        'Content-Type': 'application/json', \
        'Authorization': <code>Bearer ${process.env.INTERNAL_API_KEY}</code> \
      }, \
      body: JSON.stringify({ \
        recipientEmail: user.email, \
        template: 'password-reset', \
        data: { \
          firstName: user.firstName, \
          resetLink: <code>${process.env.FRONTEND_URL}/reset-password?token=${resetToken}</code> \
        } \
      }) \
    }); \
     \
    res.status(200).json({ success: true }); \
  } catch (error) { \
    next(error); \
  } \
}; \
 \
// Change password \
export const changePassword = async (req, res, next) => { \
  try { \
    const { oldPassword, newPassword } = req.body; \
     \
    if (!oldPassword || !newPassword) { \
      throw new AppError('Old password and new password are required', 400); \
    } \
     \
    // Validate password complexity \
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/; \
    if (!passwordRegex.test(newPassword)) { \
      throw new AppError('Password must be at least 10 characters and include uppercase, lowercase, number and symbol', 400); \
    } \
     \
    // Find user \
    const user = await User.findByPk(req.userId); \
     \
    if (!user) { \
      throw new AppError('User not found', 404); \
    } \
     \
    // Verify old password \
    const isPasswordValid = await bcrypt.compare(oldPassword, user.passwordHash); \
     \
    if (!isPasswordValid) { \
      throw new AppError('Current password is incorrect', 401); \
    } \
     \
    // Check if new password is different from old \
    const isSamePassword = await bcrypt.compare(newPassword, user.passwordHash); \
    if (isSamePassword) { \
      throw new AppError('New password must be different from current password', 400); \
    } \
     \
    // Hash new password \
    const passwordHash = await bcrypt.hash(newPassword, 10); \
     \
    // Update password \
    await user.update({ passwordHash }); \
     \
    res.status(200).json({ success: true }); \
  } catch (error) { \
    next(error); \
  } \
};

### 6.4 OCR Service

The OCR Service will handle receipt scanning and data extraction:

// ocr-service/src/services/ocrService.js \
import { createWorker } from 'tesseract.js'; \
import { createLogger } from '../utils/logger'; \
import { Storage } from '../utils/storage'; \
import { extractReceiptData } from '../utils/receiptParser'; \
import { ReceiptTemplate } from '../models/ReceiptTemplate'; \
import { uploadToS3, getFromS3 } from '../utils/s3'; \
 \
const logger = createLogger('ocrService'); \
 \
export class OcrService { \
  async processImage(imageBuffer, companyId) { \
    try { \
      // Upload raw image to S3 \
      const rawImageKey = <code>receipts/raw/${companyId}/${Date.now()}.jpg</code>; \
      await uploadToS3(rawImageKey, imageBuffer); \
       \
      // Preprocess image (enhance contrast, deskew, etc.) \
      const processedImageBuffer = await this.preprocessImage(imageBuffer); \
       \
      // Upload processed image \
      const processedImageKey = <code>receipts/processed/${companyId}/${Date.now()}.jpg</code>; \
      await uploadToS3(processedImageKey, processedImageBuffer); \
       \
      // Initialize Tesseract worker \
      const worker = await createWorker(); \
      await worker.loadLanguage('eng'); \
      await worker.initialize('eng'); \
       \
      // Perform OCR \
      const { data } = await worker.recognize(processedImageBuffer); \
      await worker.terminate(); \
       \
      // Get company-specific receipt templates \
      const templates = await ReceiptTemplate.findAll({ \
        where: { companyId }, \
      }); \
       \
      // Extract structured data \
      const extractedData = await extractReceiptData(data.text, templates); \
       \
      return { \
        rawText: data.text, \
        extractedData, \
        confidence: data.confidence, \
        imageUrls: { \
          raw: <code>${process.env.S3_PUBLIC_URL}/${rawImageKey}</code>, \
          processed: <code>${process.env.S3_PUBLIC_URL}/${processedImageKey}</code> \
        } \
      }; \
    } catch (error) { \
      logger.error('OCR processing error:', error); \
      throw new Error('Failed to process receipt image'); \
    } \
  } \
   \
  async preprocessImage(imageBuffer) { \
    // This would use an image processing library like Sharp \
    // to enhance the image for better OCR results \
    const sharp = require('sharp'); \
     \
    return sharp(imageBuffer) \
      .greyscale() // Convert to grayscale \
      .normalize() // Normalize contrast \
      .sharpen() // Sharpen details \
      .toBuffer(); \
  } \
   \
  async validateExtractedData(extractedData, originalImageKey) { \
    // This would implement validation rules to ensure extracted data is valid \
    // For example, checking if the amount is reasonable, date format is valid, etc. \
    const validationResults = {}; \
    const suggestedCorrections = {}; \
     \
    // Validate date \
    if (extractedData.date) { \
      const dateObj = new Date(extractedData.date); \
      if (isNaN(dateObj.getTime())) { \
        validationResults.date = 'invalid'; \
        suggestedCorrections.date = new Date().toISOString().split('T')[0]; \
      } else if (dateObj > new Date()) { \
        validationResults.date = 'future_date'; \
      } \
    } \
     \
    // Validate amount \
    if (extractedData.amount) { \
      if (isNaN(extractedData.amount) || extractedData.amount <= 0) { \
        validationResults.amount = 'invalid'; \
      } else if (extractedData.amount > 10000) { \
        validationResults.amount = 'unusually_high'; \
      } \
    } \
     \
    // Validate merchant name \
    if (!extractedData.merchantName || extractedData.merchantName.length < 2) { \
      validationResults.merchantName = 'missing_or_short'; \
    } \
     \
    return { \
      validationResults, \
      suggestedCorrections \
    }; \
  } \
   \
  async trainCompanyModel(companyId, sampleImages) { \
    // This would implement a machine learning pipeline to train \
    // company-specific OCR models or receipt templates \
     \
    // For each sample image \
    for (const image of sampleImages) { \
      // Process the image with standard OCR \
      const { rawText } = await this.processImage(image.buffer, companyId); \
       \
      // Store the template with the provided ground truth data \
      await ReceiptTemplate.create({ \
        companyId, \
        name: image.metadata.merchantName, \
        templateText: rawText, \
        sampleData: image.metadata, \
        confidence: 0, \
        usageCount: 0 \
      }); \
    } \
     \
    return { \
      success: true, \
      modelId: <code>${companyId}-${Date.now()}</code> \
    }; \
  } \
}

Receipt parser helper:

// ocr-service/src/utils/receiptParser.js \
import { createLogger } from './logger'; \
 \
const logger = createLogger('receiptParser'); \
 \
export const extractReceiptData = async (text, templates = []) => { \
  try { \
    // Basic extraction using regex patterns \
    const extractedData = { \
      merchantName: extractMerchantName(text), \
      date: extractDate(text), \
      amount: extractAmount(text), \
      taxAmount: extractTaxAmount(text), \
      currency: extractCurrency(text), \
      items: extractItems(text) \
    }; \
     \
    // If company templates are available, try to improve extraction \
    if (templates.length > 0) { \
      const enhancedData = enhanceWithTemplates(text, extractedData, templates); \
      return enhancedData; \
    } \
     \
    return extractedData; \
  } catch (error) { \
    logger.error('Error parsing receipt:', error); \
    return { \
      merchantName: null, \
      date: null, \
      amount: null, \
      taxAmount: null, \
      currency: null, \
      items: null, \
      confidence: 0 \
    }; \
  } \
}; \
 \
const extractMerchantName = (text) => { \
  // Common patterns for merchant names \
  // Usually at the top of the receipt, often in ALL CAPS \
  // May be preceded by terms like "MERCHANT" or "STORE" \
   \
  // Split text into lines \
  const lines = text.split('\n').map(line => line.trim()).filter(Boolean); \
   \
  // Try to find merchant name in first few lines \
  for (let i = 0; i < Math.min(5, lines.length); i++) { \
    const line = lines[i]; \
     \
    // Skip lines that are likely not merchant names \
    if (line.match(/receipt|invoice|date|time|tel|phone|fax/i)) { \
      continue; \
    } \
     \
    // If line is all uppercase and at least 3 chars, it's likely the merchant name \
    if (line === line.toUpperCase() && line.length > 3) { \
      return line; \
    } \
  } \
   \
  // If no clear merchant name found, return first non-empty line \
  return lines[0] || null; \
}; \
 \
const extractDate = (text) => { \
  // Look for common date formats: MM/DD/YYYY, DD/MM/YYYY, YYYY-MM-DD, etc. \
  const datePatterns = [ \
    /(\d{1,2})[\/\.-](\d{1,2})[\/\.-](\d{2,4})/,  // MM/DD/YYYY or DD/MM/YYYY \
    /(\d{4})[\/\.-](\d{1,2})[\/\.-](\d{1,2})/,    // YYYY-MM-DD \
    /(\d{1,2})(?:st|nd|rd|th)?\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*[\s,]+(\d{2,4})/ // 1st Jan 2023 \
  ]; \
   \
  for (const pattern of datePatterns) { \
    const match = text.match(pattern); \
    if (match) { \
      // Try to parse the matched date \
      try { \
        // This is simplified; actual implementation would handle \
        // various formats and validate the date \
        const dateStr = match[0]; \
        const date = new Date(dateStr); \
         \
        if (!isNaN(date.getTime())) { \
          return date.toISOString().split('T')[0]; // YYYY-MM-DD format \
        } \
      } catch (e) { \
        // Continue to next pattern \
      } \
    } \
  } \
   \
  return null; \
}; \
 \
const extractAmount = (text) => { \
  // Look for total amount patterns \
  // Common patterns: \
  // - "TOTAL: $123.45" \
  // - "Total Amount: 123,45 €" \
  // - "Grand Total: 123.45" \
   \
  const totalPatterns = [ \
    /total(?:\s+amount)?[\s:]*[$£€]?\s*(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)[$£€]?/i, \
    /grand\s+total[\s:]*[$£€]?\s*(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)[$£€]?/i, \
    /amount\s+due[\s:]*[$£€]?\s*(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)[$£€]?/i, \
    /balance\s+due[\s:]*[$£€]?\s*(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)[$£€]?/i, \
    /[$£€]\s*(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/ \
  ]; \
   \
  for (const pattern of totalPatterns) { \
    const match = text.match(pattern); \
    if (match) { \
      // Parse the amount, removing any thousand separators \
      const amountStr = match[1].replace(/,/g, ''); \
      const amount = parseFloat(amountStr); \
       \
      if (!isNaN(amount)) { \
        return amount; \
      } \
    } \
  } \
   \
  return null; \
}; \
 \
const extractTaxAmount = (text) => { \
  // Look for tax amount patterns \
  // Common patterns: \
  // - "TAX: $12.34" \
  // - "VAT: 12,34 €" \
  // - "GST: 12.34" \
   \
  const taxPatterns = [ \
    /(?:tax|vat|gst)(?:\s+amount)?[\s:]*[$£€]?\s*(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)[$£€]?/i, \
    /(?:sales\s+tax)[\s:]*[$£€]?\s*(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)[$£€]?/i \
  ]; \
   \
  for (const pattern of taxPatterns) { \
    const match = text.match(pattern); \
    if (match) { \
      // Parse the tax amount \
      const taxStr = match[1].replace(/,/g, ''); \
      const tax = parseFloat(taxStr); \
       \
      if (!isNaN(tax)) { \
        return tax; \
      } \
    } \
  } \
   \
  return null; \
}; \
 \
const extractCurrency = (text) => { \
  // Look for currency symbols or codes \
  const currencyPatterns = [ \
    /[$£€]/, \
    /\b(?:USD|EUR|GBP|CAD|AUD|JPY|CHF|CNY|HKD|NZD|SEK|KRW|SGD|NOK|MXN|INR|RUB|ZAR|TRY|BRL|TWD|DKK|PLN|THB|IDR|HUF|CZK|ILS|CLP|PHP|AED|COP|SAR|MYR|RON)\b/i \
  ]; \
   \
  for (const pattern of currencyPatterns) { \
    const match = text.match(pattern); \
    if (match) { \
      const currency = match[0].toUpperCase(); \
       \
      // Map symbols to codes \
      const symbolMap = { \
        '$': 'USD', \
        '£': 'GBP', \
        '€': 'EUR' \
      }; \
       \
      return symbolMap[currency] || currency; \
    } \
  } \
   \
  return null; \
}; \
 \
const extractItems = (text) => { \
  // This is a simplified implementation \
  // A real implementation would be more complex, looking for patterns like: \
  // - Item description followed by quantity, unit price, and total \
  // - Items often listed in a table-like format \
   \
  const lines = text.split('\n').map(line => line.trim()).filter(Boolean); \
  const items = []; \
   \
  // Look for lines that might contain item information \
  for (let i = 0; i < lines.length; i++) { \
    const line = lines[i]; \
     \
    // Skip header or footer lines \
    if (line.match(/receipt|invoice|total|subtotal|tax|date|time|thank|www|tel|phone/i)) { \
      continue; \
    } \
     \
    // Look for lines that have price-like patterns \
    const priceMatch = line.match(/(\d+(?:\.\d{2}))/); \
    if (priceMatch) { \
      // Try to extract item details \
      const priceIndex = line.indexOf(priceMatch[0]); \
      let description = line.substring(0, priceIndex).trim(); \
      const price = parseFloat(priceMatch[0]); \
       \
      // Very basic quantity extraction \
      let quantity = 1; \
      const qtyMatch = description.match(/(\d+)\s*x/); \
      if (qtyMatch) { \
        quantity = parseInt(qtyMatch[1]); \
        description = description.replace(qtyMatch[0], '').trim(); \
      } \
       \
      items.push({ \
        description, \
        quantity, \
        unitPrice: price / quantity, \
        totalPrice: price \
      }); \
    } \
  } \
   \
  return items.length > 0 ? items : null; \
}; \
 \
const enhanceWithTemplates = (text, basicData, templates) => { \
  // This would implement a fuzzy matching algorithm to find the closest \
  // template match and then use it to improve extraction accuracy \
   \
  // Simple implementation: just return the basic data with a confidence score \
  return { \
    ...basicData, \
    confidence: calculateConfidence(basicData) \
  }; \
}; \
 \
const calculateConfidence = (data) => { \
  // Calculate a confidence score based on how many fields were successfully extracted \
  const fields = ['merchantName', 'date', 'amount', 'taxAmount', 'currency', 'items']; \
  const extractedCount = fields.filter(field => data[field] !== null).length; \
   \
  return Math.round((extractedCount / fields.length) * 100) / 100; \
};

### 6.5 Notification Service

The Notification Service will handle all communication with users:

// notification-service/src/services/notificationService.js \
import nodemailer from 'nodemailer'; \
import { Notification } from '../models/Notification'; \
import { NotificationTemplate } from '../models/NotificationTemplate'; \
import { createLogger } from '../utils/logger'; \
import { renderTemplate } from '../utils/templateRenderer'; \
import { pushNotificationProvider } from '../providers/pushNotificationProvider'; \
 \
const logger = createLogger('notificationService'); \
 \
export class NotificationService { \
  constructor() { \
    // Initialize email transport \
    this.emailTransport = nodemailer.createTransport({ \
      host: process.env.SMTP_HOST, \
      port: process.env.SMTP_PORT, \
      secure: process.env.SMTP_SECURE === 'true', \
      auth: { \
        user: process.env.SMTP_USER, \
        pass: process.env.SMTP_PASSWORD \
      } \
    }); \
  } \
   \
  async sendEmail(params) { \
    try { \
      const { \
        recipientEmail, \
        recipientName, \
        subject, \
        template, \
        data, \
        attachments = [], \
        priority = 'normal' \
      } = params; \
       \
      // Get template from database \
      const templateRecord = await NotificationTemplate.findOne({ \
        where: { type: 'email', name: template } \
      }); \
       \
      if (!templateRecord) { \
        throw new Error(<code>Email template "${template}" not found</code>); \
      } \
       \
      // Render template with data \
      const { subject: renderedSubject, html, text } = await renderTemplate( \
        templateRecord.content, \
        templateRecord.subject, \
        data \
      ); \
       \
      // Send email \
      const result = await this.emailTransport.sendMail({ \
        from: <code>"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_ADDRESS}></code>, \
        to: <code>"${recipientName || ''}" <${recipientEmail}></code>, \
        subject: subject || renderedSubject, \
        html, \
        text, \
        attachments, \
        priority \
      }); \
       \
      // Store notification record \
      await Notification.create({ \
        type: 'email', \
        recipient: recipientEmail, \
        template, \
        subject: subject || renderedSubject, \
        data, \
        status: 'sent', \
        externalId: result.messageId \
      }); \
       \
      return { \
        success: true, \
        messageId: result.messageId \
      }; \
    } catch (error) { \
      logger.error('Error sending email:', error); \
       \
      // Store failed notification record \
      await Notification.create({ \
        type: 'email', \
        recipient: params.recipientEmail, \
        template: params.template, \
        subject: params.subject, \
        data: params.data, \
        status: 'failed', \
        error: error.message \
      }); \
       \
      throw new Error('Failed to send email notification'); \
    } \
  } \
   \
  async sendPushNotification(params) { \
    try { \
      const { \
        userId, \
        deviceTokens, \
        title, \
        body, \
        data, \
        priority = 'high', \
        badge \
      } = params; \
       \
      if (!deviceTokens || deviceTokens.length === 0) { \
        throw new Error('No device tokens provided'); \
      } \
       \
      // Send to each device \
      const results = await Promise.all( \
        deviceTokens.map(token => pushNotificationProvider.send({ \
          token, \
          notification: { \
            title, \
            body \
          }, \
          data, \
          priority, \
          badge \
        })) \
      ); \
       \
      // Store notification records \
      await Promise.all( \
        results.map((result, index) => Notification.create({ \
          type: 'push', \
          recipient: userId, \
          deviceToken: deviceTokens[index], \
          title, \
          body, \
          data, \
          status: result.success ? 'sent' : 'failed', \
          externalId: result.id, \
          error: result.error \
        })) \
      ); \
       \
      return { \
        success: results.some(r => r.success), \
        results \
      }; \
    } catch (error) { \
      logger.error('Error sending push notification:', error); \
       \
      // Store failed notification record \
      await Notification.create({ \
        type: 'push', \
        recipient: params.userId, \
        title: params.title, \
        body: params.body, \
        data: params.data, \
        status: 'failed', \
        error: error.message \
      }); \
       \
      throw new Error('Failed to send push notification'); \
    } \
  } \
   \
  async sendInAppNotification(params) { \
    try { \
      const { \
        userId, \
        title, \
        body, \
        type, \
        data, \
        priority = 'normal' \
      } = params; \
       \
      // Create notification record \
      const notification = await Notification.create({ \
        type: 'in-app', \
        recipient: userId, \
        title, \
        body, \
        notificationType: type, \
        data, \
        priority, \
        status: 'sent', \
        read: false \
      }); \
       \
      // Emit event to websocket service \
      await fetch(<code>${process.env.WEBSOCKET_SERVICE_URL}/api/broadcast</code>, { \
        method: 'POST', \
        headers: { \
          'Content-Type': 'application/json', \
          'Authorization': <code>Bearer ${process.env.INTERNAL_API_KEY}</code> \
        }, \
        body: JSON.stringify({ \
          event: 'notification', \
          userId, \
          data: { \
            id: notification.id, \
            title, \
            body, \
            type, \
            data, \
            createdAt: notification.createdAt \
          } \
        }) \
      }); \
       \
      return { \
        success: true, \
        notificationId: notification.id \
      }; \
    } catch (error) { \
      logger.error('Error sending in-app notification:', error); \
       \
      // No need to store failed record as we're already creating the record above \
       \
      throw new Error('Failed to send in-app notification'); \
    } \
  } \
   \
  async getUnreadNotifications(userId) { \
    try { \
      const notifications = await Notification.findAll({ \
        where: { \
          type: 'in-app', \
          recipient: userId, \
          read: false \
        }, \
        order: [['createdAt', 'DESC']], \
        limit: 100 \
      }); \
       \
      return notifications.map(n => ({ \
        id: n.id, \
        title: n.title, \
        body: n.body, \
        type: n.notificationType, \
        data: n.data, \
        createdAt: n.createdAt \
      })); \
    } catch (error) { \
      logger.error('Error getting unread notifications:', error); \
      throw new Error('Failed to get unread notifications'); \
    } \
  } \
   \
  async markNotificationAsRead(notificationId, userId) { \
    try { \
      const notification = await Notification.findOne({ \
        where: { \
          id: notificationId, \
          recipient: userId, \
          type: 'in-app' \
        } \
      }); \
       \
      if (!notification) { \
        throw new Error('Notification not found'); \
      } \
       \
      await notification.update({ read: true }); \
       \
      return { success: true }; \
    } catch (error) { \
      logger.error('Error marking notification as read:', error); \
      throw new Error('Failed to mark notification as read'); \
    } \
  } \
}

## 7. Integration Architecture

### 7.1 Integration Patterns

The system will support multiple integration patterns to accommodate different external systems:

#### 7.1.1 Integration Service Design

// integration-service/src/app.js \
import express from 'express'; \
import cors from 'cors'; \
import helmet from 'helmet'; \
import { createLogger } from './utils/logger'; \
import { errorHandler } from './middlewares/errorHandler'; \
import { authenticateRequest } from './middlewares/auth'; \
import { setupMetrics } from './utils/metrics'; \
 \
// Routes \
import integrationRoutes from './routes/integrations'; \
import healthRoutes from './routes/health'; \
 \
const app = express(); \
const logger = createLogger('app'); \
 \
// Middleware \
app.use(cors()); \
app.use(helmet()); \
app.use(express.json()); \
 \
// Metrics \
setupMetrics(app); \
 \
// Routes \
app.use('/health', healthRoutes); \
app.use('/api/integrations', authenticateRequest, integrationRoutes); \
 \
// Webhook endpoints - some don't use the standard authentication \
app.use('/api/webhooks', require('./routes/webhooks')); \
 \
// Error handling \
app.use(errorHandler); \
 \
// Start server \
const PORT = process.env.PORT || 3000; \
 \
app.listen(PORT, () => { \
  logger.info(<code>Integration service running on port ${PORT}</code>); \
}); \
 \
export default app;

#### 7.1.2 Integration Provider Pattern

The system will use a provider pattern to support different integration types:

// integration-service/src/providers/baseProvider.js \
export class BaseIntegrationProvider { \
  constructor(config) { \
    this.config = config; \
  } \
   \
  async connect() { \
    throw new Error('Method not implemented'); \
  } \
   \
  async disconnect() { \
    throw new Error('Method not implemented'); \
  } \
   \
  async sync(entity, options) { \
    throw new Error('Method not implemented'); \
  } \
   \
  async getStatus() { \
    throw new Error('Method not implemented'); \
  } \
   \
  async handleWebhook(payload) { \
    throw new Error('Method not implemented'); \
  } \
}

#### 7.1.3 Accounting System Integration

Example of an accounting system integration:

// integration-service/src/providers/accountingProvider.js \
import { BaseIntegrationProvider } from './baseProvider'; \
import { createLogger } from '../utils/logger'; \
import axios from 'axios'; \
 \
const logger = createLogger('accountingProvider'); \
 \
export class AccountingProvider extends BaseIntegrationProvider { \
  constructor(config) { \
    super(config); \
    this.client = null; \
  } \
   \
  async connect() { \
    try { \
      // Create API client \
      this.client = axios.create({ \
        baseURL: this.config.apiUrl, \
        headers: { \
          'Content-Type': 'application/json', \
          'Authorization': <code>Bearer ${this.config.apiKey}</code> \
        } \
      }); \
       \
      // Test connection \
      const response = await this.client.get('/api/status'); \
       \
      if (response.status !== 200) { \
        throw new Error(<code>Connection failed: ${response.statusText}</code>); \
      } \
       \
      logger.info(<code>Connected to accounting system: ${this.config.provider}</code>); \
       \
      return { success: true }; \
    } catch (error) { \
      logger.error('Error connecting to accounting system:', error); \
      throw new Error(<code>Failed to connect to accounting system: ${error.message}</code>); \
    } \
  } \
   \
  async disconnect() { \
    // Cleanup resources \
    this.client = null; \
     \
    return { success: true }; \
  } \
   \
  async sync(entity, options = {}) { \
    if (!this.client) { \
      throw new Error('Not connected to accounting system'); \
    } \
     \
    try { \
      switch (entity) { \
        case 'expenses': \
          return await this.syncExpenses(options); \
        case 'vendors': \
          return await this.syncVendors(options); \
        case 'accounts': \
          return await this.syncAccounts(options); \
        default: \
          throw new Error(<code>Unsupported entity type: ${entity}</code>); \
      } \
    } catch (error) { \
      logger.error(<code>Error syncing ${entity}:</code>, error); \
      throw new Error(<code>Failed to sync ${entity}: ${error.message}</code>); \
    } \
  } \
   \
  async syncExpenses(options) { \
    const { startDate, endDate, status, limit = 100 } = options; \
     \
    // Fetch approved expenses from our system \
    const expensesResponse = await axios.get(<code>${process.env.EXPENSE_SERVICE_URL}/api/expenses/approved</code>, { \
      headers: { \
        'Authorization': <code>Bearer ${process.env.INTERNAL_API_KEY}</code> \
      }, \
      params: { \
        startDate, \
        endDate, \
        status, \
        limit \
      } \
    }); \
     \
    const expenses = expensesResponse.data.data; \
     \
    // Transform to accounting system format \
    const accountingExpenses = expenses.map(expense => ({ \
      date: expense.date, \
      amount: expense.amount / 100, // Convert from cents \
      currency: expense.currency, \
      description: expense.description, \
      category: expense.category, \
      tax: expense.taxAmount ? expense.taxAmount / 100 : 0, \
      vendor: expense.receiptData?.merchantName || 'Unknown', \
      employee: { \
        id: expense.userId, \
        // Additional employee info would be fetched from user service \
      }, \
      receiptUrl: expense.receiptUrls[0] || null, \
      expenseId: expense.id // Reference to our system \
    })); \
     \
    // Push to accounting system \
    const results = []; \
    for (const expense of accountingExpenses) { \
      try { \
        const response = await this.client.post('/api/expenses', expense); \
         \
        results.push({ \
          expenseId: expense.expenseId, \
          success: true, \
          externalId: response.data.id \
        }); \
         \
        // Update expense with external ID \
        await axios.patch(<code>${process.env.EXPENSE_SERVICE_URL}/api/expenses/${expense.expenseId}</code>, { \
          externalId: response.data.id, \
          externalSystem: this.config.provider \
        }, { \
          headers: { \
            'Authorization': <code>Bearer ${process.env.INTERNAL_API_KEY}</code> \
          } \
        }); \
      } catch (error) { \
        results.push({ \
          expenseId: expense.expenseId, \
          success: false, \
          error: error.message \
        }); \
      } \
    } \
     \
    return { \
      success: results.some(r => r.success), \
      total: accountingExpenses.length, \
      synced: results.filter(r => r.success).length, \
      failed: results.filter(r => !r.success).length, \
      results \
    }; \
  } \
   \
  async syncVendors(options) { \
    // Implementation would be similar to syncExpenses \
    // but for vendor/merchant data \
    return { success: true }; \
  } \
   \
  async syncAccounts(options) { \
    // Implementation would be similar to syncExpenses \
    // but for chart of accounts data \
    return { success: true }; \
  } \
   \
  async getStatus() { \
    if (!this.client) { \
      return { \
        connected: false, \
        lastSync: null, \
        error: 'Not connected to accounting system' \
      }; \
    } \
     \
    try { \
      // Get connection status \
      const response = await this.client.get('/api/status'); \
       \
      // Get last sync info from our database \
      const lastSyncResponse = await axios.get(<code>${process.env.INTEGRATION_SERVICE_URL}/api/integrations/${this.config.provider}/last-sync</code>, { \
        headers: { \
          'Authorization': <code>Bearer ${process.env.INTERNAL_API_KEY}</code> \
        }, \
        params: { \
          companyId: this.config.companyId \
        } \
      }); \
       \
      return { \
        connected: response.status === 200, \
        lastSync: lastSyncResponse.data.lastSync, \
        nextScheduledSync: lastSyncResponse.data.nextScheduledSync \
      }; \
    } catch (error) { \
      logger.error('Error getting integration status:', error); \
       \
      return { \
        connected: false, \
        lastSync: null, \
        error: error.message \
      }; \
    } \
  } \
   \
  async handleWebhook(payload) { \
    // Process webhook data from accounting system \
    // This could include updates to expenses, vendor info, etc. \
     \
    logger.info(<code>Received webhook from ${this.config.provider}:</code>, payload.event); \
     \
    try { \
      switch (payload.event) { \
        case 'expense.updated': \
          await this.handleExpenseUpdated(payload.data); \
          break; \
        case 'expense.deleted': \
          await this.handleExpenseDeleted(payload.data); \
          break; \
        // Other event types \
        default: \
          logger.warn(<code>Unhandled webhook event: ${payload.event}</code>); \
      } \
       \
      return { success: true }; \
    } catch (error) { \
      logger.error(<code>Error handling webhook (${payload.event}):</code>, error); \
      throw new Error(<code>Failed to process webhook: ${error.message}</code>); \
    } \
  } \
   \
  async handleExpenseUpdated(data) { \
    // Update expense in our system based on accounting system data \
    if (!data.metadata || !data.metadata.expenseId) { \
      logger.warn('Received expense update without reference to our system'); \
      return; \
    } \
     \
    await axios.patch(<code>${process.env.EXPENSE_SERVICE_URL}/api/expenses/${data.metadata.expenseId}</code>, { \
      externalStatus: data.status, \
      externalUpdatedAt: new Date().toISOString(), \
      // Other fields to update \
    }, { \
      headers: { \
        'Authorization': <code>Bearer ${process.env.INTERNAL_API_KEY}</code> \
      } \
    }); \
  } \
   \
  async handleExpenseDeleted(data) { \
    // Mark expense as deleted in our system \
    if (!data.metadata || !data.metadata.expenseId) { \
      logger.warn('Received expense deletion without reference to our system'); \
      return; \
    } \
     \
    await axios.patch(<code>${process.env.EXPENSE_SERVICE_URL}/api/expenses/${data.metadata.expenseId}</code>, { \
      externalStatus: 'deleted', \
      externalUpdatedAt: new Date().toISOString(), \
    }, { \
      headers: { \
        'Authorization': <code>Bearer ${process.env.INTERNAL_API_KEY}</code> \
      } \
    }); \
  } \
}

#### 7.1.4 Provider Factory

A factory pattern to create appropriate integration providers:

// integration-service/src/factories/providerFactory.js \
import { AccountingProvider } from '../providers/accountingProvider'; \
import { BankingProvider } from '../providers/bankingProvider'; \
import { TravelProvider } from '../providers/travelProvider'; \
import { OtherProvider } from '../providers/otherProvider'; \
 \
export class ProviderFactory { \
  static createProvider(type, config) { \
    switch (type) { \
      case 'accounting': \
        return this.createAccountingProvider(config); \
      case 'banking': \
        return new BankingProvider(config); \
      case 'travel': \
        return new TravelProvider(config); \
      default: \
        return new OtherProvider(config); \
    } \
  } \
   \
  static createAccountingProvider(config) { \
    switch (config.provider) { \
      case 'quickbooks': \
        return new QuickbooksProvider(config); \
      case 'xero': \
        return new XeroProvider(config); \
      case 'sage': \
        return new SageProvider(config); \
      // Add more specific providers as needed \
      default: \
        return new AccountingProvider(config); // Generic \
    } \
  } \
}

### 7.2 CSV Import/Export

For simpler integrations, CSV import/export functionality:

// integration-service/src/services/csvService.js \
import fs from 'fs'; \
import csv from 'csv-parser'; \
import { createObjectCsvWriter } from 'csv-writer'; \
import { createLogger } from '../utils/logger'; \
 \
const logger = createLogger('csvService'); \
 \
export class CsvService { \
  async importExpenses(filePath, companyId, userId) { \
    return new Promise((resolve, reject) => { \
      const results = []; \
      const errors = []; \
       \
      fs.createReadStream(filePath) \
        .pipe(csv()) \
        .on('data', (data) => { \
          try { \
            // Validate row data \
            if (!this.validateExpenseRow(data)) { \
              errors.push({ \
                row: results.length + errors.length + 1, \
                message: 'Invalid row data', \
                data \
              }); \
              return; \
            } \
             \
            // Transform to expense format \
            const expense = this.transformToCsvExpense(data, companyId, userId); \
            results.push(expense); \
          } catch (error) { \
            errors.push({ \
              row: results.length + errors.length + 1, \
              message: error.message, \
              data \
            }); \
          } \
        }) \
        .on('end', async () => { \
          if (results.length === 0) { \
            return reject(new Error('No valid expense records found in CSV')); \
          } \
           \
          try { \
            // Import valid expenses \
            const response = await fetch(<code>${process.env.EXPENSE_SERVICE_URL}/api/expenses/batch</code>, { \
              method: 'POST', \
              headers: { \
                'Content-Type': 'application/json', \
                'Authorization': <code>Bearer ${process.env.INTERNAL_API_KEY}</code> \
              }, \
              body: JSON.stringify({ \
                expenses: results, \
                importSource: 'csv' \
              }) \
            }); \
             \
            const importResult = await response.json(); \
             \
            resolve({ \
              success: true, \
              total: results.length + errors.length, \
              imported: importResult.imported, \
              failed: importResult.failed + errors.length, \
              errors: [ \
                ...errors, \
                ...importResult.errors \
              ] \
            }); \
          } catch (error) { \
            logger.error('Error importing expenses from CSV:', error); \
            reject(new Error(<code>Failed to import expenses: ${error.message}</code>)); \
          } \
        }) \
        .on('error', (error) => { \
          logger.error('Error parsing CSV file:', error); \
          reject(new Error(<code>Failed to parse CSV file: ${error.message}</code>)); \
        }); \
    }); \
  } \
   \
  validateExpenseRow(row) { \
    // Basic validation \
    if (!row.description || !row.amount || !row.date) { \
      return false; \
    } \
     \
    // Validate amount is a number \
    if (isNaN(parseFloat(row.amount))) { \
      return false; \
    } \
     \
    // Validate date \
    try { \
      const date = new Date(row.date); \
      if (isNaN(date.getTime())) { \
        return false; \
      } \
    } catch (e) { \
      return false; \
    } \
     \
    return true; \
  } \
   \
  transformToCsvExpense(row, companyId, userId) { \
    return { \
      companyId, \
      userId, \
      description: row.description, \
      amount: Math.round(parseFloat(row.amount) * 100), // Convert to cents \
      currency: row.currency || 'USD', \
      category: row.category || 'Uncategorized', \
      date: new Date(row.date).toISOString().split('T')[0], \
      paymentMethod: row.paymentMethod || 'other', \
      merchantName: row.merchant || row.vendor || null, \
      notes: row.notes || null, \
      status: 'draft', \
      importSource: 'csv' \
    }; \
  } \
   \
  async exportExpenses(expenses, options = {}) { \
    try { \
      const { format = 'standard' } = options; \
       \
      // Define CSV structure based on format \
      const header = this.getExportHeader(format); \
       \
      // Create temp file \
      const tempFile = <code>/tmp/export_${Date.now()}.csv</code>; \
       \
      // Create CSV writer \
      const csvWriter = createObjectCsvWriter({ \
        path: tempFile, \
        header \
      }); \
       \
      // Transform expenses to CSV format \
      const records = expenses.map(expense => this.transformToExportFormat(expense, format)); \
       \
      // Write CSV file \
      await csvWriter.writeRecords(records); \
       \
      return { \
        success: true, \
        filePath: tempFile, \
        count: records.length \
      }; \
    } catch (error) { \
      logger.error('Error exporting expenses to CSV:', error); \
      throw new Error(<code>Failed to export expenses: ${error.message}</code>); \
    } \
  } \
   \
  getExportHeader(format) { \
    switch (format) { \
      case 'accounting': \
        return [ \
          { id: 'date', title: 'Date' }, \
          { id: 'description', title: 'Description' }, \
          { id: 'category', title: 'Category' }, \
          { id: 'amount', title: 'Amount' }, \
          { id: 'currency', title: 'Currency' }, \
          { id: 'tax', title: 'Tax' }, \
          { id: 'vendor', title: 'Vendor' }, \
          { id: 'employee', title: 'Employee' }, \
          { id: 'receiptRef', title: 'Receipt Reference' } \
        ]; \
      case 'detailed': \
        return [ \
          { id: 'id', title: 'ID' }, \
          { id: 'date', title: 'Date' }, \
          { id: 'description', title: 'Description' }, \
          { id: 'category', title: 'Category' }, \
          { id: 'amount', title: 'Amount' }, \
          { id: 'currency', title: 'Currency' }, \
          { id: 'paymentMethod', title: 'Payment Method' }, \
          { id: 'vendor', title: 'Vendor' }, \
          { id: 'employee', title: 'Employee' }, \
          { id: 'employeeEmail', title: 'Employee Email' }, \
          { id: 'status', title: 'Status' }, \
          { id: 'approver', title: 'Approver' }, \
          { id: 'approvalDate', title: 'Approval Date' }, \
          { id: 'tax', title: 'Tax' }, \
          { id: 'notes', title: 'Notes' }, \
          { id: 'receiptUrl', title: 'Receipt URL' }, \
          { id: 'createdAt', title: 'Created At' }, \
          { id: 'updatedAt', title: 'Updated At' } \
        ]; \
      default: // standard \
        return [ \
          { id: 'date', title: 'Date' }, \
          { id: 'description', title: 'Description' }, \
          { id: 'category', title: 'Category' }, \
          { id: 'amount', title: 'Amount' }, \
          { id: 'currency', title: 'Currency' }, \
          { id: 'employee', title: 'Employee' }, \
          { id: 'status', title: 'Status' } \
        ]; \
    } \
  } \
   \
  transformToExportFormat(expense, format) { \
    // Base transformation \
    const base = { \
      date: expense.date, \
      description: expense.description, \
      category: expense.category, \
      amount: (expense.amount / 100).toFixed(2), // Convert from cents \
      currency: expense.currency, \
      employee: <code>${expense.user.firstName} ${expense.user.lastName}</code>, \
      status: expense.status \
    }; \
     \
    // Format-specific transformations \
    switch (format) { \
      case 'accounting': \
        return { \
          ...base, \
          tax: expense.taxAmount ? (expense.taxAmount / 100).toFixed(2) : '0.00', \
          vendor: expense.receiptData?.merchantName || '', \
          receiptRef: expense.id \
        }; \
      case 'detailed': \
        return { \
          id: expense.id, \
          ...base, \
          paymentMethod: expense.paymentMethod, \
          vendor: expense.receiptData?.merchantName || '', \
          employeeEmail: expense.user.email, \
          approver: expense.approvals[0]?.user?.firstName  \
            ? <code>${expense.approvals[0].user.firstName} ${expense.approvals[0].user.lastName}</code> \
            : '', \
          approvalDate: expense.approvals[0]?.timestamp || '', \
          tax: expense.taxAmount ? (expense.taxAmount / 100).toFixed(2) : '0.00', \
          notes: expense.notes, \
          receiptUrl: expense.receiptUrls[0] || '', \
          createdAt: expense.createdAt, \
          updatedAt: expense.updatedAt \
        }; \
      default: // standard \
        return base; \
    } \
  } \
}

## 8. Deployment Architecture

### 8.1 Containerization Strategy

The system will be containerized using Docker:

Base Node.js image for all services
### 8.2 Kubernetes Deployment

The system will be deployed on Kubernetes:

expense-service-deployment.yaml
### 8.3 CI/CD Pipeline

The CI/CD pipeline will be implemented using GitHub Actions:

.github/workflows/expense-service.yml
### 8.4 Infrastructure as Code

The infrastructure will be defined using Terraform:

infrastructure/terraform/modules/eks/main.tf
## 9. Performance and Scalability

### 9.1 Performance Requirements

The system must meet the following performance requirements:

1. **Response Times**:

- API requests: < 300ms for 95% of requests

- Page load time: < 2 seconds for 95% of page loads

- Receipt OCR processing: < 5 seconds for 90% of receipts

- **Throughput**:

- Support at least 100 API requests per second

- Handle 1,000 concurrent users

- Process 10,000 expense submissions per day

- **Availability**:

- 99.9% uptime (less than 8.76 hours of downtime per year)

- No single point of failure

### 9.2 Performance Optimization Strategies

#### 9.2.1 Database Optimization

// Database indexing strategies in expense-service/src/models/Expense.js \
import { Model, DataTypes } from 'sequelize'; \
import sequelize from '../config/database'; \
 \
class Expense extends Model {} \
 \
Expense.init({ \
  id: { \
    type: DataTypes.UUID, \
    defaultValue: DataTypes.UUIDV4, \
    primaryKey: true \
  }, \
  companyId: { \
    type: DataTypes.UUID, \
    allowNull: false, \
    references: { \
      model: 'companies', \
      key: 'id' \
    } \
  }, \
  userId: { \
    type: DataTypes.UUID, \
    allowNull: false, \
    references: { \
      model: 'users', \
      key: 'id' \
    } \
  }, \
  description: { \
    type: DataTypes.TEXT, \
    allowNull: false \
  }, \
  amount: { \
    type: DataTypes.BIGINT, \
    allowNull: false \
  }, \
  currency: { \
    type: DataTypes.STRING(3), \
    allowNull: false \
  }, \
  category: { \
    type: DataTypes.STRING(100), \
    allowNull: false \
  }, \
  date: { \
    type: DataTypes.DATEONLY, \
    allowNull: false \
  }, \
  status: { \
    type: DataTypes.STRING(20), \
    allowNull: false, \
    defaultValue: 'draft' \
  }, \
  // ... other fields \
}, { \
  sequelize, \
  modelName: 'expense', \
  tableName: 'expenses', \
  indexes: [ \
    // Primary access patterns \
    { \
      name: 'idx_expenses_company_id_user_id_status', \
      fields: ['companyId', 'userId', 'status'] \
    }, \
    { \
      name: 'idx_expenses_company_id_date_status', \
      fields: ['companyId', 'date', 'status'] \
    }, \
    { \
      name: 'idx_expenses_user_id_date', \
      fields: ['userId', 'date'] \
    }, \
    { \
      name: 'idx_expenses_company_id_category', \
      fields: ['companyId', 'category'] \
    }, \
    // For reporting \
    { \
      name: 'idx_expenses_company_id_created_at', \
      fields: ['companyId', 'createdAt'] \
    } \
  ] \
}); \
 \
export default Expense;

#### 9.2.2 Caching Strategy

// middleware/cache.js \
import Redis from 'ioredis'; \
import { createLogger } from '../utils/logger'; \
 \
const logger = createLogger('cache'); \
const redis = new Redis(process.env.REDIS_URL); \
 \
// Generic cache middleware with configurable TTL \
export const cacheMiddleware = (ttlSeconds = 60) => { \
  return async (req, res, next) => { \
    // Skip caching for non-GET requests \
    if (req.method !== 'GET') { \
      return next(); \
    } \
     \
    // Generate cache key based on URL and query params \
    const cacheKey = <code>cache:${req.originalUrl}</code>; \
     \
    try { \
      // Try to get from cache \
      const cachedResponse = await redis.get(cacheKey); \
       \
      if (cachedResponse) { \
        const { statusCode, body, headers } = JSON.parse(cachedResponse); \
         \
        // Set headers from cached response \
        Object.entries(headers || {}).forEach(([key, value]) => { \
          res.setHeader(key, value); \
        }); \
         \
        // Add cache header \
        res.setHeader('X-Cache', 'HIT'); \
         \
        // Send cached response \
        return res.status(statusCode).send(body); \
      } \
       \
      // Add cache header \
      res.setHeader('X-Cache', 'MISS'); \
       \
      // Store original send method \
      const originalSend = res.send; \
       \
      // Override send method to cache response \
      res.send = function(body) { \
        if (res.statusCode >= 200 && res.statusCode < 300) { \
          // Only cache successful responses \
          const cacheObject = { \
            statusCode: res.statusCode, \
            body, \
            headers: { \
              'Content-Type': res.getHeader('Content-Type') \
            } \
          }; \
           \
          // Store in cache with TTL \
          redis.set(cacheKey, JSON.stringify(cacheObject), 'EX', ttlSeconds) \
            .catch(err => logger.error('Error setting cache:', err)); \
        } \
         \
        // Call original send method \
        return originalSend.call(this, body); \
      }; \
       \
      next(); \
    } catch (error) { \
      logger.error('Cache middleware error:', error); \
      next(); \
    } \
  }; \
}; \
 \
// Invalidate cache by pattern \
export const invalidateCache = async (pattern) => { \
  try { \
    const keys = await redis.keys(<code>cache:${pattern}</code>); \
     \
    if (keys.length > 0) { \
      await redis.del(...keys); \
      logger.info(<code>Invalidated ${keys.length} cache entries matching pattern: ${pattern}</code>); \
    } \
     \
    return keys.length; \
  } catch (error) { \
    logger.error('Error invalidating cache:', error); \
    throw error; \
  } \
};

#### 9.2.3 API Optimization

// controllers/expenseController.js (optimized version) \
import { Expense } from '../models/Expense'; \
import { User } from '../models/User'; \
import { createLogger } from '../utils/logger'; \
import { AppError } from '../utils/appError'; \
import { invalidateCache } from '../middlewares/cache'; \
import { paginationHelper } from '../utils/paginationHelper'; \
 \
const logger = createLogger('expenseController'); \
 \
// Optimized list expenses with pagination, filtering and field selection \
export const listExpenses = async (req, res, next) => { \
  try { \
    const {  \
      page = 1,  \
      limit = 20,  \
      status,  \
      category,  \
      startDate,  \
      endDate, \
      sortBy = 'createdAt', \
      sortOrder = 'desc', \
      fields \
    } = req.query; \
     \
    // Base query \
    const query = { \
      where: { \
        companyId: req.user.companyId \
      }, \
      order: [[sortBy, sortOrder.toUpperCase()]], \
      ...paginationHelper(page, limit) \
    }; \
     \
    // Add filters if provided \
    if (status) { \
      query.where.status = status; \
    } \
     \
    if (category) { \
      query.where.category = category; \
    } \
     \
    if (startDate || endDate) { \
      query.where.date = {}; \
       \
      if (startDate) { \
        query.where.date.$gte = new Date(startDate); \
      } \
       \
      if (endDate) { \
        query.where.date.$lte = new Date(endDate); \
      } \
    } \
     \
    // Field selection \
    if (fields) { \
      const attributes = fields.split(','); \
      query.attributes = ['id', ...attributes]; // Always include ID \
    } \
     \
    // Include user information (optimized to select only needed fields) \
    query.include = [{ \
      model: User, \
      as: 'user', \
      attributes: ['id', 'firstName', 'lastName', 'email'] \
    }]; \
     \
    // Execute query \
    const { rows, count } = await Expense.findAndCountAll(query); \
     \
    // Return paginated results \
    res.status(200).json({ \
      data: rows, \
      pagination: { \
        total: count, \
        page: parseInt(page), \
        limit: parseInt(limit), \
        totalPages: Math.ceil(count / limit) \
      } \
    }); \
  } catch (error) { \
    next(error); \
  } \
}; \
 \
// Optimized create expense with cache invalidation \
export const createExpense = async (req, res, next) => { \
  try { \
    const { \
      description, \
      amount, \
      currency, \
      category, \
      date, \
      paymentMethod, \
      receiptUrls, \
      notes \
    } = req.body; \
     \
    // Validate input \
    if (!description || !amount || !currency || !category || !date) { \
      throw new AppError('Missing required fields', 400); \
    } \
     \
    // Create expense \
    const expense = await Expense.create({ \
      description, \
      amount, \
      currency, \
      category, \
      date, \
      paymentMethod: paymentMethod || 'cash', \
      receiptUrls: receiptUrls || [], \
      notes: notes || '', \
      userId: req.user.id, \
      companyId: req.user.companyId, \
      status: 'draft' \
    }); \
     \
    // Fetch created expense with user info \
    const createdExpense = await Expense.findByPk(expense.id, { \
      include: [{ \
        model: User, \
        as: 'user', \
        attributes: ['id', 'firstName', 'lastName', 'email'] \
      }] \
    }); \
     \
    // Invalidate relevant caches \
    await invalidateCache(<code>/api/expenses?userId=${req.user.id}</code>); \
    await invalidateCache(<code>/api/expenses?companyId=${req.user.companyId}</code>); \
     \
    res.status(201).json(createdExpense); \
  } catch (error) { \
    next(error); \
  } \
};

### 9.3 Scalability Architecture

The system will implement horizontal scalability:

kubernetes/hpa.yaml
## 10. Support Service Architecture

### 10.1 Help Center Service

The Help Center will provide documentation and tutorials:

// help-center-service/src/models/Article.js \
import { Model, DataTypes } from 'sequelize'; \
import sequelize from '../config/database'; \
 \
class Article extends Model {} \
 \
Article.init({ \
  id: { \
    type: DataTypes.UUID, \
    defaultValue: DataTypes.UUIDV4, \
    primaryKey: true \
  }, \
  title: { \
    type: DataTypes.STRING(255), \
    allowNull: false \
  }, \
  slug: { \
    type: DataTypes.STRING(255), \
    allowNull: false, \
    unique: true \
  }, \
  content: { \
    type: DataTypes.TEXT, \
    allowNull: false \
  }, \
  excerpt: { \
    type: DataTypes.TEXT \
  }, \
  category: { \
    type: DataTypes.STRING(100), \
    allowNull: false \
  }, \
  tags: { \
    type: DataTypes.ARRAY(DataTypes.STRING), \
    defaultValue: [] \
  }, \
  language: { \
    type: DataTypes.STRING(10), \
    allowNull: false, \
    defaultValue: 'en' \
  }, \
  status: { \
    type: DataTypes.STRING(20), \
    allowNull: false, \
    defaultValue: 'published' \
  }, \
  featuredImage: { \
    type: DataTypes.STRING(255) \
  }, \
  views: { \
    type: DataTypes.INTEGER, \
    defaultValue: 0 \
  }, \
  authorId: { \
    type: DataTypes.UUID \
  }, \
  relatedArticles: { \
    type: DataTypes.ARRAY(DataTypes.UUID), \
    defaultValue: [] \
  }, \
  createdAt: { \
    type: DataTypes.DATE, \
    allowNull: false \
  }, \
  updatedAt: { \
    type: DataTypes.DATE, \
    allowNull: false \
  } \
}, { \
  sequelize, \
  modelName: 'article', \
  tableName: 'articles', \
  indexes: [ \
    { \
      name: 'idx_articles_language_category', \
      fields: ['language', 'category'] \
    }, \
    { \
      name: 'idx_articles_slug', \
      fields: ['slug'], \
      unique: true \
    }, \
    { \
      name: 'idx_articles_status', \
      fields: ['status'] \
    } \
  ] \
}); \
 \
export default Article;

### 10.2 Support Ticket Service

The Support Ticket Service will manage customer support requests:

// support-service/src/models/Ticket.js \
import { Model, DataTypes } from 'sequelize'; \
import sequelize from '../config/database'; \
 \
class Ticket extends Model {} \
 \
Ticket.init({ \
  id: { \
    type: DataTypes.UUID, \
    defaultValue: DataTypes.UUIDV4, \
    primaryKey: true \
  }, \
  companyId: { \
    type: DataTypes.UUID, \
    allowNull: false \
  }, \
  userId: { \
    type: DataTypes.UUID, \
    allowNull: false \
  }, \
  subject: { \
    type: DataTypes.STRING(255), \
    allowNull: false \
  }, \
  description: { \
    type: DataTypes.TEXT, \
    allowNull: false \
  }, \
  status: { \
    type: DataTypes.ENUM('open', 'in_progress', 'waiting_for_customer', 'resolved', 'closed'), \
    defaultValue: 'open' \
  }, \
  priority: { \
    type: DataTypes.ENUM('low', 'medium', 'high', 'urgent'), \
    defaultValue: 'medium' \
  }, \
  category: { \
    type: DataTypes.STRING(100) \
  }, \
  assignedTo: { \
    type: DataTypes.UUID \
  }, \
  internalNotes: { \
    type: DataTypes.TEXT \
  }, \
  tags: { \
    type: DataTypes.ARRAY(DataTypes.STRING), \
    defaultValue: [] \
  }, \
  language: { \
    type: DataTypes.STRING(10), \
    allowNull: false, \
    defaultValue: 'en' \
  }, \
  firstResponseAt: { \
    type: DataTypes.DATE \
  }, \
  resolvedAt: { \
    type: DataTypes.DATE \
  }, \
  closedAt: { \
    type: DataTypes.DATE \
  }, \
  lastUpdatedByCustomer: { \
    type: DataTypes.BOOLEAN, \
    defaultValue: true \
  }, \
  source: { \
    type: DataTypes.ENUM('email', 'chat', 'web', 'phone', 'in_app'), \
    allowNull: false \
  }, \
  attachments: { \
    type: DataTypes.ARRAY(DataTypes.STRING), \
    defaultValue: [] \
  }, \
  createdAt: { \
    type: DataTypes.DATE, \
    allowNull: false \
  }, \
  updatedAt: { \
    type: DataTypes.DATE, \
    allowNull: false \
  } \
}, { \
  sequelize, \
  modelName: 'ticket', \
  tableName: 'tickets', \
  indexes: [ \
    { \
      name: 'idx_tickets_company_id_status', \
      fields: ['companyId', 'status'] \
    }, \
    { \
      name: 'idx_tickets_user_id', \
      fields: ['userId'] \
    }, \
    { \
      name: 'idx_tickets_assigned_to', \
      fields: ['assignedTo'] \
    }, \
    { \
      name: 'idx_tickets_priority_status', \
      fields: ['priority', 'status'] \
    } \
  ] \
}); \
 \
// Ticket messages \
class TicketMessage extends Model {} \
 \
TicketMessage.init({ \
  id: { \
    type: DataTypes.UUID, \
    defaultValue: DataTypes.UUIDV4, \
    primaryKey: true \
  }, \
  ticketId: { \
    type: DataTypes.UUID, \
    allowNull: false, \
    references: { \
      model: 'tickets', \
      key: 'id' \
    } \
  }, \
  senderId: { \
    type: DataTypes.UUID, \
    allowNull: false \
  }, \
  senderType: { \
    type: DataTypes.ENUM('customer', 'support', 'system'), \
    allowNull: false \
  }, \
  message: { \
    type: DataTypes.TEXT, \
    allowNull: false \
  }, \
  attachments: { \
    type: DataTypes.ARRAY(DataTypes.STRING), \
    defaultValue: [] \
  }, \
  isInternal: { \
    type: DataTypes.BOOLEAN, \
    defaultValue: false \
  }, \
  createdAt: { \
    type: DataTypes.DATE, \
    allowNull: false \
  } \
}, { \
  sequelize, \
  modelName: 'ticketMessage', \
  tableName: 'ticket_messages', \
  timestamps: false, \
  indexes: [ \
    { \
      name: 'idx_ticket_messages_ticket_id', \
      fields: ['ticketId'] \
    } \
  ] \
}); \
 \
// Establish relationships \
Ticket.hasMany(TicketMessage, { foreignKey: 'ticketId', as: 'messages' }); \
TicketMessage.belongsTo(Ticket, { foreignKey: 'ticketId' }); \
 \
export { Ticket, TicketMessage };

### 10.3 Live Chat Service

The Live Chat Service will provide real-time customer support:

// chat-service/src/server.js \
import express from 'express'; \
import http from 'http'; \
import { Server } from 'socket.io'; \
import cors from 'cors'; \
import Redis from 'ioredis'; \
import { createAdapter } from '@socket.io/redis-adapter'; \
import { verifyToken } from './middleware/auth'; \
import { ChatController } from './controllers/chatController'; \
import { createLogger } from './utils/logger'; \
 \
const app = express(); \
const server = http.createServer(app); \
const io = new Server(server, { \
  cors: { \
    origin: process.env.FRONTEND_URL, \
    methods: ['GET', 'POST'], \
    credentials: true \
  } \
}); \
 \
const logger = createLogger('chat-service'); \
 \
// Redis for socket.io adapter (enables horizontal scaling) \
const pubClient = new Redis(process.env.REDIS_URL); \
const subClient = pubClient.duplicate(); \
io.adapter(createAdapter(pubClient, subClient)); \
 \
// Middleware \
app.use(cors()); \
app.use(express.json()); \
 \
// API routes \
app.get('/health', (req, res) => { \
  res.status(200).json({ status: 'ok' }); \
}); \
 \
app.use('/api/chat', verifyToken, require('./routes/chat')); \
 \
// Socket.io middleware \
io.use(async (socket, next) => { \
  try { \
    const token = socket.handshake.auth.token; \
     \
    if (!token) { \
      return next(new Error('Authentication error')); \
    } \
     \
    // Verify JWT token \
    const decoded = await verifyToken(token); \
     \
    socket.user = { \
      id: decoded.sub, \
      role: decoded.role, \
      companyId: decoded.companyId \
    }; \
     \
    next(); \
  } catch (error) { \
    logger.error('Socket authentication error:', error); \
    next(new Error('Authentication error')); \
  } \
}); \
 \
// Socket.io connection \
io.on('connection', (socket) => { \
  logger.info(<code>User connected: ${socket.user.id}</code>); \
   \
  // Join user's personal room \
  socket.join(<code>user:${socket.user.id}</code>); \
   \
  // Join company room if user is support staff \
  if (socket.user.role === 'support') { \
    socket.join(<code>company:${socket.user.companyId}:support</code>); \
  } else { \
    // Regular users join their company's room \
    socket.join(<code>company:${socket.user.companyId}</code>); \
  } \
   \
  // Handle chat initialization \
  socket.on('chat:init', async (data, callback) => { \
    try { \
      const chatController = new ChatController(); \
      const result = await chatController.initializeChat(socket.user, data); \
       \
      // Join chat room \
      socket.join(<code>chat:${result.chatId}</code>); \
       \
      callback({ success: true, chatId: result.chatId }); \
       \
      // Notify support staff of new chat if appropriate \
      if (result.isNew && socket.user.role !== 'support') { \
        io.to(<code>company:${socket.user.companyId}:support</code>).emit('chat:new', { \
          chatId: result.chatId, \
          user: { \
            id: socket.user.id, \
            name: data.userName \
          }, \
          message: data.initialMessage \
        }); \
      } \
    } catch (error) { \
      logger.error('Error initializing chat:', error); \
      callback({ success: false, error: error.message }); \
    } \
  }); \
   \
  // Handle chat messages \
  socket.on('chat:message', async (data, callback) => { \
    try { \
      const { chatId, message, attachments } = data; \
       \
      // Validate user belongs to this chat \
      const chatController = new ChatController(); \
      const canAccessChat = await chatController.validateChatAccess(chatId, socket.user.id); \
       \
      if (!canAccessChat) { \
        return callback({ success: false, error: 'Unauthorized access to chat' }); \
      } \
       \
      // Save message \
      const messageResult = await chatController.saveMessage({ \
        chatId, \
        senderId: socket.user.id, \
        senderType: socket.user.role === 'support' ? 'support' : 'customer', \
        message, \
        attachments: attachments || [] \
      }); \
       \
      // Broadcast message to chat room \
      io.to(<code>chat:${chatId}</code>).emit('chat:message', { \
        id: messageResult.id, \
        chatId, \
        senderId: socket.user.id, \
        senderType: messageResult.senderType, \
        message, \
        attachments: messageResult.attachments, \
        createdAt: messageResult.createdAt \
      }); \
       \
      callback({ success: true, messageId: messageResult.id }); \
    } catch (error) { \
      logger.error('Error sending message:', error); \
      callback({ success: false, error: error.message }); \
    } \
  }); \
   \
  // Handle chat typing indicator \
  socket.on('chat:typing', (data) => { \
    const { chatId, isTyping } = data; \
     \
    // Broadcast typing status to others in chat \
    socket.to(<code>chat:${chatId}</code>).emit('chat:typing', { \
      chatId, \
      userId: socket.user.id, \
      isTyping \
    }); \
  }); \
   \
  // Handle support staff joining/leaving chats \
  socket.on('chat:join', async (data, callback) => { \
    try { \
      const { chatId } = data; \
       \
      // Only support staff can explicitly join chats \
      if (socket.user.role !== 'support') { \
        return callback({ success: false, error: 'Unauthorized' }); \
      } \
       \
      // Update chat with support assignment \
      const chatController = new ChatController(); \
      await chatController.assignSupport(chatId, socket.user.id); \
       \
      // Join socket room \
      socket.join(<code>chat:${chatId}</code>); \
       \
      // Notify chat room of support joining \
      io.to(<code>chat:${chatId}</code>).emit('chat:support_joined', { \
        chatId, \
        supportId: socket.user.id \
      }); \
       \
      callback({ success: true }); \
    } catch (error) { \
      logger.error('Error joining chat:', error); \
      callback({ success: false, error: error.message }); \
    } \
  }); \
   \
  // Handle disconnection \
  socket.on('disconnect', () => { \
    logger.info(<code>User disconnected: ${socket.user.id}</code>); \
  }); \
}); \
 \
// Start server \
const PORT = process.env.PORT || 3000; \
server.listen(PORT, () => { \
  logger.info(<code>Chat service running on port ${PORT}</code>); \
});

## 11. Testing Strategy

### 11.1 Unit Testing

Example unit test for expense creation:

// tests/unit/expenseService.test.js \
import { ExpenseService } from '../../src/services/expenseService'; \
import { Expense } from '../../src/models/Expense'; \
import { User } from '../../src/models/User'; \
 \
// Mock the models \
jest.mock('../../src/models/Expense'); \
jest.mock('../../src/models/User'); \
 \
describe('ExpenseService', () => { \
  let expenseService; \
   \
  beforeEach(() => { \
    // Reset mocks \
    jest.clearAllMocks(); \
     \
    // Create instance of service \
    expenseService = new ExpenseService(); \
  }); \
   \
  describe('createExpense', () => { \
    it('should create a new expense with valid data', async () => { \
      // Mock data \
      const expenseData = { \
        description: 'Business lunch', \
        amount: 3500, // $35.00 \
        currency: 'USD', \
        category: 'meals', \
        date: '2025-03-15', \
        paymentMethod: 'company_card', \
        receiptUrls: ['https://example.com/receipt.jpg'], \
        notes: 'Meeting with client' \
      }; \
       \
      const userId = '123e4567-e89b-12d3-a456-426614174000'; \
      const companyId = '123e4567-e89b-12d3-a456-426614174001'; \
       \
      // Mock Expense.create to return a successful result \
      Expense.create.mockResolvedValue({ \
        id: '123e4567-e89b-12d3-a456-426614174002', \
        ...expenseData, \
        userId, \
        companyId, \
        status: 'draft', \
        createdAt: new Date(), \
        updatedAt: new Date() \
      }); \
       \
      // Mock User.findByPk to return user data \
      User.findByPk.mockResolvedValue({ \
        id: userId, \
        firstName: 'John', \
        lastName: 'Doe', \
        email: 'john.doe@example.com' \
      }); \
       \
      // Mock Expense.findByPk to return the created expense \
      Expense.findByPk.mockResolvedValue({ \
        id: '123e4567-e89b-12d3-a456-426614174002', \
        ...expenseData, \
        userId, \
        companyId, \
        status: 'draft', \
        createdAt: new Date(), \
        updatedAt: new Date(), \
        user: { \
          id: userId, \
          firstName: 'John', \
          lastName: 'Doe', \
          email: 'john.doe@example.com' \
        } \
      }); \
       \
      // Call the service method \
      const result = await expenseService.createExpense(expenseData, userId, companyId); \
       \
      // Assertions \
      expect(Expense.create).toHaveBeenCalledWith({ \
        ...expenseData, \
        userId, \
        companyId, \
        status: 'draft' \
      }); \
       \
      expect(Expense.findByPk).toHaveBeenCalledWith('123e4567-e89b-12d3-a456-426614174002', { \
        include: [{ \
          model: User, \
          as: 'user', \
          attributes: ['id', 'firstName', 'lastName', 'email'] \
        }] \
      }); \
       \
      expect(result).toHaveProperty('id', '123e4567-e89b-12d3-a456-426614174002'); \
      expect(result).toHaveProperty('description', expenseData.description); \
      expect(result).toHaveProperty('amount', expenseData.amount); \
      expect(result).toHaveProperty('status', 'draft'); \
      expect(result.user).toHaveProperty('firstName', 'John'); \
    }); \
     \
    it('should throw an error if required fields are missing', async () => { \
      // Mock data with missing fields \
      const invalidExpenseData = { \
        description: 'Business lunch', \
        // Missing amount \
        currency: 'USD', \
        category: 'meals', \
        // Missing date \
      }; \
       \
      const userId = '123e4567-e89b-12d3-a456-426614174000'; \
      const companyId = '123e4567-e89b-12d3-a456-426614174001'; \
       \
      // Expectations \
      await expect( \
        expenseService.createExpense(invalidExpenseData, userId, companyId) \
      ).rejects.toThrow('Missing required fields'); \
    }); \
  }); \
});

### 11.2 Integration Testing

Example integration test for expense API:

// tests/integration/expense.api.test.js \
import request from 'supertest'; \
import app from '../../src/app'; \
import { generateToken } from '../helpers/auth'; \
import { sequelize } from '../../src/config/database'; \
import { Expense } from '../../src/models/Expense'; \
import { User } from '../../src/models/User'; \
 \
describe('Expense API', () => { \
  let authToken; \
  let testUser; \
  let testCompany; \
   \
  beforeAll(async () => { \
    // Create test data \
    await sequelize.sync({ force: true }); // Reset database \
     \
    // Create test company \
    testCompany = await Company.create({ \
      name: 'Test Company', \
      taxId: '12345678', \
      address: { \
        street: '123 Test St', \
        city: 'Test City', \
        country: 'Test Country' \
      }, \
      settings: { \
        defaultCurrency: 'USD', \
        supportedCurrencies: ['USD', 'EUR', 'GBP'] \
      }, \
      status: 'active' \
    }); \
     \
    // Create test user \
    testUser = await User.create({ \
      companyId: testCompany.id, \
      email: 'test@example.com', \
      passwordHash: 'hashed_password_123', \
      firstName: 'Test', \
      lastName: 'User', \
      role: 'admin', \
      status: 'active' \
    }); \
     \
    // Generate auth token \
    authToken = generateToken(testUser); \
  }); \
   \
  afterAll(async () => { \
    await sequelize.close(); \
  }); \
   \
  describe('POST /api/expenses', () => { \
    it('should create a new expense', async () => { \
      const expenseData = { \
        description: 'Test expense', \
        amount: 5000, // $50.00 \
        currency: 'USD', \
        category: 'test', \
        date: '2025-04-01', \
        paymentMethod: 'cash', \
        notes: 'Test notes' \
      }; \
       \
      const response = await request(app) \
      .post('/api/expenses') \
      .set('Authorization', <code>Bearer ${authToken}</code>) \
      .send(expenseData); \
     \
    expect(response.status).toBe(201); \
    expect(response.body).toHaveProperty('id'); \
    expect(response.body).toHaveProperty('description', expenseData.description); \
    expect(response.body).toHaveProperty('amount', expenseData.amount); \
    expect(response.body).toHaveProperty('currency', expenseData.currency); \
    expect(response.body).toHaveProperty('status', 'draft'); \
    expect(response.body).toHaveProperty('userId', testUser.id); \
    expect(response.body).toHaveProperty('companyId', testCompany.id); \
  }); \
   \
  it('should return 400 when required fields are missing', async () => { \
    const invalidExpenseData = { \
      description: 'Test expense', \
      // Missing amount \
      currency: 'USD', \
      // Missing category \
      date: '2025-04-01' \
    }; \
     \
    const response = await request(app) \
      .post('/api/expenses') \
      .set('Authorization', <code>Bearer ${authToken}</code>) \
      .send(invalidExpenseData); \
     \
    expect(response.status).toBe(400); \
    expect(response.body).toHaveProperty('error'); \
    expect(response.body.error).toHaveProperty('message', 'Missing required fields'); \
  }); \
   \
  it('should return 401 without authentication', async () => { \
    const response = await request(app) \
      .post('/api/expenses') \
      .send({ \
        description: 'Test expense', \
        amount: 5000, \
        currency: 'USD', \
        category: 'test', \
        date: '2025-04-01' \
      }); \
     \
    expect(response.status).toBe(401); \
  }); \
}); \
 \
describe('GET /api/expenses', () => { \
  beforeEach(async () => { \
    // Create test expenses \
    await Expense.bulkCreate([ \
      { \
        id: '123e4567-e89b-12d3-a456-426614174010', \
        description: 'Expense 1', \
        amount: 1000, \
        currency: 'USD', \
        category: 'meals', \
        date: '2025-03-01', \
        paymentMethod: 'cash', \
        userId: testUser.id, \
        companyId: testCompany.id, \
        status: 'draft' \
      }, \
      { \
        id: '123e4567-e89b-12d3-a456-426614174011', \
        description: 'Expense 2', \
        amount: 2000, \
        currency: 'USD', \
        category: 'travel', \
        date: '2025-03-02', \
        paymentMethod: 'company_card', \
        userId: testUser.id, \
        companyId: testCompany.id, \
        status: 'submitted' \
      }, \
      { \
        id: '123e4567-e89b-12d3-a456-426614174012', \
        description: 'Expense 3', \
        amount: 3000, \
        currency: 'USD', \
        category: 'meals', \
        date: '2025-03-03', \
        paymentMethod: 'personal_card', \
        userId: testUser.id, \
        companyId: testCompany.id, \
        status: 'approved' \
      } \
    ]); \
  }); \
   \
  it('should return paginated expenses', async () => { \
    const response = await request(app) \
      .get('/api/expenses') \
      .set('Authorization', <code>Bearer ${authToken}</code>) \
      .query({ page: 1, limit: 2 }); \
     \
    expect(response.status).toBe(200); \
    expect(response.body).toHaveProperty('data'); \
    expect(response.body.data).toBeInstanceOf(Array); \
    expect(response.body.data).toHaveLength(2); \
    expect(response.body).toHaveProperty('pagination'); \
    expect(response.body.pagination).toHaveProperty('total', 3); \
    expect(response.body.pagination).toHaveProperty('page', 1); \
    expect(response.body.pagination).toHaveProperty('limit', 2); \
    expect(response.body.pagination).toHaveProperty('totalPages', 2); \
  }); \
   \
  it('should filter expenses by status', async () => { \
    const response = await request(app) \
      .get('/api/expenses') \
      .set('Authorization', <code>Bearer ${authToken}</code>) \
      .query({ status: 'submitted' }); \
     \
    expect(response.status).toBe(200); \
    expect(response.body).toHaveProperty('data'); \
    expect(response.body.data).toHaveLength(1); \
    expect(response.body.data[0]).toHaveProperty('status', 'submitted'); \
  }); \
   \
  it('should filter expenses by date range', async () => { \
    const response = await request(app) \
      .get('/api/expenses') \
      .set('Authorization', <code>Bearer ${authToken}</code>) \
      .query({ startDate: '2025-03-02', endDate: '2025-03-03' }); \
     \
    expect(response.status).toBe(200); \
    expect(response.body).toHaveProperty('data'); \
    expect(response.body.data).toHaveLength(2); \
     \
    const dates = response.body.data.map(expense => expense.date); \
    expect(dates).toContain('2025-03-02'); \
    expect(dates).toContain('2025-03-03'); \
    expect(dates).not.toContain('2025-03-01'); \
  }); \
});

### 11.3 End-to-End Testing

End-to-end tests with Cypress to verify complete user flows:

// cypress/integration/expense_workflow.spec.js \
describe('Expense Workflow', () => { \
  before(() => { \
    // Seed test data using API calls or database fixtures \
    cy.task('db:seed'); \
     \
    // Login as employee \
    cy.login('employee@example.com', 'password123'); \
  }); \
   \
  it('should allow full expense submission and approval workflow', () => { \
    // Navigate to expenses page \
    cy.visit('/expenses'); \
    cy.get('h1').should('contain', 'Expenses'); \
     \
    // Click create expense button \
    cy.contains('button', 'Create Expense').click(); \
    cy.url().should('include', '/expenses/create'); \
     \
    // Fill out expense form \
    cy.get('[data-testid="expense-description"]').type('Business lunch with client'); \
    cy.get('[data-testid="expense-amount"]').type('45.50'); \
    cy.get('[data-testid="expense-currency"]').select('USD'); \
    cy.get('[data-testid="expense-category"]').select('Meals'); \
    cy.get('[data-testid="expense-date"]').type('2025-04-15'); \
    cy.get('[data-testid="expense-payment-method"]').select('Company Card'); \
     \
    // Upload receipt \
    cy.fixture('test_receipt.jpg', 'base64').then(fileContent => { \
      cy.get('[data-testid="expense-receipt-upload"]').upload( \
        { fileContent, fileName: 'test_receipt.jpg', mimeType: 'image/jpeg' } \
      ); \
    }); \
     \
    // Add notes \
    cy.get('[data-testid="expense-notes"]').type('Meeting with Acme Corp to discuss new project'); \
     \
    // Save as draft first \
    cy.contains('button', 'Save as Draft').click(); \
     \
    // Verify success message \
    cy.get('[data-testid="notification"]').should('contain', 'Expense saved as draft'); \
     \
    // Verify user is redirected to expense detail page \
    cy.url().should('match', /\/expenses\/[\w-]+$/); \
     \
    // Submit for approval \
    cy.contains('button', 'Submit for Approval').click(); \
     \
    // Confirm submission dialog \
    cy.get('[data-testid="confirmation-dialog"]') \
      .should('be.visible') \
      .within(() => { \
        cy.contains('button', 'Submit').click(); \
      }); \
     \
    // Verify status changed to submitted \
    cy.get('[data-testid="expense-status"]').should('contain', 'Submitted'); \
     \
    // Logout employee \
    cy.get('[data-testid="user-menu"]').click(); \
    cy.contains('Logout').click(); \
     \
    // Login as manager \
    cy.login('manager@example.com', 'password123'); \
     \
    // Navigate to approvals page \
    cy.visit('/approvals'); \
     \
    // Find the submitted expense \
    cy.contains('Business lunch with client').parent().within(() => { \
      cy.contains('button', 'Review').click(); \
    }); \
     \
    // Review expense details \
    cy.get('[data-testid="expense-description"]').should('contain', 'Business lunch with client'); \
    cy.get('[data-testid="expense-amount"]').should('contain', '$45.50'); \
     \
    // View receipt \
    cy.get('[data-testid="view-receipt"]').click(); \
    cy.get('[data-testid="receipt-modal"]').should('be.visible'); \
    cy.get('[data-testid="receipt-modal"] img').should('be.visible'); \
    cy.get('[data-testid="receipt-modal"] button[aria-label="Close"]').click(); \
     \
    // Add approval note \
    cy.get('[data-testid="approval-note"]').type('Looks good, approved'); \
     \
    // Approve expense \
    cy.contains('button', 'Approve').click(); \
     \
    // Verify expense is approved \
    cy.get('[data-testid="expense-status"]').should('contain', 'Approved'); \
     \
    // Verify approval appears in history \
    cy.get('[data-testid="approval-history"]').within(() => { \
      cy.contains('Approved by Manager'); \
      cy.contains('Looks good, approved'); \
    }); \
     \
    // Navigate back to approvals list \
    cy.visit('/approvals'); \
     \
    // Verify expense no longer appears in pending approvals \
    cy.contains('Business lunch with client').should('not.exist'); \
  }); \
});

### 11.4 Performance Testing

Using k6 for load testing API endpoints:

// tests/performance/expense_api.js \
import http from 'k6/http'; \
import { check, sleep } from 'k6'; \
import { Counter, Rate, Trend } from 'k6/metrics'; \
import { randomString } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js'; \
 \
// Custom metrics \
const expenseCreation = new Trend('expense_creation_time'); \
const expenseListingTime = new Trend('expense_listing_time'); \
const errorRate = new Rate('error_rate'); \
const successfulSubmissions = new Counter('successful_submissions'); \
 \
// Configuration \
export const options = { \
  stages: [ \
    { duration: '1m', target: 10 },  // Ramp up to 10 users \
    { duration: '3m', target: 10 },  // Stay at 10 users for 3 minutes \
    { duration: '1m', target: 50 },  // Ramp up to 50 users \
    { duration: '3m', target: 50 },  // Stay at 50 users for 3 minutes \
    { duration: '1m', target: 0 },   // Ramp down to 0 users \
  ], \
  thresholds: { \
    expense_creation_time: ['p(95)<500'],  // 95% of requests should be below 500ms \
    expense_listing_time: ['p(95)<300'],   // 95% of listing requests should be below 300ms \
    error_rate: ['rate<0.1'],              // Error rate should be below 10% \
    http_req_duration: ['p(95)<1000'],     // 95% of all requests should be below 1000ms \
  }, \
}; \
 \
// Simulated user session \
export default function() { \
  // Login to get token \
  const loginRes = http.post(<code>${__ENV.API_URL}/auth/login</code>, JSON.stringify({ \
    email: <code>perf_user_${__VU}@example.com</code>, \
    password: 'password123' \
  }), { \
    headers: { 'Content-Type': 'application/json' }, \
  }); \
   \
  if (loginRes.status !== 200) { \
    errorRate.add(1); \
    console.log(<code>Login failed: ${loginRes.status} ${loginRes.body}</code>); \
    return; \
  } \
   \
  const authToken = JSON.parse(loginRes.body).accessToken; \
  const headers = { \
    'Authorization': <code>Bearer ${authToken}</code>, \
    'Content-Type': 'application/json', \
  }; \
   \
  // Test expense listing endpoint \
  const listingStart = new Date(); \
  const listingRes = http.get(<code>${__ENV.API_URL}/expenses?limit=20</code>, { headers }); \
  expenseListingTime.add(new Date() - listingStart); \
   \
  check(listingRes, { \
    'Listing status is 200': (r) => r.status === 200, \
    'Listing has data property': (r) => JSON.parse(r.body).hasOwnProperty('data'), \
  }) || errorRate.add(1); \
   \
  // Create a new expense with random data \
  const expenseData = { \
    description: <code>Performance test expense ${randomString(8)}</code>, \
    amount: Math.floor(Math.random() * 10000) + 1000, // Random amount between 10-110 \
    currency: 'USD', \
    category: 'test', \
    date: new Date().toISOString().split('T')[0], // Today's date \
    paymentMethod: 'company_card', \
    notes: <code>Performance test note ${randomString(20)}</code> \
  }; \
   \
  const creationStart = new Date(); \
  const creationRes = http.post( \
    <code>${__ENV.API_URL}/expenses</code>, \
    JSON.stringify(expenseData), \
    { headers } \
  ); \
  expenseCreation.add(new Date() - creationStart); \
   \
  const checkResult = check(creationRes, { \
    'Creation status is 201': (r) => r.status === 201, \
    'Created expense has ID': (r) => JSON.parse(r.body).hasOwnProperty('id'), \
  }); \
   \
  if (checkResult) { \
    successfulSubmissions.add(1); \
  } else { \
    errorRate.add(1); \
    console.log(<code>Expense creation failed: ${creationRes.status} ${creationRes.body}</code>); \
  } \
   \
  // Test retrieving the created expense \
  if (checkResult) { \
    const expenseId = JSON.parse(creationRes.body).id; \
    const getRes = http.get(<code>${__ENV.API_URL}/expenses/${expenseId}</code>, { headers }); \
     \
    check(getRes, { \
      'Get status is 200': (r) => r.status === 200, \
      'Get returns correct expense': (r) => JSON.parse(r.body).id === expenseId, \
    }) || errorRate.add(1); \
  } \
   \
  // Sleep between iterations \
  sleep(Math.random() * 3 + 1); // Random sleep between 1-4 seconds \
}

### 11.5 Security Testing

Security testing approach with OWASP ZAP integration:

.github/workflows/security-scan.yml
Custom SQL injection test:

// tests/security/sql_injection.test.js \
import request from 'supertest'; \
import app from '../../src/app'; \
import { generateToken } from '../helpers/auth'; \
import { sequelize } from '../../src/config/database'; \
import { User } from '../../src/models/User'; \
 \
describe('SQL Injection Protection', () => { \
  let authToken; \
   \
  beforeAll(async () => { \
    // Create test user \
    const testUser = await User.create({ \
      email: 'security@example.com', \
      passwordHash: 'hashed_password_123', \
      firstName: 'Security', \
      lastName: 'Test', \
      role: 'admin', \
      status: 'active' \
    }); \
     \
    // Generate auth token \
    authToken = generateToken(testUser); \
  }); \
   \
  afterAll(async () => { \
    await sequelize.close(); \
  }); \
   \
  describe('Expense API SQL Injection Protection', () => { \
    const sqlInjectionPayloads = [ \
      "' OR '1'='1", \
      "'; DROP TABLE users; --", \
      "' UNION SELECT * FROM users --", \
      "') OR ('a'='a", \
      "123 OR 1=1" \
    ]; \
     \
    it('should protect expense listing from SQL injection in query parameters', async () => { \
      for (const payload of sqlInjectionPayloads) { \
        const response = await request(app) \
          .get(<code>/api/expenses?category=${payload}</code>) \
          .set('Authorization', <code>Bearer ${authToken}</code>); \
         \
        // Should not cause server error \
        expect(response.status).not.toBe(500); \
        // Should either be 200 with empty results or 400 for invalid input \
        expect([200, 400]).toContain(response.status); \
         \
        if (response.status === 200) { \
          // Should not expose sensitive data \
          expect(response.body.data).toEqual([]); \
        } \
      } \
    }); \
     \
    it('should protect expense creation from SQL injection in request body', async () => { \
      for (const payload of sqlInjectionPayloads) { \
        const response = await request(app) \
          .post('/api/expenses') \
          .set('Authorization', <code>Bearer ${authToken}</code>) \
          .send({ \
            description: payload, \
            amount: 1000, \
            currency: 'USD', \
            category: 'test', \
            date: '2025-04-01' \
          }); \
         \
        // Should not cause server error \
        expect(response.status).not.toBe(500); \
         \
        // Should either create expense (treating payload as normal string) or reject with 400 \
        expect([201, 400]).toContain(response.status); \
         \
        if (response.status === 201) { \
          // Should store payload as literal string, not execute it \
          expect(response.body.description).toBe(payload); \
        } \
      } \
    }); \
  }); \
});

### 11.6 Accessibility Testing

Automated accessibility tests with Axe:

// cypress/integration/accessibility.spec.js \
describe('Accessibility Tests', () => { \
  beforeEach(() => { \
    cy.login('employee@example.com', 'password123'); \
    cy.injectAxe(); \
  }); \
   \
  it('Dashboard should be accessible', () => { \
    cy.visit('/dashboard'); \
    cy.wait(1000); // Wait for page to fully load \
    cy.checkA11y(); \
  }); \
   \
  it('Expense list should be accessible', () => { \
    cy.visit('/expenses'); \
    cy.wait(1000); \
    cy.checkA11y(); \
  }); \
   \
  it('Expense creation form should be accessible', () => { \
    cy.visit('/expenses/create'); \
    cy.wait(1000); \
    cy.checkA11y({ \
      rules: { \
        // Override specific rules if needed \
        'color-contrast': { enabled: true }, \
        'label': { enabled: true }, \
        'form-field-multiple-labels': { enabled: false } \
      } \
    }); \
  }); \
   \
  it('Expense approval workflow should be accessible', () => { \
    cy.visit('/approvals'); \
    cy.wait(1000); \
    cy.checkA11y(); \
     \
    // Test the approval modal if it exists \
    cy.get('table tbody tr').first().find('button').contains('Review').click(); \
    cy.wait(500); \
    cy.checkA11y({ \
      include: ['.modal', '.modal-content'] \
    }); \
  }); \
   \
  it('Settings page should be accessible', () => { \
    cy.visit('/settings'); \
    cy.wait(1000); \
    cy.checkA11y(); \
     \
    // Test each tab in settings \
    cy.get('button').contains('Company Settings').click(); \
    cy.wait(500); \
    cy.checkA11y(); \
     \
    cy.get('button').contains('User Profile').click(); \
    cy.wait(500); \
    cy.checkA11y(); \
  }); \
});

## 12. Monitoring and Logging Architecture

### 12.1 Logging Strategy

Standardized logging middleware for all services:

// utils/logger.js \
import winston from 'winston'; \
import Transport from 'winston-transport'; \
import { ElasticsearchTransport } from 'winston-elasticsearch'; \
 \
// Define log levels \
const levels = { \
  error: 0, \
  warn: 1, \
  info: 2, \
  http: 3, \
  debug: 4, \
}; \
 \
// Define colors for each level \
const colors = { \
  error: 'red', \
  warn: 'yellow', \
  info: 'green', \
  http: 'magenta', \
  debug: 'blue', \
}; \
 \
// Tell winston that we want to link the colors \
winston.addColors(colors); \
 \
// Elasticsearch transport configuration \
const elasticsearchTransport = new ElasticsearchTransport({ \
  level: 'info', \
  clientOpts: { \
    node: process.env.ELASTICSEARCH_URL || 'http://elasticsearch:9200', \
    auth: { \
      username: process.env.ELASTICSEARCH_USERNAME, \
      password: process.env.ELASTICSEARCH_PASSWORD, \
    }, \
  }, \
  indexPrefix: 'expense-management', \
  indexSuffixPattern: 'YYYY.MM.DD', \
  messageType: 'logs', \
}); \
 \
// Custom transport for structured JSON logs to stdout \
class JsonConsoleTransport extends Transport { \
  constructor(opts) { \
    super(opts); \
    this.name = 'JsonConsoleTransport'; \
  } \
   \
  log(info, callback) { \
    const output = { \
      timestamp: new Date().toISOString(), \
      level: info.level, \
      message: info.message, \
      service: process.env.SERVICE_NAME || 'unknown', \
      ...(info.meta || {}) \
    }; \
     \
    console.log(JSON.stringify(output)); \
    callback(); \
  } \
} \
 \
// Define the logger configuration \
const createLogger = (source) => { \
  return winston.createLogger({ \
    level: process.env.LOG_LEVEL || 'info', \
    levels, \
    format: winston.format.combine( \
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }), \
      winston.format.metadata({ fillExcept: ['timestamp', 'service', 'level', 'message'] }) \
    ), \
    defaultMeta: { \
      service: process.env.SERVICE_NAME || 'expense-management', \
      source \
    }, \
    transports: [ \
      new JsonConsoleTransport(), \
      process.env.NODE_ENV === 'production' ? elasticsearchTransport : null \
    ].filter(Boolean), \
  }); \
}; \
 \
// Request logging middleware \
const requestLogger = (req, res, next) => { \
  const start = Date.now(); \
   \
  // Once the request is finished \
  res.on('finish', () => { \
    const duration = Date.now() - start; \
    const logger = createLogger('http'); \
     \
    const logData = { \
      method: req.method, \
      url: req.originalUrl || req.url, \
      status: res.statusCode, \
      duration, \
      ip: req.ip || req._remoteAddress, \
      userAgent: req.get('user-agent') || '', \
      contentLength: res.get('content-length') || 0, \
      userId: req.user?.id || 'anonymous', \
      requestId: req.id \
    }; \
     \
    const logLevel = res.statusCode >= 500 ? 'error' \
      : res.statusCode >= 400 ? 'warn' \
      : 'http'; \
     \
    logger.log({ \
      level: logLevel, \
      message: <code>${req.method} ${req.originalUrl || req.url} ${res.statusCode} ${duration}ms</code>, \
      meta: logData \
    }); \
  }); \
   \
  next(); \
}; \
 \
export { createLogger, requestLogger, levels };

### 12.2 Application Monitoring

Prometheus and Grafana integration:

// utils/metrics.js \
import express from 'express'; \
import prometheus from 'prom-client'; \
import { createLogger } from './logger'; \
 \
const logger = createLogger('metrics'); \
 \
// Create a Registry to register the metrics \
const register = new prometheus.Registry(); \
 \
// Add default metrics \
prometheus.collectDefaultMetrics({ register }); \
 \
// Create custom metrics \
const httpRequestDurationMicroseconds = new prometheus.Histogram({ \
  name: 'http_request_duration_seconds', \
  help: 'Duration of HTTP requests in seconds', \
  labelNames: ['method', 'route', 'status_code'], \
  buckets: [0.05, 0.1, 0.5, 1, 3, 5, 10] \
}); \
 \
const httpRequestsTotal = new prometheus.Counter({ \
  name: 'http_requests_total', \
  help: 'Total number of HTTP requests', \
  labelNames: ['method', 'route', 'status_code'] \
}); \
 \
const httpErrorsTotal = new prometheus.Counter({ \
  name: 'http_errors_total', \
  help: 'Total number of HTTP errors', \
  labelNames: ['method', 'route', 'status_code'] \
}); \
 \
const activeConnections = new prometheus.Gauge({ \
  name: 'active_connections', \
  help: 'Number of active connections' \
}); \
 \
// Register metrics \
register.registerMetric(httpRequestDurationMicroseconds); \
register.registerMetric(httpRequestsTotal); \
register.registerMetric(httpErrorsTotal); \
register.registerMetric(activeConnections); \
 \
// Middleware to collect metrics \
const metricsMiddleware = (req, res, next) => { \
  const start = Date.now(); \
   \
  // Increment active connections \
  activeConnections.inc(); \
   \
  // When the response is finished \
  res.on('finish', () => { \
    // Decrement active connections \
    activeConnections.dec(); \
     \
    // Extract route pattern from route object \
    const route = req.route ? req.baseUrl + req.route.path : req.path; \
     \
    // Calculate duration \
    const duration = (Date.now() - start) / 1000; \
     \
    // Observe request duration \
    httpRequestDurationMicroseconds.labels( \
      req.method, \
      route, \
      res.statusCode \
    ).observe(duration); \
     \
    // Count request \
    httpRequestsTotal.labels( \
      req.method, \
      route, \
      res.statusCode \
    ).inc(); \
     \
    // Count error if status >= 400 \
    if (res.statusCode >= 400) { \
      httpErrorsTotal.labels( \
        req.method, \
        route, \
        res.statusCode \
      ).inc(); \
    } \
  }); \
   \
  next(); \
}; \
 \
// Setup metrics endpoint \
const setupMetrics = (app) => { \
  // Metrics route \
  app.get('/metrics', async (req, res) => { \
    try { \
      res.set('Content-Type', register.contentType); \
      res.end(await register.metrics()); \
    } catch (error) { \
      logger.error('Error generating metrics:', error); \
      res.status(500).end(); \
    } \
  }); \
   \
  // Add metrics middleware \
  app.use(metricsMiddleware); \
   \
  return app; \
}; \
 \
export { setupMetrics, register };

Sample Grafana dashboard configuration:

{ \
  "annotations": { \
    "list": [ \
      { \
        "builtIn": 1, \
        "datasource": "-- Grafana --", \
        "enable": true, \
        "hide": true, \
        "iconColor": "rgba(0, 211, 255, 1)", \
        "name": "Annotations & Alerts", \
        "type": "dashboard" \
      } \
    ] \
  }, \
  "editable": true, \
  "gnetId": null, \
  "graphTooltip": 0, \
  "id": 1, \
  "links": [], \
  "panels": [ \
    { \
      "aliasColors": {}, \
      "bars": false, \
      "dashLength": 10, \
      "dashes": false, \
      "datasource": "Prometheus", \
      "fieldConfig": { \
        "defaults": {}, \
        "overrides": [] \
      }, \
      "fill": 1, \
      "fillGradient": 0, \
      "gridPos": { \
        "h": 8, \
        "w": 12, \
        "x": 0, \
        "y": 0 \
      }, \
      "hiddenSeries": false, \
      "id": 2, \
      "legend": { \
        "avg": false, \
        "current": false, \
        "max": false, \
        "min": false, \
        "show": true, \
        "total": false, \
        "values": false \
      }, \
      "lines": true, \
      "linewidth": 1, \
      "nullPointMode": "null", \
      "options": { \
        "alertThreshold": true \
      }, \
      "percentage": false, \
      "pluginVersion": "7.5.5", \
      "pointradius": 2, \
      "points": false, \
      "renderer": "flot", \
      "seriesOverrides": [], \
      "spaceLength": 10, \
      "stack": false, \
      "steppedLine": false, \
      "targets": [ \
        { \
          "expr": "sum(rate(http_requests_total[5m])) by (service)", \
          "interval": "", \
          "legendFormat": "{{service}}", \
          "refId": "A" \
        } \
      ], \
      "thresholds": [], \
      "timeFrom": null, \
      "timeRegions": [], \
      "timeShift": null, \
      "title": "Request Rate by Service", \
      "tooltip": { \
        "shared": true, \
        "sort": 0, \
        "value_type": "individual" \
      }, \
      "type": "graph", \
      "xaxis": { \
        "buckets": null, \
        "mode": "time", \
        "name": null, \
        "show": true, \
        "values": [] \
      }, \
      "yaxes": [ \
        { \
          "format": "short", \
          "label": "requests/sec", \
          "logBase": 1, \
          "max": null, \
          "min": null, \
          "show": true \
        }, \
        { \
          "format": "short", \
          "label": null, \
          "logBase": 1, \
          "max": null, \
          "min": null, \
          "show": true \
        } \
      ], \
      "yaxis": { \
        "align": false, \
        "alignLevel": null \
      } \
    }, \
    { \
      "aliasColors": {}, \
      "bars": false, \
      "dashLength": 10, \
      "dashes": false, \
      "datasource": "Prometheus", \
      "fieldConfig": { \
        "defaults": {}, \
        "overrides": [] \
      }, \
      "fill": 1, \
      "fillGradient": 0, \
      "gridPos": { \
        "h": 8, \
        "w": 12, \
        "x": 12, \
        "y": 0 \
      }, \
      "hiddenSeries": false, \
      "id": 4, \
      "legend": { \
        "avg": false, \
        "current": false, \
        "max": false, \
        "min": false, \
        "show": true, \
        "total": false, \
        "values": false \
      }, \
      "lines": true, \
      "linewidth": 1, \
      "nullPointMode": "null", \
      "options": { \
        "alertThreshold": true \
      }, \
      "percentage": false, \
      "pluginVersion": "7.5.5", \
      "pointradius": 2, \
      "points": false, \
      "renderer": "flot", \
      "seriesOverrides": [], \
      "spaceLength": 10, \
      "stack": false, \
      "steppedLine": false, \
      "targets": [ \
        { \
          "expr": "histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le, route))", \
          "interval": "", \
          "legendFormat": "{{route}}", \
          "refId": "A" \
        } \
      ], \
      "thresholds": [], \
      "timeFrom": null, \
      "timeRegions": [], \
      "timeShift": null, \
      "title": "95th Percentile Response Time by Route", \
      "tooltip": { \
        "shared": true, \
        "sort": 0, \
        "value_type": "individual" \
      }, \
      "type": "graph", \
      "xaxis": { \
        "buckets": null, \
        "mode": "time", \
        "name": null, \
        "show": true, \
        "values": [] \
      }, \
      "yaxes": [ \
        { \
          "format": "s", \
          "label": "response time", \
          "logBase": 1, \
          "max": null, \
          "min": null, \
          "show": true \
        }, \
        { \
          "format": "short", \
          "label": null, \
          "logBase": 1, \
          "max": null, \
          "min": null, \
          "show": true \
        } \
      ], \
      "yaxis": { \
        "align": false, \
        "alignLevel": null \
      } \
    }, \
    { \
      "aliasColors": {}, \
      "bars": false, \
      "dashLength": 10, \
      "dashes": false, \
      "datasource": "Prometheus", \
      "fieldConfig": { \
        "defaults": {}, \
        "overrides": [] \
      }, \
      "fill": 1, \
      "fillGradient": 0, \
      "gridPos": { \
        "h": 8, \
        "w": 12, \
        "x": 0, \
        "y": 8 \
      }, \
      "hiddenSeries": false, \
      "id": 6, \
      "legend": { \
        "avg": false, \
        "current": false, \
        "max": false, \
        "min": false, \
        "show": true, \
        "total": false, \
        "values": false \
      }, \
      "lines": true, \
      "linewidth": 1, \
      "nullPointMode": "null", \
      "options": { \
        "alertThreshold": true \
      }, \
      "percentage": false, \
      "pluginVersion": "7.5.5", \
      "pointradius": 2, \
      "points": false, \
      "renderer": "flot", \
      "seriesOverrides": [], \
      "spaceLength": 10, \
      "stack": false, \
      "steppedLine": false, \
      "targets": [ \
        { \
          "expr": "sum(rate(http_errors_total[5m])) by (service, status_code)", \
          "interval": "", \
          "legendFormat": "{{service}} - {{status_code}}", \
          "refId": "A" \
        } \
      ], \
      "thresholds": [], \
      "timeFrom": null, \
      "timeRegions": [], \
      "timeShift": null, \
      "title": "Error Rate by Service and Status Code", \
      "tooltip": { \
        "shared": true, \
        "sort": 0, \
        "value_type": "individual" \
      }, \
      "type": "graph", \
      "xaxis": { \
        "buckets": null, \
        "mode": "time", \
        "name": null, \
        "show": true, \
        "values": [] \
      }, \
      "yaxes": [ \
        { \
          "format": "short", \
          "label": "errors/sec", \
          "logBase": 1, \
          "max": null, \
          "min": null, \
          "show": true \
        }, \
        { \
          "format": "short", \
          "label": null, \
          "logBase": 1, \
          "max": null, \
          "min": null, \
          "show": true \
        } \
      ], \
      "yaxis": { \
        "align": false, \
        "alignLevel": null \
      } \
    }, \
    { \
      "datasource": "Prometheus", \
      "fieldConfig": { \
        "defaults": { \
          "color": { \
            "mode": "thresholds" \
          }, \
          "mappings": [], \
          "thresholds": { \
            "mode": "absolute", \
            "steps": [ \
              { \
                "color": "green", \
                "value": null \
              }, \
              { \
                "color": "yellow", \
                "value": 50 \
              }, \
              { \
                "color": "red", \
                "value": 80 \
              } \
            ] \
          } \
        }, \
        "overrides": [] \
      }, \
      "gridPos": { \
        "h": 8, \
        "w": 12, \
        "x": 12, \
        "y": 8 \
      }, \
      "id": 8, \
      "options": { \
        "reduceOptions": { \
          "calcs": [ \
            "lastNotNull" \
          ], \
          "fields": "", \
          "values": false \
        }, \
        "showThresholdLabels": false, \
        "showThresholdMarkers": true, \
        "text": {} \
      }, \
      "pluginVersion": "7.5.5", \
      "targets": [ \
        { \
          "expr": "sum(active_connections) by (service)", \
          "interval": "", \
          "legendFormat": "{{service}}", \
          "refId": "A" \
        } \
      ], \
      "title": "Active Connections by Service", \
      "type": "gauge" \
    } \
  ], \
  "refresh": "10s", \
  "schemaVersion": 27, \
  "style": "dark", \
  "tags": [], \
  "templating": { \
    "list": [] \
  }, \
  "time": { \
    "from": "now-1h", \
    "to": "now" \
  }, \
  "timepicker": {}, \
  "timezone": "", \
  "title": "Expense Management Dashboard", \
  "uid": "QK8EdS0Mz", \
  "version": 1 \
}

### 12.3 Alert Configuration

Prometheus alerting rules:

prometheus/alert-rules.yml
## 13. Disaster Recovery and Backup Strategies

### 13.1 Database Backup Strategy

// scripts/backup/database.js \
import { exec } from 'child_process'; \
import fs from 'fs'; \
import path from 'path'; \
import AWS from 'aws-sdk'; \
import { createLogger } from '../../src/utils/logger'; \
 \
const logger = createLogger('database-backup'); \
 \
// Configuration \
const config = { \
  database: { \
    host: process.env.DB_HOST || 'localhost', \
    port: process.env.DB_PORT || 5432, \
    username: process.env.DB_USERNAME, \
    password: process.env.DB_PASSWORD, \
    database: process.env.DB_NAME \
  }, \
  s3: { \
    bucket: process.env.BACKUP_BUCKET, \
    region: process.env.AWS_REGION || 'us-east-1', \
    prefix: 'database-backups' \
  }, \
  localBackupDir: process.env.LOCAL_BACKUP_DIR || '/tmp/backups', \
  retentionDays: parseInt(process.env.BACKUP_RETENTION_DAYS || '7') \
}; \
 \
// Initialize S3 client \
const s3 = new AWS.S3({ \
  region: config.s3.region \
}); \
 \
// Ensure backup directory exists \
if (!fs.existsSync(config.localBackupDir)) { \
  fs.mkdirSync(config.localBackupDir, { recursive: true }); \
} \
 \
// Create backup filename with timestamp \
const timestamp = new Date().toISOString().replace(/[:.]/g, '-'); \
const backupFilename = <code>${config.database.database}_${timestamp}.sql.gz</code>; \
const backupPath = path.join(config.localBackupDir, backupFilename); \
 \
// Create backup using pg_dump \
const createBackup = () => { \
  return new Promise((resolve, reject) => { \
    const command = <code>PGPASSWORD=${config.database.password} pg_dump -h ${config.database.host} -p ${config.database.port} -U ${config.database.username} -d ${config.database.database} -F c | gzip > ${backupPath}</code>; \
     \
    logger.info(<code>Creating backup: ${backupFilename}</code>); \
     \
    exec(command, (error, stdout, stderr) => { \
      if (error) { \
        logger.error(<code>Backup failed: ${error.message}</code>); \
        return reject(error); \
      } \
       \
      if (stderr) { \
        logger.warn(<code>pg_dump stderr: ${stderr}</code>); \
      } \
       \
      logger.info(<code>Backup created: ${backupPath} (${fs.statSync(backupPath).size} bytes)</code>); \
      resolve(backupPath); \
    }); \
  }); \
}; \
 \
// Upload backup to S3 \
const uploadToS3 = (filePath) => { \
  return new Promise((resolve, reject) => { \
    const fileStream = fs.createReadStream(filePath); \
    const key = <code>${config.s3.prefix}/${path.basename(filePath)}</code>; \
     \
    logger.info(<code>Uploading backup to S3: ${config.s3.bucket}/${key}</code>); \
     \
    const params = { \
      Bucket: config.s3.bucket, \
      Key: key, \
      Body: fileStream, \
      ServerSideEncryption: 'AES256' \
    }; \
     \
    s3.upload(params, (err, data) => { \
      if (err) { \
        logger.error(<code>S3 upload failed: ${err.message}</code>); \
        return reject(err); \
      } \
       \
      logger.info(<code>Backup uploaded to S3: ${data.Location}</code>); \
      resolve(data.Location); \
    }); \
  }); \
}; \
 \
// Clean up old backups \
const cleanupOldBackups = async () => { \
  // Clean up local backups \
  const localFiles = fs.readdirSync(config.localBackupDir); \
   \
  for (const file of localFiles) { \
    const filePath = path.join(config.localBackupDir, file); \
    const stats = fs.statSync(filePath); \
    const fileAgeDays = (new Date() - stats.mtime) / (1000 * 60 * 60 * 24); \
     \
    if (fileAgeDays > 1) { // Keep local backups for one day only \
      logger.info(<code>Removing old local backup: ${filePath}</code>); \
      fs.unlinkSync(filePath); \
    } \
  } \
   \
  // Clean up S3 backups \
  const cutoffDate = new Date(); \
  cutoffDate.setDate(cutoffDate.getDate() - config.retentionDays); \
   \
  const params = { \
    Bucket: config.s3.bucket, \
    Prefix: config.s3.prefix \
  }; \
   \
  try { \
    const data = await s3.listObjectsV2(params).promise(); \
     \
    for (const object of data.Contents || []) { \
      if (object.LastModified < cutoffDate) { \
        logger.info(<code>Removing old S3 backup: ${object.Key}</code>); \
        await s3.deleteObject({ \
          Bucket: config.s3.bucket, \
          Key: object.Key \
        }).promise(); \
      } \
    } \
  } catch (error) { \
    logger.error(<code>S3 cleanup failed: ${error.message}</code>); \
  } \
}; \
 \
// Main function \
const main = async () => { \
  try { \
    const backupPath = await createBackup(); \
    await uploadToS3(backupPath); \
    await cleanupOldBackups(); \
    logger.info('Backup process completed successfully'); \
  } catch (error) { \
    logger.error(<code>Backup process failed: ${error.message}</code>); \
    process.exit(1); \
  } \
}; \
 \
main();

### 13.2 Database Restore Procedure

// scripts/restore/database.js \
import { exec } from 'child_process'; \
import fs from 'fs'; \
import path from 'path'; \
import AWS from 'aws-sdk'; \
import { createLogger } from '../../src/utils/logger'; \
 \
const logger = createLogger('database-restore'); \
 \
// Configuration \
const config = { \
  database: { \
    host: process.env.DB_HOST || 'localhost', \
    port: process.env.DB_PORT || 5432, \
    username: process.env.DB_USERNAME, \
    password: process.env.DB_PASSWORD, \
    database: process.env.DB_NAME \
  }, \
  s3: { \
    bucket: process.env.BACKUP_BUCKET, \
    region: process.env.AWS_REGION || 'us-east-1', \
    prefix: 'database-backups' \
  }, \
  backupFile: process.env.BACKUP_FILE, // S3 key or local path \
  localRestoreDir: process.env.LOCAL_RESTORE_DIR || '/tmp/restore' \
}; \
 \
// Initialize S3 client \
const s3 = new AWS.S3({ \
  region: config.s3.region \
}); \
 \
// Ensure restore directory exists \
if (!fs.existsSync(config.localRestoreDir)) { \
  fs.mkdirSync(config.localRestoreDir, { recursive: true }); \
} \
 \
// Download backup from S3 if needed \
const getBackupFile = async () => { \
  // If it's a local file \
  if (fs.existsSync(config.backupFile)) { \
    logger.info(<code>Using local backup file: ${config.backupFile}</code>); \
    return config.backupFile; \
  } \
   \
  // Otherwise, assume it's on S3 \
  const key = config.backupFile.startsWith(config.s3.prefix) ?  \
    config.backupFile :  \
    <code>${config.s3.prefix}/${config.backupFile}</code>; \
   \
  const localPath = path.join(config.localRestoreDir, path.basename(config.backupFile)); \
   \
  logger.info(<code>Downloading backup from S3: ${config.s3.bucket}/${key}</code>); \
   \
  const params = { \
    Bucket: config.s3.bucket, \
    Key: key \
  }; \
   \
  return new Promise((resolve, reject) => { \
    const fileStream = fs.createWriteStream(localPath); \
     \
    s3.getObject(params) \
      .createReadStream() \
      .pipe(fileStream) \
      .on('error', (error) => { \
        logger.error(<code>S3 download failed: ${error.message}</code>); \
        reject(error); \
      }) \
      .on('close', () => { \
        logger.info(<code>Backup downloaded to ${localPath}</code>); \
        resolve(localPath); \
      }); \
  }); \
}; \
 \
// List available backups \
const listBackups = async () => { \
  const params = { \
    Bucket: config.s3.bucket, \
    Prefix: config.s3.prefix \
  }; \
   \
  try { \
    const data = await s3.listObjectsV2(params).promise(); \
     \
    logger.info('Available backups:'); \
     \
    if (!data.Contents || data.Contents.length === 0) { \
      logger.info('No backups found'); \
      return; \
    } \
     \
    data.Contents \
      .sort((a, b) => b.LastModified.getTime() - a.LastModified.getTime()) \
      .forEach((object) => { \
        logger.info(<code>${object.Key} (${formatBytes(object.Size)}) - ${object.LastModified.toISOString()}</code>); \
      }); \
  } catch (error) { \
    logger.error(<code>Failed to list backups: ${error.message}</code>); \
  } \
}; \
 \
// Restore database \
const restoreDatabase = (backupPath) => { \
  return new Promise((resolve, reject) => { \
    // First extract the gzipped file \
    const extractCommand = <code>gunzip -c ${backupPath} > ${backupPath.replace('.gz', '')}</code>; \
     \
    logger.info(<code>Extracting backup file: ${extractCommand}</code>); \
     \
    exec(extractCommand, (error, stdout, stderr) => { \
      if (error) { \
        logger.error(<code>Extraction failed: ${error.message}</code>); \
        return reject(error); \
      } \
       \
      const extractedPath = backupPath.replace('.gz', ''); \
       \
      // Now restore using pg_restore \
      const restoreCommand = <code>PGPASSWORD=${config.database.password} pg_restore -h ${config.database.host} -p ${config.database.port} -U ${config.database.username} -d ${config.database.database} -c ${extractedPath}</code>; \
       \
      logger.info(<code>Restoring database: ${restoreCommand}</code>); \
       \
      exec(restoreCommand, (error, stdout, stderr) => { \
        // Clean up extracted file \
        fs.unlinkSync(extractedPath); \
         \
        if (error) { \
          logger.error(<code>Restore failed: ${error.message}</code>); \
          if (stderr) { \
            logger.error(<code>pg_restore stderr: ${stderr}</code>); \
          } \
          return reject(error); \
        } \
         \
        logger.info('Database restored successfully'); \
         \
        if (stderr) { \
          logger.warn(<code>pg_restore stderr: ${stderr}</code>); \
        } \
         \
        resolve(); \
      }); \
    }); \
  }); \
}; \
 \
// Utility function to format bytes \
const formatBytes = (bytes, decimals = 2) => { \
  if (bytes === 0) return '0 Bytes'; \
   \
  const k = 1024; \
  const dm = decimals < 0 ? 0 : decimals; \
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']; \
   \
  const i = Math.floor(Math.log(bytes) / Math.log(k)); \
   \
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]; \
}; \
 \
// Main function \
const main = async () => { \
  try { \
    if (!config.backupFile) { \
      // If no backup file specified, list available backups \
      await listBackups(); \
      logger.info(<code>Specify a backup file with BACKUP_FILE environment variable</code>); \
      return; \
    } \
     \
    const backupPath = await getBackupFile(); \
    await restoreDatabase(backupPath); \
     \
    // Clean up the local copy of the backup file if it was downloaded \
    if (backupPath.startsWith(config.localRestoreDir)) { \
      logger.info(<code>Cleaning up temporary files</code>); \
      fs.unlinkSync(backupPath); \
    } \
     \
    logger.info('Restore process completed successfully'); \
  } catch (error) { \
    logger.error(<code>Restore process failed: ${error.message}</code>); \
    process.exit(1); \
  } \
}; \
 \
main();

### 13.3 Disaster Recovery Plan

Disaster Recovery Plan
1. **Apply transaction logs** - Apply any transaction logs since the last backup

2. **Verify data integrity** - Run data verification scripts

3. **Switch application to restored database** - Update configuration and restart services

### 4.2 Service Outage Recovery

1. **Identify affected services** - Use monitoring systems to identify failing services

2. **Check logs and metrics** - Investigate root cause through log analysis

3. **Restart services** - Attempt service restart using Kubernetes: \
kubectl rollout restart deployment <service-name> -n expense-management \


4. **Scale up replacements** - If restart fails, scale up new instances: \
kubectl scale deployment <service-name> --replicas=0 -n expense-management \
kubectl scale deployment <service-name> --replicas=3 -n expense-management \


5. **Verify service health** - Check health endpoints and metrics

6. **Root cause analysis** - Document issue and implement preventive measures

### 4.3 Infrastructure Failure Recovery

1. **Activate secondary region** - Switch DNS to point to secondary region

2. **Verify database replication** - Ensure database in secondary region is up to date

3. **Scale up secondary region** - Increase capacity in secondary region: \
# Scale up secondary region resources \
terraform apply -var-file=secondary-region.tfvars \


4. **Update configuration** - Update any configuration pointing to primary region

5. **Verify system health** - Run end-to-end tests against secondary region

6. **Notify stakeholders** - Communicate status and estimated resolution time

### 4.4 Data Center Outage Recovery

1. **Declare disaster** - Notify disaster recovery team

2. **Activate cloud DR environment** - Provision resources in cloud environment: \
terraform apply -var-file=dr-environment.tfvars \


3. **Restore latest database backup** - Follow database recovery procedure for cloud environment

4. **Deploy application services** - Deploy all microservices to cloud environment

5. **Update DNS and configuration** - Point DNS records to cloud environment

6. **Verify system functionality** - Run comprehensive tests on recovered system

7. **Monitor performance** - Closely monitor system performance and stability

## 7. Testing and Maintenance

- Quarterly DR drills to test recovery procedures

- Monthly backup restoration tests

- Review and update DR plan every 6 months

- Document and incorporate lessons learned from each drill and actual incident

## 8. Recovery Completion

1. **Verification checklist**:

- All services operational and healthy

- Data integrity verified

- Security checks passed

- Performance at acceptable levels

- **Return to normal operations**:

- If using DR environment, plan migration back to primary

- Document all actions taken during recovery

- Update documentation with lessons learned \


## 15. Conclusion

This comprehensive technical specification provides detailed guidance for implementing the SME Expense Management Solution with three key differentiators:

1. **Superior localized customer support**:

- Multi-language support throughout the application

- Comprehensive help center with contextual assistance

- Live chat integration with support ticket system

- Regional expertise built into the product

- **Fast implementation and simple integrations**:

- Streamlined onboarding process

- Flexible integration options (API, CSV, direct connectors)

- No-code configuration for common scenarios

- Comprehensive documentation and guided setup

- **Intuitive UX optimized for SMEs**:

- Simplified workflows designed for non-technical users

- Mobile-first approach with receipt scanning

- Step-by-step guidance throughout the application

- Conversational interfaces for expense submission

The architecture has been designed to be:

- **Scalable**: Through microservices architecture and horizontal scaling

- **Resilient**: With redundancy, failover, and comprehensive monitoring

- **Secure**: Following security best practices and compliance requirements

- **Maintainable**: Through clean code architecture and comprehensive testing

- **Extensible**: With well-defined APIs and integration points

The implementation plan provides a clear roadmap for development, with realistic timeframes and focused phases that build upon each other. By following this specification, the development team can create a robust, user-friendly expense management solution that addresses the specific needs of small and medium enterprises in the target region.
