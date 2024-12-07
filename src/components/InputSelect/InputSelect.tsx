import React from "react";
import { useController, Control } from "react-hook-form";
interface InputSelectProps {
  name: string;
  control: Control<any>;
  label: string;
  options: { value: string; label: string }[];
  rules: any;
  defaultValue: string;
}
const InputSelect: React.FC<InputSelectProps> = ({
  name,
  control,
  label,
  options,
  rules,
  defaultValue = "",
}) => {
  const {
    field: { onChange, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });
  return (
    <div className="mb-4">
      {/* Label for select */}
      {label && (
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={name}
        >
          {label}
        </label>
      )}

      {/* Custom Select Element */}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        ref={ref}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error ? "border-red-500" : ""
        }`}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Error message */}
      {error && (
        <p className="text-red-500 text-xs italic mt-1">{error.message}</p>
      )}
    </div>
  );
};

export default InputSelect;
