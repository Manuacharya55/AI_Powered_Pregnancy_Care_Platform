import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const setLocalStorage = (data) => {
    const { _id, name, email, isAdmin, token } = data;
    localStorage.setItem("user", JSON.stringify({
      _id,
      name,
      email,
      isAdmin,
      token,
    }));
    setUser({ _id, name, email, isAdmin, token });
  };

  const fetchLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("user")) || null;
    setUser(data);
    setLoading(false)
  };

  const clearLocalStorage = () => {
    localStorage.clear("user");
    setUser(null);
  };

  useEffect(() => {
    fetchLocalStorage();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setLocalStorage, clearLocalStorage,loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Accessing Outside Context");
  }

  return context;
};
