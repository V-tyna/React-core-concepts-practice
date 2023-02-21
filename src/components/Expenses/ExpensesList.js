import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList({ filteredExpenses }) {
  let foundExpenses = <div className='expenses-list__fallback'><h4>No expenses...</h4></div>;

	if(filteredExpenses.length > 0) {
		foundExpenses = filteredExpenses.map((item) => (
			<ExpenseItem key={item.id} expense={item} />
		))
	}
  return (<div className='expenses-list'>{foundExpenses}</div>);
}

export default ExpensesList;