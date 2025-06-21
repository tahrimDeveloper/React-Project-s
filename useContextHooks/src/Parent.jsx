import Children from './Children';
import { useContext } from 'react';
import { FamilyContext } from './FamilyContext';

function Parent() {
  const secret = useContext(FamilyContext);

  return (
    <>
      <div className="m-2 p-3 text-center w-[400px] h-[380px] border-amber-500 border-2">
        <h1>Hi, I am {secret.familyName}</h1>
        <>
          <Children />
        </>
      </div>
    </>
  );
}

export default Parent;
