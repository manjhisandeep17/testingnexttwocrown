"use client"
import styles from "./page.module.css";
import Main from "@/Component/Main";
import HotelCategory from '@/Component/HotelCategory'
import HyperLinks from '@/Component/HyperLinks'
import MovingWall from '@/Component/MovingWall'
import Luxurious from '@/Component/Luxurious'
import Discover from '@/Component/Discover'
import DiscoverBack from '@/Component/DiscoverBack'
import Situated from '@/Component/Situated'
import About1 from '@/Component/About1'
import Gallary from '@/Component/Gallary'
import LuxuryBlogs from '@/Component/LuxuryBlogs'
import OurRooms from '@/Component/OurRooms'
import BlogsFeeds from '@/Component/BlogsFeeds'
import MonageaTrois from '@/Component/MonageaTrois'
import Hotel1img from '../../public/box1.jpg'
import Hotel2img from '../../public/box2.jpg'
import Hotel3img from '../../public/box3.jpg'
import Hotel4img from '../../public/box4.jpg'
import location1img from '../../public/lux-img1.jpg'
import location3img from '../../public/island-img4.jpg'
import Mmodal from '@/Component/Mmodal'



export default function Home(props) {


  const mainvid = 'video/videobanner.mp4'



     

  return (
    <main className={styles.main}>
      <Main desc="Then end is well" Video={mainvid} ButtonTitleFirst="Take A Tour" ButtonTitle1="Read More" form={true} formbtn={true} />
      <Situated situated=" Situated In Prime Position At The Foot Of The Slopes Of Courchevel Moriond." />
      <HotelCategory title="Inspired Loding" subtitle="ROOM TYPE " Hotel1= "The Fullerton Hotel" cateimg1={Hotel1img}  Hotel2="Taj" cateimg2={Hotel2img}  
      Hotel3="Archer Hotel" cateimg3={Hotel3img} Hotel4="Caravalle Hotel" cateimg4={Hotel4img} locationimg1={location1img} locationimg3={location3img}  Mirinda="Miranda has everything for your  trip & every single things  Moriond." 
      mrirnda={true}  />
      {/* <HotelCollection/> */}
      <HyperLinks  ></HyperLinks>
      <MovingWall></MovingWall>
      <Discover Discoverhead="Discover Our Underground..." />
      <About1 abuotcont= {true} aboutboximg="AboutBanner1.jpeg" />
      <Luxurious/>
      <Situated situated=" Situated In Prime Position At The Foot Of The Slopes Of Courchevel Moriond." />
      <DiscoverBack Discoverhead="Discover Our Underground..." />
      <Gallary />
      <OurRooms />
      <About1 aboutboximg="press.jpg"/>
      <LuxuryBlogs lux="LUXURY is an ATTITUDE" />
      <BlogsFeeds lux="Blogs Feeds..."/>
      <MonageaTrois />

      {/* <TakeAtour /> */}
      {/* <Footer/> */}
     <Mmodal></Mmodal>
     
    </main>
  );
}
