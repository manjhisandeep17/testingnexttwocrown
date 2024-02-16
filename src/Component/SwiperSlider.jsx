import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Link from 'next/link';


// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';




export default function SwiperSlider() {



    return (
        <div className='container-fluid BlogsFeeds' >

            <div className='p-2'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={40}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}

                >
                    <div className='row'>
                        <div className='col-md-12'>
                            <SwiperSlide className='mb-5 SwiperSlide' >

                                <div className=' mt-3 mb-2  '>
                                    <Link href="/blogPage">
                                        <div className='Swiperjs  '>
                                            <div class="card bg-dark text-white">
                                                <img class="card-img" src="SingleRoom.png" alt="Card image" />
                                            </div>
                                        </div>
                                    </Link>
                                    <div className='BlogsFeedstext'>
                                        <h6>Luxury Single Room</h6>
                                        <p> Good Hotel HAll For Party </p>
                                    </div>

                                </div>

                            </SwiperSlide>
                            <SwiperSlide><div className=' mt-3 mb-2 SwiperSlide '>
                                <Link href="/blogPage">
                                    <div className='Swiperjs  '>
                                        <div class="card bg-dark text-white">
                                            <img class="card-img" src="FoodSection.jpg" alt="Card image" />
                                        </div>
                                    </div>
                                </Link>

                                <div className='BlogsFeedstext'>
                                    <h6>Food Section</h6>
                                    <p> Good Hotel HAll For Party </p>
                                </div>

                            </div>
                            </SwiperSlide>
                            <SwiperSlide><div className=' mt-3 mb-2 SwiperSlide '>

                                <Link href="/blogPage">
                                    <div className='Swiperjs  '>
                                        <div class="card bg-dark text-white">
                                            <img class="card-img" src="DoubleBedRoom.jpg" alt="Card image" />
                                        </div>
                                    </div>
                                </Link>

                                <div className='BlogsFeedstext'>
                                    <h6>Double Bed Room</h6>
                                    <p> Good Hotel HAll For Party </p>
                                </div>

                            </div>
                            </SwiperSlide>
                            <SwiperSlide><div className=' mt-3 mb-2  SwiperSlide'>
                                <Link href="/blogPage">
                                    <div className='Swiperjs  '>
                                        <div class="card bg-dark text-white">
                                            <img class="card-img" src="LuxuriousHall.jpg" alt="Card image" />
                                        </div>

                                    </div>
                                </Link>

                                <div className='BlogsFeedstext'>
                                    <h6>Luxury Hall</h6>
                                    <p> Good Hotel HAll For Party </p>
                                </div>

                            </div>
                            </SwiperSlide>
                        </div>
                    </div>

                </Swiper>
            </div>
        </div>
    )
}
