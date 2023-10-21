import React, {useState} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import { motion } from 'framer-motion'
import BackgroundAnimation from './BackgroundAnimation/BackgroundAnimation'


const Home = () => {

  const [nav, setNav] = useState(false)
  const handleClick =() => setNav(!nav)


  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] md:flex justify-center items-center'>
      
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full'>
        <motion.p className='text-pink-600'
          initial={{
            opacity: 0,
            y:-50
          }}
          animate={{
              opacity:1,
              y:0
          }}
          transition={{
              duration:1
          }}
        >
          Hey there! I'm
        </motion.p>

        <motion.h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] pb-4'
          initial={{
            opacity: 0,
            x:-250
          }}
          animate={{
              opacity:1,
              x:0
          }}
          transition={{
              duration:2,
              type:"spring"
          }}
        >
          John Trampe
        </motion.h1>

        <motion.h2 className='text-3xl  sm:text-4xl font-bold text-[#8892b0]'
          initial={{
            opacity: 0,
            x:250
          }}
          animate={{
              opacity:1,
              x:0
          }}
          transition={{
              duration:2,
              type:"spring"
          }}
        >
          Front-End Developer | UX/UI Designer
        </motion.h2>

        <motion.p className='text-[#8892b0] py-4 max-w-[700px]'
          initial={{
            opacity: 0
          }}
          animate={{
              opacity:1
          }}
          transition={{
              duration:3
          }}
        
        >
          I can bridge the gap between design and development seamlessly.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y:50
          }}
          animate={{
              opacity:1,
              y:0
          }}
          transition={{
              duration:3,
              type:"spring",
              stiffness:50,
              delay:1
          }}
        
        >
          <Link className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 sm:w-[30%] lg:w-[25%]' onClick={handleClick} to="work" smooth={true} duration={500}>View Projects

          <span className=' group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
          </span>
          </Link>
       
        </motion.div>

      </div>

      <div className='w-[650px] hidden md:block'>
      <BackgroundAnimation />
      </div>

    </div>
  )
}

export default Home