import Skillbar from "@/components/common/Skillbar"
import SocialIcon from "@/components/common/SocialIcon"
import Image from "next/image"

import teamDetailsThumb from "@/assets/img/service/ads/trafego6.png"
import Link from "next/link"

const ServiceDetailsArea = () => {
   return (
      <div className="team-details-page  ">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 mb-4 mb-lg-0">
                  <div className="me-lg-5">
                     <Image src={teamDetailsThumb} alt="img" />
                  </div>
               </div>
               <div className="col-lg-6 col-12 align-self-center">
                  <div className="team-details-info">
                     <h2>
                     Atraia Clientes com Real Interesse Com Nossos Anúncios 🚀</h2>
                     <p className="designation">Criação de anúncios</p>
                     <p className="content">
                     Chegou a hora de direcionar suas campanhas de marketing para quem realmente importa. Com as campanhas de tráfego pago, você pode atrair clientes que têm verdadeiro interesse nos seus produtos ou serviços!
                     </p>
                  </div>
                
               </div>
            </div>
            
         </div>
      </div>
   )
}

export default ServiceDetailsArea
