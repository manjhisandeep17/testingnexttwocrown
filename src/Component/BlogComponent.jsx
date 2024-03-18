import React, { useState, useEffect } from 'react';
import './blogcomponent.css'; // Include a CSS file for styling
import Link from 'next/link';

const MouseTrailingEffect = () => {
  const [trailX1, setTrailX1] = useState(0);
  const [trailY1, setTrailY1] = useState(0);

  const handleMouseMove1 = (event1) => {
    const { clientX, clientY } = event1;
    setTrailX1(clientX);
    setTrailY1(clientY);
  };

  useEffect(() => {
    const container = document.getElementById('trailing-container1');

    const handleContainerMouseMove1 = (event1) => {
      const { top, bottom } = container.getBoundingClientRect();
      const mouseY = event1.clientY;

      if (mouseY >= top && mouseY <= bottom) {
        handleMouseMove1(event1);
      }
    };

    container.addEventListener('mousemove', handleContainerMouseMove1);

    return () => {
      container.removeEventListener('mousemove', handleContainerMouseMove1);
    };
  }, 

  []);

 
  

  return (
    <div className='maindivblog1'>
      <div id="trailing-container1" className="trailing-container1">
        <div
          className="custom-cursor1"
          style={{ left: trailX1, top: trailY1 }}
        >
        </div>
        <Link href="" className='blogcenterh1'><h1>Hotels</h1></Link>
      </div>

    </div>
  );
};

export default MouseTrailingEffect;
