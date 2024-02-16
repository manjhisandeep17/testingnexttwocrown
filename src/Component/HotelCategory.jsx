import React from 'react'
import Image from 'next/image'
import Link from 'next/link';


export default function HotelCategory(props) {
    return (
        <div>
            <div className='container-fluid section' >
                <div className='row'>
                    <div className='col-md-4 text-white catnavbg py-4'><p>{props.subtitle}</p>
                        <h2 className='text-white'>{props.title}</h2>
                    </div>
                    <div className='col-md-8 pt-5 catnavbg '>

                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">HOTELS</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">FINE VILLAS</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">CATEAUX</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-add1-tab" data-bs-toggle="pill" data-bs-target="#pills-add1" type="button" role="tab" aria-controls="pills-add1" aria-selected="false">PRIVATE ISLAND</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-add2-tab" data-bs-toggle="pill" data-bs-target="#pills-add2" type="button" role="tab" aria-controls="pills-add2" aria-selected="false">LOCATION VENU</button>
                            </li>
                            
                        </ul>
                        </div>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div class="box" id="classic">
                                <div class="box1 Catheart">
                                    <a href='/HotelPage'><Image src={props.cateimg1} class="box1img" style={{ height: "300px", width: "100%" }} /></a>
                                    <div class="name">
                                        <p>{props.Hotel1}</p>
                                    </div>
                                    <div className='Catheart1'>
                                        <i class="bi bi-suit-heart-fill"></i>
                                    </div>
                                    <div className='rightarrow'>
                                        <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                    </div>
                                </div>
                                <div class="box2 ">
                                    <div className='box2heart'>
                                        <div >
                                            <a href='?HotelPage'><Image src={props.cateimg2} class="box2img" style={{ height: "550px", width: "100%" }} /></a>
                                        </div>
                                        <div class="name1">
                                            <p>{props.Hotel2}</p>
                                        </div>
                                        <div className='box2heart1'>
                                            <i class="bi bi-suit-heart-fill"></i>
                                        </div>
                                        <div className='rightarrow'>
                                            <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="box3 ">

                                    <div className='box3heart'>
                                        <a href='/HotelPage'> <Image src={props.cateimg3} class="box3img" style={{ height: "250px", width: "100%" }} /></a>
                                        <div class="name2">
                                            <p>{props.Hotel3}</p>
                                        </div>
                                        <div className='box3heart1'>
                                            <i class="bi bi-suit-heart-fill"></i>
                                        </div>
                                        <div className='rightarrow'>
                                            <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="box4">
                                    <div className='box4heart'>
                                        <a href='/HotelPage'><Image src={props.cateimg4} class="box4img" style={{ height: "250px", width: "100%" }} /></a>
                                        <div class="name3">
                                            <p>{props.Hotel4}</p>
                                        </div>
                                        <div className='box4heart1'>
                                            <i class="bi bi-suit-heart-fill"></i>
                                        </div>
                                        <div className='rightarrow'>
                                            <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="box" id="classic">
                                <div class="box1 Catheart">
                                    <a href='/HotelPage'><Image src={props.cateimg1} class="box1img" style={{ height: "300px", width: "100%" }} /></a>
                                    <div class="name">
                                        <p>{props.Hotel1}</p>
                                    </div>
                                    <div className='Catheart1'>
                                        <i class="bi bi-suit-heart-fill"></i>
                                    </div>
                                    <div className='rightarrow'>
                                        <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                    </div>
                                </div>
                                <div class="box2 ">
                                    <div className='box2heart'>
                                        <div >
                                            <a href='?HotelPage'><Image src={props.cateimg2} class="box2img" style={{ height: "550px", width: "100%" }} /></a>
                                        </div>
                                        <div class="name1">
                                            <p>{props.Hotel2}</p>
                                        </div>
                                        <div className='box2heart1'>
                                            <i class="bi bi-suit-heart-fill"></i>
                                        </div>
                                        <div className='rightarrow'>
                                            <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="box3 ">

                                    <div className='box3heart'>
                                        <a href='/HotelPage'> <Image src={props.cateimg3} class="box3img" style={{ height: "250px", width: "100%" }} /></a>
                                        <div class="name2">
                                            <p>{props.Hotel3}</p>
                                        </div>
                                        <div className='box3heart1'>
                                            <i class="bi bi-suit-heart-fill"></i>
                                        </div>
                                        <div className='rightarrow'>
                                            <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="box4">
                                    <div className='box4heart'>
                                        <a href='/HotelPage'><Image src={props.cateimg4} class="box4img" style={{ height: "250px", width: "100%" }} /></a>
                                        <div class="name3">
                                            <p>{props.Hotel4}</p>
                                        </div>
                                        <div className='box4heart1'>
                                            <i class="bi bi-suit-heart-fill"></i>
                                        </div>
                                        <div className='rightarrow'>
                                            <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div class="box" id="classic">
                                <div class="box1 Catheart">
                                    <a href='/HotelPage'><Image src={props.locationimg3} class="box1img" style={{ height: "300px", width: "100%" }} /></a>
                                    <div class="name">
                                        <p>{props.Hotel1}</p>
                                    </div>
                                    <div className='Catheart1'>
                                        <i class="bi bi-suit-heart-fill"></i>
                                    </div>
                                    <div className='rightarrow'>
                                        <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                    </div>
                                </div>
                                <div class="box2 ">
                                    <div className='box2heart'>
                                        <div >
                                            <a href='?HotelPage'><Image src={props.cateimg2} class="box2img" style={{ height: "550px", width: "100%" }} /></a>
                                        </div>
                                        <div class="name1">
                                            <p>{props.Hotel2}</p>
                                        </div>
                                        <div className='box2heart1'>
                                            <i class="bi bi-suit-heart-fill"></i>
                                        </div>
                                        <div className='rightarrow'>
                                            <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="box3 ">

                                    <div className='box3heart'>
                                        <a href='/HotelPage'> <Image src={props.cateimg3} class="box3img" style={{ height: "250px", width: "100%" }} /></a>
                                        <div class="name2">
                                            <p>{props.Hotel3}</p>
                                        </div>
                                        <div className='box3heart1'>
                                            <i class="bi bi-suit-heart-fill"></i>
                                        </div>
                                        <div className='rightarrow'>
                                            <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="box4">
                                    <div className='box4heart'>
                                        <a href='/HotelPage'><Image src={props.cateimg4} class="box4img" style={{ height: "250px", width: "100%" }} /></a>
                                        <div class="name3">
                                            <p>{props.Hotel4}</p>
                                        </div>
                                        <div className='box4heart1'>
                                            <i class="bi bi-suit-heart-fill"></i>
                                        </div>
                                        <div className='rightarrow'>
                                            <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>

                            <div class="tab-pane fade show " id="pills-add1" role="tabpanel" aria-labelledby="pills-add1-tab">
                            <div class="box" id="classic">
                                <div class="box1 Catheart">
                                    <a href='/HotelPage'><Image src={props.cateimg1} class="box1img" style={{ height: "300px", width: "100%" }} /></a>
                                    <div class="name">
                                        <p>{props.Hotel1}</p>
                                    </div>
                                    <div className='Catheart1'>
                                        <i class="bi bi-suit-heart-fill"></i>
                                    </div>
                                    <div className='rightarrow'>
                                        <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                    </div>
                                </div>
                                <div class="box2 ">
                                    <div className='box2heart'>
                                        <div >
                                            <a href='?HotelPage'><Image src={props.cateimg2} class="box2img" style={{ height: "550px", width: "100%" }} /></a>
                                        </div>
                                        <div class="name1">
                                            <p>{props.Hotel2}</p>
                                        </div>
                                        <div className='box2heart1'>
                                            <i class="bi bi-suit-heart-fill"></i>
                                        </div>
                                        <div className='rightarrow'>
                                            <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="box3 ">

                                    <div className='box3heart'>
                                        <a href='/HotelPage'> <Image src={props.cateimg3} class="box3img" style={{ height: "250px", width: "100%" }} /></a>
                                        <div class="name2">
                                            <p>{props.Hotel3}</p>
                                        </div>
                                        <div className='box3heart1'>
                                            <i class="bi bi-suit-heart-fill"></i>
                                        </div>
                                        <div className='rightarrow'>
                                            <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="box4">
                                    <div className='box4heart'>
                                        <a href='/HotelPage'><Image src={props.cateimg4} class="box4img" style={{ height: "250px", width: "100%" }} /></a>
                                        <div class="name3">
                                            <p>{props.Hotel4}</p>
                                        </div>
                                        <div className='box4heart1'>
                                            <i class="bi bi-suit-heart-fill"></i>
                                        </div>
                                        <div className='rightarrow'>
                                            <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="tab-pane fade show " id="pills-add2" role="tabpanel" aria-labelledby="pills-add2-tab">
                            <div class="box" id="classic">
                                <div class="box1 Catheart">
                                    <a href='/HotelPage'><Image src={props.locationimg1} class="box1img" style={{ height: "300px", width: "100%" }} /></a>
                                    <div class="name">
                                        <p>{props.Hotel1}</p>
                                    </div>
                                    <div className='Catheart1'>
                                        <i class="bi bi-suit-heart-fill"></i>
                                    </div>
                                    <div className='rightarrow'>
                                        <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                    </div>
                                </div>
                                <div class="box2 ">
                                    <div className='box2heart'>
                                        <div >
                                            <a href='?HotelPage'><Image src={props.cateimg2} class="box2img" style={{ height: "550px", width: "100%" }} /></a>
                                        </div>
                                        <div class="name1">
                                            <p>{props.Hotel2}</p>
                                        </div>
                                        <div className='box2heart1'>
                                            <i class="bi bi-suit-heart-fill"></i>
                                        </div>
                                        <div className='rightarrow'>
                                            <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="box3 ">

                                    <div className='box3heart'>
                                        <a href='/HotelPage'> <Image src={props.cateimg3} class="box3img" style={{ height: "250px", width: "100%" }} /></a>
                                        <div class="name2">
                                            <p>{props.Hotel3}</p>
                                        </div>
                                        <div className='box3heart1'>
                                            <i class="bi bi-suit-heart-fill"></i>
                                        </div>
                                        <div className='rightarrow'>
                                            <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="box4">
                                    <div className='box4heart'>
                                        <a href='/HotelPage'><Image src={props.cateimg4} class="box4img" style={{ height: "250px", width: "100%" }} /></a>
                                        <div class="name3">
                                            <p>{props.Hotel4}</p>
                                        </div>
                                        <div className='box4heart1'>
                                            <i class="bi bi-suit-heart-fill"></i>
                                        </div>
                                        <div className='rightarrow'>
                                            <Link href="/Hotels"><i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>


                    </div>

                    {
                        props.mrirnda ? <div className='Mirinda '>
                            <h1 className=''>
                                {props.Mirinda}
                            </h1></div> : ""

                    }


                </div>
            </div>
            )
}
