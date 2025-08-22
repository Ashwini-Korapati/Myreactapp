import React from "react";

const LoadingSpinner = ({ size = 5 }) => (
  <div
    className={`animate-spin rounded-full h-${size} w-${size} border-2 border-white border-t-transparent`}
  />
);

// Action Button Component
const ActionButton = ({ onClick, disabled, loading, children, gradientFrom, gradientTo }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={`w-full py-4 rounded-xl  font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
      disabled
        ? 'bg-gray-400 cursor-not-allowed'
        : `bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:shadow-lg transform hover:-translate-y-0.5`
    } text-white`}
  >
    {loading ? <LoadingSpinner /> : children}
  </button>
);

export default ActionButton;
