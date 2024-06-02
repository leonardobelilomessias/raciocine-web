import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TeamDetailsArea from "./TeamDetailsArea"
import CtaArea from "@/components/common/CtaArea"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import PricingPlan from "@/components/homes/home-two/PricingPlan"

const Servicedetails = ({title, sub_title}:{title?:string, sub_title?:string}) => {
  return (
    <>
      <HeaderTwo/>
      <Breadcrumb title={title} sub_title={sub_title}/>
      <TeamDetailsArea/>
      <PricingPlan/>
      <CtaArea/>
      <FooterOne/>
    </>
  )
}

export default Servicedetails
