import React from 'react'
import Main from '@/Component/Main'
import Link from 'next/link'
import About1 from '@/Component/About1'
import Footer from '@/Component/Footer'
import "./BookingPage.css"
import Chatbot from '@/Component/ChatBoat';

export default function page() {


  const hotelpagevid = "video/receptionvideo.mp4";
  return (
    <div>
      <Main desc="Then end is well" Video={hotelpagevid} ButtonTitleFirst="Take A Tour" ButtonTitle1="Read More" form={false} formbtn={false} />





    

      <section id="uppercarousel ">
        {/* <!-- partion of section --> */}
        <div class="row bg-white">
          <div class="col-lg-8">
            <section class="about-section pt-20 pb-15 heading-background" style={{ backgroundColor: "#fff" }}>
              <div class="container-fluid">
                <div className='container-fluid bookpage d-flex ' >
                  <div className='row bookpage'>
                    <div className='col-md-12 bookpage0'>
                      <div className='container HotelPage mt-4 mb-3'>
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

                        </div>
                      </div>


                      <div className='mirinda0 mt-3'>
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


                      <div className='container-fluid mt-5 '>
                        <div className='col-md-12 '>
                          <div className='row'>
                            <div className='col-md-5'>
                              <p>Room Type</p>
                              <h2 className='p-1'>Inspired Loding</h2>
                            </div>
                            <div className='col-md-7'>
                              <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                  <button class="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">LUXURY</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">FAMILY</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">DOUBLE BED</button>
                                </li>
                              </ul>
                            </div>
                          </div>

                        </div>

                        <div class="tab-content " id="myTabContent">
                          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className='row '>
                              <div className='col-md-6    m-0 p-0'>
                                <div className='m-3 bookingbor'>
                                  <div className='collectionheart'>
                                    <div class="card  collectionBook ">
                                      <img src="taj.jpg" height="350px" width="100%" />
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
                              <div className='col-md-6    m-0 p-0'>
                                <div className='m-3 bookingbor'>
                                  <div className='collectionheart'>
                                    <div class="card  collectionBook ">
                                      <img src="boximg.jpg" height="350px" width="100%" />
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
                            </div>
                          </div>
                          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className='row '>
                              <div className='col-md-6    m-0 p-0'>
                                <div className='m-3 bookingbor'>
                                  <div className='collectionheart'>
                                    <div class="card  collectionBook ">
                                      <img src="taj.jpg" height="350px" width="100%" />
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
                              <div className='col-md-6    m-0 p-0'>
                                <div className='m-3 bookingbor'>
                                  <div className='collectionheart'>
                                    <div class="card  collectionBook ">
                                      <img src="boximg.jpg" height="350px" width="100%" />
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
                            </div>
                          </div>
                          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div className='row '>
                              <div className='col-md-6    m-0 p-0'>
                                <div className='m-3 bookingbor'>
                                  <div className='collectionheart'>
                                    <div class="card  collectionBook ">
                                      <img src="taj.jpg" height="350px" width="100%" />
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
                              <div className='col-md-6    m-0 p-0'>
                                <div className='m-3 bookingbor'>
                                  <div className='collectionheart'>
                                    <div class="card  collectionBook ">
                                      <img src="boximg.jpg" height="350px" width="100%" />
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
                            </div>
                          </div>
                        </div>
                      </div>


                      <div>
                        <div className='imgsecbooking'>
                          <img src='boximg.jpg' className=' position-absolute mb-5 '></img>
                        </div>
                        <div className='imgsec mt-lg-3 pt-3'>
                          <div className='position-relative d-flex align-items-center justify-content-center object-fit-contain'>
                            <div class="card  mb-3 cardwidth0  p-lg-5 mt-lg-5"  >
                              <div class="card-header text-center justify-content-center">FOR EXCLUSIVE BENEFITS, INSIDER NEWS AND OUT-OF-THE-BOX TRAVEL INSPIRATIONS</div>
                              <div class="card-body">
                                <h2 class="card-title py-lg-5 ">Sign up for our newsletter</h2>
                                <input type='text' className='w-100 border-top-0 border-end-0 border-start-0 mb-lg-4 ' placeholder='Type Your Email'></input>
                                <h6 className='text-decoration-underline text-xl-center mb-lg-5 text-black '><a href=''>Sign Up</a></h6>
                                <p class="card-text pt-lg-5 mt-lg-5">Some quick example text to build on the card title and make up the bulk of the card's content.
                                  Some quick example text to build on the card title and make up the bulk of the card's content.
                                  Some quick example text to build on the card title and make up the bulk of the card's content.
                                  Some quick example text to build on the card title and make up the bulk of the card's content.
                                  Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>


              </div>
            </section>




          </div>


          <div class="col-lg-4">
            <div class="mb-20 sidenav" id="sidenavid">
              <form method="POST" action="">
                <input type="hidden" name="user_id" value="" />
                <input type="hidden" name="book_room_id" value="5" />
                <input type="hidden" name="book_hotel_id" value="3" />
                <div class="example">
                  <img src="taj.jpg" height="350px" width="100%" />
                  {/* <img src={abc} class="social-link gif-image" /> */}
                </div>
                <div class="dropdown" style={{ marginTop: "10px", border: "2px solid black", height: "40px" }} >
                  <select className='form-control rounded-0' name="adults" id="adults" required >
                    <option value="1" selected>1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>
                <div class="" style={{ marginTop: "10px", border: "2px solid black", height: "40px" }}>
                  <input type="date" id="Date" name="Date"  className='form-control rounded-0 ' />
                </div>
                <div>
                  <button type="button" class="btn btn-success btn-lg w-100 btn-block mt-3 scroll-button rounded-0" data-toggle="modal" data-target="#staticBackdrop">ENQUIRE BOOK NOW</button>

                  {/* <!-- <button type="submit" name="room_submit" class="btn btn-success btn-lg btn-block mt-3 scroll-button">ENQUIRE BOOK NOW</button> --> */}
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>



    <Chatbot></Chatbot>
      <Footer />

    </div>
  )
}
