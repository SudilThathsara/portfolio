import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  
  // Function to handle project click
  const handleProjectClick = (githubUrl) => {
    if (githubUrl) {
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
     id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{opacity:0, y: -20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay: 0.3}} className='text-center mb-2 text-lg font-Ovo'>My Portfolio</motion.h4>
        <motion.h2 
        initial={{opacity:0, y: -20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay: 0.3}} className='text-center text-5xl font-Ovo'>My latest work</motion.h2>

        <motion.p 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.5, delay: 0.3}} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Welcome to my web development portfolio. Click on any project to view it on GitHub!</motion.p>

        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.3}} className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
          {workData.map((project, index)=>(
            <motion.div 
              whileHover={{scale:1.05}}
              transition={{duration:0.5, delay: 0.3}} 
              key={index}
              onClick={() => handleProjectClick(project.githubUrl)}
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group hover:shadow-2xl hover:shadow-black/30 dark:hover:shadow-white/20 transition-all duration-300'
              style={{backgroundImage: `url(${project.bgImage})`}}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleProjectClick(project.githubUrl);
                }
              }}
            >
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 group-hover:shadow-lg dark:bg-darkHover dark:text-white'>
                    <div>
                    <h2 className='font-semibold'>{project.title}</h2>
                    <p className='text-sm text-gray-700 dark:text-white/80'>{project.description}</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition dark:border-white dark:shadow-white'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5 dark:invert'  />
                    </div>
                </div>
                
                {/* Optional: Overlay with GitHub icon on hover 
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                  <div className='bg-white dark:bg-darkHover p-3 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className='text-black dark:text-white'>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </div>*/}
            </motion.div>
          ))}
        </motion.div>

        <motion.a 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay: 0.3}}
        href="https://github.com/SudilThathsara" 
        target="_blank" 
        rel="noopener noreferrer"
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:border-white dark:text-white dark:hover:bg-darkHover'>
            View all projects <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
        </motion.a>

    </motion.div>
  )
}

export default Work