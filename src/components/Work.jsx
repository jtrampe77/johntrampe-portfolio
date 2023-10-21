import React from 'react'
import Sneakerheadz from '../assets/sneakerheadz.PNG'
import SneakerHeadzReact from '../assets/sneakerheadz-react.PNG'
import Storefront from '../assets/storefront.PNG'
import Mifestival from '../assets/mifestival.PNG'
import MemeGenerator from '../assets/memegenerator.PNG'
import FinancialTracker from '../assets/financialtracker.PNG'
import { motion } from 'framer-motion'

import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

const Work = () => {

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
                x:100
            })
        }

        console.log('use effect hook, inView =', inView)
        
    }, [inView,animation])


  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        
        {/* Container */}
        <div ref={ref} className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-2xl md:text-4xl font-bold inline border-b-2 border-pink-600 text-gray-300'>Projects</p>
                <p className='py-6'>These are some of my projects. Feel free to take a look at the demo site or the code for each of them.</p>
            </div>


           {/* Grid-Container */}
           <motion.div animate={animation} >

        
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              
               {/* Card Item */}
                <div style={{backgroundImage:`url(${Sneakerheadz})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Vanilla JS
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://sneakerheadz.netlify.app/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>Demo</button>
                            </a>
                            <a href="https://github.com/jtrampe77/sneakerheadz" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                {/* Card Item */}
                <div style={{backgroundImage:`url(${SneakerHeadzReact})`}}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <div className='flex flex-col justify-center items-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS /Next JS
                            </span>

                            <span className='tracking-wider px-2 pt-4 text-xs'>
                                <span className='flex flex-col'>
                                    <span className='text-center pb-2'>Login to view</span>
                                    <span>Username: jim@home.com</span>
                                    <span>Password: 123456</span>
                           
                                </span>
                                
                            </span>
                        </div>

                        <div className='pt-8 text-center'>
                            <a href="https://sneakerheadz-react.netlify.app/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>Demo</button>
                            </a>
                            <a href="https://github.com/jtrampe77/sneakerheadz-react" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card Item */}
                <div style={{backgroundImage:`url(${Storefront})`}}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS / Stripe
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://storefront-nextjs.vercel.app/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>Demo</button>
                            </a>
                            <a href="https://github.com/jtrampe77/storefront-nextjs" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                 {/* Card Item */}
                 <div style={{backgroundImage:`url(${Mifestival})`}}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            HTML / CSS
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://mifestival-htmlcss.netlify.app/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>Demo</button>
                            </a>
                            <a href="https://github.com/jtrampe77/mifestival" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                 {/* Card Item */}
                 <div style={{backgroundImage:`url(${MemeGenerator})`}}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            JavaScript
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://js-meme-generator.netlify.app/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>Demo</button>
                            </a>
                            <a href="https://github.com/jtrampe77/meme-generator" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                   {/* Card Item */}
                   <div style={{backgroundImage:`url(${FinancialTracker})`}}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            JavaScript
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://js-financial-tracker.netlify.app/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>Demo</button>
                            </a>
                            <a href="https://github.com/jtrampe77/financial-tracker" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            </motion.div>

            

           
        </div>

    </div>
  )
}

export default Work