import React from 'react'
import { motion } from "framer-motion"

function Button({children, style, click, type}) {
  return (
    <motion.button 
        className={style} 
        whileHover={{ scale: 1.1}}
        whileTap={{ scale: 0.9 }}
        onClick={click} 
        type={type}
        >
        {children}
    </motion.button>
  )
}

export default Button