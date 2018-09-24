import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

function reducer(state, action) {
  switch(action.type){
    default:
      return state
  }
  return state;
}

const store = createStore(reducer)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

//App
//UploadForm
//CompanyList
//Company
//Company Profile
