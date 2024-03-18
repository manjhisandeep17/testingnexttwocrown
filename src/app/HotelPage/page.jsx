import React from 'react'
import Main from '@/Component/Main'
// import Banner from "../../../public/hotelvideobanner.mp4"
import Link from 'next/link'
import About1 from '@/Component/About1'
import TakeAtour from '@/Component/TakeAtour'
import HotelCategory from '@/Component/HotelCategory'
import Hotel1img from '../../../public/box1.jpg'
import Hotel2img from '../../../public/box2.jpg'
import Hotel3img from '../../../public/box3.jpg'
import Hotel4img from '../../../public/box4.jpg'
import Footer from '@/Component/Footer'
import Chatbot from '@/Component/ChatBoat';

export default function Page(props) {

    const hotelpagevid = 'video/hotelvideobanner.mp4'
    return (
        <div>

            <Main desc="Then end is well" Video={hotelpagevid} ButtonTitleFirst="Take A Tour" ButtonTitle1="Read More" form={false} formbtn={false} />

            <div className='container HotelPage mt-4'>
                <div className='row linetext '>
                    <h2 className='text-center'> Hotel Taj</h2>
                    <h6 className='text-center'><span className=''>Hotel Taj</span> </h6>
                    <div className='col-md-6 mt-5'>
                        <img src="taj.jpg" height="350px" width="100%" />
                        <img src="hotelpagebottom.png" width="100%" />
                    </div>
                    <div className='col-md-6 mt-5'>
                        <h2> What is Lorem Ipsum?</h2>
                        <p className='text-justify'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <br />
                        <Link href=''> Read More</Link>
                    </div>





                    <div className='row'>
                        <div>
                            <h2 className='mt-5'> Room Collection</h2> <hr />
                            <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                                <div class="container-fluid">


                                    <div class="collapse navbar-collapse topnavstyle" id="navbarSupportedContent">
                                        <ul class="navbar-nav me-auto  mb-lg-0  w-100"  >


                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Select Room
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Show All</a></li>
                                                    <li><a class="dropdown-item" href="#">Fancy Room</a></li>

                                                </ul>
                                            </li>

                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Select Room Category
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Show All</a></li>
                                                    <li><a class="dropdown-item" href="#">Luxury</a></li>

                                                </ul>
                                            </li>


                                        </ul>



                                    </div>
                                </div>
                            </nav>
                            <hr />
                        </div>
                        <div className='col-md-6  mb-3'>
                            <div className='colborder mt-3'>
                                <div className='collectionheart'>
                                    <div class="card mb-3 collectionBook">
                                        <img src="con-box1.jpg" height="350px" width="100%" />
                                    </div>
                                    <div className='collectionhearthovertop '>

                                        <i class="bi bi-suit-heart-fill"></i>

                                    </div>
                                    <div className='collectionhearthover w-100 d-flex justify-content-between'>
                                        <div className=''>
                                            <i class="bi bi-tv"></i>
                                            <i class="bi bi-router"></i>
                                            <i class="bi bi-usb-mini"></i>
                                        </div>
                                        <div className=''>
                                            <i class="bi bi-telephone-outbound"></i>
                                            <i class="bi bi-shield-lock"></i>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/BookingPage" > <button class="btn btn-outline-success rounded-0 w-100 " type="button">Book Now !</button> </Link>
                            </div>
                        </div>
                        <div className='col-md-6  mb-3'>
                            <div className='colborder mt-3'>
                                <div className='collectionheart'>
                                    <div class="card mb-3 collectionBook">
                                        <img src="con-box1.jpg" height="350px" width="100%" />
                                    </div>
                                    <div className='collectionhearthovertop '>

                                        <i class="bi bi-suit-heart-fill"></i>

                                    </div>
                                    <div className='collectionhearthover w-100 d-flex justify-content-between'>
                                        <div className=''>
                                            <i class="bi bi-tv"></i>
                                            <i class="bi bi-router"></i>
                                            <i class="bi bi-usb-mini"></i>
                                        </div>
                                        <div className=''>
                                            <i class="bi bi-telephone-outbound"></i>
                                            <i class="bi bi-shield-lock"></i>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/BookingPage" > <button class="btn btn-outline-success rounded-0 w-100 " type="button">Book Now !</button> </Link>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>

                </div>
            </div>
            <div className='mirinda0 '>
                <h1 className=''>
                    Miranda has everything for your  trip & every single things  Moriond.
                </h1>
            </div>

            <div className='container-fluid '>
                <div className='row'>
                    <div className='col-md-12 mb-3'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58647.059462041056!2d77.36192281418286!3d23.26341253246588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4280ef27038f%3A0xe8bdab7a7042fd89!2sHotel%20Taj!5e0!3m2!1sen!2sin!4v1706598089014!5m2!1sen!2sin" width="100%" height="400" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>


            <About1 aboutboximg="island.jpg" abuotcont={false} />
            <HotelCategory title="Inspired Loding" subtitle="ROOM TYPE " Hotel1="The Fullerton Hotel" cateimg1={Hotel1img} Hotel2="Taj" cateimg2={Hotel2img} Hotel3="Archer Hotel" cateimg3={Hotel3img} Hotel4="Caravalle Hotel" cateimg4={Hotel4img} mrirnda={false} />

            <div className='container-fluid dblock'>
                <div className='row'>
                    <div className='col-md-12 mb-3'>
                        <iframe width="100%" height="250" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

            <TakeAtour />
            <Chatbot></Chatbot>
            <Footer />


        </div>
    )
}
