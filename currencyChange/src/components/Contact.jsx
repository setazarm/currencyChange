import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [feedback, setFeedback] = useState('');

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    if (
      formData.name !== '' &&
      formData.email !== '' &&
      formData.message !== ''
    ) {
      setFeedback(
        `Your message has been successfully sent. Thank you for your feedback ${formData.name}!`
      );
    } else {
      setFeedback('Please fill all the fields.');
    }
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <form className='contact-container' onSubmit={handleSubmit}>
        <input
          placeholder='Name'
          type='text'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
        />
        <br />
        <input
          placeholder='email'
          className='test-input'
          type='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
        />
        <br />
        <textarea
          placeholder='Write your text here...'
          name='message'
          value={formData.message}
          onChange={handleInputChange}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
      {feedback && <h2>{feedback}</h2>}
    </>
  );
};

export default Contact;
