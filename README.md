# Personal Expense Tracker

A modern, responsive web application for managing personal expenses with **Firebase Cloud Firestore** as the persistent database. The application allows users to record, view, and delete expenses while automatically tracking total spending and the number of recorded transactions.

**Live Demo:**
https://personal-expense-tracker-1a342.web.app/

**Repository:**
https://github.com/haziqashakirkhan/personal-expense-tracker

---

## Overview

Personal Expense Tracker is a full-stack web application designed to provide a simple way to record and manage everyday expenses.

The application combines a **FastAPI-powered local development environment** with a browser-based frontend and **Firebase Firestore** for cloud data persistence.

Unlike a traditional application that stores data only in browser memory, expenses are saved directly to Firestore. This means records remain available after refreshing the application or restarting the local development server.

---

## Features

### Expense Management

* Add new expenses with:

  * Expense title
  * Amount
  * Category
  * Date
* View all saved expenses in a structured table
* Delete individual expenses
* Persistent cloud-based storage using Firestore

### Expense Summary

The dashboard automatically calculates:

* **Total Expenses** — number of recorded transactions
* **Total Amount Spent** — combined value of all recorded expenses

### Categories

Expenses can be organized into:

* Food
* Travel
* Shopping
* Bills
* Other

### User Interface

* Responsive layout
* Clean and modern design
* Desktop and mobile friendly
* Simple expense-entry workflow
* Clear expense summary
* Accessible table-based expense management

---

## Tech Stack

| Technology                  | Purpose                                    |
| --------------------------- | ------------------------------------------ |
| **Python**                  | Backend programming                        |
| **FastAPI**                 | Local web application server               |
| **Jinja2**                  | HTML template rendering                    |
| **HTML5**                   | Application structure                      |
| **CSS3**                    | Styling and responsive layout              |
| **JavaScript (ES Modules)** | Client-side logic and Firebase interaction |
| **Firebase Firestore**      | Cloud database                             |
| **Firebase Hosting**        | Production frontend deployment             |
| **Git & GitHub**            | Version control and source management      |

---

## Architecture

```text
                         ┌──────────────────────┐
                         │       User           │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   Web Interface      │
                         │ HTML + CSS + JS       │
                         └──────────┬───────────┘
                                    │
                         Firebase Web SDK
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   Cloud Firestore    │
                         │                      │
                         │   expenses           │
                         │   ├── title          │
                         │   ├── amount         │
                         │   ├── category       │
                         │   └── date           │
                         └──────────────────────┘

Local Development:

Browser
   │
   ▼
FastAPI
   │
   └── Jinja2 → templates/index.html
```

The deployed frontend communicates directly with Firebase Firestore through the Firebase Web SDK.

FastAPI is used as the local development server and template-rendering layer.

---

## Project Structure

```text
personal-expense-tracker/
│
├── main.py
├── requirements.txt
├── README.md
├── .gitignore
├── firebase.json
├── .firebaserc
│
├── templates/
│   └── index.html
│
├── static/
│   ├── script.js
│   └── style.css
│
└── public/
    ├── index.html
    └── static/
        ├── script.js
        └── style.css
```

### Directory Responsibilities

**`main.py`**

Initializes the FastAPI application, serves the frontend template, and mounts static assets during local development.

**`templates/`**

Contains the Jinja2 HTML template used by FastAPI.

**`static/`**

Contains the main CSS and JavaScript source files used during local development.

**`public/`**

Contains the frontend files prepared for Firebase Hosting deployment.

**`firebase.json`**

Contains Firebase Hosting configuration.

**`requirements.txt`**

Contains the Python dependencies required to run the FastAPI application.

---

## Firestore Data Model

The application stores expense records inside an `expenses` collection.

Each document contains:

```text
expenses/
└── <expense_id>/
    ├── title
    ├── amount
    ├── category
    └── date
```

Example:

```json
{
  "title": "Lunch",
  "amount": 500,
  "category": "Food",
  "date": "2026-09-29"
}
```

Firestore automatically generates a unique document ID for each expense.

---

## Application Flow

### Adding an Expense

