import React, { useState } from "react";
import { FiEdit, FiSave, FiUser, FiMail, FiGlobe, FiLock } from "react-icons/fi";

const SystemSettingsManagement = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [clinicInfo, setClinicInfo] = useState({
    name: "Sample Clinic",
    address: "123 Main St, City, Country",
    phone: "+1 234 567 8900",
    email: "info@sampleclinic.com",
    mapLocation: "https://goo.gl/maps/abcdefgh12345"
  });
  const [emailSettings, setEmailSettings] = useState({
    passwordRecovery: true,
    accountRegistration: true
  });
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["all"] },
    { id: 2, name: "Doctor", permissions: ["view_patients", "edit_patients"] },
    { id: 3, name: "Nurse", permissions: ["view_patients"] }
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleClinicInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClinicInfo({ ...clinicInfo, [e.target.name]: e.target.value });
  };

  const handleEmailSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailSettings({ ...emailSettings, [e.target.name]: e.target.checked });
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  const handleSave = () => {
    // Implement save functionality here
    alert("Settings saved successfully!");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex border-b">
          <button
            className={`flex-1 py-4 px-6 text-lg font-medium ${
              activeTab === "general"
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("general")}
          >
            General Settings
          </button>
          <button
            className={`flex-1 py-4 px-6 text-lg font-medium ${
              activeTab === "email"
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("email")}
          >
            Email Settings
          </button>
          <button
            className={`flex-1 py-4 px-6 text-lg font-medium ${
              activeTab === "roles"
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("roles")}
          >
            Role Management
          </button>
          <button
            className={`flex-1 py-4 px-6 text-lg font-medium ${
              activeTab === "language"
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("language")}
          >
            Language Management
          </button>
        </div>

        <div className="p-8">
          {activeTab === "general" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Clinic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Clinic Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={clinicInfo.name}
                    onChange={handleClinicInfoChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={clinicInfo.address}
                    onChange={handleClinicInfoChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={clinicInfo.phone}
                    onChange={handleClinicInfoChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={clinicInfo.email}
                    onChange={handleClinicInfoChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="mapLocation" className="block text-sm font-medium text-gray-700 mb-1">
                    Map Location
                  </label>
                  <input
                    type="text"
                    id="mapLocation"
                    name="mapLocation"
                    value={clinicInfo.mapLocation}
                    onChange={handleClinicInfoChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "email" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Email Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="passwordRecovery"
                    name="passwordRecovery"
                    checked={emailSettings.passwordRecovery}
                    onChange={handleEmailSettingsChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="passwordRecovery" className="ml-2 block text-sm text-gray-900">
                    Enable password recovery emails
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="accountRegistration"
                    name="accountRegistration"
                    checked={emailSettings.accountRegistration}
                    onChange={handleEmailSettingsChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="accountRegistration" className="ml-2 block text-sm text-gray-900">
                    Enable account registration emails
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === "roles" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Role Management</h2>
              <div className="space-y-4">
                {roles.map((role) => (
                  <div key={role.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-md">
                    <div>
                      <h3 className="text-lg font-medium">{role.name}</h3>
                      <p className="text-sm text-gray-500">
                        Permissions: {role.permissions.join(", ")}
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Edit Role
                    </button>
                  </div>
                ))}
              </div>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Add New Role
              </button>
            </div>
          )}

          {activeTab === "language" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Language Management</h2>
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                  Select System Language
                </label>
                <select
                  id="language"
                  name="language"
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={handleSave}
          >
            Save Changes
          </button>
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SystemSettingsManagement;