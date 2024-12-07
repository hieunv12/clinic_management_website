import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaSpinner, FaEye, FaEyeSlash, FaPhone } from "react-icons/fa";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailOrPhone: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Họ và tên là bắt buộc";
    if (!formData.emailOrPhone.trim()) newErrors.emailOrPhone = "Email hoặc số điện thoại là bắt buộc";
    else if (!validateEmailOrPhone(formData.emailOrPhone)) newErrors.emailOrPhone = "Email hoặc số điện thoại không hợp lệ";
    if (formData.password.length < 6) newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateEmailOrPhone = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        alert("Đăng ký thành công!");
      }, 2000);
    }
  };

  const togglePasswordVisibility = (field: string) => {
    if (field === "password") setShowPassword(!showPassword);
    if (field === "confirmPassword") setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Đăng ký</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="full-name" className="sr-only">Họ và tên</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="full-name"
                  name="fullName"
                  type="text"
                  required
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border ${errors.fullName ? "border-red-300" : "border-gray-300"} placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  placeholder="Họ và tên"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email-or-phone" className="sr-only">Email hoặc Số điện thoại</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {formData.emailOrPhone.includes("@") ? (
                    <FaEnvelope className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  ) : (
                    <FaPhone className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  )}
                </div>
                <input
                  id="email-or-phone"
                  name="emailOrPhone"
                  type="text"
                  required
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border ${errors.emailOrPhone ? "border-red-300" : "border-gray-300"} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  placeholder="Email hoặc Số điện thoại"
                  value={formData.emailOrPhone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Mật khẩu</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 pl-10 pr-10 border ${errors.password ? "border-red-300" : "border-gray-300"} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  placeholder="Mật khẩu"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => togglePasswordVisibility("password")}
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  ) : (
                    <FaEye className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">Xác nhận mật khẩu</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 pl-10 pr-10 border ${errors.confirmPassword ? "border-red-300" : "border-gray-300"} placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  placeholder="Xác nhận mật khẩu"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => togglePasswordVisibility("confirmPassword")}
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  ) : (
                    <FaEye className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {Object.keys(errors).map((key) => (
            <p key={key} className="mt-2 text-sm text-red-600">{errors[key]}</p>
          ))}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isLoading}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {isLoading ? (
                  <FaSpinner className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 animate-spin" />
                ) : (
                  <FaLock className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                )}
              </span>
              {isLoading ? "Đang đăng ký..." : "Đăng ký"}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Đã có tài khoản?{" "}
            <a href="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Đăng nhập
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
