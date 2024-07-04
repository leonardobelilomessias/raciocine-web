import Skillbar from "@/components/common/Skillbar"
import SocialIcon from "@/components/common/SocialIcon"
import Image from "next/image"

import teamDetailsThumb from "@/assets/img/service/sites/sites.png"
import Link from "next/link"

const ServiceDetailsArea = () => {
   return (
      <div className="team-details-page pd-top-10 " style={{paddingTop:"2rem"}}>
         <div className="container">
            <div className="row">
               <div className="col-lg-6 mb-4 mb-lg-0">
                  <div className="thumb image-hover-animate me-lg-5">
                     <Image src={teamDetailsThumb} alt="img" />
                  </div>
               </div>
               <div className="col-lg-6 col-12 align-self-center">
                  <div className="team-details-info">
                     <h2 >Todo Profissional Precisa de um site a altura.</h2>
                     <p className="designation">Desing Profissional</p>
                     <p className="content">
                     Você está pronto para levar seu negócio ao próximo nível? Não importa o tamanho da sua empresa, um site profissional e uma loja virtual de alta performance são essenciais para garantir o sucesso no mundo digital de hoje. Imagine alcançar milhares de novos clientes, aumentar suas vendas e fortalecer sua marca com uma plataforma online moderna e funcional.
                     </p>
                  </div>
                  <div className=" d-flex "><Link target="_blank"  href="https://wa.me/5531986261771?text=Olá! Gostaria de saber mais informações sobre os serviços de criação de sites." className="it-btn btn-black mt-12 align-self-center"> Quero contratar</Link></div>
                
               </div>
            </div>
            
         </div>
      </div>
   )
}

export default ServiceDetailsArea
