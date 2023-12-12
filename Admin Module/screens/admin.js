// admin.js

import React, { useState } from 'react';
import '../styles/admin.css';
import logo from '../images/logo.png';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('doctor');
  const [dataToDisplay, setDataToDisplay] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'doctor') {
      setDataToDisplay(displayDoctors);
    } else {
      setDataToDisplay(displayPatients);
    }
  };

  const displayDoctors = [
    { id: 21421434, username: 'mwasif', email: 'xyz@gmail.com', status: 'verified' },
    { id: 21421434, username: 'mwasif', email: 'xyz@gmail.com', status: 'verified' },
    { id: 21421434, username: 'mwasif', email: 'xyz@gmail.com', status: 'verified' },
    { id: 21421434, username: 'mwasif', email: 'xyz@gmail.com', status: 'verified' },
    // Add more doctor data items as needed
  ];

  const displayPatients = [
    { id: 12345678, username: 'john_doe', email: 'john@example.com', status: 'pending' },
    { id: 12345678, username: 'john_doe', email: 'john@example.com', status: 'pending' },
    { id: 12345678, username: 'john_doe', email: 'john@example.com', status: 'pending' },
    // Add more patient data items as needed
  ];

  return (
    <div className="desktop">
      <div className="navbar">
        <div className="navbar-left">
          <img className="logo" alt="Logo" src={logo} />
        </div>
        <div className="navbar-right">
          <button className="logout-btn">Logout</button>
        </div>
      </div>
      <div className="content">
        <div className="button-group">
          <button
            className={`tab-btn ${activeTab === 'doctor' ? 'active' : ''}`}
            onClick={() => handleTabClick('doctor')}
          >
            Doctors
          </button>
          <button
            className={`tab-btn ${activeTab === 'patient' ? 'active' : ''}`}
            onClick={() => handleTabClick('patient')}
          >
            Patients
          </button>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataToDisplay.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.status}</td>
                <td>
                  <button className="approve-btn">Approve</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
