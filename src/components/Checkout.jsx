import Modal from "./UI/Modal";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "../components/UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout() {
  const cartContext = useContext(CartContext);
  const progressContext = useContext(UserProgressContext);
  const totalAmount = cartContext.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <Modal open={progressContext.progress === "checkout"} onClose={() => progressContext.hideCheckout()}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalAmount)}</p>
        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="flex justify-start gap-4">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="flex justify-end gap-4">
          <Button
            onClick={() => progressContext.hideCheckout()}
            className="text-[#1d1a16] hover:text-[#312c1d] active:text-[#312c1d]"
            textOnly
          >
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
