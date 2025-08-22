// import React from "react";
// // Background Component
// const Background = () => (
//   <div className="absolute inset-0 overflow-hidden">
//     <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
//     <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
//   </div>
// );

// export default Background;

import React from "react";

const Background = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    {/* Top-right blob */}
    <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
    
    {/* Bottom-left blob */}
    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-green-300 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
    
    {/* Optional: Center accent blob */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
  </div>
);

export default Background;
