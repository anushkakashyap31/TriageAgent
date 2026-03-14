# 🤖 TriageAgent — AI-Powered Communication Triage System for Non-Profit Organizations

---
An intelligent AI agent that automatically classifies, extracts entities from, and generates draft responses to incoming messages for non-profit organizations.

---

**Project Details**

**Project Code: AAI-15 | Batch D2 | Group 03D2 | Medicaps University × Datagami | AY 2026**

---

## Problem Statement

Develop an intelligent AI-driven triage system for the Non-Profit domain. The application automatically classifies incoming messages, extracts critical entities, generates contextual draft responses, and routes to appropriate departments. Beyond simple categorization, the system provides deep contextual analysis using Large Language Models, creating an efficient workflow that reduces response time from hours to seconds while maintaining high-quality, empathetic communication.

## Major Tools	

Python, FastAPI, React, Firebase, Google Gemini AI, spaCy

---

## Key Features

- **AI Message Classification** — Automatically detect urgency (Critical/High/Normal/Low) and intent (Donation/Volunteer/Complaint/etc.) using Google Gemini 2.5 Flash
- **Hybrid Entity Extraction** — Hybrid NER using spaCy + Gemini LLM to extract names, dates, amounts, IDs, emails, phone numbers from messages
- **Smart Response Generation** — AI generates contextual, empathetic draft responses for every message
- **Intelligent Routing** — Auto-route messages to departments (Donations, Support, Volunteers) with priority assignment
- **User Authentication** — Secure sign-up and login via Firebase Authentication + JWT
- **Analytics Dashboard** — Visual breakdown of urgency distribution, intent trends, and system performance
- **Real-time Processing** — Complete triage pipeline in 5-10 seconds per message
- **Firestore Database**: Scalable cloud database for storing triage results

---


## Architecture Overview

TriageAgent follows a **Multi-Agent AI Architecture with 3-Tier Client-Server Pattern**:

