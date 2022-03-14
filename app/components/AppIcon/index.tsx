import React from "react";
import clsx from "clsx";
import { useRecoilValue } from "recoil";
import { isSelectedState } from "~/atoms";

export const AppIcon = ({
  id,
  onClick,
}: {
  id: number;
  onClick?: () => void;
}) => {
  const isSelected = useRecoilValue(isSelectedState(id));

  return (
    <div
      onClick={onClick}
      className={clsx(
        "h-12 w-12",
        "bg-gray-500/20",
        "rounded-lg",
        "my-2 mr-2 cursor-pointer",
        "transition-colors duration-200 ease-in-out",
        "transition-all duration-100 ease-in",
        "hover:bg-gray-500/50",
        "active:bg-gray-500/30 active:scale-95",
        isSelected ? "bg-gray-700/40" : ""
      )}
    >
      <img
        src={"https://i.ibb.co/bL3Y0xV/profile-Logo.png"}
        className={"object-contain h-12 w-12 m-auto p-2"}
      />
    </div>
  );
};
