import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import {Link} from 'react-router-dom';
import SigninScreen from './screens/SigninScreen';

function App() {
  return (

    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">
            BookStore
          </Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>  
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route> 
        <Route path="/signin" component={SigninScreen}></Route> 
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
