import { motion, useAnimation } from 'framer-motion'
import React, {useEffect} from 'react'
import { useInView } from 'react-intersection-observer'

function ProfileCard({name, positions, children}) {

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
        className='w-full flex flex-col gap-5 justify-start items-center' 
        ref={ref}
        animate={animation}
        >
        {/* <div className='w-20 h-20 rounded-full bg-orange-300' /> */}
        <div>
            <p className='card__title' >{name}</p>
            {
                positions?.map((position, index) => (
                    <p key={index} className='normal__text text-black text-center font-semibold' >{position}</p>
                ))
            }
        </div>
        <div>
            <p className='normal__text text-black text-center' >{children}</p>
        </div>
    </motion.div>
  )
}

export default ProfileCard