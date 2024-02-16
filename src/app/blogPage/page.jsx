import Link from 'next/link'; 
import "./blog.css"
import TopNavbar from '@/Component/TopNavbar';
import Main from '@/Component/Main';


export default function page() {

    const blogvid = "video/BlogVideo.mp4"
    return (
        <div>
            <TopNavbar/>
            
              <Main desc="Then end is well"  Video={blogvid} ButtonTitleFirst="Take A Tour" ButtonTitle1="Read More" form={true} formbtn={true} />
            <div className='container'>
                <div className='row'>
                    <div class="header">
                        <h1>Latest Blogs</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className=' col-md-8 '>
                        <div class="">
                            <div class="card mb-3 p-3  ">
                                <h2>Duplex Restaurent</h2>
                                <h5>Title description, Dec 7, 2017</h5>
                                <div class="Blogs" ><img class="card-img" src="DuplexRestaurent.jpg" alt="Card image" /></div>
                                <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur reiciendis dolore ipsam beatae nam consequatur nisi deleniti
                                    possimus, modi, explicabo nulla sequi exercitationem ipsum perspiciatis? Assumenda optio eligendi, consequuntur consequatur
                                    aspernatur laudantium deserunt reiciendis amet dicta quibusdam
                                    distinctio quod animi praesentium placeat, nemo commodi enim aliquid totam doloremque, atque veritatis?
                                </p>
                            </div>
                            <div class="card mb-3 p-3">
                                <h2>Food Section</h2>
                                <h5>Title description, Sep 2, 2017</h5>
                                <div class="Blogs" ><img class="card-img" src="FoodSection.jpg" alt="Card image" /></div>
                                <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur reiciendis dolore ipsam beatae nam consequatur nisi deleniti
                                    possimus, modi, explicabo nulla sequi exercitationem ipsum perspiciatis? Assumenda optio eligendi, consequuntur consequatur
                                    aspernatur laudantium deserunt reiciendis amet dicta quibusdam
                                    distinctio quod animi praesentium placeat, nemo commodi enim aliquid totam doloremque, atque veritatis?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="">
                            <div class="card mb-4">
                                
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
                            <div class="card mb-4 p-3 ">
                                <h2>Popular Post</h2>
                                <div class="mt-3 Blogs"><img class="card-img" src="FoodSection.jpg" alt="Card image" /></div>
                                <div class="mt-3 Blogs"><img class="card-img" src="taj.jpg" alt="Card image" /></div>
                                <div class="mt-3 Blogs"><img class="card-img" src="SingleRoom.png" alt="Card image" /></div>
                                <div class="mt-3 Blogs"><img class="card-img" src="LuxuriousHall.jpg" alt="Card image" /></div>
                                <div class="mt-3 Blogs"><img class="card-img" src="DuplexRestaurent.jpg" alt="Card image" /></div>
                            </div>
                            <div class="card mb-4 p-3">
                                <h2>Follow Me</h2>
                                <p>Some text...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
