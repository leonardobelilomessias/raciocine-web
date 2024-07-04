import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"

import CtaArea from "@/components/common/CtaArea"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import PricingPlan from "@/components/homes/home-two/PricingPlan"
import ServiceDetailsArea from "./ServiceDetailsArea"
import Super from "./Super"
import VideoArea from "./VideoArea"
import MakeMoney from "./MakeMoney"
import Whatis from "./Whatis"
import BannerOne from "./BannerOne"


const Servicedetails = ({title, sub_title}:{title?:string, sub_title?:string}) => {
  return (
    <>
      <HeaderTwo/>
      <Breadcrumb title={title} sub_title={sub_title}/>
      <Whatis/>
      <BannerOne/>
      <ServiceDetailsArea/>
      {/* <VideoArea/> */}
      {/* <MakeMoney/> */}
      {/* <Super/> */}
      {/* <PricingPlan/> */}
      <CtaArea/>
      <FooterOne/>
    </>
  )
}

export default Servicedetails
