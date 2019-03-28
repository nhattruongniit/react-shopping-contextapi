import React from 'react';

import Title from './Title';
import Product from './Product';

import { storeProducts } from '../data';

export default class ProductList extends React.Component {
  state = {
    products: storeProducts
  }

  render() {
    return(
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row" />
          </div>
        </div>
        <Product />
      </React.Fragment>
    )
  }
};