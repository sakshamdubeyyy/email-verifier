import React, { useState } from 'react';
import '../styles/Form.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    if (!email) {
      setMessage('Email is required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Invalid email format');
      return;
    }

    try {
      const response = await fetch('http://34.225.132.160:8002/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 422) {
        const data = await response.json();
        setMessage(data.detail); // Assuming the error message is in `detail` field
      } else if (response.status === 200) {
        setMessage('Form Submitted');
      } else {
        setMessage('Something went wrong');
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <div className="form-container">
      <form className='form' onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            id="email"
            className='input'
            value={email}
            placeholder='Email Address'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className='button' type="submit">Contact Me</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default Form;
