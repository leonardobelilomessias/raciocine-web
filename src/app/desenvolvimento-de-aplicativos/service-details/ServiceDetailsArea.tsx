import Skillbar from "@/components/common/Skillbar"
import SocialIcon from "@/components/common/SocialIcon"
import Image from "next/image"

import teamDetailsThumb from "@/assets/img/service/apps/app.png"
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
                     <h2>Aplicativos Para Android ou Ios</h2>
                     <p className="designation">App Sobre Medida</p>
                     <p className="content">
                     Transforme suas ideias em realidade com nossos serviços de desenvolvimento de aplicativos móveis. Nossa equipe especializada cria aplicativos personalizados para Android e iOS, garantindo uma experiência de usuário intuitiva e funcional. Seja para aumentar a presença digital da sua empresa, melhorar a interação com seus clientes ou lançar um novo produto no mercado, estamos prontos para desenvolver soluções inovadoras que atendam às suas necessidades específicas. Conte conosco para criar um aplicativo de alta qualidade, desde a concepção até a publicação nas lojas de aplicativos.
                     </p>
                  </div>
                  <div className=" d-flex "><Link target="_blank"  href="https://wa.me/5531986261771?text=Olá! Gostaria de saber mais informações sobre os serviços de criação de aplicativos." className="it-btn btn-black mt-12 align-self-center"> Quero contratar</Link></div>

               </div>
            </div>
            
         </div>
      </div>
   )
}

export default ServiceDetailsArea
