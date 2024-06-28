import Skillbar from "@/components/common/Skillbar"
import SocialIcon from "@/components/common/SocialIcon"
import Image from "next/image"

import teamDetailsThumb from "@/assets/img/service/apps/app-person.png"
import Link from "next/link"

const AppPerson = () => {
   return (
      <div className="team-details-page pd-top-120 ">
         <div className="container">
            <div className="row">
            <div className="col-lg-6 col-12 align-self-center">
                  <div className="team-details-info">
                     <h2>Soluções Inteligentes para um Mundo Conectado
</h2>
                     <p className="designation">Smart Business</p>
                     <p className="content">
                     Em um mundo onde a conectividade e a eficiência são essenciais, nosso aplicativo se destaca como a ferramenta ideal para transformar a maneira como você interage com a tecnologia. Ao criar um aplicativo com nossa solução, você obtém uma série de benefícios que impulsionam sua produtividade, otimizam processos e oferecem uma experiência de usuário incomparável.
                     </p>
                  </div>

               </div>
               <div className="col-lg-6 mb-4 mb-lg-0">
                  <div className="thumb image-hover-animate me-lg-5">
                     <Image src={teamDetailsThumb} alt="img" />
                  </div>
               </div>
  
            </div>
            
         </div>
      </div>
   )
}

export default AppPerson
