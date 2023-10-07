import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/features/ExpenseForm';
import ExpenseList from './components/features/ExpenseList';
import DefaultForm from './components/layout/DefaultLayout';
const expenses = [
  {
    title: 'ABC Title',
    price: 1700,
    date: '2023-09-29',
  },
  {
    title: 'DEF Road',
    price: 2700,
    date: '2023-09-30',
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [expenseList, setExpenseList] = useState(expenses);
  const [expenseDataa, setExpenseDataa] = useState(null);
  const AddExpense = (newExpense) => {
    setExpenseList((prevData) => [newExpense, ...prevData]);
  };
  const EditExpense = (data) => {
    setExpenseDataa(data);
    // console.log('expenseDataa in EditExpense:', expenseDataa); // Add this line
    // console.log(expenseDataa);
    // console.log(data);
  };
  const updateExpenseList = (data) => {
    // console.log(data);
    const updateArray = expenseList.map((expense) => {
      if (expense.id === data.id) {
        return {
          title: data.title,
          price: data.price,
          date: data.date,
          id: data.id,
        };
      }
      return expense;
    });
    setExpenseList(updateArray);
    setExpenseDataa(null);
  };

  const DeleteExpense = (id) => {
    const filterArray = expenseList.filter((data) => data.id !== id);

    setExpenseList(filterArray);
  };

  // useEffect(() => {
  //   console.log('expenseDataa in useEffect:', expenseDataa);
  // }, [expenseDataa]);

  return (
    <>
      <DefaultForm>
        <div className="mainheadings">
          <h1>Expense Tracker</h1>
        </div>
        <ExpenseForm
          AddExpense={AddExpense}
          ExpenseDataa={expenseDataa}
          updateExpenseList={updateExpenseList}
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
        />

        <ExpenseList
          expenseList={expenseList}
          EditExpense={EditExpense}
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
          DeleteExpense={DeleteExpense}
        />
      </DefaultForm>
    </>
  );
};
export default App;
