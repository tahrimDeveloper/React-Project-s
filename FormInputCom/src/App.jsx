import { useState } from 'react';

function App() {
  const [contact, setContact] = useState({
    fname: '',
    email: '',
    password: '',
    address: '',
    color: '',
    city: '',
    distric: '',
    zip: '',
    agree: false,
  });

  const handleChange = event => {
    const name = event.target.name;
    let value = event.target.value;

    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    }

    setContact({
      ...contact,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-around m-4">
      <form className="p-6 bg-gray-400 rounded flex-1/2 mr-1">
        <div className="my-2">
          <label className="mx-4" htmlFor="fname">
            Full Name
          </label>
          <input
            className="border rounded p-2 ml-1"
            type="text"
            name="fname"
            id="fname"
            value={contact.fname}
            placeholder="Enter name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="my-2">
          <label className="mx-4" htmlFor="email">
            Email
          </label>
          <input
            className="border rounded p-2 ml-1"
            type="email"
            name="email"
            id="email"
            value={contact.email}
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="my-2">
          <label className="mx-4" htmlFor="password">
            Password
          </label>
          <input
            className="border rounded p-2 ml-1"
            type="password"
            name="password"
            id="password"
            value={contact.password}
            placeholder="Enter password"
            onChange={handleChange}
            required
          />
        </div>

        <div className="my-2">
          <label className="mx-4" htmlFor="color">
            Favorite Color
          </label>
          <input
            className="border rounded p-2 ml-1"
            type="color"
            name="color"
            id="color"
            value={contact.color}
            onChange={handleChange}
          />
        </div>

        <div className="my-2">
          <label className="mx-4" htmlFor="address">
            Address
          </label>
          <textarea
            className="border rounded p-2 ml-1"
            name="address"
            id="address"
            value={contact.address}
            placeholder="Where we can find you?"
            onChange={handleChange}
            required
          />
        </div>

        <div className="my-2">
          <label className="mx-4" htmlFor="city">
            City
          </label>
          <input
            className="border rounded p-2 ml-1"
            type="text"
            name="city"
            id="city"
            value={contact.city}
            placeholder="Enter city"
            onChange={handleChange}
            required
          />
        </div>

        <div className="my-2">
          <label className="mx-4" htmlFor="district">
            District
          </label>
          <select
            className="border rounded p-2 ml-1"
            name="distric"
            id="distric"
            value={contact.distric}
            onChange={handleChange}
            required>
            <option value="">Choose...</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Chottogram">Chottogram</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Barisal">Barisal</option>
            <option value="Khulna">Khulna</option>
            <option value="Rongpur">Rongpur</option>
            <option value="Maymonsinh">Maymonsinh</option>
          </select>
        </div>

        <div className="my-2">
          <label className="mx-4" htmlFor="zip">
            Zip Code
          </label>
          <input
            className="border rounded p-2 ml-1"
            type="number"
            name="zip"
            id="zip"
            value={contact.zip}
            placeholder="Enter zip code"
            onChange={handleChange}
            required
          />
        </div>

        <div className="my-2">
          <input
            className="border rounded p-2 ml-1"
            type="checkbox"
            name="agree"
            id="agree"
            value={contact.agree}
            placeholder="Enter name"
            onChange={handleChange}
            required
          />
          <label htmlFor="agree">Agree with condition!</label>
        </div>
      </form>

      <div className="bg-gray-400 p-2 rounded w-1/2 flex flex-col justify-center items-center">
        {contact.fname && (
          <p>
            {' '}
            Hi, <strong>{contact.fname}</strong>, Welcome!
          </p>
        )}

        {contact.email && (
          <p>
            {' '}
            Your Email is: <u>{contact.email}</u>!!!
          </p>
        )}

        {contact.password && (
          <p>
            Your password is of <strong>{contact.password.length}</strong>{' '}
            characters.
          </p>
        )}

        {contact.color && (
          <p>
            Do you know, the Hexacode of your{' '}
            <span style={{ color: contact.color }}>
              Favorite Color is: {contact.color}
            </span>
          </p>
        )}

        {contact.address && (
          <p>
            You stay at, {contact.address}, {contact.city}, {contact.distric},{' '}
            {contact.zip}
          </p>
        )}

        {contact.agree ? (
          <p>You Agree, That's Great!</p>
        ) : (
          <p>You DO NOT agree with us yet!</p>
        )}
      </div>
    </div>
  );
}

export default App;
