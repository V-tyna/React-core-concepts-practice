import styles from './ModalWindow.module.css';

function Backdrop({ status, closeWindowHandler}) {
	return (
		<div
			className={`${status ? styles['overlay'] : styles['display-none']}`}
			onClick={closeWindowHandler}
		></div>
	);
}

export default Backdrop;
