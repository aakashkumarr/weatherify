'use client'
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import WeatherIcon from './WeatherIcon'
import Icon from '../../app/assets/moon-cloudy-svgrepo-com.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot ,faTemperatureArrowDown,faTemperatureArrowUp} from '@fortawesome/free-solid-svg-icons'
import {ReactSVG} from 'react-svg'
import {useSelector,useDispatch} from 'react-redux'
import { RootState } from '@/app/store/store'
import { setWeatherData} from '../../app/features/weather/weatherSlice'

// async function getData(){
//     let response= await fetch('https://meetversemini.up.railway.app/api/weather?lat=25.609&lon=85.1343')
//     let res= await response.json()
//     console.log(res)
//     return res
// }
const WeatherHome = () => {
    // let state:any = useContext(StateContext)
    let [weatherData,setData]:[any,any]=useState(null)
    let state = useSelector((state:RootState)=>state.weather.weatherData
    )
    let dispatch = useDispatch()
    useLayoutEffect(()=>{
        setData(state)
    },[state])
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(pos => {
            fetch(`https://meetversemini.up.railway.app/api/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`)
            .then(res => res.json())
            .then(data => { 
                setData(data);
                dispatch(setWeatherData(data))
                // dispatch(setdata())
                
            }).catch(err => console.log(err))
            // console.log(state)
        })

    }, [])
    return (
        <>
            <div className='flex flex-col w-full h-full justify-center items-center'>
        

                {/* <div className='bg-white bg-opacity-40 shadow-lg shadow-gray-500 p-4 rounded-md w-96 h-96 flex flex-col justify-center items-center'> */}

                    {
                        weatherData && (<div className='bg-green-100 rounded-2xl border-2 border-green-800 backdrop-blur-lg p-5'>
                        <div className='bg-green-50 border-2 border-green-800 p-4 rounded-lg    w-60'>
                            <div className='bg-transparent flex flex-row justify-between items-center w-full h-auto'>
                            {/* <WeatherIcon height={40} width={40} icon={weatherData && weatherData.weather[0].icon} /> */}
                            {/* <svg  className='fill-green-800' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="moon-cloudy"><path className='fill-current text-green-800' d="M15.12,9.06v.07A4.64,4.64,0,0,0,14,9a5.43,5.43,0,0,0-5.11,3.85,3.51,3.51,0,0,0-3,1.37A6,6,0,0,1,3.22,7.46,3.26,3.26,0,0,0,6.31,9.61a3.3,3.3,0,0,0,3.3-3.3A3.26,3.26,0,0,0,7.46,3.22a6,6,0,0,1,7.66,5.84Zm3.32,2.86a3.76,3.76,0,0,0-.82.11A4.39,4.39,0,0,0,15,10.14,3.49,3.49,0,0,0,14,10a4.52,4.52,0,0,0-4.34,3.89l-.17.1a2.48,2.48,0,0,0-.82-.15,2.56,2.56,0,0,0-1.89.84,3,3,0,0,0-.78,2A2.78,2.78,0,0,0,8.67,19.6h9.77A3.71,3.71,0,0,0,22,15.76,3.71,3.71,0,0,0,18.44,11.92Z"></path></svg> */}
                            {weatherData &&<ReactSVG src={'../app/assets/svg/'+(weatherData && weatherData.weather[0]?.icon+'.svg')} className='fill-green-800 w-40 h-' />}
                            <span className='text-green-800 text-5xl block font-extrabold'>{weatherData && ((Number(weatherData.main.temp) - 273).toFixed(1))}°C </span>
                            
                                </div>
                            
                            <span className='text-3xl text-green-800 block text-center'>{weatherData.weather[0].main}</span>    
                        </div>
                        
                        
                        <span className='text-3xl text-green-800 flex justify-center items-center'><FontAwesomeIcon className='text-2xl bg-green-200 p-1 rounded-full' icon={faLocationDot} />{weatherData?.name},{weatherData.sys.country}</span>
                        <hr />
                        <p className='text-green-800 bg-green-200 rounded-3xl border-2 border-green-800 my-1 text-center flex justify-center items-center'>feels like {weatherData && ((Number(weatherData.main.feels_like) - 273).toFixed(1))+"°C"}</p>
                        <p className='text-green-800 text-center flex justify-center items-center'><FontAwesomeIcon className='p-2 rounded-full bg-green-200' icon={faTemperatureArrowUp} />{((Number(weatherData.main.temp_max) - 273).toFixed(1))}{"°C  | "}<FontAwesomeIcon className='p-2 rounded-full bg-green-200' icon={faTemperatureArrowDown} />{((Number(weatherData.main.temp_min) - 273).toFixed(1))+"°C"}</p>
                    </div>)
                    }
                {/* </div> */}
            </div>
        </>
    )
}

export default WeatherHome