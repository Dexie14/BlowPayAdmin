import React, { forwardRef } from "react";

interface InputProps {
  label?: string;
  name: string;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  error?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
}

const InputField = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      type = "text",
      placeholder,
      className,
      error,
      onBlur,
      value,
      onChange,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={`mb-4 ${className}`}>
        {label && (
          <label htmlFor={name} className="text-sm font-semibold ">
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          onBlur={onBlur}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          ref={ref}
          {...rest}
          className={`mt-1 w-full border placeholder:text-placeHolderText border-inputBorder p-4 rounded-[15px] shadow-sm focus:outline-none focus:border-blowText text-sm ${
            error ? "border-blowSecondary" : ""
          }`}
        />
        {error && <span className="text-sm text-blowSecondary mt-1">{error}</span>}
      </div>
    );
  }
);

export default InputField;
