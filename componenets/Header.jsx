import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div 
          initial={{opacity:0, scale:0.5}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:0.5, type: 'spring', stiffness: 100}}
        >
            <Image src={assets.profile_img} alt='Profile' className='rounded-full w-32'/>
        </motion.div>

        <motion.h3
          initial={{opacity:0, y: -30}}
          whileInView={{y: 0, opacity:1}}
          transition={{duration:0.5, delay: 0.3}}
          className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
        >
          Hello! I'm Sudil Thathsara <Image src={assets.hand_icon} alt='' className='w-6'/>
        </motion.h3>

        <motion.h1 
          initial={{opacity:0, y: -20}}
          whileInView={{y: 0, opacity:1}}
          transition={{duration:0.5, delay: 0.5}} 
          className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
        >
          Full Stack Web Developer & Tech Enthusiast
        </motion.h1>

        <motion.p 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.6, delay: 0.7}} 
          className='max-w-2xl mx-auto font-Ovo'
        >
          Computer Science undergraduate at Sabaragamuwa University, passionate about building modern web applications with cutting-edge technologies.
        </motion.p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
              initial={{opacity:0, y: 30}}
              whileInView={{y: 0, opacity:1}}
              transition={{duration:0.5, delay: 1}} 
              href="#contact" 
              className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
            >
              Contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/>
            </motion.a>
            
            <motion.a 
              initial={{opacity:0, y: 30}}
              whileInView={{y: 0, opacity:1}}
              transition={{duration:0.5, delay: 1.2}} 
              href="/sample-resume.pdf" 
              download 
              className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
            >
              My resume <Image src={assets.download_icon} alt='' className='w-4'/>
            </motion.a>
        </div>
    </div>
  )
}

export default Header