import React, { useEffect } from "react";
import clsx from "clsx";
import { WindowHeader } from "~/components/common/Window/components/Header";
import { isSelectedState, runningAppState, selectedAppIdState } from "~/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Resizable } from "~/components/common/Window/Resizable";
import { WindowBody } from "~/components/common/Window/components/Body";
import { animate } from "motion";
import { listApp } from "~/components/common/MainApp/configs";

export const Window = ({ id }: { id: number }) => {
  const currentApp = useRecoilValue(runningAppState(id));
  const isSelected = useRecoilValue(isSelectedState(id));
  const setSelected = useSetRecoilState(selectedAppIdState);

  const { style, title, comp, rootStyle } = currentApp;
  useEffect(() => {
    const buttonAppIcon = document.querySelector(
      `#app-icon-${id}`
    ) as HTMLElement;
    const windowApp = document.querySelector(
      `#window-app-${id}`
    ) as HTMLElement;
    if (style.isMin) {
      animate(
        windowApp,
        {
          x: [
            style.left,
            buttonAppIcon.offsetLeft - buttonAppIcon.offsetWidth - 35,
          ],
        },
        { duration: 0.35, easing: "ease-in-out", repeat: 0 }
      );
      animate(
        windowApp,
        {
          y: [style.top, screen.availHeight - buttonAppIcon.offsetTop - 350],
        },
        { duration: 0.5, easing: "ease-in-out", repeat: 0 }
      );
      animate(
        windowApp,
        {
          scale: [1, windowApp.offsetWidth > 300 ? 0.12 : 0.2],
        },
        { duration: 0.2, easing: "ease-in-out", repeat: 0 }
      );
      animate(
        windowApp,
        {
          opacity: [1, 0],
        },
        { duration: 0.6, easing: "ease-in-out", repeat: 0 }
      );
    } else {
      animate(
        windowApp,
        {
          x: [buttonAppIcon.offsetLeft, style.left],
        },
        { duration: 0.4, easing: "ease-in-out", repeat: 0 }
      );
      animate(
        windowApp,
        {
          y: [screen.availHeight - buttonAppIcon.offsetTop, style.top],
        },
        { duration: 0.4, easing: "ease-in-out", repeat: 0 }
      );
      animate(
        windowApp,
        {
          scale: [0.2, 1],
        },
        { duration: 0.6, easing: "ease-in-out", repeat: 0 }
      );
      animate(
        windowApp,
        {
          opacity: [0, 1],
        },
        { duration: 0.1, easing: "ease-in-out", repeat: 0 }
      );
    }
  }, [style.isMin]);
  return currentApp ? (
    <Resizable id={id}>
      <div
        id={`window-app-${id}`}
        className={`fixed z-10 left-0 top-0 bg-white/50 backdrop-blur-md shadow-lg rounded-lg p-1 border-[length:1px] border-gray-200 `}
        style={{
          width: `${style.width}px`,
          height: `${style.height}px`,
          // top: style.top,
          // left: style.left,
          zIndex: isSelected ? 50 : 10,
          transform: `translate(${style.left}px, ${style.top}px)`,
        }}
        onMouseDown={() => {
          setSelected(id);
        }}
      >
        <WindowHeader id={id}>{title}</WindowHeader>
        <WindowBody>
          {style.isMin ? (
            <img
              src={listApp.find((app) => app.id === id)?.icon}
              className={"cover absolute top-0 left-0"}
            />
          ) : null}
          <div className={`${style.isMin ? "opacity-0" : "opacity-100"}`}>
            {comp}
          </div>
        </WindowBody>
      </div>
    </Resizable>
  ) : null;
};
