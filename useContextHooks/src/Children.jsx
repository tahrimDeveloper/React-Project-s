import { useContext } from 'react';
import { FamilyContext } from './FamilyContext';
import GrandChild from './GrandChild';

function Children() {
  const secret = useContext(FamilyContext);

  return (
    <>
      <div className="m-2 p-3 text-center w-[300px] h-[180px] border-amber-800 border-2">
        <h2>{secret.onlyChildCanSee()}</h2>
      </div>
      <GrandChild />
    </>
  );
}

export default Children;
