import { useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import UserCard from './UserCard';
import UserForm from './UserForm';

function User() {
  const [isShow, setIsShow] = useState(false);
  const [error, setError] = useState(null);
	const dummyUsers = [
		{ id: '83fg7r3y98', name: 'Max', age: 31 },
		{ id: 'd3n292n74f', name: 'Margo', age: 30 },
	];
	const [users, setUsers] = useState(dummyUsers);

  const errorHandler = (err) => {
    setIsShow(true);
    setError(err);
  }
	const setUserData = (data) => {
		setUsers((prev) => [data, ...prev]);
	};

  const closeHandler = () => {
    setIsShow(false);
    setError(null);
    console.log('Modal window closed.');
  }
	return (
		<div>
			{ isShow ? <ModalWindow errorContent={error} onClose={closeHandler}/> : null}
			<UserForm onSetUserData={setUserData} onError={errorHandler}/>
			{users.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</div>
	);
}

export default User;