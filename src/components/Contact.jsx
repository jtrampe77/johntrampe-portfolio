import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

const Contact = () => {

  const {ref,inView} = useInView()
  const animation = useAnimation()

  useEffect(()=> {
      if(inView){
          animation.start({
              opacity:1,
              y:0,
              transition:{
                  type:"spring",
                  duration:2,
                  bounce:0.3
              }
          })
      }

      if(!inView){
          animation.start({
              y:100
          })
      }

      console.log('use effect hook, inView =', inView)
      
  }, [inView,animation])

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
        <form ref={ref} action="https://getform.io/f/44a633bb-5780-416b-b123-29cfc5c34ea2" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-2xl md:text-4xl font-bold inline border-b-2 border-pink-600 text-gray-300'>Contact</p>
                <p className='py-4 text-gray-300'>Send me a message if you are interested to work together</p>
                <p className='text-pink-600'>Or contact me directly: +1-(780)-399-0143 / johntrampe07@gmail.com</p>
            </div>
            
            <motion.input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' animate={animation}/>
            <motion.input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name='email' animate={animation} />
            <motion.textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' animate={animation} ></motion.textarea>
            <motion.button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' 
              whileHover={{
                scale:1.2,
                trasition:{duration:1}
              }}
              whileTap={{
                scale:0.9
              }}
            >Submit</motion.button>
        </form>
    </div>
  )
}

export default Contact