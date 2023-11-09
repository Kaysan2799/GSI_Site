"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import styled from 'styled-components';

import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";

export default function Footer() {

    const ResponsiveInput = styled.input`
    width: 300px; /* Default width */
    height: 40px; /* Default height */
    border-radius: 8px;
    
    @media (max-width: 600px) {
      width: 100%; /* Adjust the width for extra-small screens (xs) */
      height: 20px; /* You can adjust the height if needed */
    }
  
    @media (min-width: 600px) and (max-width: 959px) {
      width: 80%; /* Adjust the width for small screens (sm) */
      height: 30px; /* You can adjust the height if needed */
    }
  
    @media (min-width: 960px) and (max-width: 1279px) {
      width: 60%; /* Adjust the width for medium screens (md) */
      height: 30px; /* You can adjust the height if needed */
    }
  
    @media (min-width: 1280px) and (max-width: 1919px) {
      width: 60%; /* Adjust the width for large screens (lg) */
      height: 30px; /* You can adjust the height if needed */
    }

    @media (min-width: 1480px) and (max-width: 1919px) {
        width: 50%; /* Adjust the width for large screens (lg) */
        height: 30px; /* You can adjust the height if needed */
      }
  
    @media (min-width: 1920px) {
      width: 50%; /* Adjust the width for extra-large screens (xl) */
      height: 30px; /* You can adjust the height if needed */
    }
    
    @media (max-width: 400px) {
        width: 100%; /* Adjust the width for extra-small screens (xs) */
        height: 20px; /* You can adjust the height if needed */
    }

    @media (max-width: 321px) {
        width: 100%; /* Adjust the width for extra-small screens (xs) */
        height: 14px; /* You can adjust the height if needed */
    }
  `;

    return (
        <>

            <Grid container sx={{
                background: "#083015",
                // backgroundColor: 'red',
                height: { xs: 'auto', sm: 'auto', md: 'auto', lg: 400, xl: 400 },
                '@media (max-width:400px)': { width: '100%' },
                '@media (max-width:320px)': { width: '100%' },
                width: "100%",
            }} p={2}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
                    <Stack direction="column" spacing={1} p={1}
                        sx={{
                            marginTop: { xs: 2, sm: 4, md: 5, lg: 7, xl: 7 },
                            paddingLeft: { xs: 1, sm: 6, md: 12, lg: 14, xl: 14 },
                            '@media (max-width:400px)': { width: '100%', marginTop: 0, paddingLeft: 0, },
                            '@media (max-width:320px)': { width: '100%', marginTop: 0, paddingLeft: 0, },
                            // backgroundColor: 'red',
                        }}
                    >
                        <Stack direction="column" spacing={1} color="white" p={1} >
                            <Typography
                                sx={{
                                    fontSize: { xs: 14, sm: 18, md: 24, lg: 30, xl: 30 },
                                    '@media (max-width:400px)': { fontSize: 12 },
                                    '@media (max-width:320px)': { fontSize: 12 },
                                }}>ABOUT US</Typography>
                            <Divider sx={{
                                width: "60px",
                                paddingTop: "1px",
                                backgroundColor: "white"
                            }} />
                            <Typography sx={{
                                fontSize: { xs: 9, sm: 11, md: 13, lg: 17, xl: 18 },
                                '@media (max-width:400px)': { fontSize: 8 },
                                '@media (max-width:320px)': { fontSize: 7 },
                            }}>Dolore sunt commodo et esse laboris sunt qui. Aliquip consequat aliquip
                                cillum pariatur. Dolor qui duis enim et ea labore elit nisi. Id labore aliquip minim officia.
                                Reprehenderit duis id cupidatat ipsum commodo cillum amet qui nostrud quis fugiat mollit quis
                                non. Enim ut anim aliqua consectetur do cillum. Ullamco minim cillum reprehenderit proident
                                consectetur commodo et. Labore do adipisicing est ad.
                            </Typography>
                        </Stack>

                    </Stack>

                </Grid>

                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} sx={{
                    paddingLeft: { xs: 1, sm: 4, md: 9, lg: 16, xl: 22 },
                    '@media (max-width:400px)': { paddingLeft: 0, paddingTop: 0 },
                    '@media (max-width:320px)': { paddingLeft: 0, paddingTop: 0 },
                    paddingTop: '3%',
                    // backgroundColor: 'blue',
                }}
                >
                    <Stack direction="column" spacing={1} p={1} >
                        <Stack direction="column" spacing={1} color="white" p={1} >
                            <Typography sx={{
                                fontSize: { xs: 14, sm: 16, md: 20, lg: 20, xl: 20 },
                                '@media (max-width:400px)': { fontSize: 10 },
                                '@media (max-width:320px)': { fontSize: 10 },
                            }}>SIGNUP FOR NEWSLETTER</Typography>
                            <Divider sx={{
                                width: "60px",
                                paddingTop: "1px",
                                backgroundColor: "white"
                            }} />

                        </Stack>
                        <Stack direction="column" color="white" spacing={1} p={1} sx={{}}>
                            <div>

                                <Typography sx={{
                                    color: '#e4e4e4',
                                    marginBottom: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 },
                                    fontSize: { xs: 10, sm: 13, md: 14, lg: 20, xl: 20 },
                                    '@media (max-width:400px)': { marginBottom: 0.5, fontSize: 9, },
                                    '@media (max-width:320px)': { marginBottom: 0.5, fontSize: 9, },
                                }}>
                                    Email address
                                </Typography>

                                <ResponsiveInput
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                // style={{
                                //     width: '300px', // Default width
                                //     height: '30px', // Default height
                                //     borderRadius: '8px',
                                //     '@media (max-width:600px)': {
                                //         width: '100%', // Adjust the width for extra-small screens (xs)
                                //         height: '40px', // You can adjust the height if needed
                                //     },
                                //     '@media (min-width:600px) and (max-width:959px)': {
                                //         width: '200px', // Adjust the width for small screens (sm)
                                //         height: '40px', // You can adjust the height if needed
                                //     },
                                //     '@media (min-width:960px) and (max-width:1279px)': {
                                //         width: '100%', // Adjust the width for medium screens (md)
                                //         height: '40px', // You can adjust the height if needed
                                //     },
                                //     '@media (min-width:1280px) and (max-width:1919px)': {
                                //         width: '100%', // Adjust the width for large screens (lg)
                                //         height: '100px', // You can adjust the height if needed
                                //     },
                                //     '@media (min-width:1920px)': {
                                //         width: '100%', // Adjust the width for extra-large screens (xl)
                                //         height: '40px', // You can adjust the height if needed
                                //     },
                                // }}
                                />

                            </div>
                            <Button sx={{
                                backgroundColor: '#ECF8CD',
                                color: 'black',
                                fontWeight:'bold',
                                width: { xs: 15, sm: 13, md: 86, lg: 100, xl: 110 },
                                height: { xs: 22, sm: 25, md: 29, lg: 39, xl: 40 },
                                fontSize: { xs: 9, sm: 10, md: 14, lg: 17, xl: 19 },
                                '@media (max-width:400px)': {width: 10 , height: 21, fontSize: 9 },
                                '@media (max-width:320px)': {width: 10 , height: 20, fontSize: 9 },
                            }}>sign up</Button>
                        </Stack>

                        <Stack direction='row' color="white" spacing={3} p={1} >
                            <FaInstagram />
                            <FaFacebook />
                            <FaTwitter />
                            <FaPinterest />
                        </Stack>

                    </Stack>
                </Grid>
            </Grid>
        </>);

}