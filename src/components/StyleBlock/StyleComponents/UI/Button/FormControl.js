import styled from 'styled-components';

const FormControl = styled.div`
	margin: 0.5rem 0;

	& label {
		font-weight: bold;
		display: block;
		margin-bottom: 0.5rem;
    color: ${props => props.invalid ? 'rgb(255 82 82)' : 'black'};
	}

	& input {
		display: block;
		width: 100%;
		border:  ${props => props.invalid ? ' 2px solid rgb(255 82 82)' : '1px solid #ccc'};
    background-color: ${props => props.invalid ? 'rgb(255 202 202)' : 'transparent'};
		font: inherit;
		line-height: 1.5rem;
		padding: 0 0.25rem;
	}

	& input:focus {
		outline: none;
		background: #fff8ea;
		border-color: #815b5b;
	}

	/* &.invalid input {
		border: 2px solid rgb(255 82 82);
		background-color: rgb(255 202 202);
	}

	&.invalid label {
		color: 2px solid rgb(255 82 82);
	} */
`;

export default FormControl;
