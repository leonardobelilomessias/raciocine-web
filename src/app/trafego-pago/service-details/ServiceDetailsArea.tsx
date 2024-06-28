import Skillbar from "@/components/common/Skillbar"
import SocialIcon from "@/components/common/SocialIcon"
import Image from "next/image"

import teamDetailsThumb from "@/assets/img/service/ads/ads-phone.png"
import Link from "next/link"

const ServiceDetailsArea = () => {
   return (
      <div className="team-details-page pd-top-120 ">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 mb-4 mb-lg-0">
                  <div className="thumb image-hover-animate me-lg-5">
                     <Image src={teamDetailsThumb} alt="img" />
                  </div>
               </div>
               <div className="col-lg-6 col-12 align-self-center">
                  <div className="team-details-info">
                     <h2>Impulsione Seu Negócio com Tráfego Pago</h2>
                     <p className="designation">Criação de anúncios</p>
                     <p className="content">
                     No cenário digital altamente competitivo de hoje, é essencial que seu negócio se destaque e alcance seu público-alvo de maneira eficaz. O tráfego pago é uma das estratégias mais poderosas para atingir esses objetivos, permitindo que você direcione anúncios diretamente para as pessoas que mais importam para o seu negócio.
                     </p>
                  </div>
                
               </div>
            </div>
            
         </div>
      </div>
   )
}

export default ServiceDetailsArea
