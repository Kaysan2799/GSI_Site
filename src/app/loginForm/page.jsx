/* eslint-disable @next/next/no-img-element */
"use client"
import { useRouter } from "next/navigation";
import './style.css'
import React from 'react';
import { Button, Container, TextField, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';

const Card = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '350px',
  width: '380px',
  flexDirection: 'column',
  gap: '35px',
  borderRadius: '15px',
  background: '#e3e3e3',
  boxShadow: '15px 25px 60px black',
  borderRadius: '8px',
  // backgroundImage: 'https://res.cloudinary.com/serenaproject/image/upload/v1691751755/uploads/top_background_picture.jpg',
}));

const Heading = styled('a')({
  color: '#000',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  display: 'block',
  fontWeight: 'bold',
  fontSize: 'x-large',
  marginTop: '1.5em',
});

const InputBox = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '250px',
}));

const Input = styled(TextField)(({ theme }) => ({
  width: '100%',
  padding: '10px',
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
  marginTop: '5px',
  position: 'absolute',
  left: '0',
  transform: 'translateY(-4px)',
  marginLeft: '10px',
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
  marginBottom: '3em',
  '&:hover': {
    backgroundColor: 'rgb(0, 0, 0)',
    color: 'white',
  },
}));

const MaterialUIForm = () => {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    router.push('/portal');
  };

  return (
    <Box style={{ position: 'relative' }}>
      <img src="https://res.cloudinary.com/serenaproject/image/upload/v1691751755/uploads/top_background_picture.jpg" alt=""
        style={{ width: '100%', height: '979px', zIndex: '0', display: 'flex', position: 'absolute', }} />
      <Box style={{ zIndex: '1', position: 'absolute', }}>
        <Container maxWidth="xs" style={{ marginTop: '245px', marginLeft: '170%' }}>
          <Card>
            <Heading>Login</Heading>
            <InputBox>
              <Input for="username" type="text" id="username" name="username" required />
              <Label>Username</Label>
            </InputBox>
            <InputBox>
              <Input for="password" type="password" id="password" name="password" required />
              <Label>Password</Label>
            </InputBox>
            <EnterButton onClick={handleSubmit}>Enter</EnterButton>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default MaterialUIForm;