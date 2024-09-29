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
import Title from "./Title";

const programsData = [
  {
    img: program_1,
    icon: program_1_icon,
    title: "Workshops"
  },
  {
    img: program_2,
    icon: program_2_icon,
    title: "Dev Fests"
  },
  {
    img: program_3,
    icon: program_3_icon,
    title: "Collaborations"
  }
];

const Programs = () => {
  return (
    <Grid 
      container
      spacing={1}
      className="programs"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} id="programs">
        <Title subTitle="Programs" title="What We Do" />
      </Grid>
      {programsData.map((program, index) => (
        <Grid item xs={12} sm={6} md={4} className="program" key={index}>
          <img src={program.img} alt={`Program ${index + 1}`} />
          <div className="caption">
            <img src={program.icon} alt={`Program ${index + 1} Icon`} />
            <Typography variant="body1">{program.title}</Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Programs;