import { useState } from 'react';

function Colorizer() {
  const [color, setColor] = useState('#ddd');

  const getRandomColor = () => {
    const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return random;
  };

  const changeColor = () => {
    const randomColor = getRandomColor();
    // console.log(randomColor);
    setColor(randomColor);
  };
  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="w-60 h-60 bg-amber-900 rounded-3xl border-6 border-black m-1 p-3">
        <h1>Color is: {color}</h1>
      </div>
      <button
        onClick={changeColor}
        className="border-2 rounded-2xl p-2 m-3 bg-green-900 text-white hover:text-blue-500 font-bold">
        Change Random Color
      </button>
    </>
  );
}

export default Colorizer;
