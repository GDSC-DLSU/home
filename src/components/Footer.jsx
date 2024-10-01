
import React from 'react';
import { Box, Container, IconButton, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const socialMedia = [
    { icon: <EmailIcon />, url: 'gdscdlsu@gmail.com', label: 'Email' },
    { icon: <FacebookIcon />, url: 'https://www.facebook.com/GDSCDLSU', label: 'Facebook' },
    { icon: <InstagramIcon />, url: 'https://www.instagram.com/gdscdlsu', label: 'Instagram' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/company/gdscdlsu/', label: 'LinkedIn' },
    { icon: <GitHubIcon />, url: 'https://github.com/gdsc-dlsu', label: 'GitHub' },
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'background.paper', 
        py: 6,
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}
    >
        {/* Developed by Aebrahm Clyde P. Ramos and Mikhos Cedric Gumapos */}
        <Container maxWidth="lg">
            <Typography variant="h6" align="center" gutterBottom>
            Connect With Us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
            {socialMedia.map((item) => (
                <IconButton
                key={item.label}
                color="primary"
                aria-label={item.label}
                component="a"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                >
                {item.icon}
                </IconButton>
            ))}
            </Box>
            <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Your Google Developer Students Club - De La Salle University. All rights reserved.
            </Typography>
        </Container>
    </Box>
  );
};

export default Footer;