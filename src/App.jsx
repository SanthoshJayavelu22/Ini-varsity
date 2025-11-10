import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogFooter from "./components/BlogFooter"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import CourseOne from "./components/course/courseOne";
import BlogArticle from "./components/blogs/BlogArticle";

function AppContent() {
  const location = useLocation();

  // Check if the current path is /blogs
  const isBlogsPage = location.pathname === "/blogs";

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <Header />
      <ScrollToTop />

      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
             <Route path="/course" element={<CourseOne/>} />
                  <Route path="/blog/:slug" element={<BlogArticle />} />
        </Routes>
      </main>

      {/* 👇 Conditionally render footer */}
      {isBlogsPage ? <BlogFooter /> : <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
