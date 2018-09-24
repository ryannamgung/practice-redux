import React, {Component} from 'react'
import { connect } from 'react-redux'
import {uploadCompany} from '../actions.js'

class UploadForm extends Component {
  state = {
    name: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    // console.log(this.props)
    // debugger
    event.preventDefault();
    this.props.uploadCompany(this.state.name, this.state.password)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></label>
        <label>Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/></label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default connect(null, {uploadCompany})(UploadForm);
