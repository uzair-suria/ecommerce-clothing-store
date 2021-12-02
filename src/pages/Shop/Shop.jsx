import React, { Component } from "react";
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";
import SHOP_DATA from "./shop.data";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherData }) => {
          return <PreviewCollection key={id} {...otherData} />;
        })}
      </div>
    );
  }
}

export default Shop;
