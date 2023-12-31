import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");
        if (!response.ok) throw new Error({ message: "Unable to fetch meals" });
        const meals = await response.json();
        setLoadedMeals(meals);
      } catch (error) {}
    }
    fetchMeals();
  }, []);

  return (
    <ul className='w-[90%] max-w-[70rem] list-none my-8 mx-auto p-4 grid grid-cols-auto-fit gap-4'>
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />        
      ))}
    </ul>
  );
}
