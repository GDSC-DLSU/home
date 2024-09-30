import React, { useEffect, useState } from "react";
import { Button, Box } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Grid';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import firebaseConfig from '../firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const listRef = ref(storage, 'gs://gdsc-arw.appspot.com/assets/gallery');
      const res = await listAll(listRef);
      const urls = await Promise.all(res.items.map(item => getDownloadURL(item)));
      const imageObjects = urls.map((url, index) => ({ src: url, alt: `Image ${index + 1}` }));
      setImages(imageObjects);
    };

    fetchImages();
  }, []);

  return (
    <Box className="gallery" id="gallery" sx={{ margin: "80px auto", width: "90%", textAlign: "center" }}>
      <Grid container spacing={2} sx={{ marginBottom: "40px" }}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
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