import React from "react";

import Title from "./Title";
import Product from "./Product";

import { ProductConsumer } from "../context";

export default class ProductList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => (
                    <Product key={product.id} product={product} />
                  ));
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
