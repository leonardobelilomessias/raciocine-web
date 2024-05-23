import Link from "next/link"

interface DataType {
   icon: string;
   class_name: string;
   link?:string
}[];

const social_icon: DataType[] = [
   {
      icon: "fab fa-facebook-f",
      class_name: "facebook",
      link:"https://www.facebook.com/profile.php?id=61554327154649"
   },
   // {
   //    icon: "fab fa-twitter",
   //    class_name: "twitter"
   // },
   {
      icon: "fab fa-instagram",
      class_name: "instagram",
      link:"https://www.instagram.com/raciocinesoftware"
   },
   {
      icon: "fab fa-youtube",
      class_name: "youtube",
      link:"https://www.youtube.com/channel/UCMzeWJnftwbxYFTDekhRwzg"
   },
]

const SocialIcon = () => {
   return (
      <>
         {social_icon.map((icon, i) => (
            <li key={i}>
               <Link target="_blank" className={icon.class_name} href={icon.link as string} >
                  <i className={icon.icon}></i>
               </Link>
            </li>
         ))}
      </>
   )
}

export default SocialIcon
