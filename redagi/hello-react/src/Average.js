import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
  console.log('calculating average...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

function Average() {
  const inputEl = useRef(null);
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
      inputEl.current.focus();
    },
    [number, list]
  );

  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input ref={inputEl} type="text" value={number} onChange={onChange} />
      <button onClick={onInsert}>Add</button>
      <ul>
        {list.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>
      <div>
        <b>Average Number: </b> {avg}
      </div>
    </div>
  );
}

export default Average;