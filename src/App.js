import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './component/header/header.component.jsx';

function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
     

    </div>
  );
}

export default App;
