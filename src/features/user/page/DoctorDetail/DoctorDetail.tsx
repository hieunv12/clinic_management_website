import React, { useState } from "react";
import { FaCalendarAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaCertificate, FaAward } from "react-icons/fa";

const DoctorDetail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const doctor = {
    name: "Dr. Emily Johnson",
    position: "Cardiologist",
    specializations: ["Adult Cardiology", "Interventional Cardiology"],
    education: [
      {
        degree: "M.D.",
        institution: "Harvard Medical School",
        year: "2005"
      },
      {
        degree: "Residency",
        institution: "Johns Hopkins Hospital",
        year: "2008"
      },
      {
        degree: "Fellowship in Cardiology",
        institution: "Mayo Clinic",
        year: "2011"
      }
    ],
    certifications: [
      "Board Certified in Cardiovascular Disease",
      "Board Certified in Interventional Cardiology"
    ],
    experience: [
      {
        position: "Senior Cardiologist",
        institution: "HeartCare Medical Center",
        duration: "2011 - Present"
      },
      {
        position: "Research Fellow",
        institution: "American Heart Association",
        duration: "2010 - 2011"
      }
    ],
    services: [
      "Cardiac Consultation",
      "Echocardiography",
      "Stress Testing",
      "Coronary Angiography"
    ],
    schedule: {
      days: "Monday to Friday",
      hours: "9:00 AM - 5:00 PM"
    },
    address: "123 Medical Center Drive, Healthville, HV 12345",
    phone: "+1 (555) 123-4567",
    email: "dr.emily.johnson@heartcare.com",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  };

  const handleBookAppointment = () => {
    setLoading(true);
    setError("");
    // Simulating an API call
    setTimeout(() => {
      setLoading(false);
      // For demonstration, we'll show a success message instead of an actual booking
      alert("Appointment booked successfully!");
    }, 2000);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={doctor.image}
              alt={doctor.name}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {doctor.position}
            </div>
            <h1 className="mt-1 text-3xl font-bold text-gray-900">{doctor.name}</h1>
            <p className="mt-2 text-gray-600">{doctor.specializations.join(", ")}</p>
          </div>
        </div>

        <div className="px-8 py-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                <FaGraduationCap className="mr-2" /> Education
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {doctor.education.map((edu, index) => (
                  <li key={index}>
                    <span className="font-semibold">{edu.degree}</span> - {edu.institution}, {edu.year}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                <FaCertificate className="mr-2" /> Certifications
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {doctor.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
              <FaBriefcase className="mr-2" /> Experience
            </h3>
            <ul className="text-gray-600">
              {doctor.experience.map((exp, index) => (
                <li key={index} className="mb-2">
                  <div className="font-semibold">{exp.position}</div>
                  <div>{exp.institution}</div>
                  <div className="text-sm text-gray-500">{exp.duration}</div>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Services</h3>
          <ul className="list-disc list-inside text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {doctor.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 px-8 py-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Schedule & Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                <FaCalendarAlt className="mr-2" /> Work Schedule
              </h3>
              <p className="text-gray-600">{doctor.schedule.days}</p>
              <p className="text-gray-600">{doctor.schedule.hours}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Address
              </h3>
              <p className="text-gray-600">{doctor.address}</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <FaPhone className="text-gray-500 mr-2" />
              <a href={`tel:${doctor.phone}`} className="text-blue-500 hover:underline">
                {doctor.phone}
              </a>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-gray-500 mr-2" />
              <a href={`mailto:${doctor.email}`} className="text-blue-500 hover:underline">
                {doctor.email}
              </a>
            </div>
          </div>
        </div>

        <div className="px-8 py-6">
          <button
            onClick={handleBookAppointment}
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold text-lg transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Book Appointment with Dr. Emily Johnson"
          >
            {loading ? "Booking..." : "Book Appointment"}
          </button>
          {error && <p className="mt-2 text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
