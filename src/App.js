import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/features/ExpenseForm';
import ExpenseList from './components/features/ExpenseList';
import DefaultForm from './components/layout/DefaultLayout';
const expenses = [
  {
    title: 'ABC Title',
    price: 1700,
    date: '2023-09-30',
  },
  {
    title: 'DEF Road',
    price: 2700,
    date: '2023-09-31',
  },
  {
    title: 'GHI Road',
    price: 3700,
    date: '2023-10-01',
  },
  {
    title: 'JKL Road',
    price: 4700,
    date: '2023-10-02',
  },
];
const App = () => {
  const [expenseList, setExpenseList] = useState(expenses);
  const AddExpense = (newExpense) => {
    setExpenseList((prevData) => [newExpense, ...prevData]);
  };
  return (
    <>
      <DefaultForm>
        <div className="mainheadings">
          <h1>Expense Tracker</h1>
        </div>
        <ExpenseForm AddExpense={AddExpense} />

        <ExpenseList expenseList={expenseList} />
      </DefaultForm>
    </>
  );
};
export default App;
