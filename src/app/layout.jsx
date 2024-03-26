'use client'
import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/Component/TopNavbar";
import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import ReviewsIcon from '@mui/icons-material/Reviews';
import Footer from "@/Component/Footer";



import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
// import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,  } from '@mui/material'; // Import necessary components from Material-UI

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const OpenChat = () => 


{
//  confirm("Do u Want to chat with us")

return(
  <div >
  <Dialog   >
  <DialogTrigger></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

  </div>
)
}
 

  






const actions = [
  {
    icon: <FileCopyIcon  onClick={OpenChat}/>, name: 'Chat',
    
  },
  
  { icon: <SaveIcon />, name: 'Like' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];


const inter = Inter({ subsets: ["latin"] });





export default function RootLayout({
  children,
}) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);






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
            icon={<ReviewsIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                tooltipOpen
                url={action.url}
                

              />
            ))}


          </SpeedDial>


        </main>



        {/* <button class="open-button" onclick="openForm()">Chat</button>

        <div class="chat-popup" id="myForm">
          <form action="/action_page.php" class="form-container">
            <h1>Chat</h1>

            <label for="msg"><b>Message</b></label>
            <textarea placeholder="Type message.." name="msg" required></textarea>

            <button type="submit" class="btn">Send</button>
            <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
          </form>
        </div> */}



        {/* <script>
          function openForm() {
            document.getElementById("myForm").style.display = "block";
            }

          function closeForm() {
            document.getElementById("myForm").style.display = "none";
            }
        </script> */}

        <script src="front.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>



      </body>
    </html>

  );
}
