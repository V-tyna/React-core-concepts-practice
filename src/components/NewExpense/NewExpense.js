import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense({ onAddExpense }) {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: new Date().toISOString() + Math.random()
		}
		console.log('Save handler parent: ', expenseData);
		onAddExpense(expenseData);
	};

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
}

export default NewExpense;
