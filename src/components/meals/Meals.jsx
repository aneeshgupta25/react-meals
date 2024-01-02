import MealItem from "./MealItem";
import { useHttp } from "../../hooks/useHttp.js";
import Error from "../../Error.jsx";

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
  if(error) {
    return <Error title='Failed to fetch meals..' message={error}/>
  }
  return (
    <ul className="w-[90%] max-w-[70rem] list-none my-8 mx-auto p-4 grid grid-cols-auto-fit gap-4">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
