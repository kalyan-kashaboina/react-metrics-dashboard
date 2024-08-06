import React from "react";
import { PieChart } from "./PieChart";
import HiringBarChart from "./HiringBarChart";
import "./Lowerpart.css";
import ProjectStatus from "./ProjectStatus";
import RecruitmentFunnel from "./RecruitmentFunnel.jsx";
import CompanyTurnOver from "./CompanyTurnOver";

function LowerPart() {
  return (
    <>
      <div>LowerPart</div>
      <div className="charts-container">
        <PieChart />
        <HiringBarChart />
        <ProjectStatus/>
        <RecruitmentFunnel/>
        <CompanyTurnOver/>
      </div>
    </>
  );
}

export default LowerPart;
