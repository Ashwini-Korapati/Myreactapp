import React from "react";

const FormHeader = ({ icon: Icon, title, subtitle, gradientFrom, gradientTo }) => (
  <div className="text-center mb-8">
    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full mb-4`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h2 className={`text-3xl font-bold bg-gradient-to-r ${gradientFrom.replace('from-', 'from-').replace('-500', '-600')} ${gradientTo.replace('to-', 'to-').replace('-600', '-600')} bg-clip-text text-transparent`}>
      {title}
    </h2>
    <p className="text-gray-600 mt-2">{subtitle}</p>
  </div>
);

export default FormHeader;
