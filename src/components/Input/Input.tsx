import React, { InputHTMLAttributes, ForwardedRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: {
    message?: string;
  };
}
const Input = React.forwardRef(
  ({ type = "text", error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <>
      <input
        ref={ref}
        type={type}
        className={`appearance-none block w-full px-3 py-2 border ${
          error ? "border-red-300" : "border-gray-300"
        } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm`}
        {...props}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </>
  )
);

export default Input;
