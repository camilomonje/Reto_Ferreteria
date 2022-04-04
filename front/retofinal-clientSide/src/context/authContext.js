import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/credentials";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no auth ");
  return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
          setLoading(false)
      })
      return () => unsubscribe()
    }, [])

    const logout = () => signOut(auth)
    


  return (
    <authContext.Provider value={{ user, logout, loading }}>{children}</authContext.Provider>
  );
};
