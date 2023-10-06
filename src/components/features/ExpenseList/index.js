import React from 'react';
import './style.css';
import Expense from './expense';
import ExpenseForm from '../ExpenseForm';
const ExpenseList = (props) => {
  console.log(props.expenseList);
  return (
    <>
      
      {/* <ExpenseForm/> */}
      <div className="listheadings">
        <h2>Expense Title</h2>
        <h2>Expense Price</h2>
        <h2>Expense Date</h2>
        <h2>Action</h2>
      </div>
      <div>
        {props.expenseList.length === 0 && <h3>No expenses found!</h3>}

        {props.expenseList &&
          props.expenseList.length > 0 &&
          props.expenseList.map((data) => (
            <Expense key={data.title} expense={data} />
          ))}
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default ExpenseList;
