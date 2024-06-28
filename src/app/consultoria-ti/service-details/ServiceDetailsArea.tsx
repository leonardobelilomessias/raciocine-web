import Skillbar from "@/components/common/Skillbar"
import SocialIcon from "@/components/common/SocialIcon"
import Image from "next/image"

import teamDetailsThumb from "@/assets/img/service/consult/consult-woman.png"
import Link from "next/link"

const ServiceDetailsArea = () => {
   return (
      <div className="team-details-page ">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 mb-4 mb-lg-0">
                  <div className="thumb image-hover-animate me-lg-5">
                     <Image src={teamDetailsThumb} alt="img" />
                  </div>
               </div>
               <div className="col-lg-6 col-12 align-self-center">
                  <div className="team-details-info">
                     <h2>Especialistas Em Tecnologia</h2>
                     <p className="designation">Business Inteligence</p>
                     <p className="content">
                     Em um mundo onde a tecnologia está em constante evolução, contar com especialistas é essencial para manter seu negócio na vanguarda. Com anos de experiência e uma equipe altamente qualificada, oferecemos soluções tecnológicas inovadoras e personalizadas que atendem às necessidades específicas do seu negócio. Desde desenvolvimento de software até otimização de infraestrutura, nossa expertise garante que você obtenha os melhores resultados e se destaque no mercado. Confie em quem entende de tecnologia para levar sua empresa ao próximo nível.
                   </p>
                  </div>
                  <div className=" d-flex "><Link target="_blank"  href="https://wa.me/5531986261771?text=Olá! Gostaria de saber mais informações sobre os serviços de consultoria." className="it-btn btn-black mt-12 align-self-center"> Quero contratar</Link></div>
                
               </div>
            </div>
            
         </div>
      </div>
   )
}

export default ServiceDetailsArea
