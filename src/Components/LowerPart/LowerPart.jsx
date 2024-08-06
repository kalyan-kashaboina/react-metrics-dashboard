import React from "react";
import { PieChart } from "./PieChart";
import HiringBarChart from "./HiringBarChart";
import "./Lowerpart.css";
import ProjectStatus from "./ProjectStatus";

function LowerPart() {
  return (
    <>
      <div>LowerPart</div>
      <div className="charts-container">
        <PieChart />
        <HiringBarChart />
        <ProjectStatus/>
      </div>
    </>
  );
}

export default LowerPart;
