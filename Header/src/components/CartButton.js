import React, { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import * as classes from "./CartButton.module.css";
import mitt from "mitt";
const emitter = mitt();

const CartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const [cartQty, setCartQty] = useState(0);
  console.log(emitter);

  useEffect(() => {
    console.log("Header component mounted");

    const listener = (newCartCount) => {
      console.log("Received cartUpdated event:", newCartCount);
      setCartQty(newCartCount);
    };

    emitter.on("cartUpdated", listener);

    return () => {
      emitter.off("cartUpdated", listener);
    };
  }, [emitter]);

  useEffect(() => {
    console.log("Cart quantity updated:", cartQty);
  }, [cartQty]);

  const btnclasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  return (
    <button className={btnclasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQty}</span>
    </button>
  );
};

export default CartButton;
