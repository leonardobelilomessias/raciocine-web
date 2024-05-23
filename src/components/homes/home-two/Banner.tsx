"use client"
import Link from "next/link"
import { motion, } from 'framer-motion';
import { useParallax } from "@/hooks/TweenMax";
import { useRef } from "react";

const Banner = () => {

   const containerRef = useRef<HTMLDivElement>(null);
   const { parallaxX, parallaxY } = useParallax(containerRef, 20);

   return (
      <div className="banner-area banner-area-2 bg-relative" style={{ backgroundImage: `url(/assets/img/banner/3.webp)` }} ref={containerRef}>
         <div className="bg-overlay-gradient"></div>
         <motion.div animate={{ x: parallaxX * 2, y: parallaxY * 0.5 }} className="banner-bg-img" style={{ backgroundImage: `url(/assets/img/banner/4.webp)` }}></motion.div>
         <div className="container">
            <div className="row">
               <div className="col-lg-9 col-md-12">
                  <div className="banner-inner">
                     <h4 className="sub-title">Tecnologia Avançada</h4>
                     <h2 className="title">Soluções Inteligentes <span>Negócios de Sucesso</span></h2>
                     <p className="content">Utilize das tecnologias de ponta usadas por grandes empresa, para almentar seus lucros e fazer seu negócio crescer exponencialmente</p>
                     <div className="btn-wrap banner-2-btn">
                        <Link className="it-btn btn-base" href="https://wa.me/5531986261771?text=Olá! Gostaria de saber mais informações sobre os serviços.">Chamar no Whatsapp</Link>
                        <Link className="it-btn btn-black" href="/contact">Ver Serviços</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Banner
