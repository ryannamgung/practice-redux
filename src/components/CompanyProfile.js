// import React from 'react';
// import {connect} from 'react-redux';
//
// const CompanyProfile = (props) => {
//
//   const {name, password} = props.company;
//   //
//   const buyGood = () => {
//     props.dispatch({
//       type: 'BUY_GOOD',
//       payload: props.company
//     })
//   }
//
//   return(
//     <div>
//     <h2>{name}</h2>
//     <h2>{password}</h2>
//     <button onClick={buyGood}>Purchase</button>
//     </div>
//   )
// }
//
// function mapStateToProps(state){
//   // debugger
//   return{
//     company: state.currentCompany,
//   }
// }
// //this process can potentially be skipped
// function mapDispatchToProps(){
//   return {}
// }
//
// export default connect()(CompanyProfile);
