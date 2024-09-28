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
          <Typography variant="h2" component="h2">
            Learning, building, and growing together as tech pioneers
          </Typography>
          <Typography variant="body1" component="p">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Lacus dignissim enim congue nisl morbi, venenatis velit auctor. Morbi facilisi ipsum quam; torquent ligula consectetur. Luctus maximus vitae venenatis ornare; eget ultricies mollis. Netus eget tellus penatibus montes purus. Diam id accumsan; primis viverra at nostra.
          </Typography>
          <Typography variant="body1" component="p">
            Rutrum vestibulum in vivamus ullamcorper hac amet consequat; cras praesent. Suspendisse habitant sollicitudin pharetra morbi tellus volutpat suspendisse natoque. Proin libero amet nullam ad justo. Potenti tempus fames fringilla a, suscipit dignissim maecenas turpis. Fusce neque class, pulvinar convallis sed elementum. Fames ridiculus cras himenaeos penatibus mi magnis himenaeos duis luctus. Justo primis ac felis laoreet magna magna ligula rutrum sem. Odio proin dapibus neque; dapibus sagittis a venenatis.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;