```text
User enters expense
        ↓
JavaScript reads form values
        ↓
Input validation
        ↓
Firebase addDoc()
        ↓
Firestore expenses collection
        ↓
Expenses reloaded
        ↓
Updated table + totals
```

### Deleting an Expense

```text
User clicks Delete
        ↓
Expense document ID identified
        ↓
Firebase deleteDoc()
        ↓
Firestore document removed
        ↓
Expenses reloaded
        ↓
Updated table + totals
```

### Loading Expenses

When the application loads, JavaScript retrieves the saved documents from Firestore using `getDocs()` and dynamically builds the expense table.

The total number of records and total spending are calculated from the retrieved data.

---

## Local Development

### Prerequisites

Make sure you have installed:

* Python 3.10+
* Git
* A Firebase project
* A modern web browser

### 1. Clone the repository

```bash
git clone https://github.com/haziqashakirkhan/personal-expense-tracker.git
```

### 2. Navigate into the project

```bash
cd personal-expense-tracker
```

### 3. Create a virtual environment

Windows:

```bash
python -m venv .venv
```

### 4. Activate the environment

Git Bash:

```bash
source .venv/Scripts/activate
```

PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

### 5. Install dependencies

```bash
pip install -r requirements.txt
```

### 6. Start FastAPI

```bash
uvicorn main:app --reload
```

### 7. Open the application

```text
http://127.0.0.1:8000
```

---

## Firebase Configuration

The frontend uses the Firebase Web SDK to communicate with Firestore.

Firebase configuration is initialized in:

```text
static/script.js
```

The application uses:

* Firebase App
* Cloud Firestore
* Firebase Web SDK

No Firebase Admin SDK or server-side service-account credentials are required by this application.

### Security Considerations

Firebase Web configuration values such as the API key are intended to be included in client-side applications. They should not be treated as a replacement for Firestore Security Rules.

For production applications, Firestore Security Rules should restrict access according to the application's authentication and authorization requirements.

Private Firebase Admin SDK service-account credentials should never be committed to GitHub.

---

## Firebase Hosting

The frontend is deployed using Firebase Hosting.

The production files are stored in:

```text
public/
```

Firebase Hosting uses the configuration defined in:

```text
firebase.json
```

Deployment can be performed with:

```bash
firebase deploy --only hosting
```

### Live Application

**https://personal-expense-tracker-1a342.web.app/**

---

## Dependencies

The backend uses a lightweight Python stack:

```text
fastapi
uvicorn
jinja2
```

Install them with:

```bash
pip install -r requirements.txt
```

Firebase functionality is handled through the Firebase JavaScript SDK loaded by the frontend.

---

## Version Control

Git is used for source control and GitHub is used to host the project repository.

The project follows a basic development workflow:

```text
Develop
   ↓
Test locally
   ↓
Commit changes
   ↓
Push to GitHub
   ↓
Deploy frontend
```

---

## Future Improvements

Potential improvements for future versions include:

* Firebase Authentication
* User-specific expense collections
* Edit existing expenses
* Expense search and filtering
* Monthly and yearly spending summaries
* Category-based analytics
* Spending charts and visualizations
* Export expenses to CSV
* Pagination for large datasets
* Dark/light theme preferences
* Stronger Firestore security rules
* Improved input validation
* Automated deployment through GitHub Actions

---

## Learning Outcomes

This project provided practical experience with:

* Building a web application with FastAPI
* Structuring frontend assets with HTML, CSS, and JavaScript
* Working with REST-style application architecture
* Connecting a frontend application to a cloud database
* Performing Firestore CRUD operations
* Handling asynchronous JavaScript operations
* Managing persistent application data
* Using Git and GitHub for version control
* Deploying a web application using Firebase Hosting
* Managing separate development and deployment environments

---

## License

This project is intended for educational and portfolio purposes.

---

## Author

### Haziqa Shakir Khan

AI & Data Science Student | Aspiring AI Engineer

Interested in **Artificial Intelligence, Machine Learning, Data Science, and practical software development**.

**GitHub:**
https://github.com/haziqashakirkhan

**LinkedIn:**
https://www.linkedin.com/in/haziqa-shakir-khan-8923513a6/
