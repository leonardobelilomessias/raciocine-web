import Image from "next/image"
import Link from "next/link"

import headerTopLogo from "@/assets/img/logo.webp"

const HeaderTopTwo = () => {
   return (
      <div className="navbar-top style-2">
         <div className="container">
            <div className="row">
               <div className="col-lg-3 d-lg-inline-block d-none">
                  <div className="logo">
                     <Link href="/"><Image src={headerTopLogo} alt="img" /></Link>
                  </div>
               </div>
               <div className="col-lg-3 col-md-5 align-self-center">
                  <div className="media">
                     <div className="media-left">
                        <i className="far fa-clock"></i>
                     </div>
                     <div className="media-body">
                        <h6>Atendimento ao cliente</h6>
                        <p> de 10:00 às 18:00</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-5 align-self-center">
                  <div className="media">
                     <div className="media-left">
                        <i className="far fa-envelope"></i>
                     </div>
                     <div className="media-body">
                        <h6>Resposta de Contato</h6>
                        <p> de 9:00 às 18:00</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 d-lg-block d-none align-self-center">
                  <div className="social-media-light text-md-end text-center">
                     <Link target="_blank" href="https://www.facebook.com/profile.php?id=61554327154649"><i className="fab fa-facebook-f" aria-hidden="true"></i></Link>
                     {/* <Link href="#"><i className="fab fa-twitter" aria-hidden="true"></i></Link> */}
                     <Link target="_blank" href="https://www.instagram.com/raciocinesoftware/"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
                     <Link target="_blank" href="https://www.youtube.com/channel/UCMzeWJnftwbxYFTDekhRwzg"><i className="fab fa-youtube" aria-hidden="true"></i></Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderTopTwo
