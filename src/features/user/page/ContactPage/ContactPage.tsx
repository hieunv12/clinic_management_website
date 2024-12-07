import React, { useState } from "react";
import { FiUser, FiMail, FiPhone, FiMessageSquare, FiCalendar, FiMapPin } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentDate: "",
    preferredDoctor: "",
    message: ""
  });
  const [errors, setErrors] = useState<any>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = "Tên là bắt buộc";
    if (!formData.email.trim()) {
      newErrors.email = "Email là bắt buộc";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Số điện thoại là bắt buộc";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }
    if (!formData.appointmentDate) newErrors.appointmentDate = "Ngày hẹn là bắt buộc";
    if (!formData.preferredDoctor) newErrors.preferredDoctor = "Vui lòng chọn bác sĩ";
    if (!formData.message.trim()) newErrors.message = "Ghi chú là bắt buộc";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const inputClasses = "w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:ring";
  const labelClasses = "block mb-2 text-sm font-bold text-gray-700";
  const errorClasses = "mt-1 text-xs text-red-500";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Thông Tin Liên Hệ và Đặt Lịch Khám</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Thông Tin Liên Hệ</h3>
            <div className="flex items-center space-x-2">
              <FiMapPin className="text-blue-500" />
              <span>123 Đường ABC, Quận XYZ, Thành phố HCM</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiPhone className="text-blue-500" />
              <span>0123 456 789</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiMail className="text-blue-500" />
              <span>contact@phongkham.com</span>
            </div>
            <div className="mt-4">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4946681007436!2d106.65843061471815!3d10.773374892323565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1623145729839!5m2!1sen!2s"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="/" className="text-blue-600 hover:text-blue-800"><FaFacebook size={24} /></a>
              <a href="/" className="text-blue-400 hover:text-blue-600"><FaTwitter size={24} /></a>
              <a href="/" className="text-pink-600 hover:text-pink-800"><FaInstagram size={24} /></a>
            </div>
          </div>
          
          {/* Appointment Booking Form */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Đặt Lịch Khám</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className={labelClasses}>Họ và tên</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={`${inputClasses} pl-10 ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Nguyễn Văn A"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                {errors.name && <p className={errorClasses}>{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className={labelClasses}>Số điện thoại</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className={`${inputClasses} pl-10 ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="0123456789"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
              </div>
              
              <div>
                <label htmlFor="appointmentDate" className={labelClasses}>Ngày hẹn</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiCalendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="appointmentDate"
                    name="appointmentDate"
                    type="date"
                    required
                    className={`${inputClasses} pl-10 ${errors.appointmentDate ? 'border-red-500' : ''}`}
                    value={formData.appointmentDate}
                    onChange={handleChange}
                  />
                </div>
                {errors.appointmentDate && <p className={errorClasses}>{errors.appointmentDate}</p>}
              </div>
              
              <div>
                <label htmlFor="preferredDoctor" className={labelClasses}>Bác sĩ mong muốn</label>
                <select
                  id="preferredDoctor"
                  name="preferredDoctor"
                  required
                  className={`${inputClasses} ${errors.preferredDoctor ? 'border-red-500' : ''}`}
                  value={formData.preferredDoctor}
                  onChange={handleChange}
                >
                  <option value="">Chọn bác sĩ</option>
                  <option value="doctor1">Bác sĩ Nguyễn Văn A</option>
                  <option value="doctor2">Bác sĩ Trần Thị B</option>
                  <option value="doctor3">Bác sĩ Lê Văn C</option>
                </select>
                {errors.preferredDoctor && <p className={errorClasses}>{errors.preferredDoctor}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className={labelClasses}>Ghi chú</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                    <FiMessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={`${inputClasses} pl-10 ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Nhập ghi chú hoặc triệu chứng của bạn..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                {errors.message && <p className={errorClasses}>{errors.message}</p>}
              </div>
              
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                >
                  Đặt lịch ngay
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {isSubmitted && (
          <div className="mt-4 p-4 bg-green-100 rounded-md">
            <p className="text-green-700 text-center">Yêu cầu đặt lịch của bạn đã được gửi thành công!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
