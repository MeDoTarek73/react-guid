import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({ title: '', amount: '', date: '' });
    const TitleChangeHandler = (event) => {
        console.log(event.target.value);
        setUserInput((pre) => {
            return { ...pre, title: event.target.value }
        });
    };
    const AmountChangeHandler = (event) => {
        console.log(event.target.value);
        setUserInput((pre) => {
            return { ...pre, amount: event.target.value }
        });
    };
    const DateChangeHandler = (event) => {
        console.log(event.target.value);
        setUserInput((pre) => {
            return { ...pre, date: event.target.value }
        });
    };
    const clear = () => {
        setUserInput({ title: '', amount: '', date: '' });
    };
    const submitHandler = (event) => {
        event.preventDefault();
        console.log('Submitted!', userInput);
        props.onSaveExpenseData(userInput);
        clear();
    };
    
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense_controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={userInput.title} onChange={TitleChangeHandler} />
                </div>
                <div className='new-expense_control'>
                    <label>Amount</label>
                    <input type='number' value={userInput.amount} min='0.01' step='0.01' onChange={AmountChangeHandler} />
                </div>
                <div className='new-expense_control'>
                    <label>Date</label>
                    <input type='date' value={userInput.date} min='2019-01-01' max='2022-12-31' onChange={DateChangeHandler} />
                </div>
            </div>
            <div className='new-expense_actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;