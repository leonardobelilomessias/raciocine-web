import SocialIcon from "@/components/common/SocialIcon"
import footer_data from "@/data/FooterData"
import Link from "next/link"

const FooterOne = () => {
   return (
      <footer className="footer-area bg-black bg-cover" style={{ backgroundImage: `url('/assets/img/bg/2.webp')` }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-md-6">
                  <div className="widget widget_about">
                     <h4 className="widget-title">Nossa Empresa</h4>
                     <div className="details">
                        <p>Sede</p>
                        <p> Avenida do Contorno 2905 - Santa Efigênia - Belo Horizonte  -  Minas Gerais - Brazil</p>
                        <ul className="social-media">
                           <SocialIcon />
                        </ul>
                     </div>
                  </div>
               </div>

               {footer_data.map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6">
                     <div className="widget widget_nav_menu">
                        <h4 className="widget-title">{item.title}</h4>
                        <ul>
                           {item.nav_links.map((menu, i) => (
                              <li key={i}><Link target="_blank" href={menu.link}>{menu.title}</Link></li>
                           ))}
                        </ul>
                     </div>
                  </div>
               ))}

               <div className="col-lg-3 col-md-6">
                  <div className="widget widget_subscribe">
                     <h4 className="widget-title">Entre em contato</h4>
                     <div className="single-input-inner style-border style-bg-none">
                        <input type="text" placeholder="Email" />
                        <button><i className="fa fa-arrow-right"></i></button>
                     </div>
                     <label><input type="checkbox" />Quero receber informações sobre produtos e serviços</label>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="footer-bottom text-center">
            <div className="container">
               <div className="row">
                  <div className="col-md-12 align-self-center">
                     <p>Raciocine - Soluções Inteligentes©  2024. -  Todos Direitos Reservados.</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
