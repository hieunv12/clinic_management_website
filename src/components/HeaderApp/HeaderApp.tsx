import React, { useState, useEffect } from "react";
import { FaHospital, FaBars, FaTimes, FaPhone } from "react-icons/fa";
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineBook, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { SiZalo } from "react-icons/si";

interface HeaderAppProps {  
  children?: React.ReactNode;
}

const HeaderApp: React.FC<HeaderAppProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    setIsOpen(false);
    navigate(item.path);
  };

  const menuItems = [
    { name: "Home", icon: <AiOutlineHome /> ,path:'/user/home'},
    { name: "Giới Thiệu", icon: <AiOutlineInfoCircle /> ,path:'/user/introduction'},
    { name: "Bác Sĩ", icon: <AiOutlineUser /> ,path:'/user/doctor'},
    { name: "Blog", icon: <AiOutlineBook /> ,path:'/user/blog'},
    { name: "Liên Hệ và Đặt Lịch", icon: <AiOutlinePhone /> ,path:'/user/contact'},
  ];

  return (
    <>
      <header
        className={`bg-white shadow-md w-full transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 z-50" : ""
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <FaHospital className="text-3xl text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-800">ClinicName</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(item)}
                className={`flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 ${
                  selectedItem === item ? "text-blue-600 font-bold underline" : ""
                }`}
                aria-label={item.name}
              >
                {/* {item.icon} */}
                <span className="ml-1">{item.name}</span>
              </button>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800" aria-label="Call us">
              <FaPhone className="text-3xl" />
            </a>
            <a href="https://zalo.me/your-zalo-id" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800" aria-label="Contact us on Zalo">
              <SiZalo className="text-3xl" />
            </a>
          </div>    
          <button
            className="md:hidden text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <nav className="bg-white px-4 pt-2 pb-4 space-y-2">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleItemClick(item)}
                  className={`block w-full text-left py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 ${
                    selectedItem === item ? "bg-blue-50 text-blue-600 font-bold underline" : ""
                  }`}
                  aria-label={item.name}
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </div>
                </button>
              ))}
              <div className="flex justify-center space-x-4 mt-4">
                <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800" aria-label="Call us">
                  <FaPhone className="text-3xl" />
                </a>
                <a href="https://zalo.me/your-zalo-id" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800" aria-label="Contact us on Zalo">
                  <SiZalo className="text-3xl" />
                </a>
              </div>
            </nav>  
          </div>
        )}
      </header>
      <main>{children}</main>
    </>
  );
};

export default HeaderApp;
