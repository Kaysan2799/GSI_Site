
"use client"
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Header from './components/Header';
import Intro from "./components/Intro";
import Donate from "./components/Donate";
import Detailsgrid from "./components/Detailsgrid";
import MapDetail from './components/mapDetail'
import EndDonate from "./components/EndDonate";
import Footer from './components/Footer'
import UploadImage from "./components/UploadImage";



export default function Home() {
  const [selectedSiteData, setSelectedSiteData] = useState(null);

  // Callback function to update selected site data
  const handleSiteDataChange = (newSiteData) => {
    setSelectedSiteData(newSiteData);
  };

  return <>

    <Navbar />
    <Header />
    <Intro />
    <Donate />
    <Detailsgrid onSiteDataChange={handleSiteDataChange} />
    <MapDetail selectedSiteData={selectedSiteData} />
    <EndDonate />
    <Footer />

    {/* <UploadImage /> */}

  </>;
}
