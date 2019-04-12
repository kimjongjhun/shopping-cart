import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Find from "./Find/Find";
import Cart from "./Cart/Cart";

class Parent extends Component {
  state = {
    findList: [],
    cartList: []
  };

  addToList = (list, item) => {
    const itemList = this.state[list];

    itemList.push(item);

    this.setState({
      [list]: itemList
    });
  };

  removeFromList = (list, index) => {
    const itemList = this.state[list];

    itemList.splice(index, 1);

    this.setState({
      [list]: itemList
    });
  };

  moveToCart = index => {
    let { findList, cartList } = this.state;
    const item = findList.splice(index, 1);
    cartList = cartList.concat(item);

    this.setState({
      findList,
      cartList
    });
  };

  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <Find
            list={this.state.findList}
            addToList={this.addToList}
            removeFromList={this.removeFromList}
            moveToCart={this.moveToCart}
          />
        </Grid>
        <Grid item xs={6}>
          <Cart
            list={this.state.cartList}
            removeFromList={this.removeFromList}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Parent;
