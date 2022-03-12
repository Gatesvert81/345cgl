import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

function AdvantageCard({ title, children, text }) {

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
      <div className='w-12 h-12 rounded-full bg-orange-200 flex flex-col justify-center items-center ' >
        {children}
      </div>
      {
        title ?
          (
            <div className='card__title' >
              {title}
            </div>
          ) : null
      }
      <div className='normal__text text-black text-center' >
        {text}
      </div>
    </motion.div>
  )
}

export default AdvantageCard