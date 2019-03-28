import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import ProductDetail from './component/ProductDetail';
import Cart from './component/Cart';
import PageNotFound from './component/PageNotFound';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/product-detail" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
          <Route path="**" component={PageNotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
