import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_idk4m7e', 'template_7jpnlp9', form.current, 'gXeKEpn66L6Ix9Tic')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        
        alert('Error sending email. Please try again.');
      });
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Contact Me</h2>
      </div>
      <form ref={form} onSubmit={sendEmail} className='contact--form--container'>
        <div className='wrapper'>
          <div className='input-group'>
            <label className='name--email'>Full Name</label>
            <input type="text" name="user_name" className="contact--input text-md" required />
          </div>
          <div className='input-group'>
            <label className='name--email'>Email</label>
            <input type="email" name="user_email" className="contact--input text-md" required />
          </div>
        </div>
        <label className='subject--msg'>Subject</label>
        <input type="text" name="subject" className="contact--input text-md" required />
        <label className='subject--msg'>Message</label>
        <textarea name="message" rows="8" className="contact--input text-md" placeholder="Type your message..." required></textarea>
        <input type="submit" value="Send" className="btn btn-primary contact--form--btn"/>
      </form>
    </section>
  );
};
