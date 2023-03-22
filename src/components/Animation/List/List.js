import { useRef, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './List.css';

function List() {
	const [items, setItems] = useState([1, 2, 3]);
	const liRef = useRef(null);

	const addItemHandler = () => {
		setItems((prevState) => prevState.concat(prevState.length + 1));
	};

	const removeItemHandler = (selIndex) => {
		setItems((prevState) =>
			prevState.filter((item, index) => index !== selIndex)
		);
	};

	const listItems = items.map((item, index) => (
		<CSSTransition nodeRef={liRef} key={index} timeout={300} classNames='fade'>
			{() => <li ref={liRef}
				className='listItem'
				onClick={() => removeItemHandler(index)}
			>
				{item}
			</li>}
		</CSSTransition>
	));

	return (
		<div>
			<button className='btn' onClick={addItemHandler}>
				Add Item
			</button>
			<p>Click Item to Remove.</p>
			<TransitionGroup component='ul' className='list'>
				{listItems}
			</TransitionGroup>
		</div>
	);
}

export default List;
