/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import 'chart.js/auto';
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Box, Button } from '@mui/material';

const Piechart = ({ selectedSiteData }) => {

  const [dataIndex, setDataIndex] = useState(0);
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getpiechartdata");
        const fetchedJsonData = await response.json();
        setJsonData(fetchedJsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

    };

    fetchData();
  }, []);

  const handleClick = () => {

    const data = selectedSiteData == null ? { "id": 1, "site": "Ranga", "distric": "Skardu", "area": "13.5 Acres", "lat": 35.310544, "lng": 75.692911, "noofplant": "5000" } : selectedSiteData
   
    if (jsonData.length > 0) {
      for (let i = 0; i < jsonData.length; i++) {
        if (jsonData[i].site === data.site) {
          setDataIndex(i);
          break; // Break the loop once a match is found
        }
      }
    }
  };
  useEffect(() => {
    handleClick();
  }, [handleClick]);

  const currentData = jsonData.length > 0 ? jsonData[dataIndex] : null;

  const chartData = {
    // labels: ['Green Area', 'Tree Canopy', 'Barren Land', 'Wet Land'],
    datasets: [
      {
        data: currentData
          ? [currentData.greenarea, currentData.treecanopy, currentData.barrenland, currentData.wetland]
          : [],
        backgroundColor: [
          '#189C15', // green area
          '#0C5C00', // tree Canopy
          '#AD8678', // Barren Land
          '#6B4603', // Wet Land
        ],
        hoverOffset: 30,
      },
    ],
  };

  return (
    <Box sx={{
      marginTop: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 },
      marginLeft:{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 },
      width: { xs: 160, sm: 170, md: 235, lg: 270, xl: 270 },
      '@media (max-width:400px)': { width: 170, marginTop: 0.2, marginLeft: 0},
      '@media (max-width:320px)': { width: 120, marginTop: 0.2, marginLeft: 0},
    }}>
      {/* <Button onClick={handleClick}>Toggle Data</Button> */}
      <Doughnut data={chartData} />
    </Box>
  );
};

export default Piechart;


