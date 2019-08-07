import React from "react";
import { Link } from "react-router-dom";

// context API
import { ProductConsumer } from "../context";

// component
import { ButtonContainer } from "./Button";

class ProductDetail extends React.Component {
  render() {
    return (
      <>
        <ProductConsumer>
          {value => {
            const {
              id,
              company,
              img,
              info,
              price,
              title,
              inCart
            } = value.detailProduct;
            return (
              <div className="container py-5">
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{title}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img
                      src={img}
                      title=""
                      alt="Product"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>Model: {title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      Made by: <span className="text-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-blue">
                      <strong>
                        Price: <span>$</span> {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about product:
                    </p>
                    <p className="text-muted lead">{info}</p>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </>
    );
  }
}

export default ProductDetail;
