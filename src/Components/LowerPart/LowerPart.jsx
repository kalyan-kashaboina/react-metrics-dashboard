import React from "react";
import { PieChart } from "./PieChart";
import CompanyGrowthBarChart from "./HiringBarChart";
import "./MainLowerPart.css";
import ProjectStatus from "./ProjectStatus";
import LineChart from "./LineChart";
import ProjectsPerYear from "./RecruitmentGraph";
import EmployeesWorking from "./EmployeesWorking";

function LowerPart() {
  return (
    <>
      <div className="charts-container">
        <div>
          <PieChart />
        </div>
        <div>
          <ProjectsPerYear />
        </div>
        <div>
          <LineChart />
        </div>
      </div>
      <div className="charts-container">
        <div>
          <ProjectStatus />
        </div>
        <div>
          <CompanyGrowthBarChart /> 
        </div>
        <div>
          <EmployeesWorking />
        </div>
      </div>
    </>
  );
}

export default LowerPart;
