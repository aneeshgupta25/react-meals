import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = "", ...props }) {
  const dialogRef = useRef();
  useEffect(() => {
    const dialog = dialogRef.current
    if (open) {
      dialog.showModal();
    }
    return () => dialog.close()
  }, [open]);

  return createPortal(
    <dialog
      className={`bg-[#e4ddd4] rounded-[6px] border-none shadow-md p-4 w-[80%] max-w-[40rem] animate-modal backdrop:bg-[rgba(0,0,0,0.55)] ${className}`}
      ref={dialogRef}     
      {...props} 
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
