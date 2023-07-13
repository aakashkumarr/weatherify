import React from 'react'

const Search= () => {
  return (
    <div className="relative focus-within::border-green-500 focus-within:border-2 bg-green-200 border-green-800 overflow-hidden rounded-full w-44 h-10">
    <input placeholder="Search" className="absolute top-0 bottom-0 left-0 right-0 w-full h-full px-2 outline-none caret-green-800  bg-transparent" />
  </div>
  )
}

export default Search