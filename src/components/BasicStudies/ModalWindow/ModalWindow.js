import { useState } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

function ModalWindow({ errorContent, onClose }) {
	const [status, setStatus] = useState(true);
	console.log('Modal window opened.');

	const closeWindowHandler = () => {
		onClose();
		setStatus(false);
	};

	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop
					status={status}
					closeWindowHandler={closeWindowHandler}
				/>,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					status={status}
					closeWindowHandler={closeWindowHandler}
					errorContent={errorContent}
				/>,
				document.getElementById('overlay-root')
			)}
		</>
	);
}

export default ModalWindow;
