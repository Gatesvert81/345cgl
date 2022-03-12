import { motion, useAnimation } from 'framer-motion'
import React, {useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import Button from './Button'

function ServiceCard({title}) {

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
        className=' w-full md:w-fit h-fit p-5 rounded shadow-md flex flex-row md:flex-col justify-start items-center
         md:items-start gap-3 flex-grow ' 
        ref={ref}
        animate={animation}
        whileHover={{ scale: 1.05 }}
        >
        <div className='w-14 h-14 rounded-full bg-black' />
        <div className='card__title text-left capitalize break-words ' >
            {title}
        </div>
    </motion.div>
  )
}

export default ServiceCard