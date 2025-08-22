import React from "react";

const FormContainer = ({ children }) => (
  <div className="w-full max-w-3xl mx-auto">
    <div className="bg-white rounded-2xl shadow-2xl p-10 border border-gray-100">
      {children}
    </div>
  </div>
);

export default FormContainer;
