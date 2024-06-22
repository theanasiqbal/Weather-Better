import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const TopButtons = ({ setQuery }) => {
  const cities = [
    { id: 1, name: "Bareilly" },
    { id: 2, name: "Delhi" },
    { id: 3, name: "Bangalore" },
    { id: 4, name: "Mumbai" },
    { id: 5, name: "Chennai" }
  ];

  const { isAuthenticated, logout, loginWithPopup } = useAuth0();

  

  return (
    <div className='flex items-center justify-around my-6 mb-4'>
      {cities.map(City => (
        <button 
          key={City.id} 
          className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in' 
          onClick={() => setQuery({ q: City.name })}
        >
          {City.name}
        </button>
      ))}
      
      {isAuthenticated ? (
        <button 
          onClick={() => logout()} 
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-red-700 group-hover:from-red-500 group-hover:to-red-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Log Out
          </span>
        </button>
      ) : (
        <button 
          onClick={() => loginWithPopup()} 
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Log In
          </span>
        </button>
      )}
    </div>
  );
};

export default TopButtons;
