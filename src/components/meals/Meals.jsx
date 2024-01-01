import MealItem from "./MealItem";
import { useHttp } from "../../hooks/useHttp.js";

const config = {}

export default function Meals() {
  const { data: loadedMeals, error, isLoading } = useHttp(
    "http://localhost:3000/meals",
    config,
    []
  );  
  if(isLoading) {
    return <p className='text-center'>Fetching Meals...</p>
  }
  return (
    <ul className="w-[90%] max-w-[70rem] list-none my-8 mx-auto p-4 grid grid-cols-auto-fit gap-4">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
