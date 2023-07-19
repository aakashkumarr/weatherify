"use client"
import { setWeatherData } from '@/app/features/weather/weatherSlice'
import { RootState } from '@/app/store/store'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentWeather } from '@/utils/utils'
const CountryCitiesView = () => {
    let ip = useSelector((state: RootState) => state.ip.ip)
    let theme = useSelector((state: RootState) => state.theme.theme)
    let [city, setCity]: [any, any] = useState(null)
    let dispatch = useDispatch()
    let cities = [
        'Ahmedabad',
        'Bengaluru',
        'Chennai',
        'Delhi',
        'Hyderabad',
        'Kolkata',
        'Mumbai',
        'Pune',
        'Lucknow'

    ]
    async function fetchWeatherData() {
        try {
            let data = await getCurrentWeather(ip);
            dispatch(setWeatherData(data))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (city && city !== 'current location')
            fetch(`https://meetversemini.up.railway.app/api/weather/city?q=${city}`).then(res => res.json()).then(data => {
                dispatch(setWeatherData(data))
            }).catch(error => console.log(error));
        else {
            fetchWeatherData()
        }
    }, [city])
    return (<div className={`p-4 bg-${theme}-100 rounded-md`}>
        <div onClick={() => setCity('current location')} className={`cursor-pointer active:bg-${theme}-400 inline-flex text-sm border-2 rounded-full items-center text-${theme}-800 flex-row w-auto border-${theme}-800 p-1 m-1 ${'current location' === city && `bg-${theme}-400`}`}>
            <FontAwesomeIcon icon={faLocation} />Current location
        </div>
        {


            cities.map((d, index) => (<div key={index} onClick={() => setCity(d)} className={`cursor-pointer active:bg-${theme}-400 inline-flex text-sm border-2 rounded-full text-${theme}-800 flex-row w-auto items-center border-${theme}-800 p-1 m-1 ${d === city && `bg-${theme}-400`}`}>
                {d}

            </div>))
        }

    </div>
    )
}

export default CountryCitiesView