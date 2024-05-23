interface DataType {
   id: number;
   title: string;
   nav_links: {
      link: string;
      title: string
   }[];
}[];

const footer_data: DataType[] = [
   {
      id: 1,
      title: "Serviços",
      nav_links: [
         { link: "service", title: "Criação de sites" },
         { link: "service", title: "Criação de Apps" },
         { link: "service", title: "Trafego Pago" },
         { link: "service", title: "Web Desing" },
         { link: "service", title: "Segurança Virtual" },
      ],
   },
   {
      id: 2,
      title: "Links Úteis",
      nav_links: [
         { link: "about", title: "Sobre Nós" },
         { link: "team", title: "Equipe" },
         { link: "project", title: "Portfolio" },
         { link: "service", title: "Serviços" },
         { link: "contact", title: "Contato" },
      ]
   },
]

export default footer_data;