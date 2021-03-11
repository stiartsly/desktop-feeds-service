import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.global.css';
import SignIn from './components/SignIn/SignIn';
import Dashboard from './components/Dashboard/Dashboard';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}
