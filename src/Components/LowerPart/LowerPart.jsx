import React from "react";
import { PieChart } from "./PieChart";
import HiringBarChart from "./HiringBarChart";
import "./Lowerpart.css";
import ProjectStatus from "./ProjectStatus";
import CompanyTurnOver from "./CompanyTurnOver";
import RecruitmentGraph from "./RecruitmentGraph";

function LowerPart() {
  return (
    <>
      <div>LowerPart</div>
      <div className="charts-container">
        <PieChart />
        <HiringBarChart />
        <ProjectStatus />
      <RecruitmentGraph/>
        <CompanyTurnOver />
      </div>
    </>
  );
}

export default LowerPart;
