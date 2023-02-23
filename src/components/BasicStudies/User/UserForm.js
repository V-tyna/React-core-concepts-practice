import { useRef } from 'react';
import Button from './UI/Button';

import styles from './UserForm.module.css';

function UserForm({ onSetUserData, onError }) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  
  const userFormHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredAge < 1 || enteredAge > 120) {
      onError('User age should be greater than 1 and less than 120.');
      return;
    }
    if (enteredName.length < 1) {
      onError('User name filed can\'t be empty.');
      return;
    }
    const userData = {
      name: enteredName, age: +enteredAge, id: new Date().toLocaleString()
    };
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    onSetUserData(userData);
  };

  const addUser = () => {
    console.log('User form submitted.');
  }

	return (
		<form onSubmit={userFormHandler} className={styles['user-form-control']}>
			<label>Name: </label>
			<input ref={nameInputRef} />
			<label>Age (years): </label>
			<input type='number' ref={ageInputRef} />
      <Button buttonType={'submit'} textContent={'Add user'} onClickHandler={addUser}/>
		</form>
	);
}

export default UserForm;
