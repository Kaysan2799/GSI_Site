/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import MapDetailImg from "./MapDetailImg";

export default function MapDetail({ selectedSiteData }) {
    const [dataIndex, setDataIndex] = useState(0);
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

    const handleClick = () => {

        const sitedata = selectedSiteData == null ? {
            "id": 1, "site": "Ranga", "distric": "Skardu", "area": "13.5 Acres", "lat": 35.310544, "lng": 75.692911, "noofplant": "5000"
        } : selectedSiteData
        console.log(sitedata);
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].site === sitedata.site) {
                    setDataIndex(i);
                    break; // Break the loop once a match is found
                }
            }
        }
    };

    useEffect(() => {
        handleClick();
    }, [handleClick]);

    return (
        <div style={{ backgroundImage: 'linear-gradient(  #083015,  #bac64df1)', height: 'auto', padding: '2%', paddingBottom: 50, width: '96%' }}>

            <Typography align='center' sx={{
                color: 'white', fontWeight: "bold", marginTop: '4%',
                fontSize: { xs: 30, sm: 40, md: 50, lg: 60, xl: 70 },
                '@media (max-width:400px)': { fontSize: 27 },
                '@media (max-width:320px)': { fontSize: 27 },
            }}>
                Map Detail
            </Typography>

            <Box sx={{
                width: '98%',
                marginLeft: { xs: 2, sm: 2, md: 4, lg: 6, xl: 8 },
                '@media (max-width:400px)': { width: '98%', marginLeft: 0 },
                '@media (max-width:320px)': { width: '98%', marginLeft: 0 },
            }} elevation={0}>

                <Grid container spacing={3}>

                    <Grid item xs={6} sm={5} md={5} lg={4} xl={4} sx={{
                        // marginLeft: '30px',
                        // height: { xs: 172, sm: 353, md: 464, lg: 600, xl: 400 }
                    }}>
                        <MapDetailImg />
                    </Grid>

                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}
                        sx={{
                            marginTop: '2%',
                            marginLeft: { xs: -3, sm: 0, md: 0, lg: 0, xl: 0 },
                            '@media (max-width:400px)': { marginLeft: -1 },
                            '@media (max-width:320px)': { marginLeft: -1 },
                        }}>
                        <Typography sx={{
                            color: 'white', fontWeight: 'bold',
                            fontSize: { xs: 15, sm: 22, md: 24, lg: 40, xl: 50 },
                            '@media (max-width:400px)': { fontSize: 14 },
                            '@media (max-width:320px)': { fontSize: 13 },
                        }}>
                            {data.length > 0 ? data[dataIndex].site : 'loading'}
                        </Typography>

                        <Typography sx={{
                            color: 'white', fontSize: { xs: 9, sm: 15, md: 18, lg: 22, xl: 26 },
                            '@media (max-width:400px)': { fontSize: 8.5 },
                            '@media (max-width:320px)': { fontSize: 7 },
                        }}>
                            {data.length > 0 ? data[dataIndex].webtext : 'loading'}
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}