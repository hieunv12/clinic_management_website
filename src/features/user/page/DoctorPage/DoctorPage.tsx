import React, { useState } from "react";
import { FaSearch, FaFilter, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const DoctorPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const doctorsPerPage = 6;

  const doctors = [
    {
      id: 1,
      name: "Dr. John Smith",
      title: "Cardiologist",
      specialty: "Cardiology",
      experience: 15,
      location: "New York",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      name: "Dr. Emily Johnson",
      title: "Pediatrician",
      specialty: "Pediatrics",
      experience: 10,
      location: "Los Angeles",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      name: "Dr. Michael Brown",
      title: "Orthopedic Surgeon",
      specialty: "Orthopedics",
      experience: 20,
      location: "Chicago",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      name: "Dr. Sarah Lee",
      title: "Dermatologist",
      specialty: "Dermatology",
      experience: 8,
      location: "San Francisco",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 5,
      name: "Dr. David Wilson",
      title: "Neurologist",
      specialty: "Neurology",
      experience: 18,
      location: "Boston",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 6,
      name: "Dr. Jennifer Taylor",
      title: "Obstetrician",
      specialty: "Obstetrics",
      experience: 12,
      location: "Miami",
      image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      id: 7,
      name: "Dr. Robert Martinez",
      title: "Oncologist",
      specialty: "Oncology",
      experience: 22,
      location: "Houston",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 8,
      name: "Dr. Lisa Anderson",
      title: "Psychiatrist",
      specialty: "Psychiatry",
      experience: 14,
      location: "Seattle",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (specialty === "" || doctor.specialty === specialty) &&
      (experience === "" || doctor.experience >= parseInt(experience)) &&
      (location === "" || doctor.location === location)
  );

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const navigate = useNavigate();
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredDoctors.length / doctorsPerPage); i++) {
    pageNumbers.push(i);
  }

    const handlePageClick = (pageNumber:any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Doctor List</h1>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name or specialty"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          <div className="flex-1 flex gap-4">
            <select
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            >
              <option value="">All Specialties</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Neurology">Neurology</option>
              <option value="Obstetrics">Obstetrics</option>
              <option value="Oncology">Oncology</option>
              <option value="Psychiatry">Psychiatry</option>
            </select>
            <select
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >
              <option value="">All Experience</option>
              <option value="5">5+ years</option>
              <option value="10">10+ years</option>
              <option value="15">15+ years</option>
              <option value="20">20+ years</option>
            </select>
            <select
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">All Locations</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Boston">Boston</option>
              <option value="Miami">Miami</option>
              <option value="Houston">Houston</option>
              <option value="Seattle">Seattle</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentDoctors.map((doctor) => (
          <div
            key={doctor.id}
            onClick={() => navigate(`/user/doctor/${doctor.id}`)}  
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{doctor.name}</h2>
              <p className="text-gray-600 mb-2">{doctor.title}</p>
              <p className="text-gray-600 mb-2">Specialty: {doctor.specialty}</p>
              <p className="text-gray-600 mb-2">Experience: {doctor.experience} years</p>
              <p className="text-gray-600 mb-4">Location: {doctor.location}</p>
         
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <nav className="inline-flex rounded-md shadow">
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
          >
            <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageClick(number)}
              className={`px-3 py-2 border border-gray-300 bg-white text-sm font-medium ${number === currentPage
                ? "text-blue-600 bg-blue-50"
                : "text-gray-500 hover:bg-gray-50"
                }`}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredDoctors.length / doctorsPerPage)}
            className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
          >
            <FaChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default DoctorPage;
