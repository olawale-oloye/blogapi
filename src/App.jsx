import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Home from "./pages/home/Home";
import NavBar from "./components/navBar/NavBar";
import Registration from "./pages/registration/Registration";
import Login from "./pages/login/Login";
import About from "./pages/About/About";
import BlogContent from "./pages/blogContent/BlogContent";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<BlogContent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/blog" element={<BlogContent />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
