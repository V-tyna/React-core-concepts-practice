import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Modal.css';

const Modal = (props) => {
	const modalRef = useRef(null);

  const animationTiming = {
    enter: 400,
    exit: 1000
  }

	return (
		<CSSTransition
			nodeRef={modalRef}
			in={props.show}
			timeout={animationTiming}
			mountOnEnter
			unmountOnExit
      classNames={{
        enter: '',
        enterActive: 'modal-open',
        exit: '',
        exitActive: 'modal-close'
      }}
		>
			{(state) => {
				return (
					<div ref={modalRef} className='modal'>
						<h1>A Modal</h1>
						<button className='btn' onClick={props.closed}>
							Dismiss
						</button>
					</div>
				);
			}}
		</CSSTransition>
	);
};

export default Modal;
