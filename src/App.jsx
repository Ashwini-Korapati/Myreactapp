
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Background from "./components/Background";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
        <Background />

        <div className="relative z-10 w-full transition-all duration-200">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />

            {/* Redirect unknown routes to /login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
