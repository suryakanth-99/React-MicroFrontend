import React from "react";
import MealsImg from "../../Assets/meals.jpg";
import * as classes from "./Header.module.css";
import CartButton from "./CartButton";
import { useNavigate } from "react-router-dom";

// const [cartClickState, setCartClickState]= useState(false);

const Header = (props) => {
  const navigate = useNavigate();
  const CartButtonClickHandler = () => {
    console.log("cart icon clicked");
    navigate("/cart");
  };
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h2>Welcome to our Hotel</h2>
        <CartButton onClick={CartButtonClickHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="Table full of meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
