import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState('');
  const [roles, setRoles] = useState([]);

  const setUser = (id, userRoles) => {
    setUserId(id);
    setRoles(userRoles);
  };

  const clearUser = () => {
    setUserId(null);
    setRoles([]);
  };

  return (
    <UserContext.Provider value={{ userId, roles, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};
