import React, { useState } from "react";
import { FaUpload, FaCheck, FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const CreateEditCategory = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    description: "",
    icon: null,
    image: null,
    parentCategory: "",
    status: "active"
  });
  const [errors, setErrors] = useState<any> ({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } : any = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const validateField = (name: string, value: string) => {
    let newErrors : any = { ...errors };
    switch (name) {
      case "name":
        if (!value.trim()) {
          newErrors.name = "Name is required";
        } else {
          delete newErrors.name;
        }
        break;
      case "description":
        if (!value.trim()) {
          newErrors.description = "Description is required";
        } else {
          delete newErrors.description;
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      // Simulating API call
      setTimeout(() => {
        setLoading(false);
        alert("Category saved successfully!");
      }, 2000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Create/Edit Category</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.name ? 'border-red-500' : ''}`}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600" id="name-error">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange(e)}
              rows={3}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.description ? 'border-red-500' : ''}`}
              aria-invalid={errors.description ? "true" : "false"}
              aria-describedby={errors.description ? "description-error" : undefined}
            ></textarea>
            {errors.description && (
              <p className="mt-2 text-sm text-red-600" id="description-error">{errors.description}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="icon" className="block text-sm font-medium text-gray-700">
              Icon
            </label>
            <div className="mt-1 flex items-center">
              <input
                type="file"
                id="icon"
                name="icon"
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
              <label
                htmlFor="icon"
                className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FaUpload className="mr-2 h-5 w-5 text-gray-400" />
                Upload Icon
              </label>
              {formData.icon && (
                <span className="ml-3 text-sm text-gray-500">{formData.icon.name}</span>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <div className="mt-1 flex items-center">
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
              <label
                htmlFor="image"
                className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FaUpload className="mr-2 h-5 w-5 text-gray-400" />
                Upload Image
              </label>
              {formData.image && (
                <span className="ml-3 text-sm text-gray-500">{formData.image.name}</span>
              )}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="parentCategory" className="block text-sm font-medium text-gray-700">
            Parent Category
          </label>
          <div className="mt-1 relative">
            <select
              id="parentCategory"
              name="parentCategory"
              value={formData.parentCategory}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange(e)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">Select a parent category</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <IoMdArrowDropdown className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <div className="mt-2 flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="status"
                value="active"
                checked={formData.status === "active"}
                onChange={handleInputChange}
                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2">Active</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={formData.status === "inactive"}
                onChange={handleInputChange}
                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2">Inactive</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => alert("Operation cancelled")}
          >
            <FaTimes className="mr-2 h-5 w-5" />
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : (
              <>
                <FaCheck className="mr-2 h-5 w-5" />
                Save
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEditCategory;