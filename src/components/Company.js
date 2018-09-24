import React from 'react';
import {connect} from 'react-redux';

const Company = (props) => {
  const { name, password } = props.company;

  const handleClick = () => {
    //dispatch the company select action
    //sends the action to my store using dispatch
    //tells the store to select this company //set my company
    props.dispatch({
      type: 'SET_COMPANY',
      payload: props.company
    })
  }

  return(
    <li onClick={handleClick}>
      {`${name} | ${password}`}
    </li>
  )
}

//this process can potentially be skipped
function mapDispatchToProps(){
  return {}
}

export default connect()(Company);
