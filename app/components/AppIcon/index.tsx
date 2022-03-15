import React from "react";
import clsx from "clsx";
import { useRecoilValue } from "recoil";
import { isRunningAppState, isSelectedState } from "~/atoms";

export const AppIcon = ({
  id,
  onClick,
}: {
  id: number;
  onClick?: () => void;
}) => {
  const isSelected = useRecoilValue(isSelectedState(id));
  const isRunningApp = useRecoilValue(isRunningAppState(id));

  return (
    <div
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
        src={"https://i.ibb.co/bL3Y0xV/profile-Logo.png"}
        className={"object-contain h-12 w-12 m-auto p-2"}
      />
      {isRunningApp ? (
        <label
          className={
            "bg-white/75 h-1.5 w-1.5 rounded-full bottom-[length:-14px] absolute m-auto left-1/2 transform-translate-x-1/2"
          }
        />
      ) : null}
    </div>
  );
};
