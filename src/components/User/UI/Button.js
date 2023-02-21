import styles from './Button.module.css';

function Button({ textContent, onClickHandler }) {
	const clickHandler = () => {
		onClickHandler();
	}
	return (
		<div className={styles['button-area']}>
			<button type='submit' className={styles['btn']} onClick={clickHandler}>
				{ textContent }
			</button>
		</div>
	);
}

export default Button;
