import React from 'react'
import {motion} from 'framer-motion'

const animation = {
    initial:{opacity:0,x:100},
    animated:{opacity:1,x:0},
    exit:{opacity:0,x:-100}
}

const AnimatedPage = ({children}) => {
  return (
    <motion.div 
        variants={animation} 
        initial="initial" 
        animate="animated" 
        exit="exit"
        transition={{duration:1}}
        >
        {children}
    </motion.div>
  )
}

export default AnimatedPage