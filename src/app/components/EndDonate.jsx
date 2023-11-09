/* eslint-disable @next/next/no-img-element */
import { Box, Typography, Button } from "@mui/material";
import { AiFillCreditCard } from "react-icons/ai";

export default function EndDonate() {
    return (
        // <Box sx={{
        //     // backgroundImage: 'linear-gradient(  #083015,  #bac64df1)',
        //     backgroundColor: '#bac64df1',
        //     marginBottom: '-8px',
        //     // paddingBottom: '120px',
        //     paddingTop: '120px',
        // }}>
            <Box sx={{
                width: '100%',
                height: { xs: 130, sm: 240, md: 320, lg: 450, xl: 585 },
                '@media (max-width:400px)': { height: 117 },
                '@media (max-width:320px)': { height: 100 },
                position: 'relative',
                backgroundColor: '#bac64df1',
                marginBottom: '-8px',
                // paddingBottom: '120px',
                paddingTop: { xs: 3, sm: 6, md: 7, lg: 9, xl: 11 },

            }}>
                <img alt=""
                    src={'https://res.cloudinary.com/serenaproject/image/upload/v1692779526/uploads/donateBackImg_xgpedl.jpg'}
                    style={{ width: '100%', height: 'auto', zIndex: "0", overflow: 'hidden' }} />
                <Box sx={{
                     position: 'absolute',
                    top: { xs: 56, sm: 120, md: 150, lg: 210, xl: 250 },
                    left: { xs: 130, sm: 180, md: 220, lg: 400, xl: 450 },
                    '@media (max-width:400px)': { left: 110, top: 60 },
                    '@media (max-width:350px)': { left: 80, top: 50 },
                    zIndex: "1",
                }} elevation={0}>
                    <Typography variant="h1" sx={{
                        color: "#F2F2F2", fontSize: { xs: 20, sm: 50, md: 70, lg: 80, xl: 100 }, fontWeight: 'bold', textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)"
                    }} >
                        HELP SAVE A TREE
                    </Typography>
                    <Button variant="contained" href="/CustomerForm"
                        sx={{
                            backgroundColor: 'white',
                            color: 'black', fontWeight: 'bold',
                            width: { xs: 30, sm: 80, md: 100, lg: 120, xl: 180, },
                            height: { xs: 14, sm: 20, md: 26, lg: 35, xl: 55, },
                            fontSize: { xs: 6, sm: 8, md: 11, lg: 18, xl: 22, },
                            marginLeft: { xs: 7, sm: 22, md: 32, lg: 34, xl: 45, },
                            marginTop: { xs: 1, sm: 1, md: 2, lg: 2, xl: 6, },
                            borderRadius: { xs: 0.5, sm: 1, md: 1, lg: 2, xl: 3, },
                            '@media (max-width:320px)': { margingLeft: -2, marginTop: 1, fontSize: 4, width: 40, height: 15 },
                        }}
                        >
                        Donate   
                    </Button>
                </Box>
            </Box >
        // </Box>
    )
}