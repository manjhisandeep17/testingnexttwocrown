import React, { useState, useEffect } from 'react';
import './blogcomponent.css'; // Include a CSS file for styling
import Link from 'next/link';

const MouseTrailingEffect = () => {
  const [trailX, setTrailX] = useState(0);
  const [trailY, setTrailY] = useState(0);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setTrailX(clientX);
    setTrailY(clientY);
  };

  useEffect(() => {
    const container = document.getElementById('trailing-container');

    const handleContainerMouseMove = (event) => {
      const { top, bottom } = container.getBoundingClientRect();
      const mouseY = event.clientY;

      if (mouseY >= top && mouseY <= bottom) {
        handleMouseMove(event);
      }
    };

    container.addEventListener('mousemove', handleContainerMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleContainerMouseMove);
    };
  }, 

  []);



  return (
    <div className='maindivblog'>
      <div id="trailing-container" className="trailing-container">
        <div
          className="custom-cursor"
          style={{ left: trailX, top: trailY }}
        ></div>
        <Link href="" className='blogcenterh1'><h1>Fine Villas</h1></Link>
      </div>

    </div>
  );
};

export default MouseTrailingEffect;
