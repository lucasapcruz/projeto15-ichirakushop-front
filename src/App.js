import GlobalStyle from "./globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App(params) {
  return(
    <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route/>
    </Routes>
    </BrowserRouter>
  )
};
