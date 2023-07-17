// App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    age: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="registration-form">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {formData.fullName && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          <p>Full Name: {formData.fullName}</p>
          <p>Email: {formData.email}</p>
          <p>Password: {formData.password}</p>
          <p>Age: {formData.age}</p>
          <p>Address: {formData.address}</p>
        </div>
      )}
    </div>
  );
};

export default App;
