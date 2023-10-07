import React from 'react';
import './style.css';
const Expense = ({
  expense,
  EditExpense,
  isModalOpen,
  openModal,
  closeModal,
  DeleteExpense,
}) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  const EditHandler = () => {
    EditExpense(expense);
  };
  const DeleteHandler = () => {
    DeleteExpense(expense.id);
  };
  // console.log(expense);
  return (
    <>
      <div className="list">
        <ul className="listitems">
          <li>{expense.title}</li>
          <li>{expense.price}</li>
          <li>{expense.date}</li>
        </ul>
        <div className="buttons">
          <button
            type="button"
            onClick={() => {
              EditHandler();
              openModal();
            }}
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <button onClick={DeleteHandler}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </>
  );
};

export default Expense;
