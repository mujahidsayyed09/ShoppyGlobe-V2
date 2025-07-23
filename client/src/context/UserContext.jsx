import { createContext, useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice"; 


const UserContext = createContext();

export function UserProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch(); // Redux dispatch

  useEffect(() => {
    const user = localStorage.getItem("userInfo");
    setIsLoggedIn(!!user);
  }, []);

  const login = () => setIsLoggedIn(true);

  const logout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cart");
    dispatch(clearCart()); // ✅ Clear Redux cart
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}


export function useUser() {
  return useContext(UserContext);
}
