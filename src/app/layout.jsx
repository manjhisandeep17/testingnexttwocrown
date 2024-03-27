'use client'
import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/Component/TopNavbar";
import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Footer from "@/Component/Footer";
import CancelIcon from '@mui/icons-material/Cancel';
import ChatImg from '@/Component/ChatImg';
// import CategoryIcon from '@mui/icons-material/Category';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';



const actions = [
  {
    icon: <ChatIcon  onClick={()=>{setshowModal(true)}}
    sx={{color:"#42c118 "}} />,
     name: 'Chat',
    
  },
  
  { icon: <FavoriteIcon sx={{color:"#42c118 "}} />, name: 'Favourite' },
  { icon: <HistoryToggleOffIcon  sx={{color:"#42c118 "}} />, name: 'History' },
  { icon: <EmojiEmotionsIcon  sx={{color:"#42c118 "}} />, name: 'Happy' },
];


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  // Chat

  const [showModal, setshowModal] = useState(false)
    
  const Mymodal = (e)=>{
    return (
      <>
      <span className="modalspan"  style={{top:"250px", zIndex:999, position:'relative', }}>
        <iframe
            src="https://www.chatbase.co/chatbot-iframe/N6Thy0g90Q6IFsu52ldS_"
            title="Chatbot"
            width="100%"
            style={{height: "100%", minHeight: "450px", }}
            frameborder="0"
        ></iframe>

        <span className=" closebtn" onClick={()=>setshowModal(false)}><CancelIcon /> </span>
      </span>
      </>
    )
  }

  





  return (
    <html lang="en" onContextMenu="return false">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URLS%/logo192.png" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
        <link rel="stylesheet" href="../src/App.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

        <title>React App</title>
      </head>


      <body className="dark">
        <main  >

          
          <TopNavbar></TopNavbar>
          {/* <Chat></Chat>  */}
          {children}


          <Footer></Footer>

          <SpeedDial
            ariaLabel="SpeedDial tooltip example"
            sx={{ position: 'sticky', bottom: 16, }}
            // icon={<CategoryIcon />}
            icon={<ChatImg />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            
          >
            

            {actions.map((action) => (
              <SpeedDialAction
              onClick={()=>{setshowModal(true)}}
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              url={action.url}
              sx={{marginLeft:"-45px", }}
                
                />
            ))}
            {showModal && <Mymodal />}

          </SpeedDial>

          




        </main>




        <script src="front.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>



      </body>
    </html>

  );
}
