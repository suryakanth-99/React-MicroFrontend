import React, { useEffect, useState } from "react";
import * as classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealListItem from "./MealListItem/MealListItem";
import data from "../data.json";
export const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    setMeals(data);
  });
  const content = (
    <ul>
      {meals.map((items) => (
        <MealListItem
          key={items.id}
          id={items.id}
          name={items.name}
          description={items.description}
          price={items.price}
        />
      ))}
    </ul>
  );

  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};
