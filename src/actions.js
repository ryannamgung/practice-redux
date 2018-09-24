import UUID from 'uuid'
export function setCompany(company){
  return{
    type: 'SET_COMPANY',
    payload: company
  }
}
//
export function buyGood(company){
  return{
    type: 'BUY_GOOD',
    payload: company
  }
}

export function uploadCompany(name, password){
  return{
    type: 'UPLOAD_COMPANY',
    payload: {
      id: UUID(),
      name,
      password
    }
  }
}
