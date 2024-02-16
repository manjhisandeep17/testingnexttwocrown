"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import SideBar from './SideBar';
import Logo from '../../public/twocrown.png'



export default function TopNavbar() {

    // const [col, setcol] = useState(false)

    // window.addEventListener("scroll", () =>{
    //     if (window.scrollY>=380){
    //         setcol(true)
    //     }
    //     else{
    //         setcol(false)
    //     }
    // })


    // className={col ? "bg-dark" : " " }   add className in second div

    return (
        <div  style={{position:"sticky", top:"-105px", zIndex: "999",}}>
            <div   style={{position:"absolute", top: 0, right: 0, left: 0,  }}>
                <h1 className='text-center  justify-content-center align-items-center text-white pt-3 '>
                    <Image src={Logo}  style={{ width: "200px", height:"80px", padding: "10px" }} alt='jsdbvd' /> </h1>
                <div className='d-flex justify-content-around align-items-center  topnavstyle  '>
                    <SideBar />
                    <div className='  navbar navbar-expand-lg  mx-5'>
                        <div className="container-fluid " >
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse   " id="navbarScroll"  >
                                
                                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll  " >
                                    
                                    
                                    <li className="nav-item px-3">
                                        <Link className="nav-link active topnavlinkcol" aria-current="page" href="/">Home</Link>
                                    </li>

                                    <li className="nav-item px-3">
                                        <Link className="nav-link topnavlinkcol" href="/Hotels">Hotels</Link>
                                    </li>
                                    <li className="nav-item px-3">
                                        <Link className="nav-link topnavlinkcol" href="/Career">Career</Link>
                                    </li>

                                    <li className="nav-item px-3">
                                        <Link className="nav-link topnavlinkcol" href="/blogPage">Blogs</Link>
                                    </li>

                                    <li className="nav-item px-3">
                                        <Link className="nav-link topnavlinkcol" href="/Register">Register</Link>
                                    </li>
                                    <li className="nav-item px-3">
                                        <Link className="nav-link topnavlinkcol" href="/Location">Location</Link>
                                    </li>

                                    <li className="nav-item px-3">
                                        <Link className="nav-link topnavlinkcol" href="/Contact">Contact</Link>
                                    </li>

                                   

                                    <li className="nav-item dropdown px-3">
                                        <Link className="nav-link dropdown-toggle topnavlinkcol" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Link
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item topnavlinkcol" href="#">Action</Link></li>
                                            <li><Link className="dropdown-item topnavlinkcol" href="#">Another action</Link></li>
                                            <li><hr className="dropdown-divider topnavlinkcol" />Another link</li>
                                            <li><Link className="dropdown-item topnavlinkcol" href="#">Something else here</Link></li>
                                        </ul>
                                    </li>

                                </ul>


                            </div>
                        </div>




                    </div>
                    <div className='regsm'>
                        <button className='p-1 px-4 ' style={{ backgroundColor: "#43F609", border: "none" }}>Login/Register</button>
                    </div>
                </div>
            </div>


        </div>
    )
}
