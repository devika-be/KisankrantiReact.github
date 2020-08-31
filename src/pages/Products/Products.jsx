import React, { Component } from "react";
import "./Products.scss";
import ProductCard from "../ProductCard/ProductCard";
import { storeProducts } from "../../data";

class Products extends Component {
  state = {
    products: storeProducts,
  };
  render() {
    return (
      <div className=" products ">
        <span className="h3 ml-2 text font-weight-bold text-center">
          TOP PRODUCTS
        </span>
        <div className="row mx-auto mt-2">
          {this.state.products.map((item) => (
            <ProductCard
              key={item.id}
              title={item.name}
              rate={item.rate}
              info={item.info}
              image={item.img}
              location={item.location}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
