import { useState } from 'react';
import Button from './UI/Button';

import styles from './UserForm.module.css';

function UserForm({ onSetUserData, onError }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  
  const ageInputHandler = (e) => {
    setAge(+e.target.value);
  };

  const nameInputHandler = (e) => {
    setName(e.target.value.trim());
  };

  const userFormHandler = (e) => {
    e.preventDefault();
    if (age < 1 || age > 120) {
      onError('User age should be greater than 1 and less than 120.');
      return;
    }
    if (name.length < 1) {
      onError('User name filed can\'t be empty.');
      return;
    }
    const userData = {
      name, age, id: new Date().toLocaleString()
    };
    setAge('');
    setName('');
    onSetUserData(userData);
  };

  const addUser = () => {
    console.log('User form submitted.');
  }

	return (
		<form onSubmit={userFormHandler} className={styles['user-form-control']}>
			<label>Name: </label>
			<input onChange={nameInputHandler} value={name} />
			<label>Age (years): </label>
			<input type='number' onChange={ageInputHandler} value={age} />
      <Button textContent={'Add user'} onClickHandler={addUser}/>
		</form>
	);
}

export default UserForm;
