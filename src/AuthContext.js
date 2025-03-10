import React, { createContext, useContext, useState } from 'react';

// إنشاء السياق (Context) للمصادقة
const AuthContext = createContext();

// المزود (Provider) الذي سيقوم بتوفير السياق للمكونات الأخرى
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// هوك (Hook) للوصول إلى السياق بسهولة
export const useAuth = () => {
  return useContext(AuthContext);
};
