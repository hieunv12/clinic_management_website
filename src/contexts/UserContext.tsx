import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextType {
  user: { role: 'admin' | 'doctor' | 'user' | null };
  setUser: (user: { role: 'admin' | 'doctor' | 'user' | null }) => void;
  isAuthenticated: boolean; // Trạng thái xác thực
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ role: 'admin' | 'doctor' | 'user' | null }>({ role: null });
  const isAuthenticated = user.role !== null;

  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
