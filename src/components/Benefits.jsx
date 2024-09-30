import React, { useEffect, useState } from "react";
import Title from "./Title";
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import "../styles/Benefits.css";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const fileNameTextMap = {
    "benefit 1.jpg": "Priority access to our events and opportunities",
    "benefit 2.jpg": "Gain technical experience from being immersed with different projects while building impactful solutions for the community",
    "benefit 3.jpg": "Work with students who are passionate about building for social good",
    "benefit 4.jpg": "Access resources and materials curated by students who are actively exploring the field",
    "benefit 5.jpg": "Gain a network of student developers from across various countries",
    "benefit 6.jpg": "Be part of our giveaways for our quiz and challenges!",
};

const Benefits = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const listRef = ref(storage, 'gs://gdsc-arw.appspot.com/assets/benefits');
            const res = await listAll(listRef);
            const urls = await Promise.all(res.items.map(item => getDownloadURL(item)));
            const imageObjects = res.items.map((item, index) => ({
                src: urls[index],
                alt: item.name
            }));
            setImages(imageObjects);
        };

        fetchImages();
    }, []);

    return (
        <Box className="benefits" id="benefits" sx={{ margin: "80px auto", width: "90%", textAlign: "center" }}>
            <Title subTitle="Benefits" title="Why Join Us" />
            <Grid container spacing={0} sx={{ marginBottom: "40px" }} >
                {images.map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} sx={{padding: "5%"}}>
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
                        <p>{fileNameTextMap[image.alt]}</p> 
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Benefits;