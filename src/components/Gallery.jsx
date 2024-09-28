import React from "react";
import { Button, Box } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Grid';
import image_1 from "../assets/devfest.jpg";
import image_2 from "../assets/frontier.jpg";
import image_3 from "../assets/xmas.jpg";
import image_4 from "../assets/gtron.jpg";

const Gallery = () => {
  const images = [
    { src: image_1, alt: "DevFest" },
    { src: image_2, alt: "Frontier" },
    { src: image_3, alt: "Christmas" },
    { src: image_4, alt: "G-Tron" }
  ];

  return (
    <Box className="gallery" id="gallery" sx={{ margin: "80px auto", width: "90%", textAlign: "center" }}>
      <Grid container spacing={2} sx={{ marginBottom: "40px" }}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                objectFit: "cover"
              }}
            />
          </Grid>
        ))}
      </Grid>
      {/* <Button
        variant="contained"
        color="primary"
        endIcon={<ArrowForwardIcon />}
        sx={{
          backgroundColor: "#212EA0",
          color: "white",
          "&:hover": {
            backgroundColor: "#1a237e"
          }
        }}
      >
        View More
      </Button> */}
    </Box>
  );
};

export default Gallery;