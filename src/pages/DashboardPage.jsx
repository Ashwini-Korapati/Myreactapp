import React from "react";
import { Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-4">
          <Home className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Welcome to Dashboard
        </h2>
        <p className="text-gray-600 mt-2">You have successfully logged in!</p>
      </div>

      <button
        onClick={() => navigate("/")}
        className="w-full py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Login</span>
      </button>
    </div>
  );
};

export default DashboardPage;
