"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import inner_project_data from "@/data/InnerProjectData";
import mobile from '@/assets/img/portifolio/mobile.png'
import panun from '@/assets/img/portifolio/panun.png'
import law from '@/assets/img/portifolio/law.png'
import {Portfolio} from "./Portfolio"
const project_data = inner_project_data.filter((items) => items.page === "project_2");

const tab_titles: string[] = ["All Items", "Site Templates", "UI Templates", "UX Templates"];

const ProjectArea = () => {
   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   const getFilteredProjects = () => {
      switch (activeTab) {
         case 0:
            return project_data;
         case 1:
            return project_data.slice(0, 4);
         case 2:
            return project_data.slice(2, 5);
         case 3:
            return project_data.slice(1, 4);
         default:
            return [];
      }
   };

   const filteredProjects = getFilteredProjects();

   return (
      <section className="project-area pd-top-115 pd-bottom-90">
         <div >
            <div className="row justify-content-center">
               <div className="col-lg-8">
               <div className="isotope-filters project-isotope-btn text-center mb-5">
                     {tab_titles.map((tab, index) => (
                        <button key={index} onClick={() => handleTabClick(index)} className={`button ${activeTab === index ? "active" : ""}`}>
                           {tab}
                        </button>
                     ))}
                  </div>
               </div>
            </div>

            
            <div style={{ width:"100%", minHeight:"300px", display:"flex", flexWrap:"wrap",  padding:"8px", alignItems:"center", justifyContent:"center"}}>
            <Portfolio/>

            </div>
         </div>
      </section>
   )
}

export default ProjectArea
