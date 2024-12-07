import React, { useState } from "react";
import { FiSearch, FiEdit, FiTrash2, FiPlus, FiFilter } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";

const CategoryManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [filterParentCategory, setFilterParentCategory] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  // Dummy data for categories
  const categories = [
    {
      id: 1,
      name: "Electronics",
      description: "All electronic devices and accessories",
      icon: "🖥️",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      parentCategory: null,
      status: "active",
    },
    {
      id: 2,
      name: "Books",
      description: "Fiction and non-fiction books",
      icon: "📚",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      parentCategory: null,
      status: "active",
    },
    {
      id: 3,
      name: "Smartphones",
      description: "Mobile phones and accessories",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      parentCategory: "Electronics",
      status: "active",
    },
    {
      id: 4,
      name: "Clothing",
      description: "All types of clothing and apparel",
      icon: "👕",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      parentCategory: null,
      status: "inactive",
    },
    {
      id: 5,
      name: "Home Decor",
      description: "Decorative items for home",
      icon: "🏠",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      parentCategory: null,
      status: "active",
    },
  ];

  const handleSearch = () => {
    setIsLoading(true);
    // Simulating API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleDelete = (category: any) => {
    setSelectedCategory(category);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    // Implement delete logic here
    setShowDeleteModal(false);
    setSelectedCategory(null);
  };

  const handleEdit = (category: any) => {
    // Implement edit logic here
    console.log("Edit category:", category);
  };

  const handleAddCategory = () => {
    // Implement add category logic here
    console.log("Add new category");
  };

  const filteredCategories = categories.filter((category) => {
    return (
      (filterParentCategory === "" ||
        category.parentCategory === filterParentCategory) &&
      (filterStatus === "" || category.status === filterStatus)
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Category Management</h1>
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="w-full sm:w-2/3 mb-4 sm:mb-0">
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search categories"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={handleSearch}
              aria-label="Search"
            >
              <FiSearch className="w-5 h-5" />
            </button>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleAddCategory}
        >
          <FiPlus className="mr-2" /> Add Category
        </button>
      </div>

      <div className="mb-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Parent Category
          </label>
          <select
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filterParentCategory}
            onChange={(e) => setFilterParentCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="null">None</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
          </select>
        </div>
        <div className="w-full sm:w-1/3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Status
          </label>
          <select
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <FaSpinner className="animate-spin text-4xl text-blue-500" />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <div className="h-[calc(100vh-400px)] overflow-y-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200 sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Description</th>
                  <th className="px-4 py-3 text-center">Icon</th>
                  <th className="px-4 py-3 text-center">Image</th>
                  <th className="px-4 py-3 text-left">Parent Category</th>
                  <th className="px-4 py-3 text-center">Status</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCategories.map((category) => (
                  <tr
                    key={category.id}
                    className="border-b border-gray-200 hover:bg-gray-100 transition duration-300"
                  >
                    <td className="px-4 py-3">{category.name}</td>
                    <td className="px-4 py-3">{category.description}</td>
                    <td className="px-4 py-3 text-center">{category.icon}</td>
                    <td className="px-4 py-3">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-12 h-12 object-cover rounded-full mx-auto"
                      />
                    </td>
                    <td className="px-4 py-3">
                      {category.parentCategory || "-"}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          category.status === "active"
                            ? "bg-green-200 text-green-800"
                            : "bg-red-200 text-red-800"
                        }`}
                      >
                        {category.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        className="text-blue-500 hover:text-blue-700 mr-2"
                        onClick={() => handleEdit(category)}
                        aria-label={`Edit ${category.name}`}
                      >
                        <FiEdit className="w-5 h-5" />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(category)}
                        aria-label={`Delete ${category.name}`}
                      >
                        <FiTrash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-between items-center fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Showing {(currentPage - 1) * 10 + 1} to{" "}
          {Math.min(currentPage * 10, filteredCategories.length)} of{" "}
          {filteredCategories.length} entries
        </p>
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, Math.ceil(filteredCategories.length / 10))
              )
            }
            disabled={currentPage === Math.ceil(filteredCategories.length / 10)}
          >
            Next
          </button>
        </div>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p>
              Are you sure you want to delete the category "{selectedCategory.name}"?
            </p>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryManagement;
