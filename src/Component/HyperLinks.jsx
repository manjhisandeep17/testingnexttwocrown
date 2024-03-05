"use client"
import React from 'react';
import Link from 'next/link';
import Position from 'rsuite/esm/internals/Overlay/Position';

export default function HyperLinks(props) {
    return (
        <div >
            <div className='container-fluid '>
                <div className='row hyperback' >

                    <div className=' col-md-12 hyperdiv'>
                        <div className='  '>
                            <img src="hyperimg.jpg" />
                        </div>
                        <div className='hyperlinks123 texth2 '>
                            <h1 className='twoacrown'>TWO CROWN</h1>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='flaotpading'> <Link href="#" className='text-decoration-none'><h2 className=''>Chateaux</h2></Link>
                                        <p className='text-center'>Lorem, ipsum dolor sit amet consectetur !
                                        </p>
                                    </div>
                                    <div className='flaotpading'> <Link href="#" className='text-decoration-none'><h2 className=''>Private Island</h2></Link>
                                        <p className='text-center'>Lorem, ipsum dolor sit amet consectetur !
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-6 mt-5'>
                                    <div className='flaotpading'> <Link href="#" className='text-decoration-none'><h2 className=''>Chateaux</h2></Link>
                                        <p className='text-center'>Lorem, ipsum dolor sit amet consectetur !
                                        </p>
                                    </div>
                                    <div className='flaotpading'> <Link href="#" className='text-decoration-none'><h2 className=''>Private Island</h2></Link>
                                        <p className='text-center'>Lorem, ipsum dolor sit amet consectetur !
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h1 className='returnof'>The Return <span> Of</span> </h1>

                        </div>


                    </div>
                    <div style={{ backgroundColor: "rgb(56, 29, 29)" }}>
                        <h1 className='monatage'>Menage A Trois</h1>
                        <div className='row '>
                            <div className='col-md-4 mont'>
                            </div>
                            <div className='col-md-4 mont p-2'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.

                                    At praesentium eveniet nulla placeat necessitatibus corporis suscipit, velit eius nemo autem.
                                    At praesentium eveniet nulla placeat necessitatibus corporis suscipit, velit eius nemo autem.
                                    At praesentium eveniet nulla placeat necessitatibus corporis suscipit, velit eius nemo autem.</p>
                            </div>
                            <div className='col-md-4 mont'>
                            </div>
                        </div>
                    </div>
                    <div className='hypergalback'>
                        <div className='container'>
                            <div className='row '>
                                <div className='col-md-4 hypergalheight  '>
                                    <div className='hypergal pt-3'>
                                        <img src="girlbeach.jpg" style={{ height: "600px",  width:'100%' }} className='object-fit-cover' />
                                    </div>
                                    <div className='hypergalch'> <Link href="#" className='text-decoration-none hypertextcenter'><h2 >Hotel</h2></Link>
                                    </div>
                                </div>
                                <div className='col-md-4 hypergalheight   '>
                                    <div className='hypergal pt-3'>
                                        <img src="couplebeach.jpg" style={{ height: "600px", width:'100%'}} className='object-fit-cover' />
                                    </div>
                                    <div className='hypergalch'> <Link href="#" className='text-decoration-none hypertextcenter'><h2>Chateaux</h2></Link>
                                    </div>
                                </div>
                                <div className='col-md-4 hypergalheight  '>
                                    <div className='hypergal pt-3'>
                                        <img src="beachisland.jpg" style={{ height: "600px", width:'100%' }} className='object-fit-cover' />
                                    </div>
                                    <div className='hypergalch'> <Link href="#" className='text-decoration-none hypertextcenter'><h2 >Private Island</h2></Link>
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
