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
    title: 'EFG Road',
    price: 2700,
    date: '2023-09-31',
  },
];
const App = () => {
  const [expenseList, setExpenseList] = useState(expenses);
  const AddExpense = (newExpense) => {
    setExpenseList((prevData) => [ newExpense, ...prevData]);
  };
  return (
    <>
      <DefaultForm>
        <ExpenseForm AddExpense={AddExpense} />
        <h1 style={{ textAlign: 'center' }}>Expense List</h1>
        <ExpenseList expenseList={expenseList} />
      </DefaultForm>
    </>
  );
};
export default App;
