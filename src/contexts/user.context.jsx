import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

//the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//this is the actual component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // the initial value of currentValue is in the useState, we need to set a default value for it in the createContext as an object
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsuscribe = onAuthStateChangedListener((user) => {
      if(user){
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsuscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};


  /* <userContext.Provider><app /></userContext.Provider> */
 //here app is the children

// the value holds the actual contextual value

// the userProvider is allowing the child component to access the data inside the useState
