# Personal Expense Tracker

A responsive web application for managing personal expenses using **FastAPI** and **Firebase Cloud Firestore**. The application allows users to add, view, and delete expenses while automatically tracking the total number of expenses and the total amount spent.

## Live Demo

**[Open Personal Expense Tracker](https://personal-expense-tracker-1a342.web.app/)**

## Features

* Add new expenses
* Enter expense title, amount, category, and date
* Store expense records in Firebase Cloud Firestore
* Display all saved expenses in a structured table
* Delete individual expenses
* Automatically calculate:

  * Total number of expenses
  * Total amount spent
* Persistent cloud-based data storage
* Responsive user interface
* Clean and simple expense management workflow

## Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* Firebase Web SDK

### Backend

* Python
* FastAPI
* Jinja2

### Database

* Firebase Cloud Firestore

### Deployment

* Firebase Hosting

## Expense Categories

The application supports the following categories:

* Food
* Travel
* Shopping
* Bills
* Other

## How It Works

The application follows a simple expense management workflow:

1. The user enters the expense title, amount, category, and date.
2. JavaScript validates the entered information.
3. The expense is stored in the `expenses` collection in Firebase Cloud Firestore.
4. Saved expenses are retrieved from Firestore and displayed in the expense table.
5. The application calculates the total number of expenses and the total amount spent.
6. Users can delete individual expenses directly from the table.
7. Because the records are stored in Firestore, the data remains available after refreshing the page or r
