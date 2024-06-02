import Image from "next/image"
import Count from "@/components/common/Count";

import aboutShape_1 from "@/assets/img/about/1sm.webp";
import aboutShape_2 from "@/assets/img/about/1s.webp";
import aboutImg_1 from "@/assets/img/about/1.webp";

interface ContentType {
   sub_title: string;
   title: string;
   desc_1: JSX.Element;
   desc_2: JSX.Element;
   counter_details: {
      count: number;
      counter_text: string;
      desc: string;
   }[];
}

const abount_content: ContentType = {
   sub_title: "Sobre Nós",
   title: "Nós Tiramos suas ideias do papel do começo ao fim.",
   desc_1: (<>Nós somos os especialistas em tecnologia e temos ferramenta e estratégias que vão te dar uma imensa vantagem no mercado independente do seu nicho.</>),
   desc_2: (<>Temos os maiores resultados do mercado garantindo liderança no mercado de tcnologia</>),
   counter_details: [
      { count: 10, counter_text: "Anos", desc: "Experiencia" },
      { count: 315, counter_text: "", desc: "Clientes Satisfeitos" },
      { count: 527, counter_text: "", desc: "Projetos concluidos" },
   ]
}

const { sub_title, title, desc_1, desc_2, counter_details } = abount_content;

const About = () => {
   return (
      <div className="about-area pd-top-100">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-8">
                  <div className="about-mask-bg-wrap about-mask-bg-wrap-1 mb-4 mb-lg-0">
                     <Image className="shape-image-sm top_image_bounce" src={aboutShape_1} alt="img" />
                     <Image className="shape-image" src={aboutShape_2} alt="img" />
                     <div className="thumb">
                        <Image src={aboutImg_1} alt="img" />
                     </div>
                  </div>
               </div>

               <div className="col-lg-6 align-self-center">
                  <div className="section-title px-lg-5 mb-0">
                     <h5 className="sub-title right-line">{sub_title}</h5>
                     <h2 className="title">{title}</h2>
                     <p className="content">{desc_1}</p>
                     <p className="content-strong mt-3">{desc_2}</p>
                     <div className="exp-wrap mt-3">
                        <div className="row">
                           {counter_details.map((item, index) => (
                              <div key={index} className="col-sm-4">
                                 <div className="single-exp-inner">
                                    <h2><span className="counter"><Count number={item.count} /></span> <sub>{item.counter_text}</sub></h2>
                                    <h5>{item.desc}</h5>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
