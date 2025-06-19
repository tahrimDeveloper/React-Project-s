import React from 'react';
import { useState } from 'react';

function Event() {
  function handleClick() {
    console.log('clicked me');
  }

  function handleChange(event) {
    console.log(event.target.value);
  }
  function handleChangeNumber(event) {
    console.log(event.target.valueAsNumber);
  }
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count => count + 1)}>
        count is {count}
      </button>

      <button onClick={handleClick} className="border p-3 rounded-2xl m-2">
        click Me...
      </button>

      <input
        type="text"
        placeholder="type text.."
        className="border p-2"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="type Number.."
        className="border p-2"
        onChange={handleChangeNumber}
      />
    </>
  );
}

export default Event;
