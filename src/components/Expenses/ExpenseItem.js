import { useState } from 'react';


import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem({ expense: {date, title, price} }) {
  const [changeableTitle, setChangeableTitle] = useState(title);
  const handleChangeTitle = (e) => {
    setChangeableTitle('Updated!');
    console.log('Clicked!', e);
  };

  return (
    <Card className='expense-container'>
      <ExpenseDate date={date}/>
      <div className='expense-description'>
        <h4>{ changeableTitle }</h4>
      </div>
      <div className='expense-price'>${ price }</div>
      <button onClick={handleChangeTitle}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;