import React from "react";
import { PieChart } from "./PieChart";
import CompanyGrowthBarChart from "./HiringBarChart";
import "./MainLowerPart.css";
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
      </div>
      <div className="charts-container lower-Charts">
        <div >
          <ProjectsPerYear />
        </div>
        <div>
          <LineChart />
        </div>
      </div>
    </>
  );
}

export default LowerPart;
