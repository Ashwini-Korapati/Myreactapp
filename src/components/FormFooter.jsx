import React from "react";
import { useNavigate } from "react-router-dom";


// Form Footer Component
const FormFooter = ({ text, linkText, onLinkClick, linkColor }) => (
  <div className="mt-8 text-center">
    <p className="text-gray-600">
      {text}{' '}
      <button
        onClick={onLinkClick}
        className={`${linkColor} font-semibold transition-colors duration-200`}
      >
        {linkText}
      </button>
    </p>
  </div>
);

export default FormFooter;
