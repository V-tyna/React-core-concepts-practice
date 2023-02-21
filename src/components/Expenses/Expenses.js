import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses() {
	const [selectedYear, setSelectedYear] = useState('2020');
	const expenses = [
		{ id: 1, date: new Date(), title: 'Car insurance', price: 294.67 },
		{ id: 2, date: new Date(), title: 'Electricity', price: 35.56 },
		{ id: 3, date: new Date(), title: 'Water', price: 15.17 },
	];

	const selectYearHandler = (year) => {
		console.log('Year in Parent component: ', year);
		setSelectedYear(year);
	};

	return (
		<div>
			<ExpensesFilter
				onSelectYear={selectYearHandler}
				selectedYear={selectedYear}
			/>
			<div>
				<ExpenseItem expenses={expenses[0]} />
				<ExpenseItem expenses={expenses[1]} />
				<ExpenseItem expenses={expenses[2]} />
			</div>
		</div>
	);
}

export default Expenses;
