import React from 'react';

import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  state = {
    products: [],
    detailProduct: detailProduct
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [ ...tempProducts, singleItem ]; 
    });
    this.setState(() => {
      return {
        products: tempProducts
      }
    });
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
      addToCart,
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