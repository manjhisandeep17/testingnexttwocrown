"use client"
import React, { useState, useEffect } from 'react'



export default function Main(props, params) {

    // const [data, setData] = useState([])
    // function Search () {
    // const [filterData, setfilterData] = useState([])

    // const handleFilter = (value) => {

    //     const res = filterData.filter( f => f.name.lowerCase().includes(value))
    //     setData(res);

    // }
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data);
    //             setfilterData(filterData);
    //         })
    //         .catch(err => console.log(err))
    // }, [])
    // }



    return (
        <div style={{ position: "relative" }}>

            <div className='container-fluid pic  '>
                <div className='row'>
                    <div className='col-md-12 p-0'>
                        <div id="carouselExampleDark" className="carousel carousel-dark slide">

                            <div className="">
                                <div className="imgban w-100" >
                                    <div>
                                        {/* <Image src={props.bannerimg} alt="Picture of the author" className="d-block w-100 "  /> */}
                                        <video loop autoPlay muted height="50%" width="100%"> <source src={props.Video} type="video/mp4" /> </video>
                                    </div>


                                    <div className="carousel-caption d-none d-md-block bantext banbtn">
                                        <h2 className=' m-5 text then'>{props.desc}</h2>
                                        {
                                            props.formbtn ? <div>
                                                <button className='mx-3 px-3 '>{props.ButtonTitleFirst} </button>
                                                <button className='mx-3 px-3 '>{props.ButtonTitle1} </button>
                                            </div> : false

                                        }


                                        {
                                            props.form ? <nav className="navbar navbar-expand-lg bg-body-tertiary p-1 m-5">
                                                <div className="container-fluid">

                                                    <div className="collapse navbar-collapse" id="navbarScroll">
                                                        <div className='row'>
                                                            <div className='col-md-3'>

                                                                {/* <div className="d-flex" role="search">
                                                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onClick={Search(e => handleFilter(e.target.value))} />
                                                                </div>
                                                                <div className='search-result'>
                                                                    {data.map((d, i) => (
                                                                        <div key={i}>
                                                                            {d.name}
                                                                        </div>
                                                                    ))}
                                                                </div> */}

                                                            <div className="d-flex" role="search">
                                                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  />
                                                                </div>
                                                                
                                                            </div>


                                                            <div className='col-md-3'>
                                                                <input className='form-control' type="date" id="date" name="date" />
                                                            </div>
                                                            <div className='col-md-3'>
                                                                <input className='form-control' type="date" id="date" name="date" />
                                                            </div>

                                                            <div className='col-md-1'>
                                                                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >

                                                                    <li className="nav-item dropdown">
                                                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            Link
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                                                            <li><hr className="dropdown-divider" /></li>
                                                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                                        </ul>
                                                                    </li>

                                                                </ul>
                                                            </div>
                                                            <div className='col-md-2'>
                                                                <form className="d-flex" role="search">
                                                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                                                </form>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </nav> : ""
                                        }


                                    </div>
                                </div>



                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
