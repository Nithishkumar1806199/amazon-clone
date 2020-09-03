import React,{useEffect} from 'react';
import './App.css';
import {Switch,Route}from "react-router-dom";
import Homepage from './Components/Homepage/Homepage'
import Signin from './Components/Signin/Signin'
import Orders from './Components/Orders/Orders'
import Checkouts from './Components/Checkouts/Checkouts'
import TryPrime from './Components/TryPrime/TryPrime'
import { HashRouter as Router} from "react-router-dom";
import {auth} from './Components/firebase/config'
import { useStateValue } from './Components/Dataflow/StateProvider';
const App = () =>{

  const [{user},dispatch ] = useStateValue();
  
  useEffect(()=>{

   const unsubscribe = auth.onAuthStateChanged((authUser) =>{

      if(authUser)
      {
        //the user is logged in
        dispatch({
          type:"SET USER",
          user:authUser   
        });
      }
      else
      {
        ///the user is logged out
        dispatch({
          type:"SET USER",
          user:null   
        });
      }
    });
    return ()=>{
      unsubscribe();
    };
  },[]);

  console.log("User >>>>",user)
  return(<>
    <Router>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/Signin" component={Signin}/>
      <Route path="/Orders" component={Orders}/>
      <Route path="/TryPrime" component={TryPrime}/>
      <Route path="/Checkouts" component={Checkouts}/>
    </Switch>
    </Router>
    
    {/* Footer */}
  </>)
}

export default App;
