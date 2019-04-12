import React from "react";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/Grid/Grid";

const Item = props => {
  return (
    <ListItem dense divider key={props.item}>
      <Grid container>
        <Grid item xs={props.cart ? 8 : 10}>
          <h4>{props.item}</h4>
        </Grid>
        <Grid item xs={2}>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={() => props.removeFromList(props.item)}
          >
            Remove
          </Button>
        </Grid>
        <Grid item xs={2}>
          {props.cart && (
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={() => props.moveToCart(props.item)}
            >
              Add to Cart
            </Button>
          )}
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default Item;
