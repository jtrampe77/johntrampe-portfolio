import React from 'react'
import Couture from '../assets/couture.PNG'
import SneakerHeadzReact from '../assets/sneakerheadz-react.PNG'
import Storefront from '../assets/storefront.PNG'
import WeatherApp from '../assets/weatherapp.PNG'
import NetflixImg from '../assets/netflixclone.PNG'
import QuizGame from '../assets/quizgame.PNG'
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

        
            <div className='grid sm:grid-cols-2  gap-4'>
              
               {/* Card Item */}
               <div style={{backgroundImage:`url(${Storefront})`}}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Sneakerheadz
                        </span>

                        <span className='flex flex-col'>
                            <span>React JS, Stripe</span>                           
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
                <div style={{backgroundImage:`url(${SneakerHeadzReact})`}}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <div className='flex flex-col justify-center items-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                 Dashboard
                            </span>
                            <span className='flex flex-col'>
                                <span>React JS, Next JS</span>                           
                            </span>

                            <span className='tracking-wider px-2 pt-4 text-xs'>
                                <span className='flex flex-col'>   
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
                 <div style={{backgroundImage:`url(${WeatherApp})`}}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Weather App
                        </span>
                        <span className='flex flex-col'>
                            <span>JavaScript, HTML, CSS</span>                           
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://weather-app-jtrampe.netlify.app/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>Demo</button>
                            </a>
                            <a href="https://github.com/jtrampe77/weather-app" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                 {/* Card Item */}
                 <div style={{backgroundImage:`url(${NetflixImg})`}}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Netflix Clone
                        </span>
                        <span className='flex flex-col'>
                            <span>HTML, CSS</span>                           
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://netflix-clone-jtrampe.netlify.app/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>Demo</button>
                            </a>
                            <a href="https://github.com/jtrampe77/clone-netflix" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                   {/* Card Item */}
                   <div style={{backgroundImage:`url(${QuizGame})`}}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Quiz Game
                        </span>
                        <span className='flex flex-col'>
                            <span>Javascript, HTML, CSS</span>                           
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://geography-quiz-game.netlify.app/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>Demo</button>
                            </a>
                            <a href="https://github.com/jtrampe77/quizGame" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card Item */}
                <div style={{backgroundImage:`url(${Couture})`}}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Couture eCommerce
                        </span>
                        <span className='flex flex-col'>
                            <span>HTML, CSS</span>                           
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://couture-shop.netlify.app/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>Demo</button>
                            </a>
                            <a href="https://github.com/jtrampe77/couture" target="_blank" rel="noreferrer">
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