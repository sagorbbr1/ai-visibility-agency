const Button = ({
    children,
    className = "",
    type = "button",
}) => {
    return (
        <button
            type={type}
            className={`w-full rounded-xl bg-[#ff6a00] py-4 font-semibold text-white transition hover:bg-[#e45d00] ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;