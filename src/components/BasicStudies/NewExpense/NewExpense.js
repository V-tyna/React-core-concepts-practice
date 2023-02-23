import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense({ onAddExpense }) {
	const [expenseFormStatus, setExpenseFormStatus] = useState(false);
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: new Date().toISOString() + Math.random(),
		};
		console.log('Save handler parent: ', expenseData);
		onAddExpense(expenseData);
	};

	const openFormHandler = () => {
		setExpenseFormStatus(true);
	};

	const setStatusHandler = (status) => {
		setExpenseFormStatus(status);
	};

	const openFormButton = (
		<div>
			<button onClick={openFormHandler}>Add new expense</button>
		</div>
	);

	return (
		<div className='new-expense'>
			{expenseFormStatus ? (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onSetStatus={setStatusHandler}
				/>
			) : (
				openFormButton
			)}
		</div>
	);
}

export default NewExpense;
