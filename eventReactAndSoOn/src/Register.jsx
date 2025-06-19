import { useState } from 'react';

function Register() {
  const [query, setQuery] = useState('');

  function handlerDefulte(event) {
    event.preventDefault();
    console.log(query);
    setQuery('');
  }
  return (
    <form onSubmit={handlerDefulte}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Type Something.."
        className="border p-2"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Register;
