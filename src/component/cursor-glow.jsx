import React from "react";

const CursorGlow = ({ position }) => {
  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
  };

  const cursorGlowClasses =
    "fixed top-0 left-0 w-50 h-50 rounded-full bg-gray-200 opacity-50 pointer-events-none transition-transform duration-75 ease-out filter blur-3xl z-50";

  return <div style={style} className={cursorGlowClasses}></div>;
};

export default CursorGlow;
