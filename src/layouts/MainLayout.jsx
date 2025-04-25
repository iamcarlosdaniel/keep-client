import React from "react";

const MainLayout = ({ children, className }) => {
  return (
    <main className={`h-screen flex items-center justify-center p-5`}>
      <div className={className}>{children}</div>
    </main>
  );
};

export default MainLayout;
