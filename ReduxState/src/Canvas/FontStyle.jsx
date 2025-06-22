import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFont, selectFont } from './canvasSlice';

function FontStyle() {
  const font = useSelector(selectFont);
  const dispatch = useDispatch();
  return (
    <div className="m-2 p-4 bg-[#beabeb] rounded-2xl h-[400px] w-[300px] text-center content-center">
      <h2>Font</h2>
      <p>
        <span style={{ fontSize: `${font}px` }}>
          Redux Tool Kit(RTK) is the modern way to learn Redux. Let's start with
          the basics.
        </span>
      </p>
      <input
        type="range"
        min="10"
        max="30"
        value={font}
        onChange={e => dispatch(changeFont(e.target.value))}
      />
      <p>{font}px</p>
    </div>
  );
}

export default FontStyle;
