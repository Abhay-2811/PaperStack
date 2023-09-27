'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { usePathname } from 'next/navigation';


const Navbar = () => {
  const path = usePathname();
  return (
    <nav className='bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-600 sticky'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href='/' className='flex items-center'>
          <Image src='/logo.png' width={50} height={50} alt='logo' className='xl:bg-transparent invert mr-5'/>
          <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>
            PaperStack
          </span>
        </Link>
        <div className='flex md:order-2'>
          
          <ConnectButton showBalance={false}/>

          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600'
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-sticky'
        >
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700'>
            <li>
              <Link
                href='/'
                className={`block py-2 pl-3 pr-4 ${path == "/" ? "text-blue-400" : "text-white"} bg-blue-400 rounded md:bg-transparent md:p-0 md:hover:text-blue-400 active:text-blue-400`}
                aria-current='page'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/jobs'
                className={`block py-2 pl-3 pr-4 ${path == "/jobs" ? "text-blue-400" : "text-white"} bg-blue-400 rounded md:bg-transparent md:p-0 md:hover:text-blue-400 active:text-blue-400`}
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                href='/create'
                className={`block py-2 pl-3 pr-4 ${path == "/create" ? "text-blue-400" : "text-white"} bg-blue-400 rounded md:bg-transparent md:p-0 md:hover:text-blue-400 active:text-blue-400`}
                aria-current='page'
              >
                Create Job
              </Link>
            </li>
            <li>
              <Link
                href='/myspace'
                className={`block py-2 pl-3 pr-4 ${path == "/myspace" ? "text-blue-400" : "text-white"} bg-blue-400 rounded md:bg-transparent md:p-0 md:hover:text-blue-400 active:text-blue-400`}
                aria-current='page'
              >
                My Space
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
