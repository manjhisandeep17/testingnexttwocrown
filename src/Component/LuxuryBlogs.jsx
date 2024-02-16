import React from 'react'
import Link from 'next/link';

export default function LuxuryBlogs(props) {
  return (
    <div>
      <div className='container-fluid LuxBlogs'>
          <div className='row pb-5'>
            <div className='galhead'>
              <h6 className='text-center text-white'> SOCIAL MEDIA</h6>
              <h1 className='text-white'>{props.lux}</h1>
              <p className='text-center text-white'> The most Fashionable online booking platform</p>
            </div>
            <div className='col-md-4 mt-3 mb-2  '>
              <div className='Gallary '>
                <div class="card bg-dark text-white">
                  <img class="card-img" src="Slider2.jpg" alt="Card image" />
                </div>
              </div>

            </div>
            <div className='col-md-4 mt-3 mb-2 '>
              <div className='Gallary '>
                <div class="card bg-dark text-white">
                 <Link href="https://www.youtube.com/" target='_blank'><img class="card-img" src="GallaryVideo.jpg" alt="Card image" /></Link>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-3 mb-2 '>
              <div className='Gallary '>
                <div class="card bg-dark text-white">
                  <img class="card-img" src="Slider1.jpg" alt="Card image" />
                </div>
              </div>
            </div>

          </div>

        </div>

    </div>
  )
}
