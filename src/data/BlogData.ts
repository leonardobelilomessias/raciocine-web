import { StaticImageData } from "next/image";

import blogThumb_1 from "@/assets/img/blog/5.webp";
import blogThumb_2 from "@/assets/img/blog/6.webp";
import blogThumb_3 from "@/assets/img/blog/7.webp";
import blogThumb_4 from "@/assets/img/blog/10.webp";
import blogThumb_5 from "@/assets/img/blog/11.webp";
import blogThumb_6 from "@/assets/img/blog/12.webp";
import blogThumb_7 from "@/assets/img/blog/8.webp";
import blogThumb_8 from "@/assets/img/blog/9.webp";

interface DataType {
   id: number;
   page: string;
   img: StaticImageData;
   date: string;
   comment?: number;
   title: string;
   desc?: string;
}[];

const blog_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      img: blogThumb_1,
      date: "25 Maio 2024",
      title: "Como Negócios que Ignoram a Tecnologia Perdem Mais do que Ganham",
      desc: "No cenário empresarial atual, a tecnologia deixou de ser um diferencial para se tornar uma necessidade. Negócios que resistem à transformação digital enfrentam uma série de prejuízos que vão muito além da perda de competitividade.",
   },
   {
      id: 2,
      page: "home_1",
      img: blogThumb_2,
      date: "15 Abril 2024",
      title: "Transforme sua Presença Online: A Importância de um Site Profissional para seu Negócio",
      desc: "Num mundo onde a primeira impressão é frequentemente digital, ter um site profissional é crucial para o sucesso do seu negócio. Neste post, vamos discutir por que um site bem projetado não é apenas...",
   },
   {
      id: 3,
      page: "home_1",
      img: blogThumb_3,
      date: "30 Janeiro 2024",
      title: "Maximização de Resultados com Tráfego Pago: Estratégias para Aumentar suas Vendas Online",
      desc: "Investir em tráfego pago pode ser a chave para desbloquear um crescimento rápido e sustentável para o seu negócio. Neste post, abordamos as melhores estratégias... ",
   },

   // home_3

   {
      id: 1,
      page: "home_3",
      img: blogThumb_7,
      date: "25",
      comment: 55,
      title: "Stock Exchange Market Foreca 2021-2023",
      desc: "Duis leo. Sed fringilla mauris iamet nibh. odales sagittis magonsequat letendum sodales augue velit cursununc",
   },
   {
      id: 2,
      page: "home_3",
      img: blogThumb_8,
      date: "25",
      comment: 55,
      title: "Market Stock Exchange Foreca 2023-2023",
      desc: "Duis leo. Sed fringilla mauris iamet nibh. odales sagittis magonsequat letendum sodales augue velit cursununc",
   },

   // home_4

   {
      id: 1,
      page: "home_4",
      img: blogThumb_1,
      date: "02 January",
      title: "Publishing software like Aldus including versions",
   },
   {
      id: 2,
      page: "home_4",
      img: blogThumb_2,
      date: "02 January",
      title: "Publishing software like Aldus including versions",
   },
   {
      id: 3,
      page: "home_4",
      img: blogThumb_3,
      date: "02 January",
      title: "Publishing software like Aldus including versions",
   },

   // home_5

   {
      id: 1,
      page: "home_5",
      img: blogThumb_4,
      date: "25 May 2021",
      title: "Stock Exchange Market Foreca 2021-2023",
      desc: "Duis leo. Sed fringilla mauris iamet nibh. odales its augue velit",
   },
   {
      id: 2,
      page: "home_5",
      img: blogThumb_5,
      date: "25 May 2021",
      title: "Market Stock Exchange Foreca 2023-2023",
      desc: "Duis leo. Sed fringilla mauris iamet nibh. odales its augue velit",
   },
   {
      id: 3,
      page: "home_5",
      img: blogThumb_6,
      date: "25 May 2021",
      title: "Foreca Exchange Stock Market 2010-2023",
      desc: "Duis leo. Sed fringilla mauris iamet nibh. odales its augue velit",
   },
]

export default blog_data;