import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar";
import Home from "./components/pages/index";
import About from './components/pages/about';
import Contact from './components/pages/contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;