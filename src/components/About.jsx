import React from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import '../styles/About.css';
import about_img from '../assets/about.jpg';
import play_icon from '../assets/play-icon.png';
import Title from './Title';

const About = () => {
  return (
    <div className="about" id="about">
      <Grid container spacing={4} className='about-container'>
        <Grid item xs={12} md={5} className="about-left">
          <img src={about_img} alt="About" className="about-img" />
          {/* <img src={play_icon} alt="Play Icon" className="play-icon" /> */}
        </Grid>
        <Grid item xs={12} md={7} className="about-right" >
          <Typography variant="h3" component="h3" >
            ABOUT GDSC DLSU
          </Typography>
          <Typography variant="h6" component="h6">
            Learning, building, and growing together as tech pioneers
          </Typography>
          <Typography variant="body1" component="p">
          Google Developer Student Clubs De La Salle University, powered by Google Developers Student Clubs, is an undergraduate, student-led organization dedicated to fostering a strong community of driven and innovative thinkers amongst both DLSU and non-DLSU students interested in technology and growing as developers. Enhancing these students' professional and personal network in the technological "tech" industry whilst providing them access to Google developer resources in the process.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;