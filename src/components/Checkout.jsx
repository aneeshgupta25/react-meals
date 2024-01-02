import Modal from "./UI/Modal";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "../components/UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";

const config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartContext = useContext(CartContext);
  const progressContext = useContext(UserProgressContext);
  const { data, error, isLoading: isSending, sendRequest, clearData } = useHttp(
    "http://localhost:3000/orders",
    config,
    undefined
  );
  const totalAmount = cartContext.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  function handleSuccess() {
    progressContext.hideCheckout();
    cartContext.clearCart();
    clearData();
  }
  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
    sendRequest(
      JSON.stringify({
        order: {
          items: cartContext.items,
          customer: customerData,
        },
      })
    );
  }

  let actions = (
    <>
      <Button
        onClick={() => progressContext.hideCheckout()}
        className="text-[#1d1a16] hover:text-[#312c1d] active:text-[#312c1d]"
        textOnly
      >
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );
  if (isSending) {
    actions = <span>Sending Request ...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={progressContext.progress === "checkout"}
        onClose={() => progressContext.hideCheckout()}
      >
        <h2 className="mb-4">Success!</h2>
        <div className="my-4">
          <p>Your order was submitted successfully</p>
          <p>We will get back to you with more details via email..</p>
        </div>
        <p>
          <Button className="flex justify-end gap-4" onClick={handleSuccess}>
            Okay
          </Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={progressContext.progress === "checkout"}
      onClose={() => progressContext.hideCheckout()}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalAmount)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="flex justify-start gap-4">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="flex justify-end gap-4">{actions}</p>
      </form>
    </Modal>
  );
}
