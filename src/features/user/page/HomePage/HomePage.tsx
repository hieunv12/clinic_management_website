import React, { useState, useEffect } from "react";
import {
  FaCalendarAlt,
  FaInfoCircle,
  FaStethoscope,
  FaHeartbeat,
  FaUserMd,
  FaHospital,
  FaChevronRight,
  FaTooth,
  FaBaby,
  FaEye,
} from "react-icons/fa";

const HomePage = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const bannerImages = [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  ];

  const featuredServices = [
    {
      icon: <FaStethoscope />,
      title: "Khám tổng quát",
      description: "Đánh giá toàn diện sức khỏe của bạn.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Chăm sóc tim mạch",
      description: "Chuyên khoa về bệnh lý tim mạch.",
    },
    {
      icon: <FaUserMd />,
      title: "Tư vấn chuyên gia",
      description: "Đội ngũ bác sĩ giàu kinh nghiệm.",
    },
    {
      icon: <FaHospital />,
      title: "Chăm sóc đặc biệt",
      description: "Dịch vụ chăm sóc tận tâm 24/7.",
    },
  ];

  const doctors = [
    {
      name: "Ts. Bs. Nguyễn Văn A",
      specialty: "Bác sĩ Tim mạch",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Ths. Bs. Trần Thị B",
      specialty: "Bác sĩ Nhi khoa",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "PGS. Ts. Lê Văn C",
      specialty: "Bác sĩ Ngoại khoa",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Ts. Bs. Phạm Thị D",
      specialty: "Bác sĩ Da liễu",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    },
  ];
  const blogPosts = [
    {
      title: "Tầm quan trọng của việc khám sức khỏe định kỳ",
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      excerpt:
        "Khám sức khỏe định kỳ giúp phát hiện sớm các vấn đề sức khỏe tiềm ẩn...",
    },
    {
      title: "Chế độ ăn uống lành mạnh cho người cao tuổi",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      excerpt:
        "Dinh dưỡng đóng vai trò quan trọng trong việc duy trì sức khỏe ở người cao tuổi...",
    },
    {
      title: "Các phương pháp phòng ngừa bệnh tim mạch",
      image:
        "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      excerpt:
        "Bệnh tim mạch là một trong những nguyên nhân hàng đầu gây tử vong, nhưng có thể phòng ngừa...",
    },
  ];
  const services = [
    {
      icon: FaHospital,
      title: "Khám tổng quát",
      description: "Dịch vụ khám sức khỏe toàn diện",
    },
    {
      icon: FaUserMd,
      title: "Tư vấn chuyên khoa",
      description: "Đội ngũ bác sĩ chuyên môn cao",
    },
    {
      icon: FaStethoscope,
      title: "Điều trị nội khoa",
      description: "Chăm sóc y tế chất lượng cao",
    },
    {
      icon: FaHeartbeat,
      title: "Tim mạch",
      description: "Chẩn đoán và điều trị bệnh tim mạch",
    },
    {
      icon: FaBaby,
      title: "Sản phụ khoa",
      description: "Chăm sóc sức khỏe phụ nữ và trẻ em",
    },
    {
      icon: FaEye,
      title: "Nhãn khoa",
      description: "Khám và điều trị các vấn đề về mắt",
    },
    {
      icon: FaTooth,
      title: "Nha khoa",
      description: "Chăm sóc răng miệng toàn diện",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    service: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBannerIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans">
      {/* Large Banner */}
      <div className="relative h-screen">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBannerIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Clinic banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Chăm sóc sức khỏe tận tâm
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
            Chúng tôi cam kết mang đến dịch vụ y tế chất lượng cao và trải
            nghiệm bệnh nhân tốt nhất.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              aria-label="Đặt lịch ngay"
            >
              <FaCalendarAlt className="mr-2" />
              Đặt lịch ngay
            </button>
            <button
              className="bg-transparent hover:bg-white hover:text-blue-600 text-white font-bold py-3 px-6 rounded-full border-2 border-white transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              aria-label="Tìm hiểu thêm"
            >
              <FaInfoCircle className="mr-2" />
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </div>

      {/* Quick Overview */}
      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
            Về chúng tôi
          </h2>
          <p className="text-xl text-gray-700 text-center">
            Phòng khám của chúng tôi tự hào mang đến dịch vụ chăm sóc sức khỏe
            toàn diện, kết hợp công nghệ tiên tiến với sự chăm sóc tận tâm.
            Chúng tôi cam kết cung cấp các dịch vụ y tế chất lượng cao, từ khám
            tổng quát đến các chuyên khoa, nhằm đáp ứng mọi nhu cầu sức khỏe của
            bạn và gia đình.
          </p>
        </div>
      </div>

      {/* Featured Services */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
            Dịch vụ nổi bật
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Doctor Introduction */}
      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
            Đội ngũ bác sĩ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-xl"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{doctor.specialty}</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center justify-center">
                    Xem chi tiết
                    <FaChevronRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule Appointment */}

      <div className="bg-white rounded-lg shadow-md p-8 mb-16 mx-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Liên hệ đặt lịch
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Họ tên
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Số điện thoại
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Ngày đặt lịch
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700"
            >
              Dịch vụ mong muốn
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            >
              <option value="">Chọn dịch vụ</option>
              {services.map((service, index) => (
                <option key={index} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FaCalendarAlt className="mr-2" /> Đặt lịch ngay
            </button>
          </div>
        </form>
      </div>

      {/* Blog Posts */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Bài viết mới nhất
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600">{post.excerpt}</p>
                <a
                  href="/blog"
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800"
                >
                  Đọc thêm
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
