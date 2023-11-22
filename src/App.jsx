import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Home from "./pages/home/Home";
import NavBar from "./components/navBar/NavBar";
import Registration from "./pages/registration/registration";
import Login from "./pages/login/login";
import About from "./pages/About/about";
import BlogContent from "./pages/blogContent/blogContent";

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
