import React from 'react'

export default function Situated(props) {
  return (
    <div>
         <div className='Situated'>
                <p className='text-center'>Take A Tour</p>
                <h1 className='text-center'>{props.situated}</h1>
            </div>
    </div>
  )
}
