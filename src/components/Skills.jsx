import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import ReactImg from '../assets/react.png'
import Javascript from '../assets/javascript.png'
import GraphicDesign from '../assets/graphicdesign.png'
import PythonImg from '../assets/python.png'
import { motion } from 'framer-motion'

import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'


const Skills = () => {

    const {ref,inView} = useInView()
    const animation = useAnimation()

    
    useEffect(()=> {
        if(inView){
            animation.start({
                opacity:1,
                x:0,
                transition:{
                    type:"spring",
                    duration:3,
                    bounce:0.3
                }
            })
        }

        if(!inView){
            animation.start({
                x:-100
            })
        }

        console.log('use effect hook, inView =', inView)
        
    }, [inView,animation])


  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f]'>
        
        {/* Container */}
        <div ref={ref} className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300 '>
            <div>
                <p className='text-2xl md:text-4xl font-bold inline border-b-2 border-pink-600'>Skills</p>
                <p className='py-6'>These are the technologies i`ve worked with. </p>
            </div>

            <motion.div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'
                animate={animation} 
            >
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="Html logo" />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS logo" />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt="JS logo" />
                    <p className='my-4'>JavaScript</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React logo" />
                    <p className='my-4'>React</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PythonImg} alt="PHP logo" />
                    <p className='my-4'>Python</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GraphicDesign} alt="Graphic Design logo" />
                    <p className='my-4'>UX/UI Design</p>
                </div>

            



            </motion.div>
        </div>

    </div>
  )
}

export default Skills