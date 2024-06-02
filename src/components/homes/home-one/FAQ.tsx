import CommonFaq from "@/components/common/CommonFaq"
import Image from "next/image"

import faqImg_1 from "@/assets/img/about/f1.webp";
import faqImg_2 from "@/assets/img/about/f2.webp";
import faqImg_3 from "@/assets/img/about/f3.webp";

const FAQ = () => {

   return (
      <div className="faq-area pd-top-100 pd-bottom-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-8 order-lg-last mb-4 mb-lg-0">
                  <div className="faq-image-wrap">
                     <div className="thumb">
                        <Image src={faqImg_1} alt="img" />
                        <Image className="img-position-1" src={faqImg_2} alt="img" />
                        <Image className="img-position-2 top_image_bounce" src={faqImg_3} alt="img" />
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 pe-xl-5 order-lg-first align-self-center">
                  <div className="section-title mb-0">
                     <h5 className="sub-title right-line">Faq</h5>
                     <h2 className="title">Perguntas Frequentes</h2>
                     <p className="content">Algumas perguntas que alguns cliente peguntam quando vão contratar nossos serviços.</p>
                  </div>
                  <div className="accordion mt-4" id="accordionExample">
                     <CommonFaq />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FAQ
