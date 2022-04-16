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
        "flex flex-row fixed z-50",
        "w-11/12 h-20",
        "left-[length:calc(100vw_/_12_/_2)] bottom-2",
        "rounded-xl",
        "px-2",
        "justify-center",
        "backdrop-blur-md bg-white/20 shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
};
