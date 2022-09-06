// import logo from './logo.svg';
import './App.css';
import {  Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from './pages/homePage';
import Product from './pages/productPage';
import About from './pages/aboutUsPage';
import Signup from "./pages/signUpPage";
import Login from "./pages/loginPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productPage" element={<Product />} />
        <Route path="aboutUsPage" element={<About />} />
        <Route path="signUpPage" element={<Signup />} />
        <Route path='loginPage' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
