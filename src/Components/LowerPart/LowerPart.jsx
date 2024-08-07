import React from "react";
import { PieChart } from "./PieChart";
import CompanyGrowthBarChart from "./HiringBarChart";
import "./Lowerpart.css";
import ProjectStatus from "./ProjectStatus";
import LineChart from "./LineChart";
import ProjectsPerYear from "./RecruitmentGraph";


function LowerPart() {
  return (
    <>

      <div className="charts-container">
        <PieChart />
        <ProjectStatus />
        <CompanyGrowthBarChart />
        <LineChart/>
        <ProjectsPerYear/>
     
        </div>


    </>
  );
}

export default LowerPart;
