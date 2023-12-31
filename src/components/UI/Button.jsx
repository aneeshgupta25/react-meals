export default function Button({ children, textOnly, className, ...props }) {
  const cssClasses =
    className +
    (textOnly
      ? " cursor-pointer bg-transparent border-none text-[#ffc404] hover:text-[#ffab04] active:text-[#ffab04]"
      : " font-[inherit] cursor-pointer bg-[#ffc404] border-[1px] border-solid border-[#ffc404] text-[#1f1a09] py-2 px-6 rounded-[4px] hover:bg-[#ffab04] hover:border-[#ffab04] hover:text-[#1f1a09] active:bg-[#ffab04] active:border-[#ffab04] active:text-[#1f1a09]");
  return (
    <button {...props} className={cssClasses}>
      {children}
    </button>
  );
}
