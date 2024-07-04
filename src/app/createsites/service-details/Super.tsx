import Skillbar from "@/components/common/Skillbar"
import SocialIcon from "@/components/common/SocialIcon"
import Image, { StaticImageData } from "next/image"

import aboutShape_1 from "@/assets/img/about/2sm.webp";
import aboutShape_2 from "@/assets/img/about/2s.webp";
import teamDetailsThumb from "@/assets/img/service/sites/ecommerce2.png"
import Link from "next/link"
import { BlockquoteRight, Headset, Cash, CashCoin, Globe } from "react-bootstrap-icons"

  
const Super = ({img, shapeOne, shapeTwo}:{img:StaticImageData , shapeOne?:boolean, shapeTwo?:boolean}) => {
   return (
      <div className="why-choose pd-top-100 pd-bottom-20">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-8 order-lg-last">
                  <div >
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
                     <h2 className="title">Venda Sem parar! Sua loja trabalhando 24 horas por você.</h2>
                     <p className="content">
                     Transforme sua loja em um negócio sempre ativo com Venda Sem Parar!
                     Oferecemos soluções de sites e e-commerce que mantêm suas vendas funcionando 24 horas por dia, sete dias por semana, impulsionando seu sucesso online.
                     </p>
                     <div className="choose-wrap mt-4">
                        <div className="media single-choose-inner">
                          
                              <div  style={{backgroundColor:"#0060FF", padding:"1rem", borderRadius:"100%", marginRight:"1rem"}}>
                              < CashCoin size={20} width={25} height={25}  color="white"/>
                              </div>
                   
                           <div className="media-body">
                              <h4>Baixo Custo Operacional: </h4>
                              <p>Uma loja virtual permite que você alcance clientes em todo o mundo, sem as limitações geográficas de uma loja física. Isso amplia significativamente seu público-alvo e suas oportunidades de venda. </p>
                           </div>
                        </div>
                        <div className="media single-choose-inner mb-3">
                            <div  style={{backgroundColor:"#0060FF", padding:"1rem", borderRadius:"100%", marginRight:"1rem"}}>
                                 < Globe size={20} width={25} height={25}  color="white"/>
                              </div>
                           <div className="media-body">
                              <h4>Acessibilidade Global: </h4>
                              <p>Comparado a uma loja física, uma loja virtual geralmente requer menos investimento inicial e possui custos operacionais mais baixos, como aluguel de espaço e despesas com funcionários. Isso pode resultar em maior rentabilidade a longo prazo.</p>
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

export default Super
