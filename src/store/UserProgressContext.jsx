import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [progressState, setProgressState] = useState("");
  function showCart() {
    setProgressState("cart");
  }
  function showCheckout() {
    setProgressState("checkout");
  }
  function hideCart() {
    setProgressState("");
  }
  function hideCheckout() {
    setProgressState("");
  }
  const progressContext = {
    progress: progressState,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={progressContext}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
