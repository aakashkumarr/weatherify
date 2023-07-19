import React, { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store/store'
const Search= () => {
  let theme=useSelector((state:RootState)=>state.theme.theme)
  useLayoutEffect(()=>{},[theme])
  return (
    <div className={`relative focus-within::border-${theme}-500 focus-within:border-2 bg-${theme}-200 border-${theme}-800 overflow-hidden rounded-full w-44 h-10`}>
    <input placeholder="Search" className={`absolute top-0 bottom-0 left-0 right-0 w-full h-full px-2 outline-none caret-${theme}-800  bg-transparent `}/>
  </div>
  )
}

export default Search