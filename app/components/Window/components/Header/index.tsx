import React from "react";
import { DraggableCore } from "react-draggable";
import { Draggable } from "~/components/Window/components/Header/Draggable";
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
    setCurrentAppState({
      ...currentAppState,
      style: {
        ...currentAppState.style,
        top: 0,
        left: 0,
        width: currentAppState.style.isMax ? 500 : screen.width,
        height: currentAppState.style.isMax ? 400 : screen.height,
        isMax: !currentAppState.style.isMax,
      },
    });
  };

  const minWindow = () => {
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
        className={"relative h-6 flex flex-row"}
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
        <div className={"ml-1 select-none"}>
          <h1>
            {children} - {id}
          </h1>
        </div>
      </div>
    </Draggable>
  );
};
