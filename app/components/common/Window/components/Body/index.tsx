import React, { ReactNode } from "react";

export const WindowBody = ({ children }: { children: ReactNode }) => {
  return <div className={"py-2 justify-center flex relative"}>{children}</div>;
};
