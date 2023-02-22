import { useRef, useImperativeHandle, forwardRef } from 'react';

const Input = forwardRef(function Input({
	classes,
	isValid,
	type,
	label,
	inputId,
	value,
	onChangeHandler,
	validationHandler,
}, ref) {

	const reference = useRef();

  const activate = () => {
    reference.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate
    }
  });

	return (
		<div
			className={`${classes.control} ${
				isValid === false ? classes.invalid : ''
			}`}
		>
			<label htmlFor={inputId}>{label}</label>
			<input
				type={type}
				id={inputId}
				value={value}
				onChange={onChangeHandler}
				onBlur={validationHandler}
				ref={reference}
			/>
		</div>
	);
})

export default Input;
