import React, { useState, useEffect, useContext, createContext} from 'react';

const { get, set} = require('../utils/localStorage');

export const UserContext = createContext()

export const useUserContext = () => {
  return useContext(UserContext)
}

export const UserContextProvider = ({ children }) => {
  const [user, updateUser] = useState( () => {
    return get('user', {})    
  })

  useEffect(() => {

    set('user', JSON.stringify(user))
    
  }, [user])

  return (
    <UserContext.Provider value={{user: user, updateUser: updateUser}}>
      {children}
    </UserContext.Provider>
  )
}