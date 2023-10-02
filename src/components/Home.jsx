import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
        
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>John Trampe</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front-End Developer and a UX/UI Designer</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>A front-end developer with a passion for creating exceptional user experiences. With a strong background in UX/UI design and a solid foundation in cybersecurity and IT, I bring a holistic approach to web development, ensuring both aesthetics and security are seamlessly integrated into my projects.</p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Work
              <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-4' /></span>
            </button>
          </div>
      </div>

    </div>
  )  
}

export default Home