import service_data from "@/data/ServiceData"
import Link from "next/link"

const Service = () => {
   return (
      <div className="service-area pd-top-115 pd-bottom-90" style={{ backgroundImage: `url(/assets/img/bg/6.webp)` }}>
         <div className="container">
            <div className="section-title">
               <div className="row">
                  <div className="col-xl-6 col-lg-7 mb-4 mb-lg-0">
                     <h5 className="sub-title left-border">O que nos oferecemos?</h5>
                     <h2 className="title">Oferecemos Diversos Serviços Digitais.</h2>
                     <p className="content mt-2">Temos equipes com experts em diversas areas para garantir o sucesso do seu negócio.</p>
                  </div>
                  <div className="col-xl-6 col-lg-5 align-self-center">
                     <div className="btn-wrap text-md-end">
                        <Link className="it-btn btn-base" href="/service">Ver Todos Serviços</Link>
                     </div>
                  </div>
               </div>
            </div>

            <div className="row">
               {service_data.filter((items) => items.page === "home_2").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-service-inner text-center">
                        <div className="icon-box-bg">
                           <i className={item.icon}></i>
                        </div>
                        <div className="details">
                           <h3>{item.title}</h3>
                           <p>{item.desc}</p>
                        </div>
                        <div className="details-hover-wrap">
                           <div className="details-hover">
                              <h3>{item.title}</h3>
                              <p>{item.desc}</p>
                              <Link className="it-btn btn-base btn-small" href="/service-details">Ver Detalhes</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Service
