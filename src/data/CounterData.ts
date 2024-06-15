import { StaticImageData } from "next/image";

import counter_bg from "@/assets/img/home-cyber/service/fact-bg.webp";

interface DataType {
   id: number;
   page: string;
   title: string;
   count: number;
   counter_text: string
   count_bg?:StaticImageData
   desc?:string
}[];

const counter_data: DataType[] = [
   {
      id: 1,
      page: "home_2",
      title: "Novos compradores na internet em 2024",
      count: 65,
      counter_text: "mil",
   },
   {
      id: 2,
      page: "home_2",
      title: "Investidos em tacnologia este ano",
      count: 12,
      counter_text: "Bilhões de reais",
   },
   {
      id: 3,
      page: "home_2",
      title: "Novos projetos",
      count: 5,
      counter_text: "Mil",
   },
   {
      id: 4,
      page: "home_2",
      title: "Retorno em  lucro no mercado",
      count: 28,
      counter_text: "Bilhões de reais",
   },

   // home_5
   
   {
      id: 1,
      page: "home_5",
      title:"Cyber Security Projects",
      desc: "Praesent pellentesque lacus lectuseu convallis ornare",
      count: 58,
      counter_text: "M",
      count_bg:counter_bg,
   },
   {
      id: 2,
      page: "home_5",
      title:"Smart Home Protection",
      desc: "Praesent pellentesque lacus lectuseu convallis ornare",
      count: 300,
      counter_text: "+",
      count_bg:counter_bg,
   },
   {
      id: 3,
      page: "home_5",
      title:"Programmers Team",
      desc: "Praesent pellentesque lacus lectuseu convallis ornare",
      count: 80,
      counter_text: "+",
      count_bg:counter_bg,
   },
]

export default counter_data;