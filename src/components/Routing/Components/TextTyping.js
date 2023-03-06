import { useEffect, useState } from 'react';

function TextTyping() {
	const [text, setText] = useState('');

	useEffect(() => {
		const welcome = "Welcome! Select the page that you'd like to visit!";
		const typingWelcome = () => {
			if (welcome.length > text.length) {
				setText(welcome.slice(0, text.length + 1));
			}
		};
		const timerID = setTimeout(() => {
			typingWelcome();
		}, 200);

		return () => clearTimeout(timerID);
	}, [text.length]);
	return <h3>{text}</h3>;
}

export default TextTyping;
