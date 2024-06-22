import React from 'react'
import {FaThermometerEmpty} from 'react-icons/fa'
import { BiSolidDropletHalf } from 'react-icons/bi'
import {FiWind} from 'react-icons/fi'
import {GiSunrise, GiSunset} from 'react-icons/gi'
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'

const TempAndDetails = ({weather: {
    details, icon , temp, temp_min, temp_max, speed, humidity, feels_like, sunrise, sunset
},units,} 
) => {

    const verticalDetails = [
        {
            id:1,
            Icon: FaThermometerEmpty,
            title: "Real feel",
            value: `${feels_like.toFixed()}°${ units === "metric" ? "C" : "F"}`
        },
        {
            id:2,
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: `${humidity.toFixed()}%`
        },
        {
            id:3,
            Icon: FiWind,
            title: "Wind",
            value: `${speed.toFixed()}  ${ units === "metric" ? "mtr/s" : "ml/h"}`
        }
    ]


    const horizontaalDetails = [
        {
            id:1,
            Icon: GiSunrise,
            title: "Sunrise",
            value: sunrise
        },
        {
            id:2,
            Icon: GiSunset,
            title: "Sunset",
            value: sunset
        },
        {
            id:3,
            Icon: MdKeyboardArrowUp,
            title: "High",
            value: `${temp_max.toFixed()}°${ units === "metric" ? "C" : "F"} `
        },
        {
            id:4,
            Icon: MdKeyboardArrowDown,
            title: "Low",
            value: `${temp_min.toFixed()}°${ units === "metric" ? "C" : "F"}`
        },
    ]

  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>{details}</p>
        </div>
        <div className='flex flex-row items-center justify-between py-3'>
            <img src={icon} className='w-20' alt='Weather Icon'></img>
            <p className='text-5xl'>{`${temp.toFixed()}°${ units === "metric" ? "C" : "F"}`}</p>

            <div className='flex flex-col space-y-3 items-start'>

                    {
                        verticalDetails.map(({id, Icon, title, value}) => (
                            <div key={id} className='flex font-light text-sm items-center justify-center'>
                                <Icon size={18} className='mr-1'/>
                                 {`${title}:`} <span className='font-medium ml-1'>{value}</span>
                            </div>
                        ))
                    }

                
            </div>

        </div>

                    <div className='flex flex-row items-center justify-center space-x-10 text-sm py-3'>

                        {
                            horizontaalDetails.map(({id, Icon, title, value}) => (
                                <div className='flex flex-row items-center' key={id}>
                                    <Icon size={30} />
                                    <p className='font-light ml-1'>{`${title}:`} <span className='font-medium ml-1'>{value}</span></p>
                                </div>
                            ))
                        }
                        
                    </div>


    </div>
  )
}

export default TempAndDetails