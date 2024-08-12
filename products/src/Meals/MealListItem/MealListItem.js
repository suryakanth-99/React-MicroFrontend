import React, { useState } from "react";
import * as classes from "./MealListItem.module.css";
import MealItemForm from "./MealItemForm";
import mitt from "mitt";
const emitter = mitt();

const MealListItem = (props) => {
  const [cart, setCart] = useState([]); // Assuming you use useState from React

  const addToCartHandler = (qty) => {
    const addedMeal = {
      id: props.id,
      name: props.name,
      quantity: qty,
      price: props.price,
    };
    // console.log(addedMeal);
    // emitter.emit("cartUpdated", qty);
    const updatedCart = [...cart]; // Create a copy of the cart state
    const existingItemIndex = updatedCart.findIndex(
      (item) => item.id === addedMeal.id
    );

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += qty;
    } else {
      updatedCart.push(addedMeal);
    }

    setCart(updatedCart); // Update the cart state

    const newTotalCartCount = updatedCart.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    // console.log(cart);
    console.log("Emitted cartUpdated event:", newTotalCartCount);

    // Add a delay to test timing (remove later)
    setTimeout(() => {
      emitter.emit("cartUpdated", newTotalCartCount);
    }, 1000);

    // emitter.emit("cartUpdated", newTotalCartCount);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealListItem;
