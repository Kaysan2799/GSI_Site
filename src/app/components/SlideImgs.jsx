"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useEffect, useState } from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



function SlideImgs() {

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getDonateCom1");
        const jsonData = await response.json();
        // console.log(jsonData);
        setData(jsonData);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const images = [
    {
      label: 'Image 1',
    },
    {
      label: 'Image 2',
    },
    {
      label: 'Image 3',
    },

  ];


  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{
      boxShadow: '5px 12px 10px rgba(0, 0, 0, 0.5)',
      height: { xs: 200, sm: 400, md: 450, lg: 600, xl: 700 },
      width: { xs: 172, sm: 353, md: 464, lg: 600, xl: 680 },
      '@media (max-width:320px)': { width: 140, height: 150 },
    }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  display: 'block',
                  overflow: 'hidden',
                  height: { xs: 200, sm: 400, md: 450, lg: 600, xl: 700 },
                  width: { xs: 172, sm: 353, md: 464, lg: 600, xl: 680 },
                  '@media (max-width:320px)': { width: 140, height: 150 },
                  '@media (max-width:400px)': { width: 174, },
                }}
                src={
                  index === 0
                    ? data.length > 0
                      ? data[0].img1
                      : ''
                    : index === 1
                      ? data.length > 0
                        ? data[0].img2
                        : ''
                      : index === 2
                        ? data.length > 0
                          ? data[0].img3
                          : ''
                        : ''
                }
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SlideImgs;