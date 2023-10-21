import React, {useState} from 'react'
import MyselfImg from '../assets/myself.png'
import {Link} from 'react-scroll'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'


const About = () => {

    const [contact, setContact] = useState(false)
    const handleClick =() => setContact(!contact)

    const {ref,inView} = useInView()
    const animation = useAnimation()

    useEffect(()=> {
        if(inView){
            animation.start({
                opacity:1,
                x:0,
                transition:{
                    type:"spring",
                    duration:2,
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
    <div name='about' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            {/* Container */}
            <div className='max-w=[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-2xl md:text-4xl font-bold inline border-b-2 border-pink-600'>About Me</p>
                </div>

                <div></div>
            
            </div>
            
            <div ref={ref} className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>

                <motion.div
                    // initial={{
                    //     opacity: 0,
                    //     x:200
                    // }}
                    animate={
                        // opacity:1,
                        // x:0
                        animation
                    }
                    // transition={{
                    //     duration:3,
                    //     delay:1
                    // }}
                >
                    <img src={MyselfImg} alt="John Trampe" />
                </motion.div>
                
                <div>
                    <div className='text-2xl md:text-3xl font-bold mb-4'>
                        <p>Get to know me better.</p>
                    </div>
                    <p>I'm a passionate UX/UI designer with a strong foundation in web design and development, complemented by expertise in cybersecurity and IT.</p> <br />
                    
                    <p>My diverse skill set bridges the gap between design and development, allowing me to create user-centered, secure, and aesthetically pleasing digital experiences. With a keen eye for detail, I craft designs that not only look great but also function seamlessly, enhancing user satisfaction and security in the ever-evolving digital landscape. </p>              

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
                              delay:2
                          }}
                    >
                         <Link className='group text-white border-2 px-6 py-3 my-8 flex items-center hover:bg-pink-600 hover:border-pink-600 sm:w-[30%] lg:w-[35%]' onClick={handleClick} to="contact" smooth={true} duration={500}>Let`s Talk
                        <span className=' group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </Link>
                    </motion.div>
                   

                </div>
            </div>

    
        </div>
    </div>
  )
}

export default About