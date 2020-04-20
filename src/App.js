import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);


function App() {
  return (
    <div>
      {/* <HomePage />  */}
      <Switch>
       <Route exact path='/' component={HomePage} />
       <Route path='/Hats' component={HatsPage} />
      </Switch>
      
    </div>
  );
}

export default App;
