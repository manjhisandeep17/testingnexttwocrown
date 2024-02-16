import React from 'react'
import Video from '@/Component/Video'

export default function Discover(props) {
    return (
        <div >
            <div className='Discover'>
                <p className='text-center'>Take A Tour</p>
                <h1 className='text-center'>{props.Discoverhead}</h1>
            </div>
            <Video />
        </div>
    )
}
