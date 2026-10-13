import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

/**
 * Root Application Component
 * Sets up client-side routing, shared navigation, and footer.
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="portfolio-app-root">
        {/* Persistent Sticky Neo-Brutalist Navigation */}
        <Navbar />

        {/* Route Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Persistent Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
