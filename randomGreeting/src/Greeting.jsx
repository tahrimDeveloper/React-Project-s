import { useState, useEffect } from 'react';

function Greeting({ randomMax }) {
  const [randomNum] = useState(Math.floor(Math.random() * randomMax) + 1);
  const [greeting, setGreeting] = useState();

  useEffect(() => {
    window.localStorage.setItem('random', randomNum);
    if (randomMax === randomNum) {
      window.localStorage.setItem('jackpot', true);
    } else {
      window.localStorage.setItem('jackpot', false);
    }

    switch (randomNum) {
      case 1:
        setGreeting('hi');
        break;
      case 2:
        setGreeting('Bonjour');
        break;
      case 3:
        setGreeting('Hola');
        break;
      case 4:
        setGreeting('Guten Tag');
        break;
      case 5:
        setGreeting('Ciao');
        break;
      case 6:
        setGreeting('Salut');
        break;
      case 7:
        setGreeting('Hallo');
        break;
      case 8:
        setGreeting('Cześć');
        break;
      default:
        setGreeting('Hello');
    }
    return function cleanUp() {
      console.log('clean up');
      window.localStorage.removeItem('random');
      window.localStorage.removeItem('jackpot');
    };
  }, [randomNum, randomMax]);

  return (
    <>
      <h1 className="font-bold block text-center">Random Greeting</h1>
      <h2 className="font-bold  text-center p-2 bg-amber-300 rounded-2xl text-black">
        {greeting}
      </h2>
    </>
  );
}

export default Greeting;
