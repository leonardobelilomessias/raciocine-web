"use client"
import VideoPopup from "@/modals/VideoPopup";
import { useState } from "react";

const VideoArea = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="  bg-blue  d-flex justify-content-center pd-top-120 pd-bottom-120  flex-column  align-items-center mt-4">
            <h2 className="text-bg-primary p-3 text-center">Veja o video completo</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/JxXY34TP8XI_w?autoplay=1&mute=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture" >
            </iframe>
            <h4 className="text-bg-primary p-3 text-center m-4">Aprenda como pode aumentar suas vendas</h4>
         </div>

      </>
   )
}

export default VideoArea
