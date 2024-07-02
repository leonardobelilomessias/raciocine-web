import Skillbar from '@/components/common/Skillbar';
import Image from 'next/image';

import SkillImg_1 from '@/assets/img/about/bussinesswoman2.png';
import SkillImg_2 from '@/assets/img/other/5.webp';
import SkillImg_3 from '@/assets/img/other/6.webp';

const SkillArea = () => {
   return (
      <div className="skill-area bg-relative pd-top-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 pe-5  mb-lg-0">
                  <div className="section-title mb-0">
                     <h5 className="sub-title left-border">Digitalize Já! </h5>
                     <h2 className="title">Crescimento de negócios que aplicam nossos serviços? </h2>
                     <p className="content">Dados de mercado garante que a tecnologia oferece vantagem sobre concorentes, e aumenta lucros e resultados em seguintes porcentagens:</p>
                  </div>
                  <div className="skill-progress-area mt-4">
                     <Skillbar />
                  </div>
               </div>

               <div className="col-lg-6 px-xl-5 pd-botton-120 ">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="thumb border-radius-5 mb-4 image-hover-animate">
                           <Image src={SkillImg_1} alt="img" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <hr />
      </div>

   )
}

export default SkillArea
