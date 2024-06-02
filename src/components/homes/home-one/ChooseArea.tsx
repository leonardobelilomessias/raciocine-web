import Image from "next/image"

import aboutShape_1 from "@/assets/img/about/2sm.webp";
import aboutShape_2 from "@/assets/img/about/2s.webp";
import aboutImg_1 from "@/assets/img/about/2.webp";

const ChooseArea = () => {
   return (
      <div className="why-choose pd-top-100 pd-bottom-100">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-8 order-lg-last">
                  <div className="about-mask-bg-wrap about-mask-bg-wrap-2 mb-4 mb-lg-0">
                     <Image className="shape-image-sm top_image_bounce" src={aboutShape_1} alt="img" />
                     <Image className="shape-image" src={aboutShape_2} alt="img" />
                     <div className="thumb">
                        <Image src={aboutImg_1} alt="img" />
                     </div>
                  </div>
               </div>
               
               <div className="col-lg-6 order-lg-first align-self-center">
                  <div className="section-title px-lg-5 mb-0">
                     <h5 className="sub-title right-line">Porque Somos os melhores?</h5>
                     <h2 className="title">Temos o melhor atendimento do mercado</h2>
                     <p className="content">
                        Nosso atendimento passa por criterios de qualidade garantindo que teremos o solução ideal para você.
                     </p>
                     <div className="choose-wrap mt-4">
                        <div className="media single-choose-inner">
                           <div className="media-left">
                              <div className="icon">
                                 <i className="icomoon-gear"></i>
                              </div>
                           </div>
                           <div className="media-body">
                              <h4>Soluções Personalizadas</h4>
                              <p>Analizamos o seu projeto com de forma que possamos ter a solução acertiva para seu modelo de negócio. </p>
                           </div>
                        </div>
                        <div className="media single-choose-inner mb-3">
                           <div className="media-left">
                              <div className="icon">
                                 <i className="icomoon-time"></i>
                              </div>
                           </div>
                           <div className="media-body">
                              <h4>24/7 Atendimento Humano</h4>
                              <p>Sem conversa com Robos. Nosso suporte é feito por pessoas reais que vão dar a atenção que seu negocio merece </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ChooseArea
