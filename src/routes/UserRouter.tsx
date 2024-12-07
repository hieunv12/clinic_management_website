import HeaderApp from "components/HeaderApp/HeaderApp";
import BlogDetail from "features/user/page/BlogDetail/BlogDetail";
import BlogPage from "features/user/page/BlogPage/BlogPage";
import ContactPage from "features/user/page/ContactPage/ContactPage";
import DoctorDetail from "features/user/page/DoctorDetail/DoctorDetail";
import DoctorPage from "features/user/page/DoctorPage/DoctorPage";
import HomePage from "features/user/page/HomePage/HomePage";
import Introduction from "features/user/page/Introduction/Introduction";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const UserRouter: React.FC = () => {
  return (
    <HeaderApp>
      <Routes>
        <Route path="/home" index element={<HomePage />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/doctor/:id" element={<DoctorDetail />} />
      </Routes>
    </HeaderApp>
  );
};
