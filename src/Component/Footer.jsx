import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className='container-fluid bg-dark  pt-lg-5 pb-lg-5 p-5'>
                <div className='row  px-3'>
                    <div className=' footmar col-md-2 footertext'>
                        <ul className='list-unstyled '>
                            <li><h4>Discover</h4> </li>
                            <li><a href='' className='  text-decoration-none'>About</a> </li>
                            <li><a href='' className='  text-decoration-none'>Contact</a> </li>
                            <li><a href='' className='  text-decoration-none'>Contact</a> </li>
                        </ul>
                    </div>
                    <div className='col-md-2 footertext'>
                        <ul className='list-unstyled '>
                            <li><h4>Information</h4> </li>
                            <li><a href='' className='  text-decoration-none'>About</a> </li>
                            <li><a href='' className='  text-decoration-none'>Contact</a> </li>
                            <li><a href='' className='  text-decoration-none'>Contact</a> </li>
                        </ul>
                    </div>
                    <div className='col-md-2 footertext'>
                        <ul className='list-unstyled '>
                            <li><h4>Terms & Condition</h4> </li>
                            <li><a href='' className='  text-decoration-none'>About</a> </li>
                            <li><a href='' className='  text-decoration-none'>About</a> </li>
                            <li><a href='' className='  text-decoration-none'>Contact</a> </li>
                        </ul>
                    </div>
                    <div className='offset-1 col-md-3 text-center footertext'>
                        <img src='twocrown.png' style={{ width: "70%", padding: "10px" }}></img>
                        <div className='d-flex justify-content-around align-content-center mt-3 footertext'>
                            <a href='' className=''><i class="fa-brands fa-google"></i></a>
                            <a href='' className=''><i class="fa-brands fa-facebook"></i></a>
                            <a href='' className=''><i class="fa-brands fa-instagram"></i></a>
                            <a href='' className=''><i class="fa-brands fa-twitter"></i></a>
                            <a href='' className=''><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                        {/* <p class="">Some quick example text to build on the card title and make up the bulk of the card's content. */}
                        {/* </p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
