import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx';
import SideNav from './components/Nav.jsx'
import About from "./components/About.jsx";
import Connect from "./components/contact/Connect.jsx";

export default function App(){
  return (
    <BrowserRouter>
      <SideNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </BrowserRouter>
  )
}