import Event from './Event';
import CrazyButton from './CrazyButton';
import Register from './Register';
import Bubble from './Bubble';

function App() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Event />
        <CrazyButton />
        <Register />
        <Bubble />
      </div>
    </>
  );
}

export default App;
