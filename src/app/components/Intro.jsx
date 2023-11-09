/* eslint-disable @next/next/no-img-element */

"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Box, Grid, Paper, Typography, Image } from "@mui/material";

export default function Intro() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/getintro");
                const jsonData = await response.json();
                // console.log(jsonData);
                setData(jsonData);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box
            sx={{
                width: '100%',
                // height: '900px',
                backgroundImage: 'linear-gradient(  #083015,  #bac64df1)',
                marginTop: '-5px',
                paddingBottom:{xs: 1, sm: 2, md: 3, lg: 4, xl: 5},
            }}
        >
            <Grid container p={2} sx={{ width: '98%', height: '' }}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} sx={{ backgroundColor: '' }}>
                    <Box sx={{
                        // paddingLeft: '10%', marginLeft: '5%', paddingTop: '10%', paddingRight: '5%'
                    }} elevation={0}>
                        <Typography sx={{
                            width: '50%', color: 'white', lineHeight: '1',
                            // '@media (max-width:400px)': { width: '60%' },
                            fontSize: { xs: 17, sm: 40, md: 60, lg: 90, xl: 110 },
                            paddingTop: { xs: 2, sm: 6, md: 7, lg: 9, xl: 10 },
                            paddingLeft: { xs: 2, sm: 6, md: 7, lg: 9, xl: 10 },
                            '@media (max-width:320px)': { marginRight: 0,  paddingLeft: 1 },
                        }}>
                            {data.length > 0 ? data[0].mainheading : 'loading'}
                        </Typography>

                        <Typography
                            sx={{
                                color: 'white', marginTop: '8%',
                                fontSize: { xs: 10, sm: 25, md: 50, lg: 60, xl: 70 },
                                paddingLeft: { xs: 2, sm: 6, md: 7, lg: 9, xl: 10 },
                                '@media (max-width:320px)': { marginRight: 0, fontSize: 9, paddingLeft: 1 },
                            }}
                        >
                            {data.length > 0 ? data[0].subheading : 'loading'}
                        </Typography>

                        <Typography sx={{
                            color: 'white',
                            fontSize: { xs: 5, sm: 9, md: 13, lg: 15, xl: 20 },
                            paddingLeft: { xs: 2, sm: 6, md: 7, lg: 9, xl: 10 },
                            marginRight: { xs: 3, sm: 6, md: 7, lg: 9, xl: 10 },
                            '@media (max-width:320px)': { marginRight: 1, fontSize: 4, paddingLeft: 1 },
                            // '@media (max-width:320-400px)': { marginRight: 2, fontSize: 5, paddingLeft: 1 },
                        }}>
                            {data.length > 0 ? data[0].para : 'loading'}
                        </Typography>
                    </Box>

                </Grid>

                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} elevation={0} sx={{ backgroundColor: "" }}>
                    {/* <Box style={{ display: 'flex', position: 'relative', marginTop: '15%' }}>
                        <Box sx={{ position: 'absolute', top: 0, left: 0, zIndex: 1, }}>
                            <img
                                alt=""
                                src={data.length > 0 ? data[0].img1 : ""}
                                // width={'400'}
                                // height={'400'}
                                style={{
                                    borderRadius: '7%', marginTop: '8%', marginLeft: '5%',
                                    boxShadow: '12px 12px 10px rgba(0, 0, 0, 0.5)',
                                    width: { xs: 25, sm: 30, md: 35, lg: 40, xl: 45 }
                                }}
                            />
                        </Box>
                        <Box sx={{
                            position: 'relative', zIndex: 2,
                            marginTop: '30%', marginLeft: '30%', float: 'right',
                        }}>
                            <img
                                alt=""
                                src={data.length > 0 ? data[0].img2 : ""}
                                // width={'400'}
                                // height={'400'}
                                style={{
                                    borderRadius: '7%',
                                    boxShadow: '12px 12px 10px rgba(0, 0, 0, 0.5)',
                                    width: { xs: 25, sm: 30, md: 35, lg: 40, xl: 45 },
                                }}
                            />
                        </Box>
                    </Box> */}

                    <Box style={{ display: 'flex', position: 'relative', marginTop: '15%' }}>
                        <Box sx={{
                            position: 'absolute', top: 0, left: 0, zIndex: 1,
                            '@media (max-width:600px)': {
                                maxWidth: '60%', // Adjust the maximum width for extra-small screens (xs)
                            },
                            '@media (min-width:600px)': {
                                maxWidth: '50%', // Adjust the maximum width for small screens (sm)
                            },
                            '@media (min-width:960px)': {
                                maxWidth: '55%', // Adjust the maximum width for medium screens (md)
                            },
                            '@media (min-width:1280px)': {
                                maxWidth: '60%', // Adjust the maximum width for large screens (lg)
                            },
                            '@media (min-width:1920px)': {
                                maxWidth: '75%', // Adjust the maximum width for extra-large screens (xl)
                            },
                        }}>
                            <img
                                alt=""
                                src={data.length > 0 ? data[0].img1 : ""}
                                style={{
                                    borderRadius: '7%',
                                    marginLeft: '7%',
                                    boxShadow: '12px 12px 10px rgba(0, 0, 0, 0.5)',
                                    width: '100%',
                                    maxWidth: '100%', // Maximum width for images
                                }}

                            />
                        </Box>
                        <Box
                            sx={{
                                position: 'relative', zIndex: 2, marginTop: '30%', marginLeft: '30%', float: 'right',
                                '@media (max-width:600px)': {
                                    maxWidth: '60%', // Adjust the maximum width for extra-small screens (xs)
                                },
                                '@media (min-width:600px)': {
                                    maxWidth: '50%', // Adjust the maximum width for small screens (sm)

                                },
                                '@media (min-width:960px)': {
                                    maxWidth: '55%', // Adjust the maximum width for medium screens (md)
                                },
                                '@media (min-width:1280px)': {
                                    maxWidth: '60%', // Adjust the maximum width for large screens (lg)
                                },
                                '@media (min-width:1920px)': {
                                    maxWidth: '75%', // Adjust the maximum width for extra-large screens (xl)
                                },
                            }}
                        >
                            <img
                                alt=""
                                src={data.length > 0 ? data[0].img2 : ""}
                                style={{
                                    borderRadius: '7%', marginLeft: '5%', width: '100%', maxWidth: '100%',
                                    boxShadow: '12px 12px 10px rgba(0, 0, 0, 0.5)',
                                }}

                            />
                        </Box>
                    </Box>

                </Grid>
            </Grid>

        </Box>
    )
}