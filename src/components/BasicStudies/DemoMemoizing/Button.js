import { memo } from 'react';

function ButtonDemo({ onToggleHandler, buttonName }) {
  console.log('BUTTON DEMO', buttonName);
	return <button onClick={onToggleHandler}>{buttonName}</button>;
}

export default memo(ButtonDemo);
