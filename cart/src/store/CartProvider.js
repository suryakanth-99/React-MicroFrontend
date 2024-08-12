import { useReducer } from "react";
import CartContext from "./Cart-context";
import React from "react";

const defaultCartState = {
  items: [
    {
      id: "m1",
      name: "Mac & Cheese",
      price: "100",
      qty: 1,
    },
    {
      id: "m2",
      name: "Margherita Pizza",
      price: "180",
      qty: 2,
    },
    {
      id: "m3",
      name: "Caesar Salad",
      price: "120",
      qty: 1,
    },
    {
      id: "m4",
      name: "Spaghetti Carbonara",
      price: "150",
      qty: 3,
    },
  ],
  totalAmount: 1030,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.itemValue.price * action.itemValue.qty;

    const itemPresentIndex = state.items.findIndex(
      (item) => item.id === action.itemValue.id
    );

    let updatedItems;

    const existingCartItem = state.items[itemPresentIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        qty: existingCartItem.qty + action.itemValue.qty,
      };
      updatedItems = [...state.items];
      updatedItems[itemPresentIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.itemValue);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.qty === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, qty: existingItem.qty - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", itemValue: item });
  };

  const removeitemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartValues = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeitemFromCart,
  };

  return (
    <CartContext.Provider value={cartValues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
