import React, { useState } from 'react'
import { BiSearch, BiCurrentLocation } from 'react-icons/bi'

const Input = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState('')

  const handleSearchClick = () => {
    if (city !== '') setQuery({ q: city })
  }

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords
        setQuery({ lat: latitude, lon: longitude })
      })
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchClick()
    }
  }

  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input
          type='text'
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyPress={handleKeyPress}
          placeholder='Search by city...'
          className='text-gray-500 rounded-md text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase'
        />
        <BiSearch
          size={30}
          onClick={handleSearchClick}
          className='cursor-pointer transition ease-out hover:scale-125'
        />
        <BiCurrentLocation
          size={30}
          onClick={handleLocation}
          className='cursor-pointer transition ease-out hover:scale-125'
        />
      </div>
      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button
          className='text-2xl font-medium transition ease-out hover:scale-125'
          onClick={() => setUnits('metric')}
        >
          °C
        </button>
        <p className='text-2xl font-medium mx-1'>|</p>
        <button
          className='text-2xl font-medium transition ease-out hover:scale-125'
          onClick={() => setUnits('imperial')}
        >
          °F
        </button>
      </div>
    </div>
  )
}

export default Input
