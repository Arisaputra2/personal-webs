import React from "react";

const Preload = ({ isLoading }) => {
  const preLoaderClasses = `fixed inset-0 bg-white flex items-center justify-center z-10 transition-opacity duration-300 ease-in ${
    isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
  }`;

  const loaderClasses =
    "w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin";

  return (
    <div className={preLoaderClasses}>
      <div className={loaderClasses}></div>
    </div>
  );
};

export default Preload;
