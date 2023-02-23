import styles from './UserCard.module.css';

function UserCard({ user }) {
	return (
			<div className={styles['user-card']}>
				<div>{user.name}</div>
				<div>{user.age} years old</div>
			</div>
	);
}

export default UserCard;
