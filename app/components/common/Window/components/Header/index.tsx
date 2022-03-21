import React from "react";
import { Draggable } from "~/components/common/Window/components/Header/Draggable";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import {
  isSelectedState,
  runningAppsState,
  runningAppState,
  selectedAppIdState,
} from "~/atoms";
import { animate } from "motion";

export const WindowHeader = ({
  children,
  id,
}: {
  children: string;
  id: number;
}) => {
  const [currentAppState, setCurrentAppState] = useRecoilState(
    runningAppState(id)
  );
  const removeApp = useResetRecoilState(runningAppState(id));
  const [runningApps, setRunningApps] = useRecoilState(runningAppsState);
  const setSelectedRunningApp = useSetRecoilState(selectedAppIdState);
  const isSelected = useRecoilValue(isSelectedState(id));
  const [isHover, setIsHover] = React.useState(false);

  const expandWindow = () => {
    const windowApp = document.querySelector(
      `#window-app-${id}`
    ) as HTMLElement;
    if (!currentAppState.style.isMax) {
      animate(
        windowApp,
        {
          x: [currentAppState.style.left, 0],
          y: [currentAppState.style.top, 0],
          width: [currentAppState.style.width, "100vw"],
          height: [currentAppState.style.height, "100vh"],
        },
        { duration: 0.4, easing: "ease-in-out", repeat: 0 }
      );
    } else {
      animate(
        windowApp,
        {
          x: [0, currentAppState.style.left],
          y: [0, currentAppState.style.top],
          width: ["100vw", `${currentAppState.style.width}px`],
          height: ["100vh", `${currentAppState.rootStyle.height}px`],
        },
        { duration: 0.4, easing: "ease-in-out", repeat: 0 }
      );
    }
    setCurrentAppState({
      ...currentAppState,
      style: {
        ...currentAppState.style,
        isMax: !currentAppState.style.isMax,
      },
    });
  };

  const minWindow = () => {
    if (currentAppState.style.isMax) {
      if (!currentAppState.style.isMin) {
        expandWindow();
      }
    }
    setCurrentAppState({
      ...currentAppState,
      style: {
        ...currentAppState.style,
        isMin: true,
      },
    });
    setSelectedRunningApp(-1);
  };

  const closeWindow = () => {
    removeApp();
    setRunningApps(runningApps.filter((appId) => appId !== id));
    setSelectedRunningApp(-1);
  };

  return (
    <Draggable id={id}>
      <div
        className={"relative h-6 flex flex-row overflow-hidden"}
        onDoubleClick={() => {
          expandWindow();
        }}
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <div className={"flex flex-row gap-1 px-1"}>
          <button
            aria-label={"close"}
            className={
              "rounded-full w-3 h-3 bg-red-500 hover:bg-red-400 m-auto shadow-md"
            }
            onClick={() => {
              closeWindow();
            }}
            style={!isSelected && !isHover ? { backgroundColor: "gray" } : {}}
          />
          <button
            aria-label={"minimize"}
            className={
              "rounded-full w-3 h-3 bg-orange-500 hover:bg-orange-400 m-auto  shadow-md"
            }
            style={!isSelected && !isHover ? { backgroundColor: "gray" } : {}}
            onClick={() => {
              minWindow();
            }}
          />
          <button
            aria-label={"expand"}
            className={
              "rounded-full w-3 h-3 bg-green-500 hover:bg-green-400 m-auto  shadow-md"
            }
            onClick={() => {
              expandWindow();
            }}
            style={!isSelected && !isHover ? { backgroundColor: "gray" } : {}}
          />
        </div>
        <div className={"ml-3 select-none"}>
          <h1 className={"font-medium"}>{children}</h1>
        </div>
      </div>
    </Draggable>
  );
};
