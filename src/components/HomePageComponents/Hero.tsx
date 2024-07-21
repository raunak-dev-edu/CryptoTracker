import React from 'react'
import Animation from './animation'

const Hero = () => {

    return (
        <div className=''>
            <div className="flex flex-col flex-wrap md:flex-nowrap justify-around items-center">
                <div className="mx-80 mt-6 justify-center text-center">
                <div className='text-7xl font-600 py-6 text-gray-700 font-bold interFont'> <span className='text-indigo-400'>Track</span> all your favorite <span className='text-indigo-900'>Crypto</span> here.</div>
                <div className='text-gray-600 text-lg interFont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div className='flex justify-center'>
                <button className='flex justify-center items-center mt-8 w-36 h-10 rounded bg-emerald-500 text-white font-semibold transition-all ease-in-out duration-500 hover:bg-transparent hover:border hover:text-emerald-600 border-emerald-600 interFont' onClick={() => window.scrollTo({
                                behavior: "smooth",
                                top : 1100
                            })}>Get Started</button>
                </div>
                </div>
                
                <div className="flex justify-center items-center -mt-24">
                            <Animation/>
                </div>


            </div>
        </div>
    )
}

export default Hero
      
