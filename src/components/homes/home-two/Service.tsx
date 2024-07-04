import service_data from "@/data/ServiceData"
import Link from "next/link"

const Service = () => {
   return (
      <div id="services" className="service-area pd-top-100 pd-bottom-80" style={{ backgroundImage: `url(/assets/img/bg/6.webp)` }}>
         <div className="container ">
            <div className="section-title ">
               <div className="row">
                  <div className="row d-flex ">
                     <h5 className="sub-title  text-center ">Temos a solução perfeita para seu negócio</h5>
                     <h2 className="title text-center">Veja Nossos Serviços</h2>
                     <p className="content mt-2 text-center">Dominio total em tecnologia para garantir o sucesso do seu negócio.</p>
                  </div>
                  <div className="col-xl-6 col-lg-5 align-self-center">
                     <div className="btn-wrap text-md-end">
                        {/* <Link className="it-btn btn-base" href="/service">Ver Todos Serviços</Link> */}
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
                              <Link  className="it-btn btn-base btn-small" href={`${item.link}`}>Ver Detalhes</Link>
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
