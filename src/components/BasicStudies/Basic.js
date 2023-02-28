import { useContext, useState } from 'react';
import AuthContext from './store/auth-context';

// import MainHeader from './LoginApp/MainHeader/MainHeader';
import AppStyle from './StyleBlock/AppStyle';
import BasicForm from './BasicForm';
import Expenses from './Expenses/Expenses';
import Home from './LoginApp/Home/Home';
import Login from './LoginApp/Login/Login';
import NewExpense from './NewExpense/NewExpense';
import User from './User/User';

function Basic() {
  const dummyExpenses = [
		{
			id: 1,
			date: new Date('August 17, 2022 03:24:00'),
			title: 'Car insurance',
			price: 294.67,
		},
		{
			id: 2,
			date: new Date('May 23, 2021 03:24:00'),
			title: 'Electricity',
			price: 35.56,
		},
		{
			id: 343564,
			date: new Date('October 23, 2021 03:24:00'),
			title: 'Something else',
			price: 13.12,
		},
		{
			id: 3,
			date: new Date('September 17, 2020 03:24:00'),
			title: 'Water',
			price: 15.17,
		},
	];

	const [expenses, setExpenses] = useState(dummyExpenses);
  const ctx = useContext(AuthContext);

	const addExpenseHandler = (expenseData) => {
		setExpenses((prevState) => [expenseData, ...prevState]);
	};
	return (
		<>
			{/* <MainHeader /> */}
			<BasicForm />
			<main>
				{!ctx.isLoggedIn && <Login />}
				{ctx.isLoggedIn && <Home />}
			</main>
			<User />
			<AppStyle />
			<div className='body-container'>
				<NewExpense onAddExpense={addExpenseHandler} />
				<Expenses expenses={expenses} />
			</div>
		</>
	);
}

export default Basic;