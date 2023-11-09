"use client"
import { useEffect, useState } from "react";
import { Box, Grid, Paper, Typography, Image, Button } from "@mui/material";
import SlideImgs from './SlideImgs.jsx'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { AiFillCreditCard } from "react-icons/ai";

export default function Donate() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/getDonateCom1");
                const jsonData = await response.json();
                // console.log(jsonData);
                setData(jsonData);

            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <Box style={{ width: '100%', backgroundImage: 'linear-gradient(  #BAC64D,  #ECF8CD)', }} elevation={0}>


                <Grid container spacing={2} sx={{
                    paddingLeft: { xs: 4, sm: 6, md: 10, lg: 20, xl: 30 },
                    paddingBottom: { xs: 4, sm: 5, md: 5, lg: 5, xl: 5 },
                    '@media (max-width:400px)': { paddingLeft: 3, },
                    // boxShadow: '12px 12px 10px rgba(0, 0, 0, 0.5)',
                }}>
                    <Grid item xs={5} md={5} lg={5} xl={5} sx={{
                        // float: 'right',
                        // backgroundColor: 'red',
                        // boxShadow: '12px 12px 10px rgba(0, 0, 0, 0.5)',
                    }}>
                        <SlideImgs />
                    </Grid>

                    <Grid item xs={5} md={5} lg={5} xl={5} sx={{
                        backgroundColor: 'white',
                        borderTopRightRadius: '30px', borderBottomRightRadius: '30px', overflow: 'hidden',
                        height: { xs: 200, sm: 400, md: 450, lg: 600, xl: 700 },
                        width: { xs: 172, sm: 353, md: 464, lg: 600, xl: 680 },
                        boxShadow: '12px 12px 10px rgba(0, 0, 0, 0.5)',
                        marginTop: 2,
                        marginLeft: { xs: 1, sm: 7.5, md: 9, lg: 9, xl: 0, },
                        '@media (max-width:400px)': { marginLeft: 2.5, },
                        '@media (max-width:320px)': { width: 140, height: 150, margingLeft: 2, },

                        // '@media (min-width:400px)': { marginLeft: 5, },

                    }}>
                        <Typography sx={{
                            color: '#3E3E40', fontWeight: 'bold', padding: '5%',
                            fontSize: { xs: 12, sm: 20, md: 30, lg: 40, xl: 50, },
                            '@media (max-width:320px)': { margingLeft: -0, fontSize: 10, paddingTop: '0px', },
                        }}>
                            {data.length > 0 ? data[0].mainheading : 'loading'}
                        </Typography>

                        <Typography sx={{
                            marginLeft: '5%', width: '90%',
                            fontSize: { xs: 6, sm: 12, md: 16, lg: 20, xl: 25, },
                            '@media (max-width:320px)': { margingLeft: -0, fontSize: 5, paddingTop: '0px', },
                        }}>
                            {data.length > 0 ? data[0].para : 'loading'}
                        </Typography>
                        <Button variant="contained" href="/CustomerForm"
                            sx={{
                                backgroundColor: '#062626',
                                width: { xs: 50, sm: 80, md: 100, lg: 120, xl: 150, },
                                height: { xs: 18, sm: 20, md: 26, lg: 35, xl: 45, },
                                fontSize: { xs: 5, sm: 8, md: 12, lg: 18, xl: 25, },
                                marginLeft: { xs: 1, sm: 1, md: 2, lg: 3, xl: 4, },
                                marginTop: { xs: 1, sm: 1, md: 2, lg: 2, xl: 2, },
                                '@media (max-width:320px)': { margingLeft: -2, marginTop: 1, fontSize: 4, width: 40, height: 15 },
                            }}
                            endIcon={<AiFillCreditCard />}>
                            Donate
                        </Button>

                    </Grid>

                </Grid>
            </Box>

        </>
    )
}
