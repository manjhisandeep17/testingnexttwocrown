import React from 'react'

export default function About1(props) {
  return (
    <div>
     
      {
        props.abuotcont ?
          <div className='about1 mt-5 '>
            <h1 className='m-0'>About Us</h1>
          </div>
          : ""}

      <div className='about-box '>
        <img src={props.aboutboximg} height="500px" width="100%" />
      </div>




    </div>
  )
}
