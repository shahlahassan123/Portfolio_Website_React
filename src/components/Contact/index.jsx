import React from 'react'
import {ContactSection,ContactHeader,ContactTitle,ContactSubTitle, ContactForm,FormInput,FormTextArea,SubmitButton} from './StyledContact'
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const [open, setOpen] = useState(false)
  const form = useRef()
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = (e) =>{
    e.preventDefault()
    const requiredFields = ['from_email', 'from_name', 'subject', 'message'];
    const isAnyFieldEmpty = requiredFields.some((field) => !form.current[field].value.trim());

    if (isAnyFieldEmpty) {
      setErrorMessage('Please fill in all fields.');
      setOpen(true);
      return;
    }

    emailjs.sendForm('service_qxsi3m2', 'template_z8rt3lm', form.current, 'txEwSfDmpw9aAHZK9')
      .then((result) => {
          setOpen(true)
          console.log(form.current)
         form.current.reset()
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div id="contact">
          <ContactSection>
              <ContactHeader>
                  <ContactTitle>Contact</ContactTitle>
                  <ContactSubTitle>Feel free to reach out to me for any questions or opportunities!</ContactSubTitle>
              </ContactHeader>
              <ContactForm ref={form} onSubmit={handleSubmit}>
                <FormInput placeholder="Email" type="email" name="from_email" ></FormInput>
                <FormInput placeholder="Name" type="text" name='from_name'></FormInput>
                <FormInput placeholder="Subject" type="text" name="subject"></FormInput>
                <FormTextArea placeholder="Message" type="text" name='message'></FormTextArea>
                <SubmitButton type='submit'>Send</SubmitButton>
              </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message={errorMessage || 'Message Sent Successfully'}
          severity={errorMessage ? 'error' : 'success'}
          ContentProps={{
            style: {
              backgroundColor: errorMessage ? '#f44336' : '#4caf50',
            },
          }}
              />
          </ContactSection>
      
    </div>
  )
}

export default Contact
