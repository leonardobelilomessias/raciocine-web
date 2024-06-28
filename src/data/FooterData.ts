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
         { link: "createsites", title: "Criação de sites" },
         { link: "desenvolvimento-de-aplicativos", title: "Criação de Apps" },
         { link: "trafego-pago", title: "Trafego Pago" },
         { link: "/consultoria-ti", title: "Web Desing" },
         { link: "/#", title: "Segurança Virtual" },
      ],
   },
   {
      id: 2,
      title: "Links Úteis",
      nav_links: [
         { link: "about", title: "Sobre Nós" },
         { link: "#", title: "Equipe" },
         { link: "#", title: "Portfolio" },
         { link: "#", title: "Serviços" },
         { link: "contact", title: "Contato" },
      ]
   },
]

export default footer_data;