import React from "react";
import "../styles/Programs.css";
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import program_1 from "../assets/workshop.jpg";
import program_2 from "../assets/jobfests.jpg";
import program_3 from "../assets/collab.jpg";
import program_1_icon from "../assets/program-icon-1.png";
import program_2_icon from "../assets/program-icon-3.png";
import program_3_icon from "../assets/program-icon-2.png";

const Programs = () => {
  return (
    <Grid container spacing={2} className="programs">
      <Grid item xs={12} sm={6} md={4} className="program">
        <img src={program_1} alt="Program 1" />
        <div className="caption">
          <img src={program_1_icon} alt="Program 1 Icon" />
          <Typography variant="body1">Workshops</Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} className="program">
        <img src={program_2} alt="Program 2" />
        <div className="caption">
          <img src={program_2_icon} alt="Program 2 Icon" />
          <Typography variant="body1">Job Fests</Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} className="program">
        <img src={program_3} alt="Program 3" />
        <div className="caption">
          <img src={program_3_icon} alt="Program 3 Icon" />
          <Typography variant="body1">Collaborations</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default Programs;
