import Banner from "./Banner"
import IntroArea from "./IntroArea"
import About from "./About"
import Service from "./Service"
import SkillArea from "./SkillArea"
import Project from "./Project"
import FAQ from "./FAQ"
import Counter from "./Counter"
import PricingPlan from "./PricingPlan"
import VideoArea from "./VideoArea"
import WorkArea from "./WorkArea"
import Team from "./Team"
import Banner2 from "../home-one/Banner"
import Blog from "./Blog"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import Brand from "./Brand"
import FooterOne from "@/layouts/footers/FooterOne"
import Testimonial from "./Testimonial"
import aboutImg_1 from "@/assets/img/sections/robot.png"
import IaElement from "@/components/common/SectionElement"
const HomeTwo = () => {
   return (
      <>
         <HeaderTwo />
         <Banner2 />
         <IntroArea />
         <IaElement img={aboutImg_1} shapeOne={true}/>
         <Service />
         <About />
         <Counter />
         <SkillArea />
         <PricingPlan />
         <VideoArea />
         <WorkArea />
         <Testimonial />
         {/* <Project /> */}
         <FAQ />
         {/* <Team/> */}
         <Blog />
         <Brand />
         <FooterOne />
      </>
   )
}

export default HomeTwo
