import { useState } from 'react';
import Button from '../User/UI/Button';

import styles from './ModalWindow.module.css';

function ModalWindow({ errorContent, onClose }) {
  const [status, setStatus] = useState(true);
  console.log('Modal window opened.');

	const closeWindowHandler = () => {
    onClose();
		setStatus(false);
	};
   
	return (
		<div className={`${status ? styles['overlay'] : styles['display-none']}`} onClick={closeWindowHandler}>
			<div className={`${status ? styles['modal-container'] : styles['display-none']}`}>
				<div className={styles['invalid-header']}>
					<h4>Invalid input</h4>
				</div>
				<div className={styles['error-container']}>
					<div className={styles['text-container']}>
						<p>{errorContent}</p>
					</div>
					<Button
						textContent={'Okay'}
						onClickHandler={closeWindowHandler}
					/>
				</div>
			</div>
		</div>
	);
}

export default ModalWindow;
