import React from "react";
import clsx from "clsx";

interface TaskBarP {
  className?: string;
  children?: React.ReactNode;
}

export const TaskBar = ({ children, className }: TaskBarP) => {
  return (
    <div
      className={clsx(
        "flex flex-row fixed",
        "w-11/12 h-16",
        "left-20 bottom-5",
        "rounded-xl",
        "px-2",
        "justify-center",
        "backdrop-blur-md bg-white/30 shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
};
