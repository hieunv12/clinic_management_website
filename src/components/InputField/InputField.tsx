import React, { useState } from 'react';
 
import { FieldError, UseFormRegister } from "react-hook-form";
 
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import Label from '../Label/Label';
import Input from '../Input/Input';
interface InputFieldProps {
  label: string;
  id: string;
  error?: FieldError;
  type?: "text" | "email" | "password";
  register: UseFormRegister<any>;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, error, type = "text", register, placeholder, ...props}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="mt-1 relative">
        <Input
          id={id}
          type={type === "password" && showPassword ? "text" : type}
          error={error}
          {...register(id)}
          {...props}
          placeholder={placeholder}
        />
        {type === "email" && (
         <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
         <FaEnvelope className="h-5 w-5 text-gray-400" />
       </div>
        )}
        {type === "password" && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaEyeSlash className="h-5 w-5 text-gray-400" />
            ) : (
              <FaEye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        )}
      </div>
     </div>
  );
};

export default InputField;

