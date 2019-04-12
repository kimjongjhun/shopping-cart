import React, { Component } from "react";
import Card from "@material-ui/core/Card/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Button from "@material-ui/core/Button/Button";

class Cart extends Component {
  removeFromList = item => {
    const index = this.props.list.indexOf(item);

    this.props.removeFromList("cartList", index);
  };

  renderListItems = () => {
    return this.props.list.map(item => {
      return (
        <ListItem dense key={item}>
          <h4>{item}</h4>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => this.removeFromList(item)}
          >
            Remove
          </Button>
        </ListItem>
      );
    });
  };

  render() {
    return (
      <Card>
        Cart List
        <List>{this.renderListItems()}</List>
      </Card>
    );
  }
}

export default Cart;
