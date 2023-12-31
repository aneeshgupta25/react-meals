import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import { useContext } from 'react'
import CartContext from '../store/CartContext'

export default function MealItem({ meal }) {
  const cartContext = useContext(CartContext)
  return (
    <li className="rounded-[1rem] overflow-hidden text-center shadow-md bg-[#1d1a16]">
      <article className="h-[100%] flex flex-col justify-between">
        <img
          className="w-[100%] h-[20rem] object-cover"
          src={`http://localhost:3000/${meal.image}`}
          alt={meal.name}
        />
        <div>
          <h3 className="text-[1.5rem] font-bold my-3 mx-0">{meal.name}</h3>
          <p className="inline-block text-[0.9rem] font-bold py-2 px-8 m-0 rounded-[4px] text-[#ffc404] bg-[#312c1d]">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="m-4">{meal.description}</p>
        </div>
        <p className="mb-6">
          <Button onClick={() => cartContext.addItem(meal)}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
