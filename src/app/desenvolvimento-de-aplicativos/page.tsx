
import TeamDetails from "@/components/inner-pages/team-details";
import Wrapper from "@/layouts/Wrapper";
import Servicedetails from "./service-details";

export const metadata = {
   title: "Criação de sites e lojas virtuais",
};
const index = () => {
   return (
      <Wrapper>
         <Servicedetails title="Desenvolvimento de Aplicativos" sub_title="Criação de Aplicativos" />
      </Wrapper>
   )
}

export default index