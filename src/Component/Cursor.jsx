import React, { useState, useRef, useEffect } from 'react'
import './Cursor.css'
import { motion } from 'framer-motion';


export default function Cursor() {
  // const main =  useRef(null)


  const [mouseposition, setmouseposition] = useState({
    x: 0,
    y: 0
  });

  console.log(mouseposition)
  
  useEffect(() => {
    const mousemove = e => ( 
      setmouseposition({
        x: e.clientX,
        y: e.clientY,        
      })
      )

    window.addEventListener("mousemove", mousemove)

    return () => {
      window.removeEventListener("mousemove", mousemove)
    }
  }, []);

  const variants = {
    default: {
      x: mouseposition.x,
      y: mouseposition.y
    }
  }



  return (
    <div className='' >

      <div id='main' >
        <h1>Heading</h1>
        <motion.div className="cursor"
          variants={variants}
          animate="defaults"
        >
        </motion.div>
      </div>

      {/* <div class="wrapper ">

        <div class="tile tile--emoji-cursor ">
          Emoji Cursor
        </div>

        <div class="tile tile--image-cursor">
          Image Cursor
        </div>
        <div class="tile tile--emoji-cursor">
          Emoji Cursor
        </div>
      </div> */}
    </div>
  )
}