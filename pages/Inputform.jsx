"use client"
import { useState } from 'react';
import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function PageWithJSbasedForm() {
  const router = useRouter();

  function handelclick(vari) {
    if (vari.forward === "true") {
      router.push("/portal");
    }
  }

  const covertToBase64 = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result); 
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", event.target.name.value);
    formData.append("email", event.target.email.value);

    const picInput = event.target.pic;
    if (picInput.files.length > 0) {
      const imageFile = picInput.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload = () => {
        formData.append("pic", reader.result); // Append base64 data
        sendFormData(formData);
      };
    } else {
      console.log("can't send pic base64 data");
    }
  };

  const sendFormData = async (formData) => {
    const endpoint = '/api';

    const options = {
      method: 'POST',
      body: formData,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();

    alert(`name and email: ${result.forward}`);
    handelclick(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="pic">Profile Picture</label>
      <input type="file" id="pic" name="pic" accept="image/*" src={Image} onChange={covertToBase64} />
      <Image alt='#' width={100} src={Image} />

      <button type="submit">Submit</button>
    </form>
  );
}
