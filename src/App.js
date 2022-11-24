import GlobalStyle from "./globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import HomePage from "./Pages/HomePage/HomePage";

export default function App(params) {
  return(
    <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/sign-up" element={<SignUpPage/>}/>
      <Route path="/sign-in" element={<SignInPage/>}/>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  )
};
