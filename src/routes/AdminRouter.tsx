import React from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { SidebarMenu } from "../components";

import {
  MdDashboard,
  MdPerson,
  MdStar,
  MdBarChart,
  MdArticle,
  MdTask,
  MdSettings,
  MdCalendarToday,
} from "react-icons/md";
import DashboardManagement from "../features/admin/page/DashboardManagement/DashboardManagement";
import SystemSettingsManagement from "../features/admin/page/SystemSettingsManagement/SystemSettingsManagement";
import UserManagement from '../features/admin/page/UserManagement/UserManagement';
import AppointmentManagement from '../features/admin/page/AppointmentManagement/AppointmentManagement';

export const AdminRouter: React.FC = () => {
  const navigate = useNavigate();

  const menuOptions = [
    {
      key: "Dashboard",
      name: "Dashboard",
      icon: <MdDashboard />,
      onClick: () => navigate("/admin/dashboard"),
    },
    {
      key: "User",
      name: "User",
      icon: <MdPerson />,
      onClick: () => navigate("/admin/users"),
    },
    {
      key: "Task",
      name: "Task",
      icon: <MdTask />,
      onClick: () => navigate("/admin/tasks"),
    },
    {
      key: "Level",
      name: "Level",
      icon: <MdStar />,
      onClick: () => navigate("/admin/levels"),
    },
    {
      key: "Reward Metrics",
      name: "Reward",
      icon: <MdBarChart />,
      onClick: () => navigate("/admin/rewards"),
    },
    {
      key: "Posts",
      name: "Posts",
      icon: <MdArticle />,
      onClick: () => navigate("/admin/posts"),
    },
  ];

  return (
    <div className="flex h-screen bg-red flex-row">
      {/* <SidebarMenu menuItems={menuOptions} /> */}
      <div className=" p-4 bg-red overflow-auto">
        <Routes>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardManagement />} />
          <Route
            path="/system-settings"
            element={<SystemSettingsManagement />}
          />
        </Routes>
      </div>
    </div>
  );
};

export const AdminRoutes: React.FC = () => {
  const navigate = useNavigate();
  const menuOptions = [
    {
      key: "Dashboard",
      name: "Dashboard",
      icon: <MdDashboard />,
      onClick: () => navigate("/admin/dashboard"),
    },
    {
      key: "User",
      name: "User",
      icon: <MdPerson />,
      onClick: () => navigate("/admin/users"),
    },
    {
      key: "Settings",
      name: "Settings",
      icon: <MdSettings />,
      onClick: () => navigate("/admin/system-settings"),
    },
    {
      key: "Appointments",
      name: "Appointments",
      icon: <MdCalendarToday />,
      onClick: () => navigate("/admin/appointments"),
    },
 
    {
      key: "Posts",
      name: "Posts",
      icon: <MdArticle />,
      onClick: () => navigate("/admin/posts"),
    },
  ];
  return (
    <>
     <SidebarMenu menuItems={menuOptions}>
    <Routes>
    <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardManagement />} />
          <Route
            path="/system-settings"
            element={<SystemSettingsManagement />}
          />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/appointments" element={<AppointmentManagement />} />
          
    </Routes>
    </SidebarMenu>
    </>
  );
};
