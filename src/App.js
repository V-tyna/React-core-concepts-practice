import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import AppStyle from './components/StyleBlock/AppStyle';
import User from './components/User/User';

function App() {
	const dummyExpenses = [
		{ id: 1, date: new Date('August 17, 2022 03:24:00'), title: 'Car insurance', price: 294.67 },
		{ id: 2, date: new Date('May 23, 2021 03:24:00'), title: 'Electricity', price: 35.56 },
		{ id: 343564, date: new Date('October 23, 2021 03:24:00'), title: 'Something else', price: 13.12 },
		{ id: 3, date: new Date('September 17, 2020 03:24:00'), title: 'Water', price: 15.17 },
	];

  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevState) => [expenseData, ...prevState]);
  };

  return (
    <div>
      <header>
        <h1>Hello world</h1> 
      </header>
      <User />
      <AppStyle /> 
      <div className='body-container'>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
