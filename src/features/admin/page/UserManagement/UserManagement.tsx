import React, { useState, useEffect } from "react";
import { FaSearch, FaEdit, FaTrash, FaSort, FaFilter } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";

const UserManagement = () => {
  const [items, setItems] = useState<any[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [roleFilter, setRoleFilter] = useState("all");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const dummyData = [
        { id: 1, name: "John Doe", email: "john@example.com", phone: "+1 123-456-7890", role: "Bác sĩ", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "+1 234-567-8901", role: "Người dùng", status: "Inactive" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "+1 345-678-9012", role: "Y tá", status: "Active" },
        { id: 4, name: "Alice Brown", email: "alice@example.com", phone: "+1 456-789-0123", role: "Người dùng", status: "Active" },
        { id: 5, name: "Charlie Davis", email: "charlie@example.com", phone: "+1 567-890-1234", role: "Bác sĩ", status: "Inactive" },
        { id: 6, name: "Eva Wilson", email: "eva@example.com", phone: "+1 678-901-2345", role: "Y tá", status: "Active" },
        { id: 7, name: "Frank Miller", email: "frank@example.com", phone: "+1 789-012-3456", role: "Người dùng", status: "Active" },
      ];
      setItems(dummyData);
      setFilteredItems(dummyData);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch items. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    const results = items.filter(
      (item) =>
        (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone.includes(searchTerm)) &&
        (roleFilter === "all" || item.role === roleFilter)
    );
    setFilteredItems(results);
    setCurrentPage(1);
  }, [searchTerm, items, roleFilter]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }

    const sortedItems = [...filteredItems].sort((a, b) => {
      if (a[column] < b[column]) return sortOrder === "asc" ? -1 : 1;
      if (a[column] > b[column]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredItems(sortedItems);
  };

  const handleEdit = (id: number) => {
    console.log("Edit item with id:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete item with id:", id);
  };

  const handleRoleFilter = (role: string) => {
    setRoleFilter(role);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CgSpinner className="animate-spin text-4xl text-blue-500" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow overflow-hidden">
        <div className="container mx-auto p-6 h-full flex flex-col">
          <div className="mb-4 flex justify-between items-center">
            <div className="relative flex-grow mr-4">
              <input
                type="text"
                placeholder="Search by name, email or phone"
                className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                value={searchTerm}
                onChange={handleSearch}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <div className="flex items-center">
              <FaFilter className="text-gray-400 mr-2" />
              <select
                className="border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                value={roleFilter}
                onChange={(e) => handleRoleFilter(e.target.value)}
              >
                <option value="all">Tất cả</option>
                <option value="Bác sĩ">Bác sĩ</option>
                <option value="Người dùng">Người dùng</option>
                <option value="Y tá">Y tá</option>
              </select>
            </div>
          </div>

          <div className="overflow-auto flex-grow shadow-md rounded-lg">
            <table className="w-full table-auto">
              <thead className="sticky top-0 bg-gray-200">
                <tr className="text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left cursor-pointer" onClick={() => handleSort("name")}>
                    Name {sortColumn === "name" && <FaSort className="inline" />}
                  </th>
                  <th className="py-3 px-6 text-left cursor-pointer" onClick={() => handleSort("email")}>
                    Email {sortColumn === "email" && <FaSort className="inline" />}
                  </th>
                  <th className="py-3 px-6 text-left cursor-pointer" onClick={() => handleSort("phone")}>
                    Phone {sortColumn === "phone" && <FaSort className="inline" />}
                  </th>
                  <th className="py-3 px-6 text-left cursor-pointer" onClick={() => handleSort("role")}>
                    Role {sortColumn === "role" && <FaSort className="inline" />}
                  </th>
                  <th className="py-3 px-6 text-left cursor-pointer" onClick={() => handleSort("status")}>
                    Status {sortColumn === "status" && <FaSort className="inline" />}
                  </th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {currentItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 hover:bg-gray-100 transition duration-300"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">{item.name}</td>
                    <td className="py-3 px-6 text-left">{item.email}</td>
                    <td className="py-3 px-6 text-left">{item.phone}</td>
                    <td className="py-3 px-6 text-left">{item.role}</td>
                    <td className="py-3 px-6 text-left">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${item.status === "Active" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <button
                          onClick={() => handleEdit(item.id)}
                          className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
                          aria-label="Edit"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                          aria-label="Delete"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center mt-4 text-gray-500">No results found</div>
          )}
        </div>
      </div>

      <div className="bg-gray-100 p-4 border-t border-gray-200">
        <div className="flex justify-center">
          {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
