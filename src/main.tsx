import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/error/index";
import Navbar from "./components/ui/Navbar";
import About from "./pages/About";
import Workspaces from "./pages/Workspaces";
import SingleBlog from "./pages/SingleBlog";
import BlogsPage from "./pages/BlogsPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/workspaces' element={<Workspaces />} />
        <Route path='/blog' element={<BlogsPage />} />
        <Route path='/blog/:id' element={<SingleBlog />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
