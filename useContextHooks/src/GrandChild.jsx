import { useContext } from 'react';
import { FamilyContext } from './FamilyContext';

function GrandChild() {
  const secret = useContext(FamilyContext);

  return (
    <div className="m-2 p-3 text-center w-[200px] h-[80px] border-amber-200 border-2">
      <h2>{secret.onlyGrandChildCanSee()}</h2>
    </div>
  );
}

export default GrandChild;
