"use client"
import Image from "next/image"
import { useState } from "react"

import aboutThumb from "@/assets/img/service/seo/google.png";

const tab_title: string[] = ["Raciocine", "Outros ",];

const tab_content: JSX.Element[] = [ 
   (<>Desenvolvimento de ponta a ponta com as tecnologias mais atualizadas do mercado, garantindo qualidade e eficiência dos produtos ou serviço.</>),
   (<>Desenvolvimento  com ferramentas de terceiros, sem conhecimento de origem e sem garantia de qualidade na entraga do produto ou serviço.</>),
]

const DeveloperService = () => {

   // Define state to keep track of the active tab
   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   return (
      <div className="about-area pd-top-40 ">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="mask-bg-wrap mask-bg-img-3">
                     <div className="thumb">
                        <Image src={aboutThumb} alt="img" />
                     </div>
                  </div>
               </div>
               
               <div className="col-lg-6 align-self-center">
                  <div className="section-title px-lg-5 mb-0">
                     <h5 className="sub-title left-border">Seja encontrado nas pesquisas</h5>
                     <h1 className="title">O que é SEO?</h1>
                     <p className="content mt-2">SEO, ou Search Engine Optimization (Otimização para Motores de Busca), é um conjunto de estratégias e técnicas utilizadas para aumentar a visibilidade e o posicionamento de um site nas páginas de resultados dos motores de busca {`(como Google, Bing e Yahoo)`}. O objetivo principal do SEO é atrair mais visitantes orgânicos, ou seja, aqueles que chegam ao site através dos resultados não pagos dos motores de busc </p>
                    

                     
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default DeveloperService
