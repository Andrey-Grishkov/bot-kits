import React, { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        gridArea: "C",
        backgroundColor: "white",
        padding: "20px",
      }}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
