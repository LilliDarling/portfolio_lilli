import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx';
import SideNav from './components/Nav.jsx'

export default function App(){
  return (
    <BrowserRouter>
      <SideNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}