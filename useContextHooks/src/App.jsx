import Parent from './Parent';
import { FamilyContext } from './FamilyContext';

const FamilySecret = {
  familyName: 'Abedin',
  onlyChildCanSee: () => {
    return 'We are The Adedins Child';
  },
  onlyGrandChildCanSee: () => {
    return 'I am the GrandChild of Abedins';
  },
};

function App() {
  return (
    <FamilyContext.Provider value={FamilySecret}>
      <Parent />
    </FamilyContext.Provider>
  );
}

export default App;
