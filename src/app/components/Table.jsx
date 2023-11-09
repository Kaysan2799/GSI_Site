"use client"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';

export default function DenseTable() {
  const [jsonData, setJsonData] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getclientinfo");
        const fetchedJsonData = await response.json();
        setJsonData(fetchedJsonData);
        // console.log(JSON.stringify(fetchedJsonData));
      } catch (error) {
        console.error("Error fetching data:", error);
      }

    };
    fetchData();
  }, []);

  return (
    <TableContainer  sx={{  width: "100%", height:"400px",padding: "15px" }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold'}}>Name</TableCell>
            <TableCell align="left" sx={{fontWeight: 'bold'}}>Email</TableCell>
            <TableCell align="left" sx={{fontWeight: 'bold'}}>Phone Number</TableCell>
            <TableCell align="left" sx={{fontWeight: 'bold'}}>Country</TableCell>
            <TableCell align="left" sx={{fontWeight: 'bold'}}>Address</TableCell>
            <TableCell align="left" sx={{fontWeight: 'bold'}}>Donation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jsonData.map((row) => (
            <TableRow
              key={row.id} // Assuming you have an "id" field in your table
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.phonenumber}</TableCell>
              <TableCell align="left">{row.country}</TableCell>
              <TableCell align="left">{row.address}</TableCell>
              <TableCell align="left">{row.donation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
