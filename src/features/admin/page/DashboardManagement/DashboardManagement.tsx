import React, { useState, useEffect } from "react";
import { FaUser, FaFileAlt, FaChartLine, FaCalendarAlt, FaUserMd, FaBlog } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const DashboardManagement = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPosts: 0,
    recentTraffic: 0,
    appointmentBookings: 0,
    numberOfDoctors: 0,
    newBlogPosts: 0
  });
  console.log('hieu');
  const [trafficData, setTrafficData] = useState<{ name: string; visits: number }[]>([]);
  const [recentActivities, setRecentActivities] = useState<{ type: string; title: string; time: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating API calls
    setTimeout(() => {
      setStats({
        totalUsers: 15000,
        totalPosts: 5000,
        recentTraffic: 25000,
        appointmentBookings: 500,
        numberOfDoctors: 100,
        newBlogPosts: 50
      });

      setTrafficData([
        { name: "1 May", visits: 4000 },
        { name: "8 May", visits: 3000 },
        { name: "15 May", visits: 5000 },
        { name: "22 May", visits: 2780 },
        { name: "29 May", visits: 1890 },
        { name: "5 Jun", visits: 2390 },
        { name: "12 Jun", visits: 3490 }
      ]);

      setRecentActivities([
        { type: "New Post", title: "10 Tips for Healthy Living", time: "2 hours ago" },
        { type: "New User", title: "John Doe registered", time: "3 hours ago" },
        { type: "New Doctor", title: "Dr. Jane Smith added", time: "5 hours ago" },
        { type: "New Post", title: "Understanding COVID-19 Variants", time: "1 day ago" },
        { type: "New User", title: "Sarah Johnson registered", time: "1 day ago" }
      ]);

      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <StatCard icon={<FaUser />} title="Total Users" value={stats.totalUsers} />
          <StatCard icon={<FaFileAlt />} title="Total Posts" value={stats.totalPosts} />
          <StatCard icon={<FaChartLine />} title="Recent Traffic" value={stats.recentTraffic} />
          <StatCard icon={<FaCalendarAlt />} title="Appointment Bookings" value={stats.appointmentBookings} />
          <StatCard icon={<FaUserMd />} title="Number of Doctors" value={stats.numberOfDoctors} />
          <StatCard icon={<FaBlog />} title="New Blog Posts" value={stats.newBlogPosts} />
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <h2 className="text-xl font-semibold mb-4">Traffic Over Last 30 Days</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="visits" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <ul className="space-y-4">
            {recentActivities.map((activity, index) => (
              <li key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out">
                <div className="flex-shrink-0">
                  {activity.type === "New Post" && <FaFileAlt className="h-6 w-6 text-blue-500" />}
                  {activity.type === "New User" && <FaUser className="h-6 w-6 text-green-500" />}
                  {activity.type === "New Doctor" && <FaUserMd className="h-6 w-6 text-purple-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{activity.title}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value }: { icon: React.ReactNode; title: string; value: number }) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 transition duration-300 ease-in-out transform hover:scale-105">
    <div className="flex-shrink-0 bg-indigo-500 rounded-full p-3">
      {React.cloneElement(icon as React.ReactElement, { className: "h-6 w-6 text-white" })}
    </div>
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-2xl font-semibold text-gray-900">{value.toLocaleString()}</p>
    </div>
  </div>
);

export default DashboardManagement  ;