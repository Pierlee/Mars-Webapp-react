import './Carroussel.css'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'


const Carroussel = (props) => {

  const slide = useRef();
  const [width, setWidth] = useState(0)

  useEffect(()=>{
    setWidth(slide.current?.scrollWidth - slide.current?.offsetWidth)
  }, [])

  return(
    <div className='slide'>
      <motion.div ref={slide} className='carroussel' whileTap={{ cursor:"grabbing" }}>
        <motion.div className='inner' drag='x' dragConstraints={{right: 0, left: -width}}>
          {props.images}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Carroussel