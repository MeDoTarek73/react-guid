import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewEspense = (props) => {
    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            date: new Date(enteredExpenseData.date),
            id: Math.random().toString()
        };
        console.log(expenseData); 
        props.onAddExpenseItem(expenseData);
    };
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseData} />
        </div>
    );
};

export default NewEspense;