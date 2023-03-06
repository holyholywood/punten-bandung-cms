import React from "react";
import Sidebar from "../organisms/Sidebar";

const BaseLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="px-8 py-10 w-full">{children}</div>
    </div>
  );
};

export default BaseLayout;
