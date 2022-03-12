import { motion, useAnimation } from 'framer-motion'
import React, {useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import Button from './Button'
import Image from 'next/image'

function ProjectCard({title, children, date, image }) {

    const { ref, inView } = useInView({
        threshold: 0.4
      })
    
      const animation = useAnimation()
    
      useEffect(() => {
        if (inView) {
          animation.start({
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3
            }
          })
        } else {
          animation.start({
            opacity: 0,
            y: '15%'
          })
        }
      }, [inView])

  return (
    <motion.div 
        className='w-full  md:w-64 grid grid-cols-2 md:grid-cols-1  bg-main-white rounded shadow-md overflow-hidden hover:shadow-md transition ease-in ' 
        ref={ref}
        animate={animation}
        whileHover={{ scale: 1.05 }}
        >
        <div className='w-full h-full md:h-36 bg-slate-500 object-cover relative' 
        > 
            <Image src={image} layout="fill"  className="object-cover" />
        </div>
        <div className='flex flex-col gap-5 justify-start items-start p-5' >
            <div className='flex flex-col gap-1 justify-start items-start' >
                <p className=' text-xs text-main-light font-gothic font-semibold '>{title} </p>
                <p className='card__title text-left' >{children}</p>
                <p className='normal__text text-black ' >{date}</p>
            </div>
            <div>
                <p className="normal__text text-orange-light" >
                    Coming Soon
                </p>
            </div>
        </div>
    </motion.div>
  )
}

export default ProjectCard