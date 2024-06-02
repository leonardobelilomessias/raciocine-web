
import TeamDetails from "@/components/inner-pages/team-details";
import Wrapper from "@/layouts/Wrapper";
import Servicedetails from "./service-details";

export const metadata = {
   title: "Criação de sites e lojas virtuais",
};
const index = () => {
   return (
      <Wrapper>
         <Servicedetails title="Seo e Rankeamento" sub_title="Seo e Rankeamento" />
      </Wrapper>
   )
}

export default index