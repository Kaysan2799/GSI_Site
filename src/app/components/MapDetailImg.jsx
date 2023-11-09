"use client"
import * as React from 'react';
import { useEffect, useState } from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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

function MapDetailImg() {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/getSiteDetails");
                const jsonData = await response.json();
                // console.log(jsonData);
                setData(jsonData);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{
            maxHeight: { xs: 172, sm: 250, md: 300, lg: 380, xl: 400 },
            maxWidth: { xs: 172, sm: 250, md: 350, lg: 380, xl: 400 },
            '@media (max-width:400px)': { height: 170, width: 160, marginLeft: 1, marginTop: 1, boxShadow: '6px 6px 8px rgba(0, 0, 0, 0.5)', },
            '@media (max-width:320px)': { height: 150, width: 150, marginLeft: 0, marginTop: 1, boxShadow: '6px 6px 8px rgba(0, 0, 0, 0.5)', },
            flexGrow: 1, boxShadow: '12px 12px 10px rgba(0, 0, 0, 0.5)', borderRadius: '10px',
            marginLeft: { xs: 0, sm: 4, md: 5, lg: 5, xl: 20 },
            marginTop: { xs: 3, sm: 3, md: 4, lg: 4, xl: 4 },
            borderRadius: '40px',
            // backgroundColor: 'red',
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
                                    // backgroundColor: 'red',
                                    display: 'block',
                                    // maxWidth: '400px',
                                    overflow: 'hidden',
                                    height: { xs: 172, sm: 250, md: 320, lg: 380, xl: 400 },
                                    width: { xs: 172, sm: 250, md: 350, lg: 380, xl: 400 },
                                    '@media (max-width:400px)': { height: 170, width: 160 },
                                    '@media (max-width:320px)': { height: 150, width: 150 },
                                    borderRadius: '40px',
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
            <MobileStepper
                style={{ backgroundColor: 'rgb(0,0,0,0)' }}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >

                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}

                    </Button>
                }
            />
        </Box>
    );
}

export default MapDetailImg;