import { useState } from 'react';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses({ expenses }) {
	const [selectedYear, setSelectedYear] = useState('2021');

	const selectYearHandler = (year) => {
		setSelectedYear(year);
	};

	const filteredExpenses = expenses.filter(
		(item) => item.date.getFullYear() === +selectedYear
	);

	return (
		<div>
			<ExpensesFilter
				onSelectYear={selectYearHandler}
				selectedYear={selectedYear}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList filteredExpenses={filteredExpenses} />
		</div>
	);
}

export default Expenses;
