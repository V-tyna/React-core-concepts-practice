import { useMemo } from 'react';

function SortList({title, items}) {
  const sortedList = useMemo(() => {
    console.log('USE MEMO FUNCTION');
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log('SORT LIST');
  return ( <div>
    <h2>{title}</h2>
    <ul>
      {sortedList.map(val => <li key={val}>{val}</li>)}
    </ul>
  </div> );
}

export default SortList;