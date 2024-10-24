import React, { forwardRef, useState } from "react";

import HidePassword from "@/assets/icons/HidePassword.svg";
import togglePasswordIcon from "@/assets/icons/TogglePassword.svg";

interface InputProps {
  label?: string;
  name: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  error?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
}

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
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
    const [inputType, setInputType] = useState("password");

    const togglePassword = () => {
      setInputType((prevInputType) =>
        prevInputType === "password" ? "text" : "password"
      );
    };

    return (
      <div className={`${className}`}>
        {label && (
          <label htmlFor={name} className="text-sm font-semibold ">
            {label}
          </label>
        )}

        <div
          className={`mt-1 flex border-inputBorder border p-4 rounded-[6px] bg-white `}
        >
          <input
            id={name}
            name={name}
            type={inputType}
            onBlur={onBlur}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            ref={ref}
            {...rest}
            className={` w-full placeholder:text-placeHolderText focus:outline-none focus:border-blowText text-sm `}
          />
          {inputType === "password" ? (
            <img
              src={HidePassword}
              alt="toggle password"
              onClick={togglePassword}
            />
          ) : (
            <img
              src={togglePasswordIcon}
              alt="toggle password"
              onClick={togglePassword}
            />
          )}
        </div>
        {error && <span className="text-sm text-blowSecondary mt-1">{error}</span>}
      </div>
    );
  }
);

export default PasswordInput;
