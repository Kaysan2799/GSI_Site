"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import Table from "../components/Table"

function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {

  // Handles the update event on form site details update.
  const sitedetails = async (event) => {


    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      img1: event.target.img1.value,
      img2: event.target.img2.value,
      img3: event.target.img3.value,
      site: event.target.site.value,
      webtext: event.target.webtext.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/updateSiteDetails'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    // alert(`name and email: ${result.forward}`)
    //    handelclick(result);
  }

  // Handles the update event on form text update.
  const createSiteDetails = async (event) => {

    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      img1: event.target.img1.value,
      img2: event.target.img2.value,
      img3: event.target.img3.value,
      site: event.target.site.value,
      webtext: event.target.webtext.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/createSiteDetails'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    // alert(`name and email: ${result.forward}`)
    //    handelclick(result);
  }

  // Handles the update event on form site details update.
  const updatemapdis = async (event) => {


    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
    var lat1 = parseFloat(event.target.lat.value,);
    var lng1 = parseFloat(event.target.lng.value,);

    // Get data from the form.
    const data = {
      site: event.target.site.value,
      distric: event.target.distric.value,
      area: event.target.area.value,
      lat: lat1,
      lng: lng1,
      noofplant: event.target.noofplant.value,
      airquality: event.target.airquality.value,
      soilprotection: event.target.soilprotection.value,
      economicbenefits: event.target.economicbenefits.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/updatedetailsgrid'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    // alert(`name and email: ${result.forward}`)
    //    handelclick(result);
  }

  // Handles the update event on form site details create.
  const createDetailsGrid = async (event) => {


    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
    var lat1 = parseFloat(event.target.lat.value,);
    var lng1 = parseFloat(event.target.lng.value,);

    // Get data from the form.
    const data = {
      site: event.target.site.value,
      distric: event.target.distric.value,
      area: event.target.area.value,
      lat: lat1,
      lng: lng1,
      noofplant: event.target.noofplant.value,
      airquality: event.target.airquality.value,
      soilprotection: event.target.soilprotection.value,
      economicbenefits: event.target.economicbenefits.value,

    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/createdetailsgrid'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    // alert(`name and email: ${result.forward}`)
    //    handelclick(result);
  }

  // Handles the update event on form intro update.
  const updateIntro = async (event) => {


    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      img1: event.target.img1.value,
      img2: event.target.img2.value,
      mainheading: event.target.mainheading.value,
      subheading: event.target.subheading.value,
      para: event.target.para.value,


    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/updateintro'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    // alert(`name and email: ${result.forward}`)
    //    handelclick(result);
  }

  // Handles the update event on form donate update.
  const updateConateComp = async (event) => {

    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      img1: event.target.img1.value,
      img2: event.target.img2.value,
      img3: event.target.img3.value,
      mainheading: event.target.mainheading.value,
      para: event.target.para.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/updateDonateCom1'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    // alert(`name and email: ${result.forward}`)
    //    handelclick(result);
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        position: "absolute", zIndex: "1", bgcolor: 'background.paper', flexGrow: 1, boxShadow: "15px 30px 50px black", display: 'flex',
        top: { xs: 60, sm: 70, md: 120, lg: 130, xl: 140 },
        left: { xs: 60, sm: 15, md: 20, lg: '9%', xl: '9%' },
        marginBottom: "200px",
        width: { xs: '80%', sm: '92%', md: '92%', lg: '80%', xl: '80%' },
        height: { xs: '60%', sm: 'auto', md: '60%', lg: '60%', xl: '60%' },
        padding: "15px",
        borderRadius: "15px"
      }}>

      {/* Left Vertical Tabs */}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="update intro compo" {...a11yProps(0)} />
        <Tab label="update donate comp" {...a11yProps(1)} />
        <Tab label="site details update" {...a11yProps(2)} />
        <Tab label="update map discription" {...a11yProps(3)} />
        <Tab label="Client table" {...a11yProps(4)} />
        <Tab label="Create details Grid" {...a11yProps(5)} />
        <Tab label="Create Site Detail" {...a11yProps(6)} />
      </Tabs>

      {/* updateIntro */}
      <TabPanel value={value} index={0}>
        <Box sx={{
          width: { xs: '100%', sm: '103%', md: '102%', lg: '107%', xl: '148%' },
          // backgroundColor: 'red',
        }}
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={updateIntro}
        >
          <Stack direction="row" spacing={2} p={2}>
            <TextField
              id="img1"
              label="Image link 1"
              multiline
              rows={1}
              sx={{
                width: "20%",
              }}
              type="text" name="img1"
            />
            <TextField
              id="img2"
              label="Image link 2"
              multiline
              rows={1}
              sx={{
                width: "20%",
              }}
              type="text" name="img2"
            />
            <TextField
              id="mainheading"
              label="Mainheading"
              multiline
              rows={1}
              sx={{
                width: "20%",
              }}
              type="text" name="mainheading"
            />
            <TextField
              id="subheading"
              label="Subheading"
              multiline
              rows={1}
              sx={{
                width: "20%",
              }}
              type="text" name="subheading"
            />

          </Stack>
          <Stack p={2} direction="row">
            <TextField
              id="para"
              label="Paragraph"
              multiline
              rows={8}
              sx={{
                width: "30%"
              }}
              type="text" name="para"

            />
            <Button variant='contained' type='submit'
              sx={{
                float: "right", marginTop: "28%",
                marginLeft: "50%",
                width: "20%",
                height: "20%"
              }}>
              Update
            </Button>
          </Stack>

        </Box>

      </TabPanel>

      {/* updateConateComp */}
      <TabPanel value={value} index={1}>
        <Box sx={{
          width: { xs: '100%', sm: '103%', md: '102%', lg: '107%', xl: '148%' },
          // backgroundColor: 'red',
        }}
          component="form"

          noValidate
          autoComplete="off"
          onSubmit={updateConateComp}
        >
          <Stack direction="row" spacing={2} p={2}>
            <TextField
              id="img1"
              label="Image link 1"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="img1"
            />
            <TextField
              id="img2"
              label="Image link 2"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="img2"
            />
            <TextField
              id="img3"
              label="Image link 3"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="img3"
            />
            <TextField
              id="mainheading"
              label="Mainheading"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="mainheading"
            />

          </Stack>
          <Stack p={2} direction="row">
            <TextField
              id="para"
              label="Paragraph"
              multiline
              rows={8}
              sx={{ width: "30%" }}
              type="text" name="para"
            />
            <Button variant='contained' type='submit'
              sx={{
                float: "right", marginTop: "28%", marginLeft: "50%",
                width: "20%",
                height: "20%",
              }}>Update</Button>
          </Stack>

        </Box>

      </TabPanel>

      {/* updateSiteDetails */}
      <TabPanel value={value} index={2}>
        <Box sx={{
          width: { xs: '100%', sm: '103%', md: '102%', lg: '107%', xl: '148%' },
          // backgroundColor: 'red',
        }}
          component="form"

          noValidate
          autoComplete="off"
          onSubmit={sitedetails}
        >
          <Stack direction="row" spacing={2} p={2}>
            <TextField
              id="img1"
              label="Image link 1"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="img1"
            />
            <TextField
              id="img2"
              label="Image link 2"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="img2"
            />
            <TextField
              id="img3"
              label="Image link 3"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="img3"
            />
            <TextField
              id="site"
              label="site"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="site"
            />

          </Stack>
          <Stack p={2} direction="row">
            <TextField
              id="webtext"
              label="Paragraph"
              multiline
              rows={8}
              sx={{ width: "30%" }}
              type="text" name="webtext"
            />
            <Button variant='contained' type='submit' sx={{ float: "right", marginTop: "28%", marginLeft: "50%", width: "20%", height: "20%" }}>Update</Button>
          </Stack>

        </Box>
      </TabPanel>

      {/* updatesitedetails */}
      <TabPanel value={value} index={3}>
        <Box sx={{
          width: { xs: '100%', sm: '103%', md: '102%', lg: '107%', xl: '148%' },
          // backgroundColor: 'red',
        }}
          component="form"

          noValidate
          autoComplete="off"
          onSubmit={updatemapdis}
        >
          <Stack direction="row" spacing={2} p={2}>
            <TextField
              id="site"
              label="Site"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="site"

            />
            <TextField
              id="distric"
              label="Distric"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="distric"

            />
            <TextField
              id="area"
              label="Area"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="area"

            />
            <TextField
              id="lat"
              label="Lat"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="lat"

            />

          </Stack>
          <Stack p={2} direction="row" spacing={2}>
            <TextField
              id="lng"
              label="Lng"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="lng"

            />
            <TextField
              id="noofplant"
              label="No Of Plant"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="noofplant"

            />
            <TextField
              id="carbonsequestration"
              label="Carbon Sequestration"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="carbonsequestration"

            />
            <TextField
              id="airquality"
              label="Air Quality"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="airquality"

            />

          </Stack>

          <Stack p={2} direction="row" spacing={2}>
            <TextField
              id="soilprotection"
              label="Soil Protection"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="soilprotection"

            />
            <TextField
              id="economicbenefits"
              label="Economic Benefits"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="economicbenefits"

            />

          </Stack>
          <Button variant='contained' type='submit'
            sx={{
              float: "right",
              marginTop: "5%",
              width: "20%",
              height: "20%",
            }}>Update</Button>

        </Box>
      </TabPanel>

      {/* Client Info Table  */}
      <TabPanel value={value} index={4}>
        <Table />
      </TabPanel>

      {/* create details Grid */}
      <TabPanel value={value} index={5}>
        <Box sx={{
          width: { xs: '100%', sm: '103%', md: '102%', lg: '107%', xl: '148%' },
        }}
          component="form"

          noValidate
          autoComplete="off"
          onSubmit={createDetailsGrid}
        >
          <Stack direction="row" spacing={2} p={2}>
            <TextField
              id="site"
              label="Site"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="site"

            />
            <TextField
              id="distric"
              label="Distric"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="distric"

            />
            <TextField
              id="area"
              label="Area"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="area"

            />
            <TextField
              id="lat"
              label="Lat"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="lat"

            />

          </Stack>
          <Stack p={2} direction="row" spacing={2}>
            <TextField
              id="lng"
              label="Lng"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="lng"

            />
            <TextField
              id="noofplant"
              label="No Of Plant"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="noofplant"

            />
            <TextField
              id="carbonsequestration"
              label="Carbon Sequestration"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="carbonsequestration"

            />
            <TextField
              id="airquality"
              label="Air Quality"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="airquality"

            />

          </Stack>

          <Stack p={2} direction="row" spacing={2}>
            <TextField
              id="soilprotection"
              label="Soil Protection"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="soilprotection"

            />
            <TextField
              id="economicbenefits"
              label="Economic Benefits"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="economicbenefits"

            />

          </Stack>
          <Button variant='contained' type='submit'
            sx={{ float: "right", marginTop: "5%", marginLeft: "10%", width: "20%", height: "20%" }}>
            Create</Button>
        </Box>
      </TabPanel>

      {/* Create Site Detail */}
      <TabPanel value={value} index={6}>
        <Box sx={{
          width: { xs: '100%', sm: '103%', md: '102%', lg: '107%', xl: '148%' },
        }}
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={createSiteDetails}
        >
          <Stack direction="row" spacing={2} p={2}>
            <TextField
              id="img1"
              label="Image link 1"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="img1"
            />
            <TextField
              id="img2"
              label="Image link 2"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="img2"
            />
            <TextField
              id="img3"
              label="Image link 3"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="img3"
            />
            <TextField
              id="site"
              label="site"
              multiline
              rows={1}
              sx={{ width: "20%" }}
              type="text" name="site"
            />

          </Stack>
          <Stack p={2} direction="row">
            <TextField
              id="webtext"
              label="Paragraph"
              multiline
              rows={8}
              sx={{ width: "30%" }}
              type="text" name="webtext"
            />
            <Button variant='contained' type='submit' sx={{ float: "right", marginTop: "28%", marginLeft: "40%", width: "20%", height: "20%" }}>Create</Button>
          </Stack>

        </Box>
      </TabPanel>

    </Box>
  );
}
