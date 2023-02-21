import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const addExpenseHandler = (expenseData) => {
    console.log('Expense data in APP: ', expenseData);
  };

  return (
    <div>
      <header>
        <h1>Hello world</h1> 
      </header>
      <div className='body-container'>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses />
      </div>
    </div>
  );
}

export default App;
