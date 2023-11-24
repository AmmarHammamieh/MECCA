import React from 'react'
import spanner from '../assets/imgs/spanner.jpg'
import logo from '../assets/imgs/logo.jpg'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className='bg-[#1b1b1b]'>
            <div style={{ '--image-url': `url(${spanner})` }} className="clip h-[100vh] w-[100vw] bg-[image:var(--image-url)] bg-cover bg-no-repeat">
                {/* <header className='bg-[#1b1b1b] flex items-center justify-between px-8 text-white font-semibold'>
                    <div className='flex-grow flex justify-around items-center'>
                        <Link to="/" className='' >Construction</Link>
                    </div>
                    <div className=''>
                        <img src={logo} className='h-16 ml-20' />
                    </div>
                    <div className='flex justify-around items-center flex-grow'>
                        <Link to="/">Architecal/Desgin</Link>
                        <Link to="/">Marketing</Link>
                    </div>
                </header> */}

                <header>
                    <nav className="bg-[#1b1b1b] px-4 lg:px-6 ">
                        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                            <div className="flex items-center lg:order-1">
                                <Link to="/" className="hidden lg:block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Construction</Link>
                                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div className="flex items-center  ml-20 order-2">
                                <img src={logo} className='h-16' />
                            </div>
                            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-3" id="mobile-menu-2">
                                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                    <li>
                                        <Link to="/" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">Architecal/Desgin</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">Marketing</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    )
}

export default Home