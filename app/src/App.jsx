import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx';
import SideNav from './components/Nav.jsx'
import About from "./components/About.jsx";
import Connect from "./components/contact/Connect.jsx";
import Projects from "./components/projects/Projects.jsx";
import { useState } from "react";

export default function App(){
  const [navExpanded, setNavExpanded] = useState(false)

  return (
    <BrowserRouter className={`app-container ${navExpanded ? 'nav-expanded' : ''}`}>
      <SideNav />
      <Routes className="main-content">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </BrowserRouter>
  )
}