```
┌─────────────────────────────────────────────────────┐
│              Presentation Layer                     │
│        React 18 + Vite + Tailwind CSS               │
└───────────────────┬─────────────────────────────────┘
                    │  REST API (Axios)
┌───────────────────▼─────────────────────────────────┐
│           Business Logic Layer (FastAPI)            │
│  ┌──────────────────────────────────────────────┐   │
│  │         AI Agent Orchestrator                │   │
│  │  ┌────────────┬──────────┬─────────────┐     │   │
│  │  │Classifier  │   NER    │  Response   │     │   │
│  │  │  Agent     │  Agent   │   Agent     │     │   │
│  │  └────────────┴──────────┴─────────────┘     │   │
│  │              Router Agent                    │   │
│  └──────────────────────────────────────────────┘   │
│       Auth Service │ Analytics Service              │
└────────────┬───────┴───────┬────────────────────────┘
             │               │
    ┌────────▼─────┐   ┌─────▼────────────────────┐
    │   Firebase   │   │   Google Gemini 2.5      │
    │  Auth + DB   │   │   Flash + spaCy NER      │
    └──────────────┘   └──────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **Vite** | Build tool & dev server |
| **Tailwind CSS 3** | Utility-first styling |
| **Zustand** | Global state management with persistence |
| **Axios** | HTTP client for API calls |
| **Lucide Icons** | Modern icon library |
| **React Router 6** | Client-side routing |
| **React Hot Toast** | Toast notifications |

### Backend
| Technology | Purpose |
|---|---|
| **FastAPI (Python 3.11)** | High-performance REST API framework |
| **LangChain** | AI agent orchestration |
| **spaCy** (`en_core_web_sm`) | Statistical NER for entities |
| **Pydantic V2** | Request/response validation |
| **python-jose** | JWT token generation & verification |
| **bcrypt** | Password hashing (via Firebase) |

### AI & Cloud Services
| Technology | Purpose |
|---|---|
| **Google Gemini 2.5 Flash** | Message classification, entity extraction, response generation |
| **Firebase Authentication** | User sign-up, login, ID token management |
| **Firebase Firestore** | NoSQL database for triage results, messages, analytics |
| **Firebase Admin SDK** | Server-side Firebase access |

---

## 📁 Project Structure

```
TriageAgent/
├── backend/
│   ├── app/
│   │   ├── main.py                     # FastAPI app entry point
│   │   ├── config.py                   # Environment configuration
│   │   ├── agents/
│   │   │   ├── orchestrator.py         # Main agent coordinator
│   │   │   ├── classifier_agent.py     # Urgency + Intent classifier
│   │   │   ├── ner_agent.py            # Hybrid entity extraction
│   │   │   ├── response_agent.py       # Draft response generator
│   │   │   └── router_agent.py         # Department routing logic
│   │   ├── routes/
│   │   │   ├── auth.py                 # /api/auth/*
│   │   │   ├── triage.py               # /api/triage/*
│   │   │   ├── messages.py             # /api/messages/*
│   │   │   └── analytics.py            # /api/analytics/*
│   │   ├── services/
│   │   │   ├── auth_service.py         # Firebase token verification
│   │   │   ├── llm_service.py          # Gemini API + retry logic
│   │   │   ├── ner_service.py          # spaCy NER pipeline
│   │   │   ├── firebase_service.py     # Firestore operations
│   │   │   └── analytics_service.py    # Stats & insights queries
│   │   ├── middleware/
│   │   │   ├── auth_middleware.py      # JWT verification
│   │   │   └── rate_limiter.py         # Request rate limiting
│   │   ├── models/
│   │   │   ├── schemas.py              # Pydantic models
│   │   │   └── enums.py                # Urgency, Intent, Status enums
│   │   └── utils/
│   │       ├── logger.py               # Structured JSON logging
│   │       ├── helpers.py              # Utility functions
│   │       └── validators.py           # Input validators
│   ├── requirements.txt
│   ├── .env.example
│   └── firebase-credentials.json       # (not committed)
│
├── frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── package.json
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── store/
│       │   ├── useAuthStore.js         # Zustand auth state
│       │   ├── useTriageStore.js       # Zustand triage state
│       │   └── useMessageStore.js      # Zustand message state
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── LoginPage.jsx
│       │   ├── RegisterPage.jsx
│       │   ├── TriagePage.jsx
│       │   ├── Dashboard.jsx
│       │   ├── AnalyticsPage.jsx
│       │   ├── MessagePage.jsx
│       │   └── SettingsPage.jsx
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Header.jsx
│       │   │   ├── Sidebar.jsx
│       │   │   └── Footer.jsx
│       │   ├── auth/
│       │   │   ├── Login.jsx
│       │   │   ├── Register.jsx
│       │   │   └── ProtectedRoute.jsx
│       │   ├── triage/
│       │   │   ├── MessageInput.jsx
│       │   │   ├── TriageResult.jsx
│       │   │   ├── UrgencyBadge.jsx
│       │   │   ├── EntityDisplay.jsx
│       │   │   └── ResponsePreview.jsx
│       │   ├── dashboard/
│       │   │   ├── StatsCard.jsx
│       │   │   ├── MessageList.jsx
│       │   │   ├── FilterPanel.jsx
│       │   │   ├── Charts.jsx
│       │   │   └── Analytics.jsx
│       │   └── common/
│       │       ├── Button.jsx
│       │       ├── Card.jsx
│       │       ├── Badge.jsx
│       │       ├── LoadingSpinner.jsx
│       │       └── Modal.jsx
│       ├── services/
│       │   ├── api.js                  # Axios instance + interceptors
│       │   ├── authAPI.js              # Auth endpoints
│       │   ├── triageAPI.js            # Triage endpoints
│       │   ├── messageAPI.js           # Message endpoints
│       │   └── analyticsAPI.js         # Analytics endpoints
│       ├── utils/
│       │   ├── firebase.js             # Firebase config
│       │   ├── constants.js            # App constants
│       │   └── helpers.js              # Utility functions
│       └── hooks/
│           ├── useAuth.js              # Auth custom hook
│           ├── useTriage.js            # Triage custom hook
│           └── useRealtime.js          # Real-time updates hook
│
├── .gitignore
└── README.md
```

---

## 🔌 API Endpoints

**Base URL:** `http://localhost:8000`

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login-email` - Signin with Email/password 
- `GET /api/auth/me` - Get current authenticated user

### Triage
- `POST /api/triage` - Process message through AI triage pipeline
- `GET /api/triage/{id}` - Get triage result
- `POST /api/triage/{id}/feedback` - Submit feedback (Approve/Reject)

### Messages
- `GET /api/messages` - List messages (with filters)
- `GET /api/messages/{id}` - Get message details
- `PUT /api/messages/{id}/status` - Update message status

### Analytics
- `GET /api/analytics/stats` - Overall system statistics
- `GET /api/analytics/dashboard` - Dashboard data
- `GET /api/analytics/urgency` - Urgency distribution
- `GET /api/analytics/intent` - Intent distribution

---

## 🔒 Security

- **Firebase Authentication** handles all password hashing and credential storage
- **Dual-token model**: Firebase ID token (auth) + JWT (API access, configurable expiry)
- JWT verified on every protected API request (stateless backend)
- CORS restricted to trusted frontend origin only (`localhost:5173` in dev)
- All secrets stored in `.env` — never hardcoded
- Firebase Firestore security rules enforce user-level access control
- Rate limiting middleware prevents API abuse (100 requests/minute per user)
- Input validation with Pydantic V2 on all API requests
- Structured JSON logging for security audit trails

---

## 📈 Performance

- **Average Processing Time**: 5-10 seconds per message
- **Classification Accuracy**: 90-95%
- **Entity Extraction**: Hybrid approach (spaCy + LLM)
- **10-20x Faster** than manual triage

**Reliability** is ensured via exponential backoff retry (up to 3 retries) on all Gemini API calls, with graceful fallback responses if all retries fail.

---

## 🔒 Security

- JWT-based authentication
- Firebase security rules
- Rate limiting middleware
- Input validation with Pydantic
- Environment variable protection

---


## 🚀 How to Run Locally

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Python](https://www.python.org/) (3.11 or higher)
- [Git](https://git-scm.com/)
- A [Google Gemini API Key](https://aistudio.google.com/app/apikey)
- A [Firebase Project](https://console.firebase.google.com/) with:
  - Authentication enabled (Email/Password)
  - Firestore Database created
  - Service Account JSON downloaded

---

### Step 1 — Clone the Repository

```bash
git clone https://github.com/anushkakashyap31/TriageAgent.git
cd TriageAgent
```

---

### Step 2 — Backend Setup

#### 2a. Navigate to the backend folder

```bash
cd backend
```

#### 2b. Create a virtual environment and activate it

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS / Linux
python3 -m venv venv
source venv/bin/activate
```

