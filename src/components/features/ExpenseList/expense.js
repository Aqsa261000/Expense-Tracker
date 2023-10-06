import React from 'react';
import './style.css';
const Expense = ({ expense }) => {
  console.log(expense);
  return (
    <>
      <div className="list">
        <ul className="listitems">
          <li>{expense.title}</li>
          <li>{expense.price}</li>
          <li>{expense.date}</li>
        </ul>
        <div className="buttons">
          <button><i class="fa-regular fa-pen-to-square"></i></button>
          <button><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
    </>
  );
};

export default Expense;
