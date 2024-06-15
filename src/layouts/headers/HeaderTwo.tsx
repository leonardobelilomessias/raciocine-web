"use client"
import Image from "next/image"
import Link from "next/link"
import NavMenu from "./menu/NavMenu";
import HeaderTopTwo from "./menu/HeaderTopTwo";
import UseSticky from "@/hooks/UseSticky"
import { useState } from "react";
import HeaderSearchbar from "./menu/HeaderSearchbar";

import logo_1 from "@/assets/img/logo.webp";

const HeaderTwo = () => {

   const [isActive, setIsActive] = useState<boolean>(false);
   const { sticky } = UseSticky();
   const [isSearch, setIsSearch] = useState<boolean>(false);

   const toggleMobileMenu = () => {
      setIsActive(!isActive); // Toggle the isActive state
   };

   return (
      <>
         <HeaderTopTwo />
         <nav className={`navbar navbar-area navbar-area-2 navbar-expand-lg ${sticky ? "sticky-active" : ""} `}>
            <div className="container nav-container d-flex ">
               <div className="responsive-mobile-menu pb-2 ">
                  <button
                     onClick={toggleMobileMenu}
                     className={`menu toggle-btn d-block d-lg-none ${isActive ? "open" : ""}`} data-target="#Iitechie_main_menu"
                     aria-expanded="false" aria-label="Toggle navigation">
                     <span className="icon-left"></span>
                     <span className="icon-right"></span>
                  </button>
               </div>
               <div className="logo d-inline-block d-lg-none">
                  <Link href="/"><Image src={logo_1} alt="img" /></Link>
               </div>
               <div className="nav-right-part nav-right-part-mobile ">

               </div>
               
               <div className={`collapse navbar-collapse ${isActive ? "sopen" : ""} `} id="Iitechie_main_menu">
                  <ul className="navbar-nav menu-open text-lg-start">
                     <NavMenu />
                  </ul>
               </div>
               <div className="nav-right-part nav-right-part-desktop align-self-center">

                  <Link target="_blank"  className="it-btn btn-black" href="https://wa.me/5531986261771?text=Olá! Gostaria de saber mais informações sobre os serviços.">Chamar no Whatsapp</Link>
                  {/* <Link  className="it-btn btn-blue u" href="/login"><u>Area do cliente</u></Link> */}

               </div>
            </div>
         </nav>

         <HeaderSearchbar isSearch={isSearch} setIsSearch={setIsSearch} />
      </>
   )
}

export default HeaderTwo
