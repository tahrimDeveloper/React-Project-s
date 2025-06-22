import { useSelector, useDispatch } from 'react-redux';
import { changeColor, selectColor } from './canvasSlice';
import logo from './../../public/vite.svg';

function ColorStyle() {
  const color = useSelector(selectColor);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row flex-wrap justify-center content-center m-2 bg-[#beabeb] p-4 rounded-xl w-[300px] h-[400px]">
      <h2 className="text-center font-bold mb-2">Colors</h2>
      <div
        className="w-[300px] h-[300px] rounded-full mb-2.5 flex content-center justify-center items-center p-2"
        style={{ backgroundColor: color }}>
        <img src={logo} alt="logo" className="w-[200px] h-auto" />
      </div>

      <div className="text-center flex">
        <button
          className="rounded border p-1 ml-1 cursor-pointer bg-white"
          onClick={() => dispatch(changeColor('#8056e2'))}>
          Purple
        </button>
        <button
          className="rounded border p-1 ml-1 cursor-pointer bg-white"
          onClick={() => dispatch(changeColor('orange'))}>
          Orange
        </button>
        <button
          className="rounded border p-1 ml-1 cursor-pointer bg-white"
          onClick={() => dispatch(changeColor('yellow'))}>
          Yellow
        </button>
        <button
          className="rounded border p-1 ml-1 cursor-pointer bg-white"
          onClick={() => dispatch(changeColor('pink'))}>
          Pink
        </button>
      </div>
    </div>
  );
}

export default ColorStyle;
