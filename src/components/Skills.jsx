import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import PythonImg from '../assets/python.png'
import UXImg from '../assets/figma.png'

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={HTML} alt="HTML icon" className='w-20 mx-auto' />
            <p className='my-4'>HTML</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={CSS} alt="HTML icon" className='w-20 mx-auto' />
            <p className='my-4'>CSS</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={JavaScript} alt="HTML icon" className='w-20 mx-auto' />
            <p className='my-4'>JavaScript</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={ReactImg} alt="HTML icon" className='w-20 mx-auto' />
            <p className='my-4'>React</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={PythonImg} alt="HTML icon" className='w-20 mx-auto' />
            <p className='my-4'>Python</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={UXImg} alt="HTML icon" className='w-20 mx-auto' />
            <p className='my-4'>UX/UI Design</p>
          </div>
        </div>

      </div>   
    </div>
  )
}

export default Skills