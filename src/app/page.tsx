'use client'
import CountryCitiesView from '@/components/CountryCitiesView'
import WeatherHome from '@/components/UI/WeatherHome'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setIP } from './features/ip/IPSlice'
import { setTheme } from './features/theme/themeSlice'

export default function Home() {
let dispatch = useDispatch()
  useEffect(()=>{
fetch('https://api.ipify.org/?format=json').then(res=>res.json()).then(data=>{
dispatch(setIP(data.ip))
console.log('ip: ',data.ip)
}).catch(err=>console.log(err))

// setInterval(()=>{dispatch(setTheme('red'))},2000)
  },[])
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className='grid gap-1 grid-flow-row grid-cols-2 w-full'>
      <WeatherHome />
      {/* <WeatherHome /> */}
      <CountryCitiesView />
      </div>
      

    
    </main>
  )
}
