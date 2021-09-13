import './App.css';
import React from 'react';
//import ReactDOM from "react-dom";
import Home from './components/Home';
import Customer from './pages/customer.jsx';
import Company from './pages/company.jsx';

import {  
  Switch,
  Route,
  useParams} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/company">
            <Company></Company>
          </Route>

          <Route exact path="/customer">
            <Customer></Customer>
          </Route>

        </Switch>
     </header>
    </div>
  );
}

export default App;
