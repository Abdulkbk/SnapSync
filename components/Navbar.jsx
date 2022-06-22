import { useState } from 'react'
import Link from 'next/link'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className='flex items-center justify-between flex-wrap p-1 z-10 bg-gray-900'>
      <div className='flex items-center flex-shrink-0  mr-6'>
        <Link href='/'>
          <a className='w-20 p-2'>
            <img src='/assets/snap.png' alt='My Logo' className='' />
          </a>
        </Link>
      </div>
      <div className='block lg:hidden'>
        <button
          onClick={() => setOpen(!open)}
          className='flex items-center px-3 py-2 border rounded cus-text-d cus-border-col'
        >
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div
        className={`w-full cus-text-l ${
          open ? 'block' : 'hidden'
        } flex-grow lg:flex lg:items-center lg:w-auto p-1`}
      >
        <div className='text-sm lg:flex-grow'>
          <Link href='/home'>
            <a className='block mt-4 lg:inline-block lg:mt-0 cus-text-d navlinks mr-4 text-md text-gray-100 font-semibold'>
              Home
            </a>
          </Link>

          <Link href='/login'>
            <a className='block mt-4 lg:inline-block lg:mt-0 cus-text-d navlinks mr-4 text-md text-gray-100 font-semibold'>
              Login
            </a>
          </Link>
          <Link href='/register'>
            <a className='block mt-4 lg:inline-block lg:mt-0 cus-text-d navlinks text-md text-gray-100 font-semibold'>
              Register
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
