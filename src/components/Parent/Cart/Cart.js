import React, { Component } from "react";
import Card from "@material-ui/core/Card/Card";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography/Typography";
import Item from "../../Item/Item";

class Cart extends Component {
  removeFromList = item => {
    const index = this.props.list.indexOf(item);

    this.props.removeFromList("cartList", index);
  };

  renderListItems = () => {
    return this.props.list.map(item => {
      return (
        <Item item={item} cart={false} removeFromList={this.removeFromList} />
      );
    });
  };

  render() {
    return (
      <Card style={{ textAlign: "center" }}>
        <Typography variant="h2">Cart List</Typography>
        <List>{this.renderListItems()}</List>
      </Card>
    );
  }
}

export default Cart;
