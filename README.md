# Personal Expense Tracker

A simple and responsive expense management web application built with **FastAPI** and **Firebase Firestore**. Users can add, view, and delete expenses while tracking the total number of expenses and the total amount spent.

## Features

* Add new expenses
* Enter expense title, amount, category, and date
* Store expenses in Firebase Firestore
* Display all saved expenses in a table
* Delete individual expenses
* Automatically calculate:

  * Total number of expenses
  * Total amount spent
* Responsive and clean user interface
* Persistent cloud-based data storage

## Tech Stack

**Frontend**

* HTML5
* CSS3
* JavaScript

**Backend**

* Python
* FastAPI
* Jinja2

**Database**

* Firebase Cloud Firestore

**Deployment**

* Firebase Hosting

## Project Structure

```text
personal-expense-tracker/
│
├── main.py
├── requirements.txt
├── README.md
├── .gitignore
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    └── script.js
```

## Expense Categories

The application currently supports:

* Food
* Travel
* Shopping
* Bills
* Other

## How It Works

1. The user enters the expense details.
2. JavaScript validates the form data.
3. The expense is added to the `expenses` collection in Firebase Firestore.
4. Saved expenses are retrieved from Firestore and
