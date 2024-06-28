import Skillbar from "@/components/common/Skillbar"
import SocialIcon from "@/components/common/SocialIcon"
import Image from "next/image"

import teamDetailsThumb from "@/assets/img/service/seo/search.png"
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
                     <h2>Seja encontrado nos mecanismos de busca.</h2>
                     <p className="designation">Desing Profissional</p>
                     <p className="content">
                     Aumente sua visibilidade online e atraia mais clientes com uma estratégia eficaz de SEO. Otimizamos seu site para que ele apareça nas primeiras posições dos principais mecanismos de busca, como Google e Bing. Com técnicas avançadas e práticas recomendadas de SEO, garantimos que seu público-alvo encontre sua empresa facilmente. Melhore seu ranking, aumente o tráfego orgânico e impulsione suas vendas. Seja encontrado nos mecanismos de busca e destaque-se na web.                     </p>
                  </div>
                  <div className=" d-flex "><Link target="_blank"  href="https://wa.me/5531986261771?text=Olá! Gostaria de saber mais informações sobre os serviços de Seo e Rankeamento no google."className="it-btn btn-black mt-12 align-self-center"> Quero contratar</Link></div>
                
               </div>
            </div>
            
         </div>
      </div>
   )
}

export default ServiceDetailsArea
