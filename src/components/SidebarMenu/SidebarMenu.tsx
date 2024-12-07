import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiMenu } from "react-icons/fi";
interface MenuItem {
  children?: React.ReactNode;
  menuItems: {
    key: string;
    icon: React.ReactNode;
    name: string;
    onClick: () => void;
  }[];
}
const SidebarMenu = ({ menuItems ,children}: MenuItem) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Dashboard");

  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
 <div className="flex flex-row h-screen w-full">
     <div className={`${isOpen ? "w-64" : "w-16"} min-h-screen bg-white text-gray-800 transition-all duration-300 ease-in-out shadow-lg`}>
      <button
        className="pt-4 pb-4 pl-2 pr-5 w-full flex justify-end"
        onClick={toggleSidebar}
        aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
         {isOpen ? (
          <FiChevronLeft className="text-2xl text-gray-600" />
        ) : (
          <FiChevronRight className="text-2xl text-gray-600" />
        )}
      </button>
      <nav className="mt-5">
        <ul className="flex flex-col space-y-2">
          {menuItems.map((option, index) => (
            <li key={index} className="px-2">
              <button
                className={`w-full flex items-center p-3  rounded-lg hover:bg-gray-100 transition-colors duration-200 ${selectedOption === option.name ? "bg-blue-500 text-white" : ""}`}
                onClick={() => {
                  option.onClick();
                  setSelectedOption(option.name);
                }}
                aria-label={option.name}
              >
                <span className="text-xl mr-4">{option.icon}</span>
                {isOpen && <span className="flex-1 text-left">{option.name}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  <div className="flex-1 p-4 bg-red overflow-auto">
  {children}
  </div>
 </div>
  );
};

export default SidebarMenu;