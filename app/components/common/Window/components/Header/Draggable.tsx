import { runningAppState, selectedAppIdState } from "~/atoms";
import { useRecoilCallback, useRecoilValue } from "recoil";

import { DraggableCore } from "react-draggable";
import React from "react";

type DraggableProps = {
  id: number;
  children: React.ReactNode | JSX.Element;
};

export const Draggable: React.FC<DraggableProps> = ({
  id,
  children,
}: DraggableProps) => {
  const selectedAppId = useRecoilValue(selectedAppIdState);

  const setAppStyle = useRecoilCallback(
    ({ set }) => {
      return (movementX: number, movementY: number) => {
        set(runningAppState(id), (runningApp) => ({
          ...runningApp,
          style: {
            ...runningApp.style,
            top:
              runningApp.style.top + runningApp.style.height + movementY >
              window.screen.height - 210
                ? window.screen.height - runningApp.style.height - 210
                : runningApp.style.top > 43
                ? runningApp.style.top + movementY
                : 43 + movementY,
            left:
              runningApp.style.left + movementX < 0
                ? 0
                : runningApp.style.left + movementX + runningApp.style.width <
                  window.screen.width
                ? runningApp.style.left + movementX
                : window.screen.width - runningApp.style.width,
          },
        }));
      };
    },
    [selectedAppId]
  );

  return (
    //@ts-ignore
    <DraggableCore
      onDrag={(e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setAppStyle(e.movementX, e.movementY);
      }}
    >
      {children}
    </DraggableCore>
  );
};
