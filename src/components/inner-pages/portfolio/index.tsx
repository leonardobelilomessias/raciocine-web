import Breadcrumb from "@/components/common/Breadcrumb"
import CtaArea from "@/components/common/CtaArea"
import Brand from "@/components/homes/home-three/Brand"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderThree from "@/layouts/headers/HeaderThree"
import ProjectArea from "./ProjectArea"

const Project = () => {
   return (
      <>
         <HeaderThree />
         <Breadcrumb title="Portfolio" sub_title="Projetos Realizados" />
         <ProjectArea />
         <Brand />
         <CtaArea />
         <FooterOne />
      </>
   )
}

export default Project
