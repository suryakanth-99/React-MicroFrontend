import React, { useRef, useState, useEffect } from "react";
import * as classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  useEffect(() => {
    if (amountInputRef.current) {
      // Access input element here after component mounts
      console.log(amountInputRef.current.value);
    }
  }, [amountInputRef]);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredQuantity = amountInputRef.current.value;
    const enteredQuantityNumber = +enteredQuantity;
    console.log(enteredQuantityNumber);
    props.onAddToCart(enteredQuantityNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
