interface DataType {
   id: number;
   page: string;
   count?: string;
   icon?: string;
   title: string;
   desc: string;
}[];

const work_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      count: "01",
      title: "Selecione o serviço",
      desc: "Escolha um serviço de acordo com sua necessidade.",
   },
   {
      id: 2,
      page: "home_1",
      count: "02",
      title: "Selecione o serviço",
      desc: "Escolha um serviço de acordo com sua necessidade.",
   },
   {
      id: 3,
      page: "home_1",
      count: "03",
      title: "Execute",
      desc: "Vestibulum ante ipsumusn eratultrices posu world",
   },
   {
      id: 4,
      page: "home_1",
      count: "04",
      title: "Deliver result",
      desc: "Vestibulum ante ipsumusn eratultrices posu world",
   },

   // home_2

   {
      id: 1,
      page: "home_2",
      icon: "icomoon-project",
      title: "Selecione o serviço",
      desc: "Escolha um serviço de acordo com sua necessidade.",
   },
   {
      id: 2,
      page: "home_2",
      icon: "icomoon-analysis",
      title: "Analise de projeto.",
      desc: "Analise e viabilidade entrega com preços e prazos.",
   },
   {
      id: 3,
      page: "home_2",
      icon: "icomoon-gear",
      title: "Execução",
      desc: "Processo de criação e desenvolvimento de produto ou serviço.",
   },
   {
      id: 4,
      page: "home_2",
      icon: "icomoon-approval",
      title: "Entrega Acertiva",
      desc: "Entrega de projeto ou serviço dentro do prazo estipulado na contratação",
   },
]

export default work_data;