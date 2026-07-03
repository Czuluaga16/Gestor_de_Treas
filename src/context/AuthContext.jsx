import { createContext, useState, useEffect, useContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';

// 1. Creamos el contexto
const AuthContext = createContext();

// 2. Proveedor del contexto que envolverá la app
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged es un listener de Firebase.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup function: Desmonta el listener para evitar memory leaks
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// 3. Custom Hook para consumir el contexto fácilmente
export const useAuth = () => useContext(AuthContext);