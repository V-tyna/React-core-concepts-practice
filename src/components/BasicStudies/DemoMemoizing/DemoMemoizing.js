import { useCallback, useMemo, useState } from 'react';
import ButtonDemo from './Button';
import Paragraph from './Paragraph';
import SortList from './SortList';

function Demo() {
  const [isVisible, setIsVisible] = useState(false);
  const [newTitle, setNewTitle] = useState('First title');
  const [allowToggle, setAllowToggle] = useState(false);

  const list = useMemo(() => [5, 1, 7, 3, 10, 2, 17, 4], []);

  console.log('DEMO');

  const toggleParagraphHandle = useCallback(() => {
    if (allowToggle) {
      setIsVisible((prev) => !prev);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  const titleHandler = () => {
    setNewTitle('Updated title.');
  }
  return ( <div>
    <h1>Observing DOM</h1>
    <ButtonDemo onToggleHandler={allowToggleHandler} buttonName={'Allow Toggle'} />
    <ButtonDemo onToggleHandler={toggleParagraphHandle} buttonName={'Toggle paragraph'} />
    <Paragraph show={isVisible} />
    <SortList title={newTitle} items={list} />
    <ButtonDemo onToggleHandler={titleHandler} buttonName={'Set new Title'} />
  </div> );
}

export default Demo;