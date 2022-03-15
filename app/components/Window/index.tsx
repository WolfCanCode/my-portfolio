import React from "react";
import clsx from "clsx";
import { WindowHeader } from "~/components/Window/components/Header";
import { isSelectedState, runningAppState, selectedAppIdState } from "~/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Resizable } from "~/components/Window/Resizable";

export const Window = ({ id }: { id: number }) => {
  const currentApp = useRecoilValue(runningAppState(id));
  const isSelected = useRecoilValue(isSelectedState(id));
  const setSelected = useSetRecoilState(selectedAppIdState);

  const { style, title } = currentApp;
  return currentApp ? (
    <Resizable id={id}>
      <div
        className={`fixed z-10 left-0 top-0 bg-white shadow-lg rounded-lg p-1 border-[length:1px] border-gray-200 transition-transform duration-250 ease-out`}
        style={{
          width: `${style.width}px`,
          height: `${style.height}px`,
          top: style.top,
          left: style.left,
          zIndex: isSelected ? 50 : 10,
          transform: style.isMin ? "translateY(103vh)" : "translateY(0)",
        }}
        onMouseDown={() => {
          setSelected(id);
        }}
      >
        <WindowHeader id={id}>{title}</WindowHeader>
      </div>
    </Resizable>
  ) : null;
};
