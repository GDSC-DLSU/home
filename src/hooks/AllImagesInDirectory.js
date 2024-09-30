import { useState, useEffect } from 'react';

const useGalleryImages = (directoryPath = './assets/gallery') => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(directoryPath);
        const data = await response.json();
        const imageFiles = data.filter(item => /\.(png|jpe?g|svg)$/.test(item.name));
        setImages(imageFiles.map(item => item.url));
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    };

    fetchImages();
  }, [directoryPath]);

  return images;
};

export default useGalleryImages;