import React from 'react'
import Link from 'next/link';

export default function HotelCollection() {



    return (
        <div className='collection'>
            <div className='container-fluid '>
                <div className='row'>
                    <div className='col-md-12 '>
                        <p>Collection's</p>
                        <h2 className=''>Hotel_Collection</h2>
                    </div>
                </div>
            </div>

            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                    <div class="container-fluid">

                        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                        <div class="collapse navbar-collapse topnavstyle" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto  mb-lg-0 d-flex justify-content-evenly align-content-center w-100"  >

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Select Continent
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">India</a></li>
                                        {/* <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Select Country
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Madhya Pradesh</a></li>
                                        <li><a class="dropdown-item" href="#">Maharashtra</a></li>
                                        <li><a class="dropdown-item" href="#">Karnata</a></li>
                                        <li><a class="dropdown-item" href="#">Rajasthan</a></li>
                                        <li><a class="dropdown-item" href="#">Uttar Pradesh</a></li>
                                        <li><a class="dropdown-item" href="#">Gujrat</a></li>
                                        <li><a class="dropdown-item" href="#">Chhatisgarh</a></li>
                                        <li><a class="dropdown-item" href="#">Delhi</a></li>
                                        <li><a class="dropdown-item" href="#">Rajasthan</a></li>
                                        <li><a class="dropdown-item" href="#">West Bengal</a></li>

                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Select State
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>

                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Select District
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>

                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Select Hotel Category
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Five Star</a></li>
                                        <li><a class="dropdown-item" href="#">All</a></li>

                                    </ul>
                                </li>

                                {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Hotel
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                            </ul>



                        </div>
                    </div>
                </nav>
            </div>



            <div className='container mt-5 bookpageimgset'>

                <div className='row '>
                    <div className='col-md-6   '>
                        <div className='colborder mt-3'>
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
                            <Link href="/HotelPage" > <button class="btn btn-outline-success rounded-0 w-100 " type="button">Book Now !</button> </Link>
                        </div>
                    </div>
                    <div className='col-md-6  '>
                        <div className='colborder mt-3'>
                            <div className='collectionheart'>
                                <div class="card  collectionBook">
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
                            <Link href="/HotelPage" > <button class="btn btn-outline-success rounded-0 w-100 " type="button">Book Now !</button> </Link>
                        </div>
                    </div>
                    <div className='col-md-6  '>
                        <div className='colborder mt-3'>
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
                            <Link href="/HotelPage" > <button class="btn btn-outline-success rounded-0 w-100 " type="button">Book Now !</button> </Link>
                        </div>
                    </div>
                    <div className='col-md-6 '>
                        <div className='colborder mt-3'>
                            <div className='collectionheart'>
                                <div class="card  collectionBook ">
                                    <img src="con-box4.jpg" height="350px" width="100%" />
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
                            <Link href="/HotelPage" > <button class="btn btn-outline-success rounded-0 w-100" type="button">Book Now !</button> </Link>

                        </div>
                    </div>
                </div>

                {/* <div class="lux-box" id="luxury">
                    <div class="lux-box1">
                        <img src="con-box4.jpg" height="550px" width="100%" />
                    </div>
                    <div class="lux-box2">
                        <img src="lux-img4.jpg" height="280px" width="100%" />
                    </div>
                    <div class="lux-box3">
                        <img src="lux-img1.jpg" height="250px" width="100%" />
                    </div>
                </div> */}



            </div>
        </div>
    )
}
