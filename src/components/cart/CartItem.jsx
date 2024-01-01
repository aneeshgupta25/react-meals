import { currencyFormatter } from "../../util/formatting";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

export default function CartItem({ item }) {
    const buttonCss = 'cursor-pointer text-[1rem] w-6 h-6 rounded-[50%] border-none bg-[#312c1d] text-[#ffc404] flex justify-center items-center hover:bg-[#1d1a16] hover:text-[#ffab04] active:bg-[#1d1a16] active:text-[#ffab04]'
    const cartContext = useContext(CartContext)
  return (
    <li className='flex justify-between items-center my-2 mx-0'>
      <p className='m-0'>{item.name} - {item.quantity} x {currencyFormatter.format(item.price)}</p>
      <p className='m-0 flex gap-4 items-center'>
        <button onClick={() => cartContext.removeItem(item.id)} className={buttonCss}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => cartContext.addItem(item)} className={buttonCss}>+</button>
      </p>
    </li>
  );
}
