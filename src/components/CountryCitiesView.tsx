"use client"
import { setWeatherData } from '@/app/features/weather/weatherSlice'
import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
const CountryCitiesView = () => {
    let [city,setCity]:[any,any]=useState(null)
    let dispatch=useDispatch()
    let cities=[
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
useEffect(()=>{
    if(city)
fetch(`https://meetversemini.up.railway.app/api/weather/city?q=${city}`).then(res=>res.json()).then(data=>{
dispatch(setWeatherData(data))
}).catch(error=>console.log(error))
},[city])
    return (<div className=' p-4 bg-white rounded-md'>
        {
            cities.map((d,index)=>(<div key={index} onClick={()=>setCity(d)} className={`cursor-pointer active:bg-green-400 inline-flex text-sm border-2 rounded-full text-green-800 flex-row w-auto border-green-800 p-1 m-1 ${d===city && 'bg-green-400'}`}>
{d}

            </div>))
        }

    </div>
  )
}

export default CountryCitiesView