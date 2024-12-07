import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

interface ProtectedRouteProps {
  allowedRoles: Array<'admin' | 'doctor' | 'user'>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const { user } = useUser();

  return user.role && allowedRoles.includes(user.role) ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoute;
