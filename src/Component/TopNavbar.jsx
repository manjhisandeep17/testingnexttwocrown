"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import SideBar from './SideBar';
import Logo from '../../public/twocrown.png'
import { NavLink } from 'react-router-dom';
import ClockComponent from '@/app/clock/page';

const currDate = new Date()
export default function TopNavbar() {


    const formattedDate = new Intl.DateTimeFormat('en-IN', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    }).format(currDate);



    const navlink = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Hotels",
            href: "/Hotels",
        },
        {
            name: "Career",
            href: "/Career",
        },
        {
            name: "Blogs",
            href: "/blogPage",
        },
        {
            name: "Register",
            href: "/Register",
        },
        {
            name: "Location",
            href: "/Location",
        },
        {
            name: "Contact",
            href: "/Contact",
        },

    ]


    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //       setCurrentTime(new Date());
    //     }, 1000);

    //     return () => clearInterval(intervalId);

    //   }, []); 

    //   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //   const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



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
        <div style={{ position: "sticky", top: "-155px", zIndex: "999", }} >
            <div style={{ position: "absolute", top: 0, right: 0, left: 0, }} >
                <div className='container ' >
                    <div className='row'>
                        <div className='col-md-10'></div>
                        <div className='col-md-2'>
                            {/* <div>  <ClockComponent></ClockComponent></div> */}
                            <span style={{ zIndex: '999' }} className='d-flex justify-content-end text-white pt-1'>Edition No: {formattedDate}</span>
                            <div className='lang'>
                                <span className=''>
                                    <select class=" optrem" aria-label="Default select example">
                                        <option selected>English</option>
                                        <option value="1">Hindi</option>
                                        <option value="2">German</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                    </div>


                </div>


                {/* <ul className='list-style-nonee'>
                            <li className="nav-item dropdown px-3 ">
                                <Link className="nav-link dropdown-toggle topnavlinkcol" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select language
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item " href="#" >Hindi</Link></li>
                                    <li><Link className="dropdown-item " href="#">English</Link></li>
                                </ul>
                            </li>
                        </ul> */}


                <h1 className='text-center  justify-content-center align-items-center text-white  '>
                    <Image src={Logo} style={{ width: "200px", height: "70px", padding: "10px" }} alt='jsdbvd' />
                </h1>

                <div className='d-flex justify-content-around align-items-center  topnavstyle '>
                    <SideBar />
                    <div className='  navbar navbar-expand-lg  mx-5'>
                        <div className="container-fluid " >
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse   " id="navbarScroll"  >

                                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll  " >

                                    {
                                        navlink.map((lin) => {
                                            return (
                                                <Link aria-current="page" href={lin.href} className={"nav-link active topnavlinkcol nav-item px-3"}>
                                                    {lin.name} </Link>
                                            )

                                            // <li className="nav-item px-3">
                                            //     <NavLink className={({isActive}) =>{
                                            //         return(
                                            //             "nav-link active topnavlinkcol text-decoration-none " + (isActive ? ".nav-pills .nav-link.active bg-dark": " " ));
                                            //         }}
                                            //      aria-current="page" href={lin.href}>{lin.name}
                                            //     </NavLink>
                                            // </li>)
                                        })
                                    }


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
