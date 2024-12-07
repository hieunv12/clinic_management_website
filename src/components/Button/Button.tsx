import React, { ButtonHTMLAttributes } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, isLoading, children, ...props }) => {
  return (
    <button
    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out ${
      isLoading ? "opacity-75 cursor-not-allowed" : ""
    }`}
    disabled={isLoading}
    {...props}
  >
    {isLoading && <AiOutlineLoading3Quarters className="animate-spin h-5 w-5 mr-3" />}
    {children}
  </button>
  );
};

export default Button;
