"use client"
import React, { useEffect, useState } from "react";
import { Grid, Typography, Stack, Button, Switch, FormGroup, FormControlLabel, Slider, Box, Select, MenuItem } from '@mui/material';
import Map from './Map';
import Piechart from "./Piechart";

const Detailsgrid = ({ onSiteDataChange }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getDetailsGrid");
        const jsonData = await response.json();
        setData(jsonData);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [center, setCenter] = useState({ lat: 33.645572, lng: 72.992945 });

  const [showOverlay, setShowOverlay] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedLocationData, setSelectedLocationData] = useState(null);
  const [sitedata, setsitedata] = useState(null);

  const handleToggleOverlay = () => {
    setShowOverlay(prevState => !prevState);
  };

  const handleImageChange = (event, newIndex) => {
    setImageIndex(newIndex);
  };

  // Array of polygons with their respective coordinates
  const polygons = [
    {
      paths: [

        { lat: 35.31161580844685, lng: 75.69191837518898 },
        { lat: 35.30952711640158, lng: 75.69274068719788 },
        { lat: 35.30977554321068, lng: 75.6940056999013 },
        { lat: 35.31189849849517, lng: 75.69324504819382 },
        { lat: 35.31161580844685, lng: 75.69191837518898 }

        // Add more vertices if needed for the first polygon
      ],
      fillColor: 'rgba(255, 0, 0, 0)',
      strokeColor: 'red',
      strokeWeight: 2,
      overlayImageUrls: [
        'https://res.cloudinary.com/serenaproject/image/upload/v1693565243/uploads/ranga1_kckiic.png', // Image URL 1 for the first polygon
        'https://res.cloudinary.com/serenaproject/image/upload/v1693565243/uploads/ranga2_olaszy.png', // Image URL 2 for the first polygon
        'https://res.cloudinary.com/serenaproject/image/upload/v1693565243/uploads/ranga3_wmshss.png',
      ],
      bounds: {
        north: 35.31189849849517,
        south: 35.30952711640158,
        east: 75.6940056999013,
        west: 75.69191837518898,// Replace with the appropriate longitude value
      },
    },
    {
      paths: [

        { lat: 35.42213782029728, lng: 75.48280025474878 },
        { lat: 35.42229686960889, lng: 75.48383587521634 },
        { lat: 35.42233892013586, lng: 75.48404075432492 },
        { lat: 35.42555792078709, lng: 75.48299642827381 },
        { lat: 35.42533058556609, lng: 75.48160712333599 },
        { lat: 35.42213782029728, lng: 75.48280025474878 }

        // Add more vertices if needed for the second polygon
      ],
      fillColor: 'rgba(0, 255, 0, 0)',
      strokeColor: 'red',
      strokeWeight: 2,

      overlayImageUrls: [
        'https://res.cloudinary.com/serenaproject/image/upload/v1693565243/uploads/Shut_Qumarah1_tfutf6.png',
        'https://res.cloudinary.com/serenaproject/image/upload/v1693565243/uploads/Shut_Qumarah2_kttadw.png',
        'https://res.cloudinary.com/serenaproject/image/upload/v1693565243/uploads/Shut_Qumarah3_avrcg4.png',
      ],

      bounds: {
        north: 35.42555792078709,
        south: 35.42213782029728,
        east: 75.48404075432492,
        west: 75.48160712333599
      }
      

    },
    // Add more polygons as needed
    {
      paths: [
        { lat: 35.34949081628213, lng: 75.80678589937823 },
        { lat: 35.34990122365742, lng: 75.80500770618502 },
        { lat: 35.35081787190993, lng: 75.80554035206902 },
        { lat: 35.35128390738536, lng: 75.80616775774133 },
        { lat: 35.35081888898763, lng: 75.8073821706122 },
        { lat: 35.35023902493798, lng: 75.80818100016984 },
        { lat: 35.34968849990607, lng: 75.80801359710267 },
        { lat: 35.34937940089865, lng: 75.80752881924907 },
        { lat: 35.34949081628213, lng: 75.80678589937823 }

      ],
      fillColor: 'rgba(0, 255, 0, 0)',
      strokeColor: 'red',
      strokeWeight: 2,
      overlayImageUrls: [
        'https://res.cloudinary.com/serenaproject/image/upload/v1693565243/uploads/Shuwapa_Nar1_vipzcd.png', // Image URL 1 for the first polygon
        'https://res.cloudinary.com/serenaproject/image/upload/v1693565243/uploads/Shuwapa_Nar2_joarje.png', // Image URL 2 for the first polygon
        'https://res.cloudinary.com/serenaproject/image/upload/v1693565243/uploads/Shuwapa_Nar3_er9afx.png',
      ],
      bounds: {
        north: 35.35128390738536, // Replace with the appropriate latitude value
        south: 35.34937940089865, // Replace with the appropriate latitude value
        east: 75.80818100016984,  // Replace with the appropriate longitude value
        west: 75.80500770618502,  // Replace with the appropriate longitude value
      },

    },
    
  ];


  const handleSelectLocationData = (locationName, locationlat, locationlag) => {
    // console.log(locationlag);
    const locationcoor = { lat: locationlat, lng: locationlag }
    const selectedData = data.find(location => location.site === locationName);
    setSelectedLocationData(selectedData);
    setCenter(locationcoor);
    setsitedata(selectedData);
    onSiteDataChange(selectedData);
  };

  // useEffect(() => {
  //   if (selectedLocationData) {
  //     setCenter(parseInt(selectedLocationData.coordinates, 10));
  //   }
  // }, [selectedLocationData]);

  return (
    <>
      <Grid container sx={{
        backgroundImage: 'linear-gradient(  #ECF8CD,  #083015)',
        padding: { xs: 1, sm: 2, md: 2, lg: '3%', xl: 6 },
        display: 'flex'
      }}>
        <Box style={{
          width: '100%',
          height: '100%',
          '@media (max-width:400px)': { height: '80%' },
          '@media (max-width:320px)': {},
          overflow: 'hidden', borderRadius: '30px',
          border: '1px solid black', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)', zindex: '0',
        }}>
          <Map centerCoordinates={center} polygons={polygons} showOverlay={showOverlay} imageIndex={imageIndex} />
        </Box>

        {/* site details box */}
        <Box elevation={2} sx={{
          border: '1px solid #A6A6A6',
          backgroundColor: 'white',
          // backgroundImage: 'linear-gradient(  #ECF8CD,  #083015)',
          float: 'right',
          position: "absolute",
          marginTop: "2%",
          borderRadius: '10px',
          height: 'auto',
          // color: 'white',
          width: { xs: 170, sm: 250, md: 280, lg: 285, xl: 320 },
          marginLeft: { xs: 1, sm: 59, md: 87, lg: 126, xl: 179 },
          marginTop: { xs: 7, sm: 1, md: 2, lg: 2, xl: 2 },
          '@media (max-width:400px)': { marginTop: 7, marginLeft: 1, },
          '@media (max-width:320px)': { marginTop: 7, marginLeft: 1, },
        }}>
          <Select
            value={selectedLocationData ? selectedLocationData.site : 'Ranga'}
            onChange={(event) => {
              const selectedSite = event.target.value;
              if (selectedSite === '') {
                setSelectedLocationData(location.site === null); // Clear the selected data
              } else {
                const selectedData = data.find(location => location.site === selectedSite);
                setSelectedLocationData(selectedData);
                // You may need to set the center coordinates as well based on your logic
              }
            }}
            sx={{
              width: '95%',
              margin: '10px',
              height: { xs: 30, sm: 40, md: 45, lg: 50, xl: 55 },
            }}>
            {data.map((location, index) => (
              <MenuItem key={index} value={location.site} onClick={() => handleSelectLocationData(location.site, location.lat, location.lng)}>
                <Typography sx={{
                  fontSize: { xs: 12, sm: 16, md: 18, lg: 20, xl: 20 },
                }}>
                  {location.site}</Typography>
              </MenuItem>
            ))}
          </Select>

          {/* hide or show Overlay */}
          <FormGroup sx={{
            padding: { xs: 1, sm: 2, md: 2, lg: 2, xl: 2 },
            paddingTop: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 },
            paddingBottom: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 },
          }}>
            <FormControlLabel sx={{
              '@media (max-width:400px)': { fontSize: 10 },
              '@media (max-width:320px)': { fontSize: 10 },
            }}
              control={<Switch onChange={handleToggleOverlay} />} label={showOverlay ? 'Hide Overlay' : 'Show Overlay'} />
          </FormGroup>

          {/* Toggle images Slider */}
          <div style={{
            marginTop: '15px',
            marginLeft: '10px',
            '@media (max-width:400px)': { marginTop: 1, marginLeft: 22, },
            '@media (max-width:320px)': { marginTop: 1, marginLeft: 1, },
          }} >
            <Typography>Toggle Image:</Typography>
            <Slider
              sx={{
                width: { xs: 130, sm: 190, md: 220, lg: 220, xl: 230 },
                marginLeft: { xs: 1.5, sm: 2, md: 2, lg: 2, xl: 2 },
                color:'green'
              }}
              value={imageIndex}
              onChange={handleImageChange}
              max={2}
              step={1}
              
              marks={[
                { value: 0, label: '2000', style: { color: 'white' }},
                { value: 1, label: '2010', style: { color: 'white' } },
                { value: 2, label: '2020', style: { color: 'white' } }]}
            />
          </div>

          {/* Map site details information */}
          {/* <Select sx={{ width: '95%', margin: '10px',
            // height: { xs: 30, sm: 40, md: 45, lg: 50, xl: 55 },
            // fontSize: { xs: 20, sm: 20, md: 23, lg: 24, xl: 25 },
            // color: 'black'
          }}
            label='Information'
            value='Information'
          > */}
            <Box sx={{ position: 'relative', padding: '5%' }}>
              <Typography sx={{
                width: '100%',
                fontSize: { xs: 20, sm: 20, md: 23, lg: 24, xl: 25 },
              }}>
                INFORMATION
              </Typography>

              <Stack sx={{
                fontSize: { xs: 10, sm: 12, md: 12, lg: 15, xl: 15 },
              }}>
                <Stack direction='row' sx={{
                  width: '100%', justifyContent: 'space-between',

                }}>
                  <Typography variant="subtitle1" fontWeight='bold' sx={{
                    fontSize: { xs: 10, sm: 14, md: 12, lg: 14, xl: 15 },
                  }}>Site:</Typography>
                  <Typography variant="body1" sx={{
                    fontSize: { xs: 10, sm: 12, md: 12, lg: 14, xl: 15 },
                  }}>
                    {selectedLocationData ? selectedLocationData.site : 'Ranga'}
                  </Typography>
                </Stack>

                <Stack direction='row' sx={{ width: '100%', justifyContent: 'space-between' }}>
                  <Typography variant="subtitle1" fontWeight='bold' sx={{
                    fontSize: { xs: 10, sm: 14, md: 12, lg: 14, xl: 15 },
                  }}>District:</Typography>
                  <Typography variant="body1" sx={{
                    fontSize: { xs: 10, sm: 12, md: 12, lg: 14, xl: 15 },
                  }}>
                    {selectedLocationData ? selectedLocationData.distric : 'Skardu'}
                  </Typography>
                </Stack>

                <Stack direction='row' sx={{ width: '100%', justifyContent: 'space-between' }}>
                  <Typography variant="subtitle1" fontWeight='bold' sx={{
                    fontSize: { xs: 10, sm: 14, md: 12, lg: 14, xl: 15 },
                  }}>Area:</Typography>
                  <Typography variant="body1" sx={{
                    fontSize: { xs: 10, sm: 12, md: 12, lg: 14, xl: 15 },
                  }}>
                    {selectedLocationData ? selectedLocationData.area : '13.5 Acres'}
                  </Typography>
                </Stack>

                <Stack direction='row' sx={{ width: '100%', justifyContent: 'space-between' }}>
                  <Typography variant="subtitle1" fontWeight='bold' sx={{
                    fontSize: { xs: 10, sm: 14, md: 12, lg: 14, xl: 15 },
                  }}>Coordinates:</Typography>
                  <Typography variant="body1" sx={{
                    fontSize: { xs: 10, sm: 12, md: 12, lg: 12, xl: 15 },
                  }}>
                    {selectedLocationData ? selectedLocationData.lat + ",   " + selectedLocationData.lng : '35.31161, 75.69191'}
                  </Typography>
                </Stack>

                <Stack direction='row' sx={{ width: '100%', justifyContent: 'space-between' }}>
                  <Typography variant="subtitle1" fontWeight='bold' sx={{
                    fontSize: { xs: 10, sm: 14, md: 12, lg: 14, xl: 15 },
                  }}>No. of Plants:</Typography>
                  <Typography variant="body1" sx={{
                    fontSize: { xs: 10, sm: 14, md: 12, lg: 14, xl: 15 },
                  }}>
                    {selectedLocationData ? selectedLocationData.noofplant : '5000'}
                  </Typography>
                </Stack>

                <Stack direction='row' sx={{ width: '100%', justifyContent: 'space-between' }}>
                  <Typography variant="subtitle1" fontWeight='bold' sx={{
                    fontSize: { xs: 10, sm: 14, md: 12, lg: 14, xl: 15 },
                  }}>Carbon Sequestration: </Typography>
                  <Typography variant="body1" sx={{
                    fontSize: { xs: 10, sm: 14, md: 12, lg: 14, xl: 15 },
                  }}>
                    {selectedLocationData ? selectedLocationData.carbonsequestration : 'decrease'}
                  </Typography>
                </Stack>

                <Stack direction='row' sx={{ width: '100%', justifyContent: 'space-between' }}>
                  <Typography variant="subtitle1" fontWeight='bold' sx={{
                    fontSize: { xs: 10, sm: 14, md: 12, lg: 14, xl: 15 },
                  }}>Air Quality: </Typography>
                  <Typography variant="body1" sx={{
                    fontSize: { xs: 10, sm: 14, md: 12, lg: 14, xl: 15 },
                  }}>
                    {selectedLocationData ? selectedLocationData.airquality : 'increase'}
                  </Typography>
                </Stack>

                <Stack direction='row' sx={{ width: '100%', justifyContent: 'space-between' }}>
                  <Typography variant="subtitle1" fontWeight='bold' sx={{
                    fontSize: { xs: 10, sm: 14, md: 12, lg: 14, xl: 15 },
                  }}>Soil Protection:</Typography>
                  <Typography variant="body1" sx={{
                    fontSize: { xs: 10, sm: 14, md: 12, lg: 14, xl: 15 },
                  }}>
                    {selectedLocationData ? selectedLocationData.soilprotection : 'increase'}
                  </Typography>
                </Stack>

                <Stack direction='row' sx={{ width: '100%', justifyContent: 'space-between' }}>
                  <Typography variant="subtitle1" fontWeight='bold' sx={{
                    fontSize: { xs: 10, sm: 14, md: 12, lg: 14, xl: 15 },
                  }}>Economic Benefits:</Typography>
                  <Typography variant="body1" sx={{
                    fontSize: { xs: 10, sm: 14, md: 12, lg: 14, xl: 15 },
                  }}>
                    {selectedLocationData ? selectedLocationData.economicbenefits : 'increase'}
                  </Typography>
                </Stack>

              </Stack>
              
            </Box>
          {/* </Select> */}
        </Box>

        {/* piechart box */}
        <Box
          sx={{
            border: '1px solid #A6A6A6',
            backgroundColor: 'rgb(255, 255, 255, 1)',
            position: "absolute",
            marginTop: "2%",
            borderRadius: '10px',
            width: { xs: 171, sm: 185, md: 250, lg: 285, xl: 290 },
            height: { xs: 180, sm: 185, md: 250, lg: 285, xl: 290 },
            marginLeft: { xs: 1, sm: 2, md: 3, lg: 3, xl: 3 },
            marginTop: { xs: 74, sm: 72, md: 64, lg: 59, xl: 58 },
            '@media (max-width:400px)': { marginTop: 7, marginLeft: 23, width: 170, height: 178 },
            '@media (max-width:320px)': { marginTop: 7, marginLeft: 22.6, width: 115, height: 125 },
          }}
        >
          <Piechart selectedSiteData={sitedata} />
        </Box>

      </Grid>
    </>
  );
};

export default Detailsgrid;
