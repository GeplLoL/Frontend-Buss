import React, { useState } from 'react';
import { register, login } from '../api/auth';

const AuthForm = ({ isRegister }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await register(formData);
        alert('Registration successful!');
      } else {
        const { data } = await login(formData);
        localStorage.setItem('token', data);
        alert('Login successful!');
      }
    } catch (error) {
      alert(error.response?.data || 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
    </form>
  );
};

export default AuthForm;
