import classes from './Input.module.css';

function Input({ label, input, onChangeHandler }) {
	return (
		<div className={classes.input}>
			<label htmlFor={input.id}>{label}</label>
			<input {...input} onChange={(e) => onChangeHandler(e.target.value)} />
		</div>
	);
}

export default Input;
