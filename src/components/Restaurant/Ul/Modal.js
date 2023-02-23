import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

function Modal({ children, onHideCart }) {
	return ReactDOM.createPortal(
		<>
			<div className={classes.backdrop} onClick={onHideCart}></div>
			<div className={classes.modal}>
				<div className={classes.content}>{children}</div>
			</div>
		</>,
		document.getElementById('modal-root')
	);
}

export default Modal;
