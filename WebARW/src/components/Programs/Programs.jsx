import React from "react";
import "./Programs.css";
import program_1 from "../../assets/workshop.jpg";
import program_2 from "../../assets/jobfests.jpg";
import program_3 from "../../assets/collab.jpg";
import program_1_icon from "../../assets/program-icon-1.png";
import program_2_icon from "../../assets/program-icon-3.png";
import program_3_icon from "../../assets/program-icon-2.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_1_icon} alt="" />
          <p>Workshops</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_2_icon} alt="" />
          <p>Job Fests</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_3_icon} alt="" />
          <p>Collaborations</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
