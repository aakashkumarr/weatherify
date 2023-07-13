"use client"
import React from 'react'

const Button = (props:any) => {
  return (
    <button className="outline-none px-3 py-1 bg-green-200 border-2 border-green-800 rounded-full active:bg-green-300 h-10 text-green-800">{props.children}</button>
  )
}

export default Button