#### 2c. Install Python dependencies

```bash
pip install -r requirements.txt
```

#### 2d. Download spaCy language model

```bash
python -m spacy download en_core_web_sm
```

#### 2e. Add Firebase credentials

Place your Firebase service account JSON file in the `backend/` folder and rename it:
```
backend/firebase-credentials.json
```

#### 2f. Create the `.env` file

Create a `.env` file inside the `backend/` folder (use .env.example file in backend and paste this file on your .env with your own secret keys)


#### 2g. Start the backend server

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at: `http://localhost:8000`  
Interactive API docs: `http://localhost:8000/docs`

---

### Step 3 — Frontend Setup

#### 3a. Open a new terminal and navigate to the frontend folder

```bash
cd frontend
```

#### 3b. Install Node dependencies

```bash
npm install
```

#### 3c. Create the `.env` file

Create a `.env` file inside the `frontend/` folder (use .env.example file in frontend and paste this file on your .env with your own secret keys)

#### 3d. Start the frontend development server

```bash
npm run dev
```

The app will be available at: `http://localhost:5173`

---

### Step 4 — Using the App

1. Open `http://localhost:5173` in your browser
2. Register a new account or log in
3. Navigate to **Triage** page
4. Paste an incoming message into the input field
5. Click **Triage Message** and wait for AI processing
6. Review the classification, extracted entities, and draft response
7. Approve or reject the response
8. Track all messages on the **Dashboard**
9. View analytics and performance metrics on the **Analytics** page

---

## 📊 Data Model Summary

**Firebase Firestore Collections**
- `users/{uid}` — email, full_name, created_at, role
- `triage_results/{triage_id}` — message, classification, entities, draft_response, routing, status, created_at
- `messages/{message_id}` — triage_id, sender_email, sender_name, status, reviewed_at

---

## 🗂️ Data Retention Policy

| Data | Retention |
|---|---|
| Firebase User Profile | Indefinite |
| Triage Results | 1 year |
| Messages | 90 days |
| Analytics Aggregates | Indefinite |
| JWT Tokens | 1 hour (auto-expiry) |
| System Logs | 30 days |

---

## 🙏 Acknowledgments

- Google Gemini AI for LLM capabilities
- Firebase for backend infrastructure  
- FastAPI & React communities
- spaCy for NER capabilities
- Medicaps University & Datagami mentors