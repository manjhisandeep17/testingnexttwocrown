import React from 'react'
import SwiperSlider from './SwiperSlider'

export default function BlogsFeeds(props) {
    return (
        <div>
            <div className='container-fluid BlogsFeeds '>
                <h6 className='text-white pt-3 ps-2'> BLOGS</h6>
                <h1 className='p-0 m-0'>{props.lux}</h1>
            </div>

            <SwiperSlider />

        </div>
    )
}
