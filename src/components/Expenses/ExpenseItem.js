import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [expenseItem, setExpenseItem] = useState(props);
  const clickHandler = () => {
    setExpenseItem((pre) => {
     return {...pre, title: 'Updated!'}
    });
  };
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{expenseItem.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler} >Change Title</button>
      </div>
    </div>
  );
}

export default ExpenseItem;