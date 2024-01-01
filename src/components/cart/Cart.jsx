import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import UserProgressContext from "../../store/UserProgressContext";
import { currencyFormatter } from "../../util/formatting";
import Button from "../UI/Button";
import CartItem from "./CartItem";

export default function Cart() {
  const cartContext = useContext(CartContext);
  const progressContext = useContext(UserProgressContext);
  const cartTotal = cartContext.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <Modal
      open={progressContext.progress === "cart"}
      onClose={() =>
        progressContext.progress === "cart" ? progressContext.hideCart() : null
      }
    >
      <h2 className="my-4 mx-0">Your Cart</h2>
      <ul className="list-none my-2 mx-0 p-0">
        {cartContext.items.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </ul>
      <p className="flex justify-end my-8 mx-0 text-[1.15rem] font-bold text-[#46443c]">
        {currencyFormatter.format(cartTotal)}
      </p>
      <p className="flex justify-end gap-4">
        <Button
          textOnly
          onClick={() => progressContext.hideCart()}
          className="text-[#1d1a16] hover:text-[#312c1d] active:text-[#312c1d]"
        >
          Close
        </Button>
        {cartContext.items.length !== 0 && (
          <Button
            onClick={() => progressContext.showCheckout()}
            className="text-[#1d1a16]"
          >
            Go to checkout
          </Button>
        )}
      </p>
    </Modal>
  );
}
