import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import OTP from './pages/OTP';
import Sell from './pages/Sell';
import Profile from './pages/Profile';
function App() {
  return (
        <div>
          <Router>
            <Switch>
              <Route exact path='/'component={Home}/>
              <Route path='/Login' component={Login}/>
              <Route path='/Register' component={Register}/>
              <Route path='/OTP' component={OTP}/>
              <Route path='/Sell' component={Sell}/>
              <Route path='/Profile' component={Profile}/>
           
            </Switch>
          </Router>
        </div>
    
  );
}
export default App;
