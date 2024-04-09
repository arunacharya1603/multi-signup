import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    profileImage: null,
    name: '',
    email: '',
  });

  const updateProfileImage = (imageURL) => {
    setUserData({...userData, profileImage: imageURL });
  };

  const updateUserEmail = (email) => {
    setUserData({ ...userData, email });
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, updateProfileImage, updateUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };