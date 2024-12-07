import React from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useUser } from "../contexts";
import { UserRouter } from "./UserRouter";
import { AuthRouter } from "./AuthRouter";
import { AdminRoutes } from "./AdminRouter";
 
const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isAuthenticated } = useUser();
  return isAuthenticated ? children : <Navigate to="/auth/login" />;
};
const AppRouter: React.FC = () => {
  const { isAuthenticated } = useUser();

  return (
    <Router>
    <Routes >
        {!isAuthenticated && (
          <Route path="/auth/*" element={<AuthRouter />} />
        )}
        <Route path="/user/*" element={<UserRouter />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
       
        {/* <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "auth/login"} />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
