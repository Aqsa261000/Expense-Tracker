import React, { useState } from 'react';

const ExpenseForm = ({ AddExpense }) => {
  const [expenseData, setExpenseData] = useState('');
  const onSubmitHandler = (e) => {
    e.preventDefault();
    AddExpense(expenseData);
  };

  const onChangeHandler = (e) => {
    setExpenseData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="expenseTitle">Expense Title</label>
          <input
            type="text"
            id="expenseTitle"
            name="title"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="expenseName">Expense Price</label>
          <input
            type="number"
            id="expenseName"
            name="price"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="expenseDate">Expense Date</label>
          <input
            type="date"
            id="expenseDate"
            name="date"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
