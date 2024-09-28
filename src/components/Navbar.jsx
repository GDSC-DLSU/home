import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/GDSCLogoSquare.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Program', id: 'programs' },
    { label: 'About us', id: 'about' },
    { label: 'Executive Board', id: 'eb' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsDrawerOpen(false);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const drawerContent = (
    <List>
      {navItems.map((item) => (
        <ListItem button key={item.id} onClick={() => scrollToSection(item.id)}>
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
      <ListItem button onClick={() => scrollToSection('reg-form')}>
        <Button variant="contained" className="contact-button">
          Join us
        </Button>
      </ListItem>
    </List>
  );

  return (
    <AppBar 
      position="fixed" 
      color="default" 
      elevation={isScrolled ? 4 : 0}
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
    >
      <Toolbar>
        <Typography variant="h6" component="div" className="logo">
          <img src={Logo} alt="GDSC Logo" />
        </Typography>
        <div style={{ flexGrow: 1 }} />
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              className="menu-button"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <div className="nav-items">
            {navItems.map((item) => (
              <Button 
                key={item.id} 
                color="inherit" 
                onClick={() => scrollToSection(item.id)}
                className="nav-item"
              >
                {item.label}
              </Button>
            ))}
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={() => scrollToSection('reg-form')}
              className="join-button"
            >
              Join us
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;