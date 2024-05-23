import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceArea from "./ServiceArea"
import WorkArea from "@/components/homes/home-one/WorkArea"
import Testimonial from "./Testimonial"
import PricingPlan from "@/components/homes/home-one/PricingPlan"
import FooterOne from "@/layouts/footers/FooterOne"
import CtaArea from "@/components/common/CtaArea"
import HeaderTwo from "@/layouts/headers/HeaderTwo"

const Service = () => {
   return (
      <>
         <HeaderTwo />
         <Breadcrumb title="Nossos Serviços" sub_title="Serviços" />
         <ServiceArea />
         <WorkArea />
         <Testimonial />
         <PricingPlan />
         <CtaArea />
         <FooterOne />
      </>
   )
}

export default Service
