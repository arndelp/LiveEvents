import React, { createContext, useState, useEffect } from "react";
import { safeJwtDecode } from "../utils/jwt";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //pour éviter que l'application plante si le JSON est mal formé ou absent
  let savedUser = null;
  try {
    const raw = localStorage.getItem("user");
    if (raw) savedUser = JSON.parse(raw);
  } catch (err) {
    console.warn("Impossible de parser 'user' depuis localStorage :", err);
    savedUser = null;
  }

  const [customer, setCustomer] = useState(savedUser);

  const savedToken = localStorage.getItem("token");
  
  const [token, setToken] = useState(savedToken || null);
  
  
  

  // Vérifie le localStorage au démarrage pour récupérer le token
  useEffect(() => {
  if (!token) return;

  const decoded = safeJwtDecode(token);
  if (!decoded) {
    logout();
    return;
  }

  const now = Date.now() / 1000;
  if (decoded.exp && decoded.exp < now) {
    logout();
  }
}, [token]);

  // Fonction pour connecter l'utilisateur
  const login = (data) => {
    if (data.token) {
      //stocke le token dans le localStorage et dans le state
      localStorage.setItem("token", data.token);
      //stocke les infos user dans le localStorage
      localStorage.setItem("user", JSON.stringify(data.user));

      setToken(data.token);
      setCustomer(data.user);

      // Stocke les infos user reçues du backend
      
      
    }
  };

  // Fonction pour déconnecter l'utilisateur
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setCustomer(null);
  };

  // Vérifie si l'utilisateur est authentifié
  const isAuthenticated = () => !!token;

    return (
      <AuthContext.Provider
        value={{
          customer,
          token,
          login,
          logout,
          isAuthenticated,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
