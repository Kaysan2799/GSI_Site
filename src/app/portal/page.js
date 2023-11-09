/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import DenseTable from "../components/Table";
import { Box } from "@mui/material";
// import { Tabs } from "@mui/material";


const Page = () => {
  return (
    <>
      <Navbar />
      <Tabs />
      <img
        src="/images/TopBackImg.jpg"
        alt="#"
        style={{
          width: "100%", height: "100%", position: "absolute", top: "0px", opacity: "0.9", zIndex: "0", 
        }}
      />
      
    </>
  );
};

export default Page;
