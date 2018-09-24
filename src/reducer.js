const initialState = {
  companies: [
    { id: 1,
      name: 'Lucent',
      password: 'njdaskjna'
    },
    { id: 2,
      name: 'KillerWhales',
      password: 'helloJapan'
    },
    { id: 3,
      name: 'Revenge of the Whales',
      password: 'RevengeoftheWhales213'
    }
  ],
  currentCompany: {}
}

export default function reducer(state = initialState, action) {
  console.log('reducer', state, action)
  // debugger
  switch(action.type){
    case 'SET_COMPANY':
      return {...state, currentCompany: action.payload}
    case 'BUY_GOOD':
      // debugger
      return {...state, companies: state.companies.filter((company) => company != action.payload
      )}
      // return {...state, companies: companies.includes{!action.payload}}
    default:
      return state
  }
  return state;
}
