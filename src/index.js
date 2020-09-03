import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@material-ui/icons'


import {StateProvider} from './Components/Dataflow/StateProvider'
import {reducer,initialState} from './Components/Dataflow/store'
ReactDOM.render(
      <StateProvider initialState ={initialState} reducer = {reducer}> 
      <App/>
      </StateProvider>,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

