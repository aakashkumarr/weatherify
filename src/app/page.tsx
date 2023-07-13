import CountryCitiesView from '@/components/CountryCitiesView'
import WeatherHome from '@/components/UI/WeatherHome'
import Image from 'next/image'

export default function Home() {
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
