import React from 'react';
import {connect} from 'react-redux';

const CompanyProfile = (props) => {

  // const purchaseGood = () => {
  //   props.dispatch({
  //     type: 'BUY_GOOD',
  //     payload: props.currentCompany
  //   })
  // }
  // debugger
  const {name, password} = props.currentCompany
  return (
    <div>
      <h2>{name}</h2>
      <h2>{password}</h2>
      <button onClick={() => {props.purchaseGood(props.currentCompany)}}>Purchase</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    currentCompany: state.currentCompany
  }
}

function mapDispatchToProps(dispatch){
  console.log(dispatch)
  return {
    purchaseGood: (company) => {
      dispatch({
        type: 'BUY_GOOD',
        payload: company
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile)
