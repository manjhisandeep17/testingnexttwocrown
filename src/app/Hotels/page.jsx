import React from 'react'
import Main from "@/Component/Main";
import Banner from "../../../public/AboutBanner1.jpeg"
import HotelCategory from '@/Component/HotelCategory';
import Hotel1img from '../../../public/box1.jpg'
import Hotel2img from '../../../public/box2.jpg'
import Hotel3img from '../../../public/box3.jpg'
import Hotel4img from '../../../public/box4.jpg'
import HotelCollection from '@/Component/HotelCollection';
import Discover from '@/Component/Discover';
import Luxurious from '@/Component/Luxurious';
import TakeAtour from '@/Component/TakeAtour';
import Footer from '@/Component/Footer';
import Chatbot from '@/Component/ChatBoat';


export default function Page() {

  const hotelvid = 'video/banvid1.mp4'

  return (
    <div>
      <Main desc="Welcome To Hotel Page" Video={hotelvid} ButtonTitleFirst="Take A Tour" ButtonTitle1="Read More" form={true} formbtn={true} />
      <HotelCategory title="Hotel Category" subtitle="Category" Hotel1="The Fullerton Hotel" cateimg1={Hotel1img} Hotel2="Taj" cateimg2={Hotel2img} Hotel3="Archer Hotel" cateimg3={Hotel3img} Hotel4="Caravalle Hotel" cateimg4={Hotel4img} Mirinda="Miranda has everything for your  trip & every single things  Moriond." mrirnda={true} />
      {/* <Discover /> */}
      <HotelCollection />
      <Luxurious />
      <TakeAtour />
      <Chatbot></Chatbot>
      <Footer />
    </div>
  )
}
