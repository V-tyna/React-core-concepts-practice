import { memo } from 'react';
import ParagraphWrapper from './ParagraphWrapper';

function Paragraph({ show }) {
  console.log('PARAGRAPH');
	return <ParagraphWrapper>{show ? 'This is new' : ''}</ParagraphWrapper>;
}

export default memo(Paragraph);
