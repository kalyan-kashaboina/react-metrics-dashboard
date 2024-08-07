import React from "react";
import { PieChart } from "./PieChart";
import CompanyGrowthBarChart from "./HiringBarChart";
// import "./MainLowerPart.css";
import ProjectStatus from "./ProjectStatus";
import LineChart from "./LineChart";
import ProjectsPerYear from "./RecruitmentGraph";

function LowerPart() {
  return (
    <>
      <div className="charts-container" style={{ display: "flex" }}>
        {/* <div className="each-graph"> */}
        <PieChart />
        {/* </div> */}
        {/* <div className="each-graph"> */}
        <ProjectStatus />
        {/* </div> */}
        {/* <div className="each-graph"> */}
        <CompanyGrowthBarChart />
      </div>
      <div className="charts-container" style={{ display: "flex" }}>
        <div className="each-graph bar">
        <ProjectsPerYear />
        </div>
        <div className="each-graph line" style={{ marginTop: "70px" }}>
        <LineChart />
        </div>
      </div>
    </>
  );
}

export default LowerPart;
