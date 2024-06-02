import HeaderOne from "@/layouts/headers/HeaderOne"
import Breadcrumb from "../common/Breadcrumb"
import ContactArea from "./ContactArea"
import ContactMap from "./ContactMap"
import CtaArea from "../common/CtaArea"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderTopTwo from "@/layouts/headers/menu/HeaderTopTwo"
import HeaderTwo from "@/layouts/headers/HeaderTwo"

const Contact = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb title="Contato" sub_title="Contato" />
      <ContactArea />
      <ContactMap />
      <CtaArea />
      <FooterOne />
    </>
  )
}

export default Contact
