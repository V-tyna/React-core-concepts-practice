import { useEffect, useState } from 'react';

function Home() {
	const [text, setText] = useState('');

	useEffect(() => {
		const welcome = 'Welcome!';
		const typingWelcome = () => {
			if (welcome.length > text.length) {
				setText(welcome.slice(0, text.length + 1));
			}
		}
		const timerID = setTimeout(() => {
			typingWelcome();
		}, 200);

		return () => clearTimeout(timerID);
	}, [text.length]);
	return (
		<div className='body-container'>
			<h1>Home page</h1>
			<h3>{text}</h3>
			<p>Discover events with us.</p>
		</div>
	);
}

export default Home;
