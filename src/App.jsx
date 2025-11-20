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
import BlogArticle from "./components/blogs/BlogArticle";
import ProductDesign from "./components/course/ProductDesign";
import { ReturnsPolicy, PrivacyPolicy, TermsAndConditions } from './pages/PolicyPages';
import ThreeDPrinting from "./components/course/ThreeDPrinting";

function AppContent() {
  const location = useLocation();

  // Check if current route is /blogs or /blog/:slug
  const isBlogSection =
    location.pathname === "/blogs" || location.pathname.startsWith("/blog/");

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
          <Route path="/productdesign" element={<ProductDesign/>} />
             <Route path="/threedprinting" element={<ThreeDPrinting/>} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/refund" element={<ReturnsPolicy />} />
<Route path="/privacy" element={<PrivacyPolicy />} />
<Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </main>

  
      {isBlogSection ? <BlogFooter /> : <Footer />}
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
