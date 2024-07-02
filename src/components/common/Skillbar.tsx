import Progress from "@/components/common/Progress";

interface DataType {
   title: string;
   percentage: number;
}[];

const skill_data: DataType[] = [
   {
      title: "Site Profissional e Lojas Virtuais",
      percentage: 72,
   },
   {
      title: "Anúncios e Trafego Pago",
      percentage: 85,
   },
   {
      title: "Seo e Rankeamento no Google",
      percentage: 64,
   },
   {
      title: "Social Media",
      percentage: 70,
   },
]

const Skillbar = () => {
   return (
      <>
         {skill_data.map((item, i) => (
            <div key={i} className="single-progressbar">
               <h6>{item.title}</h6>
               <div className="progress-item" id="progress-running">
                  <Progress finish={item.percentage} />
               </div>
            </div>
         ))}
      </>
   )
}

export default Skillbar;
