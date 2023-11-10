import React, { useState, createContext, useEffect } from 'react';

export const UserContext = createContext();

const Context = (props) => {
  const [user, setUser] = useState({
    name: '',
    token: ''
  });

  const removeUser = () => {
    sessionStorage.removeItem('user');
    setUser({
      name: '',
      token: ''
    });
  }

  useEffect(() => {
    if(sessionStorage.getItem('user') != null){
      setUser(JSON.parse(sessionStorage.getItem('user')));
    }
  },[])

  const value = {
    user,
    setUser,
    removeUser
  }

  return <UserContext.Provider value={value}>
    {props.children}
  </UserContext.Provider>
}

export default Context;
