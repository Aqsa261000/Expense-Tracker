import React from 'react';
import './style.css';
const Expense = ({ expense }) => {
  console.log(expense);
  return (
<>

    <div className="lists">
      
        <li className="list">
          <div>{expense.title}</div>
          <div>{expense.price}</div>
          <div>{expense.date}</div>
        </li>
    </div>
    </>
  );
};

export default Expense;
