
import TeamDetails from "@/components/inner-pages/team-details";
import Wrapper from "@/layouts/Wrapper";
import Servicedetails from "./service-details";

export const metadata = {
   title: "Criação de sites e lojas virtuais",
};
const index = () => {
   return (
      <Wrapper>
         <Servicedetails title="Tráfego Pago e Anúncios" sub_title="Trafego Pago e Anúncios" />
      </Wrapper>
   )
}

export default index