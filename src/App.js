import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/menu" exact element={<Menu />}></Route>
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/contact" exact element={<Contact />}></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App
