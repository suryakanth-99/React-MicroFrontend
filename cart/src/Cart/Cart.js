import React, { useContext, useState } from "react";
import * as classes from "./Cart.module.css";
import CartContext from "../store/Cart-context";
import CartItem from "./CartItem";
import Card from "../UI/Card";

const Cart = (props) => {
  const cartctxt = useContext(CartContext);
  console.log(cartctxt);

  const CartItemAddHandler = (item) => {
    cartctxt.addItem({ ...item, qty: 1 });
  };
  const CartItemRemoveHandler = (id) => {
    cartctxt.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctxt.items.map((items) => (
        <CartItem
          key={items.id}
          name={items.name}
          price={items.price}
          qty={items.qty}
          onAdd={CartItemAddHandler.bind(null, items)}
          onRemove={CartItemRemoveHandler.bind(null, items.id)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Card>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartctxt.totalAmount}</span>
      </div>
    </Card>
  );
};

export default Cart;
