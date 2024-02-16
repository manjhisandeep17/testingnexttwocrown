import React from 'react'

export default function Video() {
  

    return (
        <div >

            {/* <video controls autoPlay loop width="100%"   >
                <source src="videobanner.mp4" type="video/mp4" />
            </video> */}
            <video loop autoPlay muted  width="100%"> <source src='video/publicvid.mp4' type="video/mp4"   /> </video>
        </div>
    )
}
