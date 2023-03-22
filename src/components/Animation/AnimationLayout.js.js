import { useState } from 'react';
import Modal from './Modal/Modal';
import Backdrop from './Backdrop/Backdrop';
import List from './List/List';
import './AnimationLayout.css';
import { Transition } from 'react-transition-group';

function AnimationLayout() {
	const [isOpen, setIsOpen] = useState(false);
	const [showBlock, setShowBlock] = useState(true);

	const showModalHandler = () => {
		setIsOpen(true);
	};

	const closeModalHandler = () => {
		setIsOpen(false);
	};

	return (
		<div className='app'>
			<h1>React Animations</h1>
			<button
				className='btn'
				onClick={() => setShowBlock((prevShow) => !prevShow)}
				style={{ margin: '0.5rem auto' }}
			>
				Toggle
			</button>
			<Transition in={showBlock} timeout={300}>
				{(state) => (
					<div
						style={{
							backgroundColor: 'salmon',
							width: '100px',
							height: '100px',
							margin: '0.5rem auto',
							opacity: state === 'exited' ? 0 : 1,
							transition: 'opacity 0.4s ease-out',
						}}
					></div>
				)}
			</Transition>
			<br />
			<Modal show={isOpen} closed={closeModalHandler} />
			{isOpen && <Backdrop show={isOpen} />}
			<button className='btn' onClick={showModalHandler}>
				Open Modal
			</button>
			<h3>Animating Lists</h3>
			<List />
		</div>
	);
}

export default AnimationLayout;
