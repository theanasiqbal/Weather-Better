import React from 'react'

const TopButtons = ({setQuery}) => {

    const cities =[
        {
            id:1,
            name: "Bareilly"
        },
        {
            id:2,
            name: "Delhi"
        },
        {
            id:3,
            name: "Bangalore"
        },
        {
            id:4,
            name: "Mumbai"
        },
        {
            id:5,
            name: "Chennai"
        }

    ]

  return (
    <div className='flex items-center justify-around my-6'>
        {
            cities.map(City => (
                <button key={City.id} className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in' onClick={() => setQuery({ q: City.name })}>{City.name}</button>
            ))
        }


        
        
    </div>
  )
}

export default TopButtons