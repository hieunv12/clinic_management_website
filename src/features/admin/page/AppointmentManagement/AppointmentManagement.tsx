import React, { useState, useEffect } from "react";
import { FaSearch, FaChevronLeft, FaChevronRight, FaSpinner } from "react-icons/fa";
 
import { motion, AnimatePresence } from "framer-motion";

const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [doctorFilter, setDoctorFilter] = useState("all");
  const [selectedAppointments, setSelectedAppointments] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 10;

  useEffect(() => {
    // Simulating API call to fetch appointments
    setTimeout(() => {
      const dummyData = [
        {
          id: 1,
          patientName: "John Doe",
          doctorName: "Dr. Smith",
          dateTime: "2023-06-15 10:00 AM",
          status: "confirmed",
        },
        {
          id: 2,
          patientName: "Jane Smith",
          doctorName: "Dr. Johnson",
          dateTime: "2023-06-16 02:30 PM",
          status: "pending",
        },
        {
          id: 3,
          patientName: "Mike Brown",
          doctorName: "",
          dateTime: "2023-06-17 11:15 AM",
          status: "pending",
        },
        {
          id: 4,
          patientName: "Emily Davis",
          doctorName: "Dr. Taylor",
          dateTime: "2023-06-18 09:45 AM",
          status: "canceled",
        },
        {
          id: 5,
          patientName: "Alex Johnson",
          doctorName: "",
          dateTime: "2023-06-19 03:00 PM",
          status: "pending",
        },
      ];
      setAppointments(dummyData);
      setLoading(false);
    }, 1500);
  }, []);

  const filteredAppointments = appointments.filter(
    (appointment: any) =>
      (appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        appointment.dateTime.includes(searchTerm)) &&
      (statusFilter === "all" || appointment.status === statusFilter) &&
      (doctorFilter === "all" || appointment.doctorName === doctorFilter)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAppointments.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleDoctorFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDoctorFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleSelectAppointment = (id: number) => {
    setSelectedAppointments((prev: number[]) =>
      prev.includes(id) ? prev.filter((appointmentId: number) => appointmentId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedAppointments.length === currentItems.length) {
      setSelectedAppointments([]);
    } else {
      setSelectedAppointments(currentItems.map((appointment: any    ) => appointment.id));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-200 text-green-800";
      case "pending":
        return "bg-yellow-200 text-yellow-800";
      case "completed":
        return "bg-blue-200 text-blue-800";
      case "canceled":
        return "bg-red-200 text-red-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const uniqueDoctors = Array.from(new Set(appointments.map((appointment: any) => appointment.doctorName)));

  const pageCount = Math.ceil(filteredAppointments.length / itemsPerPage);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Appointment List</h1>
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="relative mb-4 md:mb-0 md:w-1/3">
              <input
                type="text"
                placeholder="Search appointments"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Search appointments"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <select
              value={statusFilter}
              onChange={handleStatusFilter}
              className="w-full md:w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 md:mb-0"
              aria-label="Filter by status"
            >
              <option value="all">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="canceled">Canceled</option>
            </select>
            <select
              value={doctorFilter}
              onChange={handleDoctorFilter}
              className="w-full md:w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Filter by doctor"
            >
              <option value="all">All Doctors</option>
              {uniqueDoctors.map((doctor) => (
                <option key={doctor} value={doctor}>
                  {doctor || "No Doctor Assigned"}
                </option>
              ))}
            </select>
          </div>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <FaSpinner className="animate-spin text-4xl text-blue-500" />
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2">
                        <input
                          type="checkbox"
                          checked={selectedAppointments.length === currentItems.length}
                          onChange={handleSelectAll}
                          className="form-checkbox h-5 w-5 text-blue-600"
                          aria-label="Select all appointments"
                        />
                      </th>
                      <th className="px-4 py-2 text-left">Patient Name</th>
                      <th className="px-4 py-2 text-left">Doctor Name</th>
                      <th className="px-4 py-2 text-left">Date & Time</th>
                      <th className="px-4 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <AnimatePresence>
                      {currentItems.map((appointment: any) => (
                        <motion.tr
                          key={appointment.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="border-b hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-4 py-2">
                            <input
                              type="checkbox"
                              checked={selectedAppointments.includes(appointment.id)}
                              onChange={() => handleSelectAppointment(appointment.id)}
                              className="form-checkbox h-5 w-5 text-blue-600"
                              aria-label={`Select appointment for ${appointment.patientName}`}
                            />
                          </td>
                          <td className="px-4 py-2">{appointment.patientName}</td>
                          <td className="px-4 py-2">{appointment.doctorName || "No Doctor Assigned"}</td>
                          <td className="px-4 py-2">{appointment.dateTime}</td>
                          <td className="px-4 py-2">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                                appointment.status
                              )}`}
                            >
                              {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm text-gray-600 mb-4 sm:mb-0">
                  Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredAppointments.length)} of{" "}
                  {filteredAppointments.length} appointments
                </p>
                <div className="flex items-center">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 mr-2"
                    aria-label="Previous page"
                  >
                    <FaChevronLeft />
                  </button>
                  {Array.from({ length: pageCount }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => paginate(index + 1)}
                      className={`px-3 py-1 rounded-md mx-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={indexOfLastItem >= filteredAppointments.length}
                    className="px-3 py-1 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 ml-2"
                    aria-label="Next page"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentManagement;
