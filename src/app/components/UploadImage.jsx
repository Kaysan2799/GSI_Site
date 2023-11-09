'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Image from 'next/image';
import '../global.css'
const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = async () => {
    const inputElement = document.querySelector('input[type="file"]');
    const file = inputElement.files[0];

    if (file) {
      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setImageUrl(response.data.url); // Set the image URL to state
        setImage(response.data.url); // You can remove this line if not needed
      } catch (error) {
        console.error('Upload error:', error);
      }
    }
  };

  return (
    <div>
      <h1>Upload Image to Cloudinary</h1>
      <input type="file" accept="image/*" />
      <Button variant="contained" onClick={handleImageUpload}>Upload</Button>
      {imageUrl && (
        <div>
          <h2>Uploaded Image</h2>
          <Image src={imageUrl} alt="Uploaded" style={{ maxWidth: '300px' }} width={300} height={300} />
          <p>Image URL: {imageUrl}</p> {/* Display the image URL */}
        </div>
      )}
    </div>
    
  );
};

export default UploadImage;
