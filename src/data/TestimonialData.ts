import { StaticImageData } from "next/image";

import testiThumb_1 from "@/assets/img/testimonial/1.webp";
import testiThumb_2 from "@/assets/img/testimonial/2.webp";
import testiThumb_3 from "@/assets/img/testimonial/3.webp";
import testiThumb_4 from "@/assets/img/testimonial/4.webp";
import testiThumb_5 from "@/assets/img/testimonial/5.webp";
import testiThumb_6 from "@/assets/img/testimonial/2.webp";
import testimonialIcon_1 from "@/assets/img/testimonial/4.webp"
import testimonialIcon_2 from "@/assets/img/about/h5-2.webp"
import testimonialIcon_3 from "@/assets/img/testimonial/02.webp"

interface DataType {
   id: number;
   page: string;
   img: StaticImageData;
   name: string;
   designation: string;
   desc: string;
}[];

const testimonial_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      img: testiThumb_1,
      name: "Donas Foknar",
      designation: "Customer,USA",
      desc: "Eollicitudin nisi nulla eget augue. Maecenas quis turpaliquet, porta lorem et, dictum purus. Curabitur vel congue diamamet condimentum metus. Donec feugiat fermentposuere. Morbi porttitor augue id",
   },
   {
      id: 2,
      page: "home_1",
      img: testiThumb_2,
      name: "Donas Foknar",
      designation: "Customer,USA",
      desc: "Eollicitudin nisi nulla eget augue. Maecenas quis turpaliquet, porta lorem et, dictum purus. Curabitur vel congue diamamet condimentum metus. Donec feugiat fermentposuere. Morbi porttitor augue id",
   },
   {
      id: 3,
      page: "home_1",
      img: testiThumb_1,
      name: "Donas Foknar",
      designation: "Customer,USA",
      desc: "Eollicitudin nisi nulla eget augue. Maecenas quis turpaliquet, porta lorem et, dictum purus. Curabitur vel congue diamamet condimentum metus. Donec feugiat fermentposuere. Morbi porttitor augue id",
   },
   {
      id: 4,
      page: "home_1",
      img: testiThumb_2,
      name: "Donas Foknar",
      designation: "Customer,USA",
      desc: "Eollicitudin nisi nulla eget augue. Maecenas quis turpaliquet, porta lorem et, dictum purus. Curabitur vel congue diamamet condimentum metus. Donec feugiat fermentposuere. Morbi porttitor augue id",
   },

   // home_2

   {
      id: 1,
      page: "home_2",
      img: testiThumb_1,
      name: "Julia Silva",
      designation: "Fisioterapeuta",
      desc: "Tinha dificuldade em me posicionar no mercado digital e me sentia sempre perdida contratei o serviço e pude aumentar o numero de consultas semanalmente.",
   },
   {
      id: 2,
      page: "home_2",
      img: testiThumb_2,
      name: "Pedro Dantas",
      designation: "Loja de artigos esportivos",
      desc: "Fui muito bem atendido no processo de transição de outra empresa. Recebi uma consultoria que vale ouro! Consigo vender mais e evitar carrinhos abandonados na minha loja",
   },
   {
      id: 3,
      page: "home_2",
      img: testiThumb_3,
      name: "Alicia Nunes",
      designation: "Cunsultora em Marketing",
      desc: "Atuo na área de marketing e precisava de um página de captura de leads configurada em um curto prazo. Raciocine cumpriu todos os prazos e com uma qualidade excepcional. Recomendo!",
   },
   {
      id: 4,
      page: "home_2",
      img: testiThumb_4,
      name: "Jorge Moura",
      designation: "Micro Empreendedor",
      desc: "Minha Empresa Hoje recebe mais ligações atráves de um serviço de anúncios e criação de página que contratei. Agora posso focar apenas no atendimento ao cliente. ",
   },
   {
      id: 5,
      page: "home_2",
      img: testiThumb_5,
      name: "Fabiana Vieira",
      designation: "Educadora",
      desc: "Tenho muito pouca habilidade com tecnologia e queria saber como poderia me encontrar no mundo digital. Tive uma consultoria que me abriu um mundo de pssibilidades",
   },
   {
      id: 6,
      page: "home_2",
      img: testiThumb_6,
      name: "Arthur Gomes",
      designation: "Empresário",
      desc: "Contratei um serviço de aplicativo para gerenciar os clientes da minha empresa. Estou muito satisfeito com os resultados.",
   },

   // home_3

   {
      id: 1,
      page: "home_3",
      img: testiThumb_1,
      name: "Karshin Kumar",
      designation: "Founder",
      desc: "Duis leo. Sed fringillamaurisamet nibh. odales sagittionsequat leo egetendum sodales augue",
   },
   {
      id: 2,
      page: "home_3",
      img: testiThumb_2,
      name: "Necola Amar",
      designation: "HR",
      desc: "Duis leo. Sed fringillamaurisamet nibh. odales sagittionsequat leo egetendum sodales augue",
   },
   {
      id: 3,
      page: "home_3",
      img: testiThumb_1,
      name: "Forgan Arit",
      designation: "Manager",
      desc: "Duis leo. Sed fringillamaurisamet nibh. odales sagittionsequat leo egetendum sodales augue",
   },
   {
      id: 4,
      page: "home_3",
      img: testiThumb_2,
      name: "Wilton Fork",
      designation: "Co-Founder",
      desc: "Duis leo. Sed fringillamaurisamet nibh. odales sagittionsequat leo egetendum sodales augue",
   },

   // home_4

   {
      id: 1,
      page: "home_4",
      img: testimonialIcon_1,
      name: "Donas julias",
      designation: "Customer,USA",
      desc: "Sollicitudin nisi nulla eget augue. Maecenas quis turpaliquet, porta lorem et, dictum purus. Curabitur vel congue diamamet condimentum metus. Donec feugiat.",
   },
   {
      id: 2,
      page: "home_4",
      img: testimonialIcon_1,
      name: "Donas julias",
      designation: "Customer,USA",
      desc: "Sollicitudin nisi nulla eget augue. Maecenas quis turpaliquet, porta lorem et, dictum purus. Curabitur vel congue diamamet condimentum metus. Donec feugiat.",
   },

   // home_5

   {
      id: 1,
      page: "home_5",
      img: testimonialIcon_2,
      name: "Donas julias",
      designation: "Customer,USA",
      desc: "Sollicitudin nisi nulla eget augue. Maecenas quis turpaliquet, porta lorem et, dictum purus. Curabitur vel congue diamamet condimentum metus. Donec feugiat.",
   },
   {
      id: 2,
      page: "home_5",
      img: testimonialIcon_2,
      name: "Donas julias",
      designation: "Customer,USA",
      desc: "Sollicitudin nisi nulla eget augue. Maecenas quis turpaliquet, porta lorem et, dictum purus. Curabitur vel congue diamamet condimentum metus. Donec feugiat.",
   },

   // inner_page

   {
      id: 1,
      page: "inner_page",
      img: testimonialIcon_3,
      name: "Karshin Kumar",
      designation: "Founder",
      desc: "Duis leo. Sed fringilla maurisamet nibh. odales sagittionsequat leo egetendum sodales augue nec atpellentesque semper",
   },
   {
      id: 2,
      page: "inner_page",
      img: testimonialIcon_3,
      name: "Necola Amar",
      designation: "HR",
      desc: "Duis leo. Sed fringilla maurisamet nibh. odales sagittionsequat leo egetendum sodales augue nec atpellentesque semper",
   },
   {
      id: 3,
      page: "inner_page",
      img: testimonialIcon_3,
      name: "Forgan Arit",
      designation: "Manager",
      desc: "Duis leo. Sed fringilla maurisamet nibh. odales sagittionsequat leo egetendum sodales augue nec atpellentesque semper",
   },
   {
      id: 4,
      page: "inner_page",
      img: testimonialIcon_3,
      name: "Wilton Fork",
      designation: "Co-Founder",
      desc: "Duis leo. Sed fringilla maurisamet nibh. odales sagittionsequat leo egetendum sodales augue nec atpellentesque semper",
   },
]

export default testimonial_data;