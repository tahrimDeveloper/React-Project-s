import React, { useState, useTransition } from 'react';

export default function App({ users }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState(users);

  // A Standard Hook to mark things non-urgent
  const [isPending, startTransition] = useTransition();

  const handleChange = ({ target: { value } }) => {
    // Set the search term on the textbox
    setSearchTerm(value);

    // Execute Non-Urgent Code
    startTransition(() => {
      // Filter the user list based on the search term
      setFiltered(users.filter(item => item.name.includes(value)));
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div>
        {isPending ? (
          <div>Loading...</div>
        ) : (
          <p>
            {users.length !== filtered.length
              ? `${filtered.length} matches`
              : null}
          </p>
        )}
      </div>

      <input
        className="m-2.5 w-[80%] h-[30px] border rounded-xl text-center"
        placeholder="Search user.."
        onChange={handleChange}
        value={searchTerm}
        type="text"
      />

      {isPending ? (
        <div>Loading...</div>
      ) : (
        <div className="flex dlex-row flex-wrap content-center justify-center items-center">
          {filtered.map(user => (
            <div class="flex flex-col m-1.5 rounded-xl border p-1 items-center">
              <div className="profile">
                <img
                  className="w-16 h-14"
                  src={user.avatar}
                  alt={`Avatar image of ${user.name}`}
                />
              </div>
              <div className="text-center">
                <strong>{user.name}</strong>
                <br />
                <p>Email: {user.email}</p>
                <p>JobTitle: {user.jobTitle}</p>
                <p>
                  <address>
                    Address: {user.address.street}, {user.address.city},{' '}
                    {user.address.country}
                  </address>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
