import Image, { StaticImageData } from "next/image"

import aboutShape_1 from "@/assets/img/about/2sm.webp";
import aboutShape_2 from "@/assets/img/about/2s.webp";
import aboutImg_1 from "@/assets/img/about/2.webp";
import { Headset } from "react-bootstrap-icons";
import { BlockquoteRight } from "react-bootstrap-icons";

const IaElement = ({img, shapeOne, shapeTwo}:{img:StaticImageData , shapeOne?:boolean, shapeTwo?:boolean}) => {
   return (
      <div className="why-choose pd-top-100 pd-bottom-100">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-8 order-lg-last">
                  <div className="about-mask-bg-wrap about-mask-bg-wrap-2 mb-4 mb-lg-0">
                     {shapeOne&&<Image className="shape-image-sm top_image_bounce" src={aboutShape_1} alt="img" />}
                     {shapeTwo&&<Image className="shape-image" src={aboutShape_2} alt="img" />}
                     <div className="thumb">
                        <Image src={img} alt="img" />
                     </div>
                  </div>
               </div>
               
               <div className="col-lg-6 order-lg-first align-self-center">
                  <div className="section-title px-lg-5 mb-0">
                     <h5 className="sub-title right-line">Saia na frente da concorência.</h5>
                     <h2 className="title">Soluções Com Inteligência Artificial</h2>
                     <p className="content">
                       Explore como a tecnologia pode revolucionar seu fluxo de trabalho e levar sua eficiência a novos níveis.
                     </p>
                     <div className="choose-wrap mt-4">
                        <div className="media single-choose-inner">
                          
                              <div  style={{backgroundColor:"#0060FF", padding:"1rem", borderRadius:"100%", marginRight:"1rem"}}>
                              < Headset size={20} width={25} height={25}  color="white"/>
                              </div>
                   
                           <div className="media-body">
                              <h4>ChatBots para seu Site ou App</h4>
                              <p>Atendimento automatizado: chatbots e assistentes virtuais fornecem respostas rápidas aos clientes, liberando equipes para tarefas mais complexas. </p>
                           </div>
                        </div>
                        <div className="media single-choose-inner mb-3">
                            <div  style={{backgroundColor:"#0060FF", padding:"1rem", borderRadius:"100%", marginRight:"1rem"}}>
                                 < BlockquoteRight size={20} width={25} height={25}  color="white"/>
                              </div>
                           <div className="media-body">
                              <h4>Geração de Conteúdo Ilimitado</h4>
                              <p>Serviço de geração de conteúdo automatizado com inteligência artificial para textos e vídeos, focado em eficiência e economia. Transforme sua estratégia conosco para resultados escaláveis e criativos. </p>
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

export default IaElement
