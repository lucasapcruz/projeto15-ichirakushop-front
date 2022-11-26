import GlobalStyle from "./globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import HomePage from "./Pages/HomePage/HomePage";
import UserPage from "./Pages/UserPage/UserPage";
import AuthProvider from "./contexts/authContext";
import CartPage from "./Pages/CartPage/CartPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";

export default function App(params) {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/checkout" element={<CheckoutPage/>}/>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
};
