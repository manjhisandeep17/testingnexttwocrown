import React from 'react'
import Link from 'next/link';

export default function SideBar() {
    return (
        <div>


            <nav className="navbar  ">
                <div className="container-fluid d-flex justify-content-start ">
                    {/* <Link className="navbar-brand"  href="#">Offcanvas navbar</Link> */}
                    <button className="navbar-toggler d-none d-md-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="offcanvas offcanvas-start colorside" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body navan colorside">
                            <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                                <li className="nav-item d-flex justify-content-between">
                                    <span><Link className="nav-link active" aria-current="page" href="my">Home </Link></span>
                                    <span><i className="nav-link fa-solid fa-angle-right"></i></span>
                                </li>
                                <li className="nav-item d-flex justify-content-between">
                                    <span><Link className="nav-link" aria-current="page" href="#">About </Link></span>
                                    <span><i className="nav-link fa-solid fa-angle-right"></i></span>
                                </li>
                                <li className="nav-item d-flex justify-content-between">
                                    <span><Link className="nav-link" aria-current="page" href="@">Gallery </Link></span>
                                    <span><i className="nav-link fa-solid fa-angle-right"></i></span>
                                </li>
                                <li className="nav-item d-flex justify-content-between">
                                    <span><Link className="nav-link" aria-current="page" href="!">Pages </Link></span>
                                    <span><i className="nav-link fa-solid fa-angle-right"></i></span>
                                </li>
                                {/*                 
                            <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item"  href="#">Action</Link></li>
                                <li><Link className="dropdown-item"  href="#">Another action</Link></li>
                                <li>
                                <hr className="dropdown-divider"/>
                                </li>
                                <li><Link className="dropdown-item"  href="#">Something else here</Link></li>
                            </ul>
                            </li> */}
                            </ul>
                            <form className="d-flex mt-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
