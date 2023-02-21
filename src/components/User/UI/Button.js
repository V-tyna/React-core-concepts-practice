import styles from './Button.module.css';

function Button({ textContent, onClickHandler, buttonType }) {
	const clickHandler = () => {
		onClickHandler();
	}
	return (
		<div className={styles['button-area']}>
			<button type={buttonType || 'button'} className={styles['btn']} onClick={clickHandler}>
				{ textContent }
			</button>
		</div>
	);
}

export default Button;
