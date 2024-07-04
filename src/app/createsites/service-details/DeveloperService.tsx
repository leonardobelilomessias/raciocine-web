"use client"
import Image from "next/image"
import { useState } from "react"

import aboutThumb from "@/assets/img/service/sites/developer.png";

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
      <div className="about-area pd-top-90 ">
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
                     <h5 className="sub-title left-border">Desenvolvimento de Ponta a Ponta</h5>
                     <h2 className="title">Te Entragamos tudo pronto para você focar no que você faz de melhor</h2>
                     <p className="content-strong mt-2">Deixe os detalhes técnicos conosco; cuidamos da configuração completa do seu site ou loja virtual, para que você possa focar no crescimento do seu negócio. </p>
                     <ul className="nav nav-tabs tab-button-style mt-4" id="myTab" role="tablist">
                        {tab_title.map((tab, index) => (
                           <li key={index} className="nav-item">
                              <button onClick={() => handleTabClick(index)} className={activeTab === index ? 'nav-link active' : 'nav-link'}>
                                 {tab}
                              </button>
                           </li>
                        ))}
                     </ul>

                     <div className="tab-content" id="myTabContent">
                        {tab_content.map((content, index) => (
                           <div key={index} className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`} id="home">
                              <p className="content mt-4">{content}</p>
                              <div className="list-wrap mt-4">
        
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default DeveloperService
