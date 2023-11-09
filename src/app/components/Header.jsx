/* eslint-disable @next/next/no-img-element */
import { Button, Typography, Paper, Box } from "@mui/material";
import Image from "next/image";

export default function Header() {
    
    return (
        <>

            <Box sx={{ position: "relative" }}>
                <Box sx={{}} elevation={0}>
                    <Box sx={{
                        width: { xs:'80%', }, position: 'absolute',
                        top: { xs: 95, sm: 160, md: 210, lg: 300, xl: 395 },
                        left: { xs: 35, sm: 60, md: 70, lg: 100, xl: 100 },
                        '@media (max-width:400px)': { left: 25, top: 80 },
                        '@media (max-width:350px)': { left: 25, top: 70 },
                        zIndex: "1", textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)"
                    }} elevation={0}>
                        <Typography variant="h1" sx={{
                            color: "#F2F2F2", fontSize: { xs:20, sm:50, md:70, lg:80, xl:100 }}}>
                            Serena
                        </Typography>

                        <Typography variant="h1" sx={{
                            fontWeight: "bold", color: "#F2F2F2",
                            fontSize: { xs: 20, sm: 50, md: 70, lg: 80, xl: 100 }
                        }}>
                            GIS Forest
                        </Typography>
                    </Box>

                    <img alt=""
                        src={'https://res.cloudinary.com/serenaproject/image/upload/v1691751755/uploads/top_background_picture.jpg'}
                        style={{ width: '100%', height: '100%', zIndex: "0", maxWidth:'100%' }} />
                    {/* <Button variant="contained" sx={{ position: 'absolute',
                        top: { xs: 60, sm: 70, md: 80, lg: 90, xl: 90 },
                        right: { xs: 10, sm: 10, md: 10, lg: 10, xl: 10 },
                        width: { xs: 40, sm: 80, md: 110, lg: 100, xl: 105 },
                        height: { xs: 25, sm: 37, md: 42, lg: 45, xl: 49 },
                        fontSize: { xs: 8, sm: 12, md: 15, lg: 16, xl: 18 },
                        // marginRight:'5%',
                        zIndex: "1", textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
                        float:'right'
                    }} href="/loginForm">
                    Sign in
                </Button> */}
                </Box>
                
            </Box>
        </>
    );
}