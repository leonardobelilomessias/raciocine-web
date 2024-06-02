import Skillbar from "@/components/common/Skillbar"
import SocialIcon from "@/components/common/SocialIcon"
import Image from "next/image"

import teamDetailsThumb from "@/assets/img/team/professional.png"

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
                     <h3>Aplicativos Para Android ou Ios</h3>
                     <p className="designation">App Sobre Medida</p>
                     <p className="content">
                        Um  Aplicativo leva sua empresa para outro patamar. Criando um app sob medida você pode ter vantagem competitiva no mercado. Dê forma as suas ideias e acelere os resultados sa sua empresa com um aplicativo personalizados de acordo com a necessidade do seu negócio
                     </p>
                  </div>
               </div>
            </div>
            
         </div>
      </div>
   )
}

export default ServiceDetailsArea
