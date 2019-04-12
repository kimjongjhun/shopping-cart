import React, { Component } from "react";
import Card from "@material-ui/core/Card/Card";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem/ListItem";

class Find extends Component {
  state = {
    searchText: ""
  };

  addToList = event => {
    event.preventDefault();

    if (this.checkDupe(this.state.searchText)) {
      alert("Item already exists in the find list!");
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

  checkDupe = item => {
    if (this.props.list.includes(item)) {
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
        <ListItem dense key={item}>
          <h4>{item}</h4>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => this.removeFromList(item)}
          >
            Remove
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => this.moveToCart(item)}
          >
            Add to Cart
          </Button>
        </ListItem>
      );
    });
  };

  render() {
    return (
      <Card>
        Find List
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
          <Button variant="outlined" color="primary" type="submit">
            Add
          </Button>
        </form>
        <List>{this.renderListItems(this.props.list)}</List>
      </Card>
    );
  }
}

export default Find;
