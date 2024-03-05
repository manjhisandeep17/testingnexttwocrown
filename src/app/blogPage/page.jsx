'use client'
import Link from 'next/link';
import "./blog.css"
import TopNavbar from '@/Component/TopNavbar';
import Main from '@/Component/Main';
import BlogComponent from '@/Component/BlogComponent'
import HyperLinks from '@/Component/HyperLinks';


export default function page(props) {

    const blogvid = "video/BlogVideo.mp4"
    return (
          <>
         
          <div className='blogbodycoll'>
            <TopNavbar />

            <Main desc="Then end is well" Video={blogvid} ButtonTitleFirst="Take A Tour" ButtonTitle1="Read More" form={true} formbtn={true} />
            
           <div>
           </div>
            
            {/* <div style={{height:"250px"}}>
            <BlogComponent></BlogComponent>
            </div> */}
            
            <div className='container'>
                <div className='row '>
                    <div class="header">
                        <h1 className='testclass'><span >The </span> Blogs<span>  &  </span>Events </h1>
                    </div>
                </div>
                <div className='row'>
                    <div className=' col-md-12 '>
                        <div class=" mb-4 mt-5 blogbodycol">
                            <div className='row p-4 '>
                                <div className=' col-md-11  d-flex justify-content-between p-2 blogsLink '><span><Link href="" className='text-decoration-none'>Hotels </Link></span> <span><i class="bi bi-arrow-right-circle"></i></span></div>
                                <div className=' col-md-11  d-flex justify-content-between p-2 blogsLink '><span><Link href="" className='text-decoration-none'>Private Island </Link></span> <span><i class="bi bi-arrow-right-circle"></i></span></div>
                                <div className=' col-md-11  d-flex justify-content-between p-2 blogsLink '><span><Link href="" className='text-decoration-none'>FineVillas </Link></span> <span><i class="bi bi-arrow-right-circle"></i></span></div>
                                <div className=' col-md-11  d-flex justify-content-between p-2 blogsLink '><span><Link href="" className='text-decoration-none'>Location Venu </Link></span> <span><i class="bi bi-arrow-right-circle"></i></span></div>
                                <div className=' col-md-11  d-flex justify-content-between p-2 blogsLink '><span><Link href="" className='text-decoration-none'>Private Island </Link></span> <span><i class="bi bi-arrow-right-circle"></i></span></div>
                                <div className=' col-md-11  d-flex justify-content-between p-2 blogsLink '><span><Link href="" className='text-decoration-none'>Gallary </Link></span> <span><i class="bi bi-arrow-right-circle"></i></span></div>
                                <div className=' col-md-11  d-flex justify-content-between p-2 blogsLink '><span><Link href="" className='text-decoration-none'>Food Section </Link></span> <span><i class="bi bi-arrow-right-circle"></i></span></div>
                                <div className=' col-md-11  d-flex justify-content-between p-2 blogsLink '><span><Link href="" className='text-decoration-none'>Location Venu </Link></span> <span><i class="bi bi-arrow-right-circle"></i></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                </div>
            </div>


            <div className='container-fluid mt-5 '>
                <div className='row'>
                    <div className=' col-md-12 '>
                        <div class="row">
                            <div className='col-md-6'>
                                <div class="card mb-3 p-3  blogbodycol">
                                    <h2>Duplex Restaurent</h2>
                                    <h5>Title description, Dec 7, 2017</h5>
                                    <div class="Blogs" ><img class="card-img" src="DuplexRestaurent.jpg" alt="Card image" /></div>
                                    <p className='mt-3 blogpara '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur reiciendis dolore ipsam beatae nam consequatur nisi deleniti
                                        possimus, modi, explicabo nulla sequi exercitationem ipsum perspiciatis? Assumenda optio eligendi, consequuntur consequatur
                                        aspernatur laudantium deserunt reiciendis amet dicta quibusdam
                                        distinctio quod animi praesentium placeat, nemo commodi enim aliquid totam doloremque, atque veritatis?
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="card mb-3 p-3  blogbodycol">
                                    <h2>Food Section</h2>
                                    <h5>Title description, Sep 2, 2017</h5>
                                    <div class="Blogs" ><img class="card-img" src="FoodSection.jpg" alt="Card image" /></div>
                                    <p className='mt-3 blogpara'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur reiciendis dolore ipsam beatae nam consequatur nisi deleniti
                                        distinctio quod animi praesentium placeat, nemo commodi enim aliquid totam doloremque, atque veritatis?
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <div className='col-md-4'>
                        <div class="">
                            
                            <div class="card mb-4 p-3 blogbodycol">
                                <h2>Popular Post</h2>
                                <div class="mt-3 Blogs"><div className='imgblog'><img class="card-img" src="FoodSection.jpg" alt="Card image" /> </div> <div> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt molestias dolore aliquam necessitatibus rem expedita perspiciatis hic perferendis animi. </p></div> </div>
                                <div class="mt-3 Blogs"><div className='imgblog'><img class="card-img" src="taj.jpg" alt="Card image" /> </div><div> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt molestias dolore aliquam necessitatibus rem expedita perspiciatis hic perferendis animi. </p></div> </div>
                                <div class="mt-3 Blogs"><div className='imgblog'><img class="card-img" src="SingleRoom.png" alt="Card image" /> </div><div> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt molestias dolore aliquam necessitatibus rem expedita perspiciatis hic perferendis animi. </p></div> </div>
                                <div class="mt-3 Blogs"><div className='imgblog'><img class="card-img" src="LuxuriousHall.jpg" alt="Card image" /></div> <div> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt molestias dolore aliquam necessitatibus rem expedita perspiciatis hic perferendis animi. </p></div> </div>
                                <div class="mt-3 Blogs"><div className='imgblog'><img class="card-img" src="DuplexRestaurent.jpg" alt="Card image" /> </div><div> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt molestias dolore aliquam necessitatibus rem expedita perspiciatis hic perferendis animi. </p></div> </div>
                            </div>
                            <div class="card mb-4 p-3 blogbodycol">
                                <h2>Follow Me</h2>
                                <p>Some text...</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>



            <div className='container-fluid'>
                <div className='row p-3 m-1 border border-secondary mb-5 mt-2 rounded-2  '>
                    <div className='col-md-4'></div>
                    <div className='col-md-4 text-center p-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum labore, doloribus laudantium iste a, corporis itaque
                        tempore voluptatem recusandae assumenda nobis distinctio sed omnis. Alias, neque ipsum minus sit adipisci exercitationem saepe aperiam
                        eum nostrum quam voluptatibus quasi a quae, labore debitis. Sed itaque iure velit. Enim veritatis deleniti quos.
                    </div>
                    <div className='text-center text-dark'>
                        <li><a href="#">Spotyfy</a></li>
                        <li><a href="#">Amazon Music</a></li>
                        <li><a href="#">Jio Music</a></li>
                        <li><a href="#">Youtube Music</a></li>
                        <li><a href="#">Apple Music</a></li>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>


            <div className='container-fluid '>
                <div className='row hyperback' >
                    <div className='hypergalback'>
                        <div className='container'>
                            <div className='row pt-5'>
                                <div className='col-md-4 hypergalheight  '>
                                    <div className='hypergal pt-3'>
                                        <img src="girlbeach.jpg" style={{ height: "600px", width: '100%' }} className='object-fit-cover' />
                                    </div>
                                    <div className='hypergalch'> <Link href="#" className='text-decoration-none hypertextcenter'><h2 >Hotel</h2></Link>
                                    </div>
                                </div>
                                <div className='col-md-4 hypergalheight   '>
                                    <div className='hypergal pt-3'>
                                        <img src="couplebeach.jpg" style={{ height: "600px", width: '100%' }} className='object-fit-cover' />
                                    </div>
                                    <div className='hypergalch'> <Link href="#" className='text-decoration-none hypertextcenter'><h2>Chateaux</h2></Link>
                                    </div>
                                </div>
                                <div className='col-md-4 hypergalheight  '>
                                    <div className='hypergal pt-3'>
                                        <img src="beachisland.jpg" style={{ height: "600px", width: '100%' }} className='object-fit-cover' />
                                    </div>
                                    <div className='hypergalch'> <Link href="#" className='text-decoration-none hypertextcenter'><h2 >Private Island</h2></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div class="card mb-3 p-3  blogbodycol">
                            <h2>Duplex Restaurent</h2>
                            <h5>Title description, Dec 7, 2017</h5>
                            <div class="Blogs" ><img class="card-img" src="DuplexRestaurent.jpg" alt="Card image" /></div>
                            <p className='mt-3 blogpara'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur reiciendis dolore ipsam beatae nam consequatur nisi deleniti
                                distinctio quod animi praesentium placeat, nemo commodi enim aliquid totam doloremque, atque veritatis?
                            </p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="card mb-3 p-3 blogbodycol">
                            <h2>Food Section</h2>
                            <h5>Title description, Sep 2, 2017</h5>
                            <div class="Blogs" ><img class="card-img" src="FoodSection.jpg" alt="Card image" /></div>
                            <p className='mt-3 blogpara'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur reiciendis dolore ipsam beatae nam consequatur nisi deleniti
                                possimus, modi, explicabo nulla sequi exercitationem ipsum perspiciatis? Assumenda optio eligendi, consequuntur consequatur
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
          </> 
       
    )
}
