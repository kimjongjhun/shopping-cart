import React, { Component } from "react";
import Card from "@material-ui/core/Card/Card";
import TextField from "@material-ui/core/TextField/TextField";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography/Typography";
import Item from "../../Item/Item";

class Find extends Component {
  state = {
    searchText: ""
  };

  addToList = event => {
    event.preventDefault();

    if (this.checkList(this.state.searchText)) {
      alert("Item already exists in the list or is already in the cart!");
      this.clearSearch();
      return null;
    }

    this.props.addToList("findList", this.state.searchText);
    this.clearSearch();
  };

  removeFromList = item => {
    const index = this.props.list.indexOf(item);

    this.props.removeFromList("findList", index);
  };

  moveToCart = item => {
    const index = this.props.list.indexOf(item);

    this.props.moveToCart(index);
  };

  checkList = item => {
    if (this.props.list.includes(item) || this.props.cartList.includes(item)) {
      return true;
    }

    return false;
  };

  clearSearch = () => {
    this.setState({ searchText: "" });
  };

  handleFieldChange = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  renderListItems = itemList => {
    return itemList.map(item => {
      return (
        <Item
          item={item}
          cart={true}
          removeFromList={this.removeFromList}
          moveToCart={this.moveToCart}
        />
      );
    });
  };

  render() {
    return (
      <Card style={{ textAlign: "center" }}>
        <Typography variant="h2">Find List</Typography>
        <form onSubmit={this.addToList}>
          <TextField
            id="outlined-search"
            label="Search for item"
            type="search"
            margin="normal"
            variant="outlined"
            value={this.state.searchText}
            onChange={this.handleFieldChange}
          />
        </form>
        <List>{this.renderListItems(this.props.list)}</List>
      </Card>
    );
  }
}

export default Find;
