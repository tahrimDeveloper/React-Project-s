import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from './features/counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h1 className="font-bold mt-3.5">{count}</h1>
      <button
        className="border p-1 rounded-xl m-1"
        onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button
        className="border p-1 rounded-xl m-1"
        onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button
        className="border p-1 rounded-xl 1"
        onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
}

export default Counter;
