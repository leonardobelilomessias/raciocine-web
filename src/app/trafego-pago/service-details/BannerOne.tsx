"use client"
import { useState } from "react";
import bannerImage from '@/assets/img/service/ads/trafego4.png'
import Image from "next/image";
const BannerOne = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="  bg-blue  d-flex justify-content-center pd-top-120 pd-bottom-120  flex-column  align-items-center mt-4">
            <h2 className=" p-3 text-center" style={{color:"white"}}>Distribua seu conteúdo de forma direcionada</h2>
            <div>
                        <Image src={bannerImage} height={350} alt="img" />
                     </div>
            <h4 className="text-bg-primary p-3 text-center m-4">🎯 Segmentação Precisa: Alcance seu público ideal com base em interesses, comportamento e demografia.</h4>
            <p className="text-center p-3" style={{color:"white", maxWidth:700}}>Maximize o impacto do seu conteúdo alcançando exatamente 
               quem você deseja. Com estratégias de segmentação precisas,
                entregamos suas mensagens para o público certo, no momento certo. 
                Seja em redes sociais, mecanismos de busca ou anúncios nativos, 
                garantimos que seu conteúdo chegue a quem realmente importa.
                 Aumente seu engajamento e veja seus resultados crescerem!</p>
         </div>

      </>
   )
}

export default BannerOne
