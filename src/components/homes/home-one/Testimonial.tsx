"use client"
import React, { useRef, useEffect } from "react";
import Slider from 'react-slick'
import testimonial_data from "@/data/TestimonialData"
import Image, { StaticImageData } from "next/image";

import testiThumb_1 from "@/assets/img/testimonial/1.webp";
import testiThumb_2 from "@/assets/img/testimonial/2.webp";
import testiBigImg from "@/assets/img/testimonial/02.webp";

const testi_small_img: StaticImageData[] = [testiThumb_1, testiThumb_2, testiThumb_1, testiThumb_2];

const Testimonial = () => {

   const slider1Ref = useRef<Slider | null>(null);
   const slider2Ref = useRef<Slider | null>(null);

   useEffect(() => {
      if (slider1Ref.current && slider2Ref.current) {
         slider1Ref.current.slickGoTo(2);
      }
   }, []);

   return (
      <div className="testimonial-slider bg-sky bg-relative">
         <div className="bg-relative">
            <Slider
               slidesToShow={1}
               slidesToScroll={1}
               arrows={false}
               autoplay={true}
               fade={true}
               autoplaySpeed={1500}
               asNavFor={slider2Ref.current as Slider | undefined}
               ref={(slider) => (slider1Ref.current = slider)}
               className="slider testimonial-thumb testimonial-thumb-2">
               {testimonial_data.filter((items) => items.page === "home_1").map((item) => (
                  <div key={item.id} className="item">
                     <div className="row">
                        <div className="col-lg-5 col-md-6">
                           <div className="thumb mb-4 mb-md-0" style={{backgroundImage:`url(/assets/img/about/1.webp)`}}>
                              <div className="quote-wrap">
                                 <div className="quote">
                                    <Image src={testiBigImg} alt="img" />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-5 col-md-6 align-self-center">
                           <div className="single-testimonial-inner text-md-center px-lg-5 px-md-4">
                              <div className="details">
                                 <div className="thumb">
                                    <Image src={item.img} alt="img" />
                                 </div>
                                 <h2>{item.name}</h2>
                                 <span>{item.designation}</span>
                                 <p>{item.desc}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </Slider>

            <Slider
               slidesToShow={3}
               slidesToScroll={1}
               asNavFor={slider1Ref.current as Slider | undefined}
               ref={(slider) => (slider2Ref.current = slider)}
               dots={false}
               autoplay={true}
               variableWidth={true}
               autoplaySpeed={1500}
               centerMode={true}
               centerPadding="0"
               focusOnSelect={true}
               arrows={false} className="slider testimonial-nav-slider testimonial-nav-slider-2">
               {testi_small_img.map((img, i) => (
                  <div key={i} className="item">
                     <div className="thumb">
                        <Image src={img} alt="img" />
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   )
}

export default Testimonial
