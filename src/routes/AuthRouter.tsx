 import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from '../features/auth/page/SignUpPage/SignUpPage';
import SignInPage from '../features/auth/page/SignInPage/SignInPage';
import ResetPasswordPage from '../features/auth/page/ResetPasswordPage/ResetPasswordPage';
import VerificationCodePage from "../features/auth/page/VerificationCodePage/VerificationCodePage";



export const AuthRouter: React.FC = () => {
  return (
    <Routes  >
      <Route index  path="/login" element={<SignInPage />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="/forgot-password" element={<ResetPasswordPage />} />
      <Route path="/verification-code" element={<VerificationCodePage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      
    </Routes>
  );
};
