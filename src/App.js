import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CompanyList from './components/CompanyList.js';
import CompanyProfile from './components/CompanyProfile';
import UploadForm from './components/UploadForm'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <UploadForm />
        <CompanyList />
        <CompanyProfile />

      </div>
    );
  }
}

export default App;
