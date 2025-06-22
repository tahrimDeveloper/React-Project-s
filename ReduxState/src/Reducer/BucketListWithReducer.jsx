import { useReducer } from 'react';
import { TiTick, TiTrash } from 'react-icons/ti';
import { blReducer, formReducer } from './BucketListReducer';

const Header = () => {
  return (
    <>
      <header>
        <h1 className="text-2xl text-center mt-3 font-extrabold">
          My Bucket List
        </h1>
        <h2 className="font-semibold text-center">
          (Using React's useReducer Hook)
        </h2>
      </header>
    </>
  );
};

const BucketListWithReducer = () => {
  const [state, dispatch] = useReducer(blReducer, []);
  const [wish, dispatchFormAction] = useReducer(formReducer, {
    title: '',
    by: '',
  });

  const handleWish = e => {
    e.preventDefault();
    dispatchFormAction({
      type: 'INPUT_TEXT',
      field: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <div className="flex flex-col text-center mt-1 justify-center">
        <ul className="flex flex-col items-center text-center content-center mt-1 justify-center">
          {state &&
            state.length > 0 &&
            state.map(item => (
              <li
                className="flex text-center mb-2 p-2 border justify-center rounded-xl"
                key={item.id}>
                <span
                  style={{ textDecoration: item.isDone ? 'line-through' : '' }}>
                  <strong>{item.title}</strong> is due by {item.by}
                </span>
                <span>
                  <TiTick
                    size={24}
                    onClick={() =>
                      dispatch({ type: 'DONE_WISH', payload: item.id })
                    }
                  />
                </span>
                <span>
                  <TiTrash
                    size={24}
                    onClick={() =>
                      dispatch({ type: 'REMOVE_WISH', payload: item.id })
                    }
                  />
                </span>
              </li>
            ))}
        </ul>
        <div>
          I want to do{' '}
          <input
            className="p-1 border rounded"
            placeholder="type a wish.."
            type="text"
            name="title"
            onChange={handleWish}
          />{' '}
          by{' '}
          <input
            className="p-1 border rounded"
            type="date"
            name="by"
            onChange={handleWish}
          />
          <button
            className=" m-2 p-1 border rounded bg-white"
            onClick={() => dispatch({ type: 'ADD_WISH', payload: wish })}>
            Make a Wish!
          </button>
        </div>
      </div>
    </>
  );
};

export default BucketListWithReducer;
