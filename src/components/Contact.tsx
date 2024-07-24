import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState(''); // New state for success message

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_ojupt1h', // Your actual Service ID
      'template_zm7nj3h', // Your actual Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email
      },
      '7_Rs9PtTZfPLJEltZv-4S' // Your actual User ID
    ).then((result) => {
        console.log('Email sent successfully:', result.text);
        setSuccessMessage('Welcome to the club ;)'); // Update success message
      }, (error) => {
        console.error('Error sending email:', error.text);
      });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact">
      <h2>Contact Me</h2>
      {successMessage && <p className="success-message">{successMessage}</p>} {/* Conditionally render success message */}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
