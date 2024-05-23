import Skillbar from '@/components/common/Skillbar';
import Image from 'next/image';

import SkillImg_1 from '@/assets/img/other/4.webp';
import SkillImg_2 from '@/assets/img/other/5.webp';
import SkillImg_3 from '@/assets/img/other/6.webp';

const SkillArea = () => {
   return (
      <div className="skill-area bg-relative pd-top-120 pd-bottom-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 pe-5 mb-5 mb-lg-0">
                  <div className="section-title mb-0">
                     <h5 className="sub-title left-border">Aumente Seus Lucros </h5>
                     <h2 className="title">Quanto seu negócio pode crescer com um serviço ou tecnologia de ponta? </h2>
                     <p className="content">Dados de mercado garante que a tecnologia oferece vantagem sobre concorentes, e aumenta lucros e resultados em seguintes porcentagens:</p>
                  </div>
                  <div className="skill-progress-area mt-4">
                     <Skillbar />
                  </div>
               </div>

               <div className="col-lg-6 px-xl-5">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="thumb border-radius-5 mb-4 image-hover-animate">
                           <Image src={SkillImg_1} alt="img" />
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="thumb border-radius-5 image-hover-animate mb-3 mb-md-0">
                           <Image src={SkillImg_2} alt="img" />
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="thumb border-radius-5 image-hover-animate">
                           <Image src={SkillImg_3} alt="img" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SkillArea
