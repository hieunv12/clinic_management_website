import React, { useState, useRef, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

const VerificationCode = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && index > 0 && code[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const verificationCode = code.join("");
    if (verificationCode.length !== 6) {
      setError("Vui lòng nhập đủ 6 ký tự");
      return;
    }
    setError("");
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`Mã xác minh: ${verificationCode}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Xác minh mã</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Vui lòng nhập mã xác minh 6 ký tự
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex justify-center space-x-2">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el: HTMLInputElement | null) => {
                  if (el) inputRefs.current[index] = el;
                }}
                type="text"
                maxLength={1}
                className="w-12 h-12 text-center text-2xl border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <FaSpinner className="h-5 w-5 mr-2 animate-spin" />
                  Đang xác minh...
                </>
              ) : (
                "Xác minh"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerificationCode;
