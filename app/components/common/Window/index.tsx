import React, { useEffect } from "react";
import { isSelectedState, runningAppState, selectedAppIdState } from "~/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { Resizable } from "~/components/common/Window/Resizable";
import { WindowBody } from "~/components/common/Window/components/Body";
import { WindowHeader } from "~/components/common/Window/components/Header";
import { animate } from "motion";
import clsx from "clsx";
import { listApp } from "~/configs/configs";

export const Window = ({ id }: { id: number }) => {
  const currentApp = useRecoilValue(runningAppState(id));
  const setCurrentApp = useSetRecoilState(runningAppState(id));
  const isSelected = useRecoilValue(isSelectedState(id));
  const setSelected = useSetRecoilState(selectedAppIdState);

  const { style, title, comp } = currentApp;
  useEffect(() => {
    const buttonAppIcon = document.querySelector(
      `#app-icon-${id}`
    ) as HTMLElement;
    const windowApp = document.querySelector(
      `#window-app-${id}`
    ) as HTMLElement;
    if (!style.isInitial) {
      if (style.isMin) {
        animate(
          windowApp,
          {
            x: [style.left, buttonAppIcon.getBoundingClientRect().x],
            zIndex: 50,
          },
          { duration: 0.45, easing: "ease-in-out", repeat: 0 }
        );
        animate(
          windowApp,
          {
            y: [style.top, screen.availHeight - buttonAppIcon.offsetTop - 150],
          },
          { duration: 0.8, easing: "ease-in-out", repeat: 0 }
        ).finished.then(() => {
          animate(
            windowApp,
            {
              opacity: [1, 0],
            },
            { duration: 0.1, easing: "ease-in", repeat: 0 }
          );
        });
        animate(
          windowApp,
          {
            width: [style.width + "px", buttonAppIcon.offsetWidth + "px"],
            height: [style.height + "px", buttonAppIcon.offsetHeight + "px"],
          },
          { duration: 0.2, easing: "ease-in-out", repeat: 0 }
        );
      } else {
        if (style.isMin !== undefined) {
          animate(
            windowApp,
            {
              x: [buttonAppIcon.offsetLeft + 200, style.left],
              zIndex: 50,
            },
            { duration: 0.5, easing: "ease-in-out", repeat: 0 }
          );
          animate(
            windowApp,
            {
              y: [screen.availHeight - buttonAppIcon.offsetTop, style.top],
            },
            { duration: 0.35, easing: "ease-in-out", repeat: 0 }
          );
          setTimeout(() => {
            animate(
              windowApp,
              {
                width: [buttonAppIcon.offsetWidth + "px", style.width + "px"],
                height: [
                  buttonAppIcon.offsetHeight + "px",
                  style.height + "px",
                ],
              },
              { duration: 0.5, easing: "ease-in-out", repeat: 0 }
            );
          }, 200);
          animate(
            windowApp,
            {
              opacity: [0, 1],
            },
            { duration: 0.1, easing: "ease-in-out", repeat: 0 }
          );
        }
      }
    } else {
      setCurrentApp({
        ...currentApp,
        style: { ...currentApp.style, isInitial: false },
      });
    }
  }, [style.isMin]);
  return currentApp ? (
    <Resizable id={id}>
      <div
        id={`window-app-${id}`}
        className={`fixed z-10 left-0 top-0  backdrop-blur-md rounded-lg p-1 ${
          style.isMin
            ? ""
            : "bg-white/20  border-white border-opacity-5 border-[length:1px] shadow-lg "
        } border-gray-200 `}
        style={{
          width: `${style.width}px`,
          height: `${style.height}px`,
          // top: style.top,
          // left: style.left,
          zIndex: isSelected ? 50 : 10,
          transform: `translate(${style.left}px, ${style.top}px)`,
        }}
        onMouseDown={() => setSelected(id)}
      >
        {!style.isMin ? <WindowHeader id={id}>{title}</WindowHeader> : null}
        <WindowBody>
          {style.isMin ? (
            <img
              alt="app-icon"
              src={listApp.find((app) => app.id === id)?.icon}
              className={"cover absolute top-0 left-0 h-auto w-auto"}
            />
          ) : null}
          <div className={`${style.isMin ? "hidden" : "block"} h-full w-full`}>
            {comp}
          </div>
        </WindowBody>
      </div>
    </Resizable>
  ) : null;
};
