"use client"
import CommonFaq from "@/components/common/CommonFaq"

const FAQ = () => {
   return (
      <div className="faq-area pd-top-100 pd-bottom-90">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 pe-xl-5 align-self-center">
                  <div className="section-title mb-0">
                     <h5 className="sub-title left-border">Faq</h5>
                     <h2 className="title">Perguntas Frequentes</h2>
                     <p className="content">Algumas perguntas que alguns cliente peguntam quando vão contratar nossos serviços.</p>
                  </div>
                  <div className="accordion mt-4" id="accordionExample">
                     <CommonFaq style={true} />
                  </div>
               </div>

               <div className="col-lg-6 mt-4 mt-lg-0">
                  <form onSubmit={(e) => e.preventDefault()} className="contact-form-wrap" id="contact-form">
                     <div className="consulting-contact-form mx-lg-4">
                        <h3 className="mb-3">Consultoria Grátis </h3>
                        <div className="single-input-inner style-bg">
                           <input name="name" type="text" placeholder="Nome Completo" />
                        </div>
                        <div className="single-input-inner style-bg">
                           <input name="email" type="text" placeholder="Email " />
                        </div>
                        <div className="single-input-inner style-bg">
                           <textarea name="message" placeholder="Menssagem"></textarea>
                        </div>
                        <div className="btn-wrap pb-3">
                           <button type="submit" className="it-btn btn-base">Enviar </button>
                        </div>
                     </div>
                     <p className="form-messege mb-0 mt-20 text-center"></p>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FAQ
