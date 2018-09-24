import React from 'react';
import {connect} from 'react-redux';
import {setCompany} from '../actions.js'

const Company = (props) => {
  const { name, password } = props.company;

  // const handleClick = () => {
  //   //dispatch the company select action
  //   //sends the action to my store using dispatch
  //   //tells the store to select this company //set my company
  //   props.dispatch({
  //     type: 'SET_COMPANY',
  //     payload: props.company
  //   })
  // }
  // debugger
  return(
    <li onClick={() => props.handleClick(props.company)}>
      {`${name} | ${password}`}
    </li>
  )
}

//this process can potentially be skipped
function mapDispatchToProps(dispatch){
  return {
    handleClick: (company) => {
      dispatch(setCompany(company))
    }
    // ,dispatch
  }
}

export default connect(null, mapDispatchToProps)(Company);
