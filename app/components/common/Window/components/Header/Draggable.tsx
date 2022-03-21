import React from "react";
import { DraggableCore } from "react-draggable";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { runningAppState, selectedAppIdState } from "~/atoms";

type DraggableProps = {
  id: number;
};

export const Draggable: React.FC<DraggableProps> = ({ id, children }) => {
  const selectedAppId = useRecoilValue(selectedAppIdState);

  const setAppStyle = useRecoilCallback(
    ({ set }) => {
      return (movementX: number, movementY: number) => {
        set(runningAppState(id), (runningApp) => ({
          ...runningApp,
          style: {
            ...runningApp.style,
            top: runningApp.style.top + movementY,
            left: runningApp.style.left + movementX,
          },
        }));
      };
    },
    [selectedAppId]
  );

  return (
    <DraggableCore
      onDrag={(e: any) => {
        setAppStyle(e.movementX, e.movementY);
        e.stopPropagation();
      }}
    >
      {children}
    </DraggableCore>
  );
};
