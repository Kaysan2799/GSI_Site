/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import { Button, Container, TextField, Paper, MenuItem, Box } from '@mui/material';
import { styled } from '@mui/system';

const Card = styled(Paper)(({ theme }) => ({
  marginTop: '23%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '450px',
  width: '100%',
  flexDirection: 'column',
  gap: '22px',
  borderRadius: '15px',
  background: '#e3e3e3',
  boxShadow: '15px 25px 60px black',
  borderRadius: '8px',
}));

const Heading = styled('a')({
  color: '#000',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  display: 'block',
  fontWeight: 'bold',
  fontSize: 'x-large',
  marginTop: '1.2em',
});

const InputBox = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '250px',
  padding: '4%',
}));

const Input = styled(TextField)(({ theme }) => ({
  width: '80%',
  padding: '12px',
  outline: 'none',
  border: 'none',
  color: '#000',
  fontSize: '1em',
  background: 'transparent',
  borderLeft: '2px solid #000',
  borderBottom: '2px solid #000',
  transition: '0.1s',
  borderBottomLeftRadius: '8px',
}));

const Label = styled('span')({
  marginTop: '-10px',
  position: 'absolute',
  left: '0',
  transform: 'translateY(-4px)',
  marginLeft: '15px',
  padding: '10px',
  pointerEvents: 'none',
  fontSize: '12px',
  color: '#000',
  textTransform: 'uppercase',
  transition: '0.5s',
  letterSpacing: '3px',
  borderRadius: '8px',
});

const EnterButton = styled(Button)(({ theme }) => ({
  height: '45px',
  width: '100px',
  borderRadius: '5px',
  border: '2px solid #000',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  transition: '0.5s',
  textTransform: 'uppercase',
  fontSize: '10px',
  letterSpacing: '2px',
  marginBottom: '1.5em',
  marginTop: '6%',
  marginLeft: "25%",
  '&:hover': {
    backgroundColor: 'rgb(0, 0, 0)',
    color: 'white',
  },
}));

const MaterialUIForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting || isSubmitButtonDisabled) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    const data1 = {
      name: event.target.name.value,
      email: event.target.email.value,
      address: event.target.address.value,
      country: event.target.country.value,
      phonenumber: event.target.phonenumber.value,
      donation: event.target.donation.value,
    };

    const JSONdata = JSON.stringify(data1);
    const endpoint = '/api/clientinfo';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const result = await response.json();
      routing(result);
      setSubmitButtonDisabled(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionError('An error occurred while submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonClick = () => {
    // Open the link in a new tab
    window.open('https://donate.stripe.com/test_14keYxgtRb7Ua4M000', '_blank');
    
    // Go back one step in browser history
    window.history.go(-1);
  };

  function routing(params) {
    console.log(params);
    if (params.forward === true) {
      window.location.href = 'https://donate.stripe.com/test_14keYxgtRb7Ua4M000';
    }
  }

  return (
    <Box style={{ position: 'relative' }}>
      <img src="https://res.cloudinary.com/serenaproject/image/upload/v1691751755/uploads/top_background_picture.jpg" alt=""
        style={{ width: '100%', height: '979px', zIndex: '0', display: 'flex', position: 'absolute', }} />
      <Container maxWidth="xs" style={{ zIndex: '1', position: 'absolute', marginLeft: '40%' }}>
        <Card>
          <Heading>Information</Heading>
          <form onSubmit={handleSubmit} id='loginform'>
            <InputBox>
              <Label>Name</Label>
              <Input id="name" name="name" type="text" required />
            </InputBox>
            <InputBox>
              <Label>Email</Label>
              <Input id="email" name="email" type="email" required />
            </InputBox>
            <InputBox>
              <Label>Address</Label>
              <Input id="address" name="address" type="address" placeholder='optional' />
            </InputBox>
            <InputBox>
              <Label>Country</Label>
              <Input id="country" name="country" type="country" required />
            </InputBox>
            <InputBox>
              <Label>Phone Number</Label>
              <Input id="phonenumber" name="phonenumber" type="text" required />
            </InputBox>
            <InputBox>
              <Label>How Much Donating</Label>
              <Input id="donation" name="donation" type="float" required />
            </InputBox>
            <EnterButton
              className='EnterButton'
              type="submit"
              disabled={isSubmitting}
              onClick={handleButtonClick}
            >
              {isSubmitting ? 'Submitting...' : 'Enter'}
            </EnterButton>
            {submissionError && <p>{submissionError}</p>}
          </form>
        </Card>
      </Container>
    </Box>
  );
};

export default MaterialUIForm;
