import React, { ReactNode } from "react";

export const WindowBody = ({ children }: { children: ReactNode }) => {
  return (
    <div className={"py-2 justify-center relative h-full w-full overflow-hidden"}>
      {children}
    </div>
  );
};
