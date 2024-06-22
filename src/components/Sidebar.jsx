import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Sidebar = ({ cities, setQuery }) => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="bg-gray-900 text-white p-4 w-64 fixed h-full">
      {isAuthenticated ? (
        <div className="flex flex-col items-center mb-4 mt-4">
          
          <img src={user.picture} alt="User" className="rounded-full w-30  " />
          
          <div className='text-center mt-4'>
            <h4 className="text-xl font-bold">Welcome</h4>
            <h4 className='text-xl'>{user.name}</h4>
          </div>
        </div>
      )
      : (<h4 className="text-xl font-bold text-center">Please Login</h4>)
    }

      <h2 className="text-lg font-bold mt-4 mb-4">Last Searched Cities</h2>
      <ul>
        {cities.map((city, index) => (
          <li key={index} className="mb-2">
            <button 
              onClick={() => setQuery({ q: city })} 
              className="hover:underline capitalize"
            >
              {city}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
