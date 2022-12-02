import React from 'react'
import HeroImage from '../assets/heroImage.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg flex flex-col
             mx-auto items-center justify-center h-full px-4 md:flex-row text-white'>
            <div className=' flex flex-col justify-center h-full'>
                <h2 className=' text-4xl sm:text-7xl font-bold'>
                    I'm a Fullstack Developer
                </h2>
                <p className=' text-gray-500 py-4 max-w-md'>
                    I have 8 years of experience building and desgining software.
                    Currently, I love to work on web application using technologies like
                    React, Tailwind, Next JS and GraphQL.
                </p>


                <div>
                    <button className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 cursor-pointer'>
                        Portfolio 
                        <span className=' hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25}
                            className="ml-1" />
                        </span>
                    </button>
                </div>
            </div>            
            <div>
                <img
                src={HeroImage} 
                alt="my Profile pic" 
                className=' rounded-3xl mx-auto w-2/3 md:w-1/2 ' />
            </div>
        </div>
    </div>
  )
}

export default Home