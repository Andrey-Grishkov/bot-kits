import React, { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        gridArea: "C",
      }}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
