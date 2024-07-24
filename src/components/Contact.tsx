import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_ojupt1h', 
      'template_zm7nj3h', 
      formData, 
      '7_Rs9PtTZfPLJEltZv-4S'
    ).then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact">
      <h2>Contact Me</h2>
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
