const Input = ({
  Icon,
  placeholder,
  type,
  border,
  label,
  inputId,
  value,
  state,
  min,
  max,
}) => {
  return (
    <div>
      {Icon && (
        <div className="mt-10 rounded-tl-[10px] rounded-bl-[10px] flex ">
          <div className="input__1 rounded-tl-[10px] rounded-bl-[10px] flex items-center px-6 bg-[#00B4D8]">
            <Icon className="w-9 h-9 " />
          </div>
          <input
            className={`${
              border && 'border'
            } px-5 py-4 w-full placeholder-[#989898] text-2xl font-medium tracking-wide  rounded-tr-[10px] rounded-br-[10px]`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => state(e.target.value)}
            autoComplete="on"
            min={min}
            max={max}
          />
        </div>
      )}

      {label && (
        <div className="mt-6 rounded-tl-[10px] rounded-bl-[10px]">
          <label
            className="text-lg font-medium tracking-wider mb-[15px] inline-block"
            htmlFor={inputId}
          >
            {label}
          </label>
          <input
            className={`${
              border && 'border'
            } px-5 py-4 w-full placeholder-[#989898] text-2xl font-medium tracking-wide  rounded-tr-[10px] rounded-br-[10px]`}
            type={type}
            placeholder={placeholder}
            id={inputId}
            value={value}
            onChange={(e) => state(e.target.value)}
            autoComplete="on"
            min={min}
            max={max}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
