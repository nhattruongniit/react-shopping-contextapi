import React from 'react';
// import { Link } from 'react-router-dom';

import { ProductConsumer } from '../context';
// import { ButtonContainer } from './Button';

class ProductDetail extends React.Component {
  render() {
    return(
      <React.Fragment>
        <ProductConsumer>
          {(value) => {
            const { id, company, img, info, price, title, inCart } = value.detailProduct;
            return (
              <div className="container py-5">
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{title}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <img src={img} className="img-fluid" alt="product" />
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>model: {title}</h2>
                  </div>
                </div>
              </div>
            )
          }}
        </ProductConsumer>
      </React.Fragment>
    )
  }
}

export default ProductDetail;
