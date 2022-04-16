import { isRunningAppState, isSelectedState } from "~/atoms";

import App from "~/root";
import React from "react";
import clsx from "clsx";
import { useRecoilValue } from "recoil";

export const AppIcon = ({
  id,
  onClick,
  icon,
}: {
  id: number;
  onClick?: (e: any) => void;
  icon: string;
}) => {
  const isSelected = useRecoilValue(isSelectedState(id));
  const isRunningApp = useRecoilValue(isRunningAppState(id));

  return (
    <div
      id={`app-icon-${id}`}
      onClick={onClick}
      className={clsx(
        "relative h-12 w-12",
        "bg-gray-500/20 shadow-md",
        "rounded-lg",
        "my-2 mx-1.5 cursor-pointer",
        "transition-colors duration-200 ease-in-out",
        "transition-all duration-100 ease-in",
        "hover:bg-white/50",
        "active:bg-white/30 active:scale-95",
        isSelected ? "bg-white/40" : ""
      )}
    >
      <img
        alt={`app id ${id}`}
        src={icon}
        className={"object-contain h-12 w-12 m-auto p-1"}
      />
      <div className="w-full flex justify-center">
        <label
          className={clsx(
            "bg-white/75 h-1.5 w-1.5 rounded-full bottom-[length:-14px] absolute m-auto left-[length: calc(50%_-_0.225rem)] transform-translate-x-1/2 transition-all duration-200 ease-in",
            isRunningApp ? "opacity-80" : "opacity-0",
            isSelected && "w-6 opacity-100 bg-white"
          )}
        />
      </div>
    </div>
  );
};
