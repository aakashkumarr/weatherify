"use client"
import { RootState } from '@/app/store/store'
import React from 'react'
import { useSelector } from 'react-redux'

const Button = (props:any) => {
  let theme = useSelector((state:RootState)=>state.theme.theme)
  return (
    <button className={`outline-none px-3 py-1 bg-${theme}-200 border-2 border-${theme}-800 rounded-full active:bg-${theme}-300 h-10 text-${theme}-800`}>{props.children}</button>
  )
}

export default Button