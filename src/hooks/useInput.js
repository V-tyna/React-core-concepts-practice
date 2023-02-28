import { useReducer } from 'react';

const inputReducer = (prevState, action) => {
	switch (action.type) {
		case 'CHANGE_VALUE':
			return {
				...prevState,
				enteredValue: action.payload,
			};
      case 'TOUCHED':
        return {
          ...prevState,
          isTouched: true,
        };
        case 'RESET':
          return {
            enteredValue: '',
				    isTouched: false,
          };
		default:
			return {
				enteredValue: '',
				isTouched: false,
			};
	}
};

const useInput = (classes, validationFn, className = 'control') => {
	const [inputState, inputDispatch] = useReducer(inputReducer, {
		enteredValue: '',
		isTouched: false,
	});

	const isValueValid = validationFn(inputState.enteredValue);
	const isInvalid = !isValueValid && inputState.isTouched;

	const inputClasses = `${classes[className]} ${isInvalid && classes.invalid}`;

	const valueChangeHandler = (e) => {
		inputDispatch({ type: 'CHANGE_VALUE', payload: e.target.value });
	};

	const inputBlurHandler = () => {
		inputDispatch({ type: 'TOUCHED'});
	};

	const resetInput = () => {
    inputDispatch({ type: 'RESET'});
	};

	return {
		inputState,
		valueChangeHandler,
		inputBlurHandler,
    resetInput,
    inputClasses,
    isValueValid,
    isInvalid
	};
};

export default useInput;
