import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TeamDetailsArea from "./TeamDetailsArea"
import CtaArea from "@/components/common/CtaArea"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import PricingPlan from "@/components/homes/home-two/PricingPlan"

const Teamdetails = () => {
  return (
    <>
      <HeaderTwo/>
      <Breadcrumb title="Team Details" sub_title="Team Details" />
      <TeamDetailsArea/>
      <PricingPlan/>
      <CtaArea/>
      <FooterOne/>
    </>
  )
}

export default Teamdetails
