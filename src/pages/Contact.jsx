import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u2b3tm8', 'template_falxu7b', form.current, 'HKRb3yvb9WipzbalW')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!"); // Display an alert
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Error sending message. Please try again later."); // Display an error alert
      });
  };

  return (
    <div className='contact'>
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: <a href="mailto:athizameiromero@gmail.com" style={{ textDecoration: "none", color: "black" }}>athizameiromero@gmail.com</a></p>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
