import React from 'react';
import {connect} from 'react-redux';
import {buyGood} from '../actions.js'
import * as actions from '../actions.js'

const CompanyProfile = (props) => {

  // const purchaseGood = () => {
  //   props.dispatch({
  //     type: 'BUY_GOOD',
  //     payload: props.currentCompany
  //   })
  // }
  // debugger
  const {name, password} = props.currentCompany
  // console.log("THESE ARE PROPS!!!!!!!", props)
  // debugger
  return (
    <div>
      <h2>{name}</h2>
      <h2>{password}</h2>
      <button onClick={() => {props.buyGood(props.currentCompany)}}>Purchase</button>
    </div>
  )
}

function mapStateToProps(state) {
  // debugger
  return {
    currentCompany: state.currentCompany
  }
}

// function mapDispatchToProps(dispatch){
//   console.log(dispatch)
//   return {
//     purchaseGood: (company) => {
//       dispatch(buyGood(company))
//     }
//   }
// }
// debugger

export default connect(mapStateToProps, actions)(CompanyProfile)
