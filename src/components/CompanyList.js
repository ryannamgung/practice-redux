import React from 'react';
import {connect} from 'react-redux';
import Company from './Company';
//the props comes from our store
const CompanyList = ({ companies }) => {
  console.log({companies})
  return (
    <ul>
      {companies.map(company => <Company key={company.id} company={company} />)}
    </ul>
  )
}

function mapStateToProps(state){
  return {
    companies: state.companies
  }

  //return {...state}
}

export default connect(mapStateToProps)(CompanyList);
