const Input = ({
    label,
    placeholder,
    type = "text",
}) => {
    return (
        <div className="space-y-2">
            <label className="text-sm font-semibold">
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#ff6a00]"
            />
        </div>
    );
};

export default Input;