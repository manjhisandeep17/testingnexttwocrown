'use client'

import React, { useState, useEffect } from 'react';
import './ClockComponent.css'; // Import your CSS file

const ClockComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount

  }, []); // Empty dependency array to run the effect only once on mount

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    
    <div className="signboard outer">
      <div className="signboard front inner anim04c">
        <li className="year anim04c">
          <span>{currentTime.getFullYear()}</span>
        </li>
        <ul className="calendarMain anim04c">
          <li className="month anim04c">
            <span>{monthNames[currentTime.getMonth()]}</span>
          </li>
          <li className="date anim04c">
            <span>{currentTime.getDate()}</span>
          </li>
          <li className="day anim04c">
            <span>{dayNames[currentTime.getDay()]}</span>
          </li>
        </ul>
        <li className="clock minute anim04c">
          <span>{(currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes()}</span>
        </li>
        <li className="calendarNormal date2 anim04c">
          <span>{currentTime.getDate()}</span>
        </li>
      </div>
      <div className="signboard left inner anim04c">
        <li className="clock hour anim04c">
          <span>{(currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours()}</span>
        </li>
        <li className="calendarNormal day2 anim04c">
          <span>{dayNames[currentTime.getDay()]}</span>
        </li>
      </div>
      <div className="signboard right inner anim04c">
        <li className="clock second anim04c">
          <span>{(currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds()}</span>
        </li>
        <li className="calendarNormal month2 anim04c">
          <span>{monthNames[currentTime.getMonth()]}</span>
        </li>
      </div>
    </div>
  );
};

export default ClockComponent;
