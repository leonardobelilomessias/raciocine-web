import Skillbar from "@/components/common/Skillbar"
import SocialIcon from "@/components/common/SocialIcon"
import Image from "next/image"

import teamDetailsThumb from "@/assets/img/service/consult/smart-inteligence.png"
import Link from "next/link"

  const Super = () => {
   return (
      <div className="team-details-page pd-top-120 d-flex flex-row-reverse ">
         <div className="container">
            <div className="row">

               <div className="col-lg-6 col-12 align-self-center">
                  <div className="team-details-info">
                     <h2>Inteligencia Artificial ao seu favor</h2>
                     <p className="designation">Next Step</p>
                     <p className="content">
                     Aproveite o poder da Inteligência Artificial para transformar seu negócio. Nossas soluções de IA são projetadas para otimizar processos, melhorar a tomada de decisões e proporcionar insights valiosos. Com algoritmos avançados e aprendizado de máquina, ajudamos você a prever tendências, automatizar tarefas repetitivas e personalizar a experiência do cliente. Coloque a Inteligência Artificial ao seu favor e eleve a eficiência e inovação da sua empresa a um novo patamar.
                     </p>
                  </div>
                 
                
               </div>
               <div className="col-lg-6 mb-lg-0">
                  <div className="thumb image-hover-animate me-lg-5">
                     <Image src={teamDetailsThumb} alt="img" />
                  </div>
               </div>
            </div>
            
         </div>
      </div>
   )
}

export default Super
