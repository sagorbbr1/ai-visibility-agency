const Button = ({
  children,
  className = "",
  type = "button",
  fullWidth = false,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${fullWidth ? "w-full" : "w-fit"}
        rounded-xl
        bg-[#ff6a00]
        px-8
        py-4
        font-semibold
        text-white
        transition
        hover:bg-[#e45d00]
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;