import React from 'react';
import './style.css';
import Expense from './expense';
// import ExpenseForm from '../ExpenseForm';
const ExpenseList = ({
  expenseList,
  EditExpense,
  isModalOpen,
  openModal,
  closeModal,
  DeleteExpense,
}) => {
  // console.log(props.expenseList);
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
        {expenseList.length === 0 && <h3>No expenses found!</h3>}

        {expenseList &&
          expenseList.length > 0 &&
          expenseList.map((data) => (
            <Expense
              key={data.id}
              expense={data}
              EditExpense={EditExpense}
              isModalOpen={isModalOpen}
              openModal={openModal}
              closeModal={closeModal}
              DeleteExpense={DeleteExpense}
            />
          ))}
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default ExpenseList;
