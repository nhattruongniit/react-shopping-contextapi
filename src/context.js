import React from 'react';

import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  }

  handleDetail = () => {
    console.log('hello from detail')
  }

  addToCart = () => {
    console.log('hello from addToCart')
  }

  render() {
    const {
      handleDetail,
      addToCart
    } = this;

    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: handleDetail,
        addToCart: addToCart,
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
};

const ProductConsumer = ProductContext.Consumer;

export {
  ProductProvider,
  ProductConsumer,
}