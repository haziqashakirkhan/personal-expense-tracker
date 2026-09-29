import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyCGpwOM23eULSExuzs50VHKcfWbbytAF3c",
    authDomain: "personal-expense-tracker-1a342.firebaseapp.com",
    projectId: "personal-expense-tracker-1a342",
    storageBucket: "personal-expense-tracker-1a342.firebasestorage.app",
    messagingSenderId: "128892288099",
    appId: "1:128892288099:web:cc2a1eb4f52a2dc2be4c56"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


const expenseForm = document.getElementById("expenseForm");
const expenseTableBody = document.getElementById("expenseTableBody");
const emptyMessage = document.getElementById("emptyMessage");

const totalExpenses = document.getElementById("totalExpenses");
const totalAmount = document.getElementById("totalAmount");


// Add Expense
expenseForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const amount = Number(document.getElementById("amount").value);
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;


    if (!title || !amount || !category || !date) {
        alert("Please fill in all fields.");
        return;
    }


    try {

        await addDoc(collection(db, "expenses"), {
            title: title,
            amount: amount,
            category: category,
            date: date
        });


        expenseForm.reset();

        await loadExpenses();

    } catch (error) {

        console.error("Error adding expense:", error);

        alert("Failed to add expense.");

    }

});


// Load Expenses
async function loadExpenses() {

    try {

        const querySnapshot = await getDocs(
            collection(db, "expenses")
        );


        expenseTableBody.innerHTML = "";

        let expenseCount = 0;
        let amountTotal = 0;


        if (querySnapshot.empty) {

            emptyMessage.style.display = "block";

        } else {

            emptyMessage.style.display = "none";


            querySnapshot.forEach((expense) => {

                const data = expense.data();

                expenseCount++;

                amountTotal += Number(data.amount);


                const row = document.createElement("tr");


                row.innerHTML = `
                    <td>${data.title}</td>
                    <td>Rs. ${Number(data.amount).toLocaleString()}</td>
                    <td>${data.category}</td>
                    <td>${data.date}</td>
                    <td>
                        <button
                            class="delete-btn"
                            data-id="${expense.id}"
                        >
                            Delete
                        </button>
                    </td>
                `;


                expenseTableBody.appendChild(row);

            });

        }


        totalExpenses.textContent = expenseCount;

        totalAmount.textContent =
            `Rs. ${amountTotal.toLocaleString()}`;


        // Delete buttons
        document.querySelectorAll(".delete-btn").forEach((button) => {

            button.addEventListener("click", async () => {

                const expenseId = button.dataset.id;

                await deleteExpense(expenseId);

            });

        });


    } catch (error) {

        console.error("Error loading expenses:", error);

        alert("Failed to load expenses.");

    }

}


// Delete Expense
async function deleteExpense(expenseId) {

    try {

        await deleteDoc(
            doc(db, "expenses", expenseId)
        );

        await loadExpenses();

    } catch (error) {

        console.error("Error deleting expense:", error);

        alert("Failed to delete expense.");

    }

}


// Load expenses when page opens
loadExpenses();