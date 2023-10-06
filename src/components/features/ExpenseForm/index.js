import React, { useState } from 'react';
import './styles.css';

const ExpenseForm = ({ AddExpense }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
      <div className="addbutton">
        <button
          type="button"
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
          onClick={openModal}
        >
          Add Expense
        </button>
      </div>

      {isModalOpen && (
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
          <div className='twobuttons'>
            <button type="submit">Submit</button>
            <button type="submit" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      )}
      {/* <div className="addbutton">
        <button
          type="button"
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
        >
          Add Expense
        </button>
      </div>
      

      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <h2>Add Product</h2>
              <form>
                <div class="form-group row">
                  <label for="category" class="col-sm-2 col-form-label">Category</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="category" placeholder="Category" required/>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="subcategory" class="col-sm-2 col-form-label">Subcategory</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="subcategory" placeholder="Subcategory" required/>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="brand" class="col-sm-2 col-form-label">Brand</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="brand" placeholder="Brand" required/>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="title" class="col-sm-2 col-form-label">Title</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="title" placeholder="Title" required/>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="images" class="col-sm-2 col-form-label">Add Images</label>
                  <div class="col-sm-10">
                    <input type="file" accept="image/*" onchange="handleFileSelect(event)" class="form-control" id="images" placeholder="Choose File" multiple="multiple" required/>
                    <ul id="fileList"></ul>
                  
                  </div>
                </div>
                {/* <!-- <div class="form-group row">
                                    <label for="title" class="col-sm-2 col-form-label">Title</label>
                                    
                                        <div class="col-sm-5">
                                            <input type="file" class="form-control" id="inputGroupFile01" >
                                            <label class="cf custom-file-label ml-4 py-1" for="inputGroupFile01">Choose file</label>

                                          
                                    </div>
                                  </div> --> */}
      {/* <div class="form-group row">
                  <label for="description" class="col-sm-2 col-form-label">Description</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="description" placeholder="Description" required/>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="price" class="col-sm-2 col-form-label">Price</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="price" placeholder="Price" required/>
                  </div>
                </div> */}
      {/* <!-- <fieldset class="form-group">
                                  <div class="row">
                                    <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                                    <div class="col-sm-10">
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                                        <label class="form-check-label" for="gridRadios1">
                                          First radio
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                                        <label class="form-check-label" for="gridRadios2">
                                          Second radio
                                        </label>
                                      </div>
                                      <div class="form-check disabled">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
                                        <label class="form-check-label" for="gridRadios3">
                                          Third disabled radio
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                                <div class="form-group row">
                                  <div class="col-sm-2">Checkbox</div>
                                  <div class="col-sm-10">
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" id="gridCheck1">
                                      <label class="form-check-label" for="gridCheck1">
                                        Example checkbox
                                      </label>
                                    </div>
                                  </div>
                                </div> 


                <div class="form-group row">
                  <div class="button col-sm-12">
                    <button type="submit">Add Product</button>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ExpenseForm;
