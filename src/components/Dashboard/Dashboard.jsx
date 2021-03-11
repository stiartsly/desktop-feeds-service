import React from 'react';
import './Dashboard.scss';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Feeds Service</h1>
      <NavLink to="/">
        <button type="button">
          <span role="img" aria-label="sign-out">
            📚
          </span>
          Sign Out
        </button>
      </NavLink>
    </div>
  );
};

export default Dashboard;
