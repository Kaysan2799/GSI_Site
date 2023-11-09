/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react'
import { AppBar, Toolbar, Grid, Typography, Stack, Button } from '@mui/material';
import Image from 'next/image';

const Navbar = () => {


  return (
    <>
      {/* rgb(255, 255, 255) */}
      <AppBar sx={{
        background: "rgb(255, 255, 255)", paddingTop: { s: "0px", sm: "0px" },
        height: {
          xs: 50, //0
          sm: 60, //600
          md: 70, //900
          lg: 70, //1200
          xl: 74, //1536
        }, width: '100%',
      }} elevation={0} >
        <Toolbar>
          <Grid container sx={{
            paddingTop: { xs: 0.5, sm: 1, md: 2, lg: 2, xl: 3 },
            paddingBottom: { xs: 0.5, sm: 1, md: 2, lg: 2, xl: 3 },
          }}>

            <Grid item sx={{ backgroundColor: "", }}
              lg={1} >
              <Stack sx={{
                paddingLeft: "10px",
                width: { xs: 25, sm: 30, md: 35, lg: 40, xl: 45 }
              }}>
                <img id="pic"
                  src='https://res.cloudinary.com/serenaproject/image/upload/v1692096099/uploads/serena_logo.png'
                  alt="image" />
              </Stack>
            </Grid>

            <Grid item sx={{ backgroundColor: "" }} lg={7} xl={7} sm={7} xs={7} textAlign="center" >
              <Typography sx={{
                fontSize: {
                  xs: 13, //0
                  sm: 20, //600
                  md: 25, //900
                  lg: 30, //1200
                  xl: 40, //1536
                },
                paddingLeft: { xs: 1, sm: 1, md: 20, lg: 50, xl: 65 },
                color: "#062626"
              }}>
                SERENA GREEN
              </Typography>
            </Grid>

            <Grid item sx={{ backgroundColor: "", }} lg={4} sm={3} xs={2}>

              <Stack direction="row"
                spacing={{ xs: 1, sm: 2, md: 3, lg: 4, }}
                sx={{
                  float: 'right',
                  height: { xs: 20, sm: 35, md: 45, lg: 50, xl: 60 }
                }}
              >
                <img id="pic"
                  src="https://res.cloudinary.com/serenaproject/image/upload/v1692096099/uploads/pandaWWF_logo.png" alt="image" />
                <img id="pic"
                  src="https://res.cloudinary.com/serenaproject/image/upload/v1692096099/uploads/akrsp_logo.png" alt="image" />
                <img id="pic"
                  src="https://res.cloudinary.com/serenaproject/image/upload/v1692096099/uploads/nust_logo.png" alt="image" />
                <Button variant="outlined" sx={{
                  position: 'absolute',
                  top: { xs: 12, sm: 15, md: 15, lg: 12, xl: 12 },
                  right: { xs: 10, sm: 10, md: 10, lg: 250, xl: 270 },
                  width: { xs: 40, sm: 80, md: 110, lg: 100, xl: 105 },
                  height: { xs: 25, sm: 37, md: 42, lg: 45, xl: 49 },
                  fontSize: { xs: 8, sm: 12, md: 15, lg: 16, xl: 18 },
                  '@media (max-width:400px)': { top: 10, right: 2, width: 30, height: 25, fontSize: 7 },
                  '@media (max-width:320px)': { top: 10, right: 2, width: 30, height: 25, fontSize: 7 },
                  // marginRight:'5%',
                  zIndex: "1", textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
                  float: 'right'
                }} href="/loginForm">
                  Sign in
                </Button>
              </Stack>
            </Grid>

          </Grid>
        </Toolbar>
      </AppBar>

    </>
  );
}

export default Navbar