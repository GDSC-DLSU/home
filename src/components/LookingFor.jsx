import React from 'react';
import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import '../styles/About.css';
import { styled } from '@mui/system';
import about_img from '../assets/about.jpg';
import play_icon from '../assets/play-icon.png';
import Title from './Title';
import image1 from '../assets/LookingFor/IMG_5681.jpg';
import image2 from '../assets/LookingFor/IMG_5626.jpg';
import image3 from '../assets/LookingFor/IMG_5621.jpg';
import image4 from '../assets/LookingFor/IMG_5671.jpg';
import image5 from '../assets/LookingFor/IMG_8302.jpg';
import image6 from '../assets/LookingFor/IMG_5615.jpg';

const StyledBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    backgroundColor: '#f5f5f5',
  }));
  
  const StyledImage = styled('img')({
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  });
  
  const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    marginBottom: theme.spacing(2),
  }));

const LookingForMap = {
    "1" : {
        title: "Technology Enthusiasts",
        description: "We are looking for students who are passionate about technology and are eager to learn and grow as developers. We welcome students from all undergraduate or graduate programs with an interest in technology.",
        img: image1,
    },
    "2" : {
        title: "Committed to make things happen",
        description: "We are committed to bring about impact by working together and creatively thinking of ways to solve community problems in every step of the way.",
        img: image2,
    },
    "3" : {
        title: "Driven",
        description: "Whether you're top-notch at what you do or still figuring things out, we value people who are hungry to learn more.",
        img: image3,
    },
    "4" : {
        title: "Open to new experiences",
        description: "Asks \"what-ifs\" and willing to try it out and see what happens. After all, living a life full of wonder and a thirst for knowledge cultivates our skills.",
        img: image4,
    },
    "5" : {
        title: "Playful & Positive",
        description: "A little bit of playfulness can inspire creativity and improve work. We're not all work here—we also like to have fun!",
        img: image5,
    },
    "6" : {
        title: "Open to new things",
        description: "We're flexible with our committees. We believe that you can grow better if you're given enough freedom to explore the different facets of the org. Whether you want to pick design or developer work, you're always welcome to contribute to any project we're working on!",
        img: image6,
    },
}

const About = () => {
    return (
        <section className="looking-for" id="looking-for">
            <Title subTitle="What We're Looking For" title="Join Us" />
            <StyledBox>
                <Grid container spacing={4}>
                {Object.entries(LookingForMap).map(([key, value], index) => (
                    <React.Fragment key={key}>
                    {index % 2 === 0 ? (
                        <>
                        <Grid item xs={12} md={6}>
                            <StyledTypography variant="h4" component="h2" fontWeight="bold">
                            {value.title}
                            </StyledTypography>
                            <StyledTypography variant="body1">
                            {value.description}
                            </StyledTypography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <StyledImage src={value.img} alt={value.title} />
                        </Grid>
                        </>
                    ) : (
                        <>
                        <Grid item xs={12} md={6}>
                            <StyledImage src={value.img} alt={value.title} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <StyledTypography variant="h4" component="h2" fontWeight="bold">
                            {value.title}
                            </StyledTypography>
                            <StyledTypography variant="body1">
                            {value.description}
                            </StyledTypography>
                        </Grid>
                        </>
                    )}
                    </React.Fragment>
                ))}
                </Grid>
            </StyledBox>
        </section>
    );
  };
  
  export default About;