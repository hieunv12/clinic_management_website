import React from "react";
import { FaHospital, FaStethoscope, FaUserMd, FaMicroscope, FaXRay, FaHeartbeat } from "react-icons/fa";

const Introduction = () => {
  const milestones = [
    { year: 1990, description: "Clinic founded by Dr. Jane Smith" },
    { year: 2000, description: "Expanded to include specialized departments" },
    { year: 2010, description: "Introduced state-of-the-art medical equipment" },
    { year: 2020, description: "Launched telemedicine services" },
  ];

  const facilities = [
    {
      title: "Phòng khám hiện đại",
      description: "Trang bị đầy đủ thiết bị y tế tiên tiến nhất",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
      icon: <FaHospital className="text-blue-500 text-3xl mb-2" />
    },
    {
      title: "Phòng xét nghiệm tiên tiến",
      description: "Hệ thống xét nghiệm chính xác và nhanh chóng",
      image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c",
      icon: <FaMicroscope className="text-blue-500 text-3xl mb-2" />
    },
    {
      title: "Thiết bị chẩn đoán hình ảnh",
      description: "Máy chụp X-quang, CT, MRI đời mới nhất",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514",
      icon: <FaXRay className="text-blue-500 text-3xl mb-2" />
    },
    {
      title: "Phòng phẫu thuật vô trùng",
      description: "Đảm bảo an toàn tuyệt đối cho mọi ca phẫu thuật",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842",
      icon: <FaUserMd className="text-blue-500 text-3xl mb-2" />
    },
    {
      title: "Thiết bị theo dõi bệnh nhân",
      description: "Giám sát liên tục các chỉ số sức khỏe quan trọng",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561",
      icon: <FaHeartbeat className="text-blue-500 text-3xl mb-2" />
    },
    {
      title: "Phòng hồi sức tích cực",
      description: "Chăm sóc đặc biệt cho các trường hợp nguy kịch",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
      icon: <FaStethoscope className="text-blue-500 text-3xl mb-2" />
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Về Chúng Tôi</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Lịch Sử Phát Triển</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Được thành lập vào năm 1990, phòng khám của chúng tôi đã đi đầu trong lĩnh vực y tế xuất sắc trong hơn ba thập kỷ. Khởi đầu là một phòng khám gia đình nhỏ, chúng tôi đã phát triển thành một trung tâm chăm sóc sức khỏe toàn diện, phục vụ hàng nghìn bệnh nhân hàng năm. Hành trình của chúng tôi được đánh dấu bằng sự đổi mới liên tục, chăm sóc tận tâm và cam kết cải thiện sức khỏe cộng đồng.
            </p>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
                      <span className="text-white font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Sứ Mệnh Của Chúng Tôi</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Trọng tâm của chúng tôi là một sứ mệnh đơn giản nhưng mạnh mẽ: cung cấp dịch vụ chăm sóc sức khỏe xuất sắc, lấy bệnh nhân làm trung tâm, nhằm cải thiện chất lượng cuộc sống cho cộng đồng. Chúng tôi cam kết:
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-center space-x-3">
                <FaHospital className="text-blue-500 text-xl" />
                <span className="text-gray-700">Cung cấp dịch vụ chăm sóc chất lượng cao, đầy lòng trắc ẩn</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaStethoscope className="text-blue-500 text-xl" />
                <span className="text-gray-700">Áp dụng công nghệ y tế tiên tiến</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaUserMd className="text-blue-500 text-xl" />
                <span className="text-gray-700">Xây dựng phương pháp đặt bệnh nhân lên hàng đầu trong mọi việc chúng tôi làm</span>
              </li>
            </ul>
            <p className="text-lg text-gray-600 leading-relaxed">
              Chúng tôi hướng tới tương lai nơi mọi người trong cộng đồng đều có thể tiếp cận dịch vụ chăm sóc sức khỏe đẳng cấp thế giới, ngay tại khu vực của họ.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Cơ Sở Vật Chất</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 bg-white">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    {facility.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-center">{facility.title}</h3>
                  <p className="text-gray-600 text-center">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
