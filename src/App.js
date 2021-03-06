import './App.css';
import React from 'react';
//import ReactDOM from "react-dom";
import Home from './components/Home';
import Customer from './pages/customer.jsx';
import Company from './pages/company.jsx';
import { members } from '../src/components/Members'

import {  
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home 
              members = {members}

            ></Home>
          </Route>
          <Route  path="/company/:id">
            <Company
             members = {members}
            ></Company>
          </Route>

          <Route path="/customer/:id">
            <Customer
             members = {members}
            ></Customer>
          </Route>

        </Switch>
     </header>
    </div>
  );
}

export default App;
