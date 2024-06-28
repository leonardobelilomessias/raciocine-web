import Skillbar from "@/components/common/Skillbar"
import SocialIcon from "@/components/common/SocialIcon"
import Image from "next/image"

import teamDetailsThumb from "@/assets/img/service/ads/money-ads.png"
import Link from "next/link"

const MakeMoney = () => {
   return (
      <div className="team-details-page  ">
         <div className="container">
            <div className="row">
            <div className="col-lg-6 col-12 align-self-center">
                  <div className="team-details-info">
                     <h2>Aumente Suas Vendas com Tráfego Pago</h2>
                     <p className="designation">Make Money</p>
                     <p className="content">
                        No ambiente digital competitivo de hoje, aumentar as vendas requer mais do que apenas uma presença online; é preciso uma estratégia eficaz que direcione tráfego qualificado para o seu negócio. O tráfego pago é uma ferramenta poderosa que permite alcançar seu público-alvo de maneira precisa e eficiente, resultando em um aumento significativo nas vendas.
                     </p>
                  </div>
                  <div className=" d-flex "><Link target="_blank"  href="https://wa.me/5531986261771?text=Olá! Gostaria de saber mais informações sobre os serviços de criação de tráfego pago."className="it-btn btn-black mt-12 align-self-center"> Quero contratar</Link></div>
                
               </div>
               <div className="col-lg-6 mb-4 mb-lg-0">
                  <div className="thumb image-hover-animate me-lg-5">
                     <Image src={teamDetailsThumb} alt="img" />
                  </div>
               </div>

            </div>
            
         </div>
      </div>
   )
}

export default MakeMoney
