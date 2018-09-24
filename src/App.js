import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CompanyList from './components/CompanyList.js';
import CompanyProfile from './components/CompanyProfile';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <CompanyList />
        <CompanyProfile />
      </div>
    );
  }
}

export default App;
