import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const SpoonPage = (props) => {
  console.log(props)
  return(
   
    <div>
      <Link to='/'>Go to home</Link>
      <h1>Spoon Page</h1>
  </div>
  );
  };


function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/spoons' component={SpoonPage}/>
      </Switch>
    

    </div>
  );
}

export default App;
