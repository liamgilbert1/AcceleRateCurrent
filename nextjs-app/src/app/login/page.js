'use client';
import React, { useState } from 'react';
import { create_user } from '../../lib/create_user';

export default function SimpleLoginForm() {
  // State variables to store email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle email and password change
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handle form submission (for example purposes, it prevents default form action)
  const handleSubmit = (e) => {
    e.preventDefault();
    create_user(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input style={{color: "Black"}} type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password:</label>
        <input style={{color: "Black"}} type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

