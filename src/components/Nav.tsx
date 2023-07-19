import React from 'react'
import Search from './Search.component'
import Button from './UI/Button'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store/store'

function Nav() {

  let theme=useSelector((state:RootState)=>state.theme.theme)
    return (
        <>

            <div className="z-10 w-full flex flex-row max-w-5xl items-center justify-between font-mono text-sm ">
                <div className="fixed left-0 top-0 flex flex-row w-full justify-between items-center px-4 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <h2 className={`text-${theme}-800 bg-${theme}-200 rounded-md px-2 text-center text-xl line-clamp-3`}>☁ Weatherify</h2>
                    <Search />
                    <Button >Login</Button>
                </div>
                
                {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
        
            </div>
            
        </>
    )
}

export default Nav