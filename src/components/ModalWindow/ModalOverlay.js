import Button from '../User/UI/Button';

import styles from './ModalWindow.module.css';

function ModalOverlay({status, errorContent, closeWindowHandler}) {
  return ( <div className={`${status ? styles['modal-container'] : styles['display-none']}`}>
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
</div> );
}

export default ModalOverlay;