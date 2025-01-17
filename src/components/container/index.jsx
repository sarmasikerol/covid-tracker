import React from "react";

const Container = ({ children, desings }) => {
  return (
    <div className={`max-w-[1200px] mx-auto px-10 md:px-20 py-5 ${desings}`}>
      {children}
    </div>
  );
};

export default Container;
