import { Button } from '@mui/material'
import React,{ useState} from 'react'

export default function Mmodal() {

    const [showModal, setshowModal] = useState(false)
    
    const Mymodal = ()=>{
      return (
        <>
        <h2>Modal set</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi est dignissimos officia.</p>
        <Button onClick={()=>setshowModal(false)}> Close it</Button>
        </>
      )
    }


  return (
    <div>
        
        <Button onClick={()=>{setshowModal(true)}}> open Modal</Button>
        {showModal && <Mymodal />}
    
    </div>
  )
}   
