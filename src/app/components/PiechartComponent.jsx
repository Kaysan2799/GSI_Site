"use client"
import React, { useState } from 'react';
import { Box, Grid, Stack, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Piechart from "./Piechart";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import '../global.css'
export default function PiechartComponent({ selectedSiteData }) {

    return (

        <Box sx={{
            width: {
                xs: '92.4%', sm: '95.8%',
                // md: '92.2%', lg: '94.45%', xl: '90%'
            },
            '@media (max-width:400px)': { width: '91.4%' },
            '@media (max-width:320px)': { width: '90.1%' },
            height: 'auto',
            backgroundImage: 'linear-gradient( #083015,  #083015)',
            padding: { xs: 2, sm: 2, md: 5, lg: 5, xl: 10 },
        }}>
            <Grid container sx={{
                width: { xs: '100%', sm: '100%', md: '100%', lg: '100%', xl: '90%' },
                '@media (max-width:400px)': { width: '100%' },
                '@media (max-width:320px)': { width: '100%' },
                // { xs: 400, sm: 720, md: 5, lg: 5, xl: 5 },
                // position: 'center',
                backgroundColor: '#ECF8CD',
                borderRadius: '20px',
                height: 'auto',
                paddingBottom: 3,
                // margin: { xs: 2, sm: 2, md: 5, lg: 5, xl: 5 },
                // direction:'coloum'
            }}>

                <Grid item xs={3} sm={5} md={5} lg={6} xl={6} sx={{
                    paddingTop: { xs: 2, sm: 6, md: 9, lg: 12, xl: 17 },
                    paddingLeft: { xs: 1, sm: 5, md: 7, lg: 15, xl: 20 },
                    '@media (max-width:400px)': { paddingTop: 1, paddingLeft: 1 },
                    '@media (max-width:320px)': { paddingTop: 1, paddingLeft: 1 },

                }}>
                    <Stack >
                        <Typography sx={{
                            fontSize: { xs: 12, sm: 27, md: 29, lg: 32, xl: 35 },
                            paddingLeft: { xs: 2, sm: 2, },
                        }} >
                            This chart shows:
                        </Typography>
                        <Stack >
                            <List >
                                <ListItem>
                                    <ArrowCircleRightOutlinedIcon className="svg_icons" />
                                    <ListItemText primaryTypographyProps={{
                                        fontSize: { xs: 10, sm: 20, md: 25, lg: 28, xl: 30 },
                                    }} primary="Green Area"
                                        sx={{
                                            paddingLeft: { xs: 2, sm: 2, md: 2, lg: 2, xl: 3 },
                                            color: '#20c997',
                                        }} />
                                </ListItem>
                                <ListItem>
                                    <ArrowCircleRightOutlinedIcon className="svg_icons" />
                                    <ListItemText primaryTypographyProps={{
                                        fontSize: { xs: 10, sm: 20, md: 25, lg: 28, xl: 30 },
                                    }} primary="Tree Canopy"
                                        sx={{
                                            paddingLeft: { xs: 2, sm: 2, md: 2, lg: 2, xl: 3 },
                                            color: '#198754'
                                        }} />
                                </ListItem>
                                <ListItem>
                                    <ArrowCircleRightOutlinedIcon className="svg_icons" />
                                    <ListItemText primaryTypographyProps={{
                                        fontSize: { xs: 10, sm: 20, md: 25, lg: 28, xl: 30 },
                                    }} primary="Barren Land"
                                        sx={{
                                            paddingLeft: { xs: 2, sm: 2, md: 2, lg: 2, xl: 3 },
                                            color: '#cda684'
                                        }} />
                                </ListItem>
                                <ListItem>
                                    <ArrowCircleRightOutlinedIcon className="svg_icons" />
                                    <ListItemText primaryTypographyProps={{
                                        fontSize: { xs: 10, sm: 20, md: 25, lg: 28, xl: 30 },
                                    }} primary="Wet Land"
                                        sx={{
                                            paddingLeft: { xs: 2, sm: 2, md: 2, lg: 2, xl: 3 },
                                            color: '#8C6432',
                                        }} />
                                </ListItem>
                            </List>
                        </Stack>
                    </Stack>
                </Grid>

                <Grid item xs={8} sm={7} md={7} lg={6} xl={6} >
                    <Piechart selectedSiteData={selectedSiteData} />
                </Grid>

            </Grid>
        </Box>

    );
}