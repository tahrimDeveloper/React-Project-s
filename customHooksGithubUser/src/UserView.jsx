import React, { useState } from 'react';
import useGithubUser from './hooks/useGithubUser'; // Adjust path as needed

function UserView() {
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('');
  const [user, loading, error] = useGithubUser(username);

  const handleSubmit = e => {
    e.preventDefault();
    setUsername(input.trim());
  };

  return (
    <div className="m-2">
      <h1 className="text-3xl text-center font-extrabold mb-3">Find User</h1>
      <form className="flex justify-around" onSubmit={handleSubmit}>
        <input
          className="border rounded p-2 text-center mr-3"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button
          className="border rounded p-2 text-center bg-amber-900 text-white font-bold hover:bg-green-800"
          type="submit">
          Fetch User
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {user && !loading && (
        <ul className="flex flex-col justify-center items-center">
          <li>
            <img
              className="w-[200px] h-[200px] rounded-full text-center"
              src={user.avatar_url}
              alt={user.login}
            />
          </li>

          <li>
            <strong>Name:</strong>
            {user.name}
          </li>
          <li>
            <strong>Company:</strong>
            {user.company}
          </li>
          <li>
            <strong>Location:</strong>
            {user.location}
          </li>
          <li>
            <strong>Email:</strong>
            {user.email}
          </li>
          <li>
            <strong>Hireable:</strong>
            {user.hireable}
          </li>
          <li>
            <strong>Bio:</strong>
            {user.bio}
          </li>
          <li>
            <strong>Twitter:</strong>
            {user.twitter_username}
          </li>
          <li>
            <strong>Repository:</strong>
            {user.public_repos}
          </li>
          <li>
            <strong>Followers:</strong>
            {user.followers}
          </li>
          <li>
            <strong>Following:</strong>
            {user.following}
          </li>
          <li>
            <strong>Blog:</strong>
            {user.blog}
          </li>
        </ul>
      )}
    </div>
  );
}

export default UserView;
