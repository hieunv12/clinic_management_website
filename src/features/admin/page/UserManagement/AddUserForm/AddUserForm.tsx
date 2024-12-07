import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaUserCog, FaToggleOn } from "react-icons/fa";
import { motion } from "framer-motion";

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    status: "activate"
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let newErrors: any = { ...errors };

    switch (name) {
      case "fullName":
        if (!value.trim()) {
          newErrors.fullName = "Full name is required";
        } else {
          delete newErrors.fullName;
        }
        break;
      case "email":
        if (!value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
          newErrors.email = "Invalid email format";
        } else {
          delete newErrors.email;
        }
        break;
      case "password":
        if (value.length < 8) {
          newErrors.password = "Password must be at least 8 characters";
        } else {
          delete newErrors.password;
        }
        break;
      case "role":
        if (!value) {
          newErrors.role = "Please select a role";
        } else {
          delete newErrors.role;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform final validation
    Object.keys(formData).forEach((key) => validateField(key, formData[key as keyof typeof formData]));

    if (Object.keys(errors).length === 0) {
      // Submit the form data
      console.log("Form submitted:", formData);
      // Here you would typically send the data to your backend
      // and handle the confirmation email sending
      alert("User account created successfully! A confirmation email has been sent.");
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add New User</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className={`block w-full pl-10 pr-3 py-2 border ${errors.fullName ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleInputChange}
                aria-invalid={errors.fullName ? "true" : "false"}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
              />
            </div>
            {errors.fullName && (
              <p className="mt-2 text-sm text-red-600" id="fullName-error">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className={`block w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
            </div>
            {errors.email && (
              <p className="mt-2 text-sm text-red-600" id="email-error">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                name="password"
                id="password"
                className={`block w-full pl-10 pr-3 py-2 border ${errors.password ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                placeholder="********"
                value={formData.password}
                onChange={handleInputChange}
                aria-invalid={errors.password ? "true" : "false"}
                aria-describedby={errors.password ? "password-error" : undefined}
              />
            </div>
            {errors.password && (
              <p className="mt-2 text-sm text-red-600" id="password-error">{errors.password}</p>
            )}
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUserCog className="h-5 w-5 text-gray-400" />
              </div>
              <select
                name="role"
                id="role"
                className={`block w-full pl-10 pr-3 py-2 border ${errors.role ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                value={formData.role}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange(e as unknown as React.ChangeEvent<HTMLInputElement>)}
                aria-invalid={errors.role ? "true" : "false"}
                aria-describedby={errors.role ? "role-error" : undefined}
              >
                <option value="">Select a role</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            {errors.role && (
              <p className="mt-2 text-sm text-red-600" id="role-error">{errors.role}</p>
            )}
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaToggleOn className="h-5 w-5 text-gray-400" />
              </div>
              <select
                name="status"
                id="status"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={formData.status}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange(e as unknown as React.ChangeEvent<HTMLInputElement>)}
              >
                <option value="activate">Activate</option>
                <option value="deactivate">Deactivate</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Save
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;