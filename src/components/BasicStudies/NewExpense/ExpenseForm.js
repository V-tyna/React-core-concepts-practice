import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onSaveExpenseData, onSetStatus }) {

  const initialDate = new Date().toLocaleDateString().split('.').reverse().join('-');
  const [date, setDate] = useState(initialDate);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const handlerDate = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expense = {
      price: +price, title, date: new Date(date)
    };
    onSaveExpenseData(expense);
    setTitle('');
    setPrice('');
    setDate(initialDate);
    onSetStatus(false);
  };

  const closeFormHandler = () => {
    onSetStatus(false);
  };

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' onChange={titleChangeHandler} value={title}/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={price}/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input onChange={handlerDate} type='date' min='2021-02-09' max={initialDate} value={date}/>
				</div>
			</div>
			<div className='new-expense__actions'>
        <button type='button' onClick={closeFormHandler}>Cancel</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
}

export default ExpenseForm;
