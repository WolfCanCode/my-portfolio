import styled, { css } from "styled-components";

import React from "react";
import { Resizable as ReactResizable } from "react-resizable";
import type { ResizeHandle } from "react-resizable";
import { runningAppState } from "~/atoms";
import { useRecoilState } from "recoil";

export const Resizable: React.FC<{ id: number }> = ({ children, id }) => {
  const [runningApp, setRunningApp] = useRecoilState(runningAppState(id));

  const onResizeHandle = (h: ResizeHandle) => {
    switch (h) {
      case "n": {
        expandToTop();
        break;
      }
      case "w": {
        expandToLeft();
        break;
      }
      case "s": {
        expandToBottom();
        break;
      }
      case "e": {
        expandToRight();
        break;
      }
      case "nw": {
        expandToTop();
        expandToLeft();
        break;
      }
      case "sw": {
        expandToBottom();
        expandToLeft();
        break;
      }
      case "ne": {
        expandToTop();
        expandToRight();
        break;
      }
      case "se": {
        expandToBottom();
        expandToRight();
        break;
      }
    }
  };

  const expandToTop = () => {
    setRunningApp((app) => ({
      ...app,
      style: {
        ...app.style,
        top: 0,
        height: app.style.height + app.style.top,
      },
    }));
  };

  const expandToLeft = () => {
    setRunningApp((app) => ({
      ...app,
      style: {
        ...app.style,
        left: 0,
        width: app.style.width + app.style.left,
      },
    }));
  };

  const expandToRight = () => {
    setRunningApp((app) => ({
      ...app,
      style: {
        ...app.style,
        width: screen.availWidth - app.style.left,
      },
    }));
  };

  const expandToBottom = () => {
    setRunningApp((app) => ({
      ...app,
      style: {
        ...app.style,
        height:
          app.style.height +
          (screen.availHeight - app.style.height - app.style.top - 178),
      },
    }));
  };

  return (
    <ReactResizable
      width={runningApp.style.width}
      height={runningApp.style.height}
      onResize={(_, { size, handle }) => {
        if (!runningApp.style.isMax) {
          setRunningApp((app) => ({
            ...app,
            style: {
              ...app.style,
              width:
                Math.round(size.width) < runningApp.rootStyle.width
                  ? runningApp.rootStyle.width
                  : Math.round(size.width),
              height:
                Math.round(size.height) < runningApp.rootStyle.height
                  ? runningApp.rootStyle.height
                  : Math.round(size.height),
              left:
                handle === "sw" || handle === "w" || handle === "nw"
                  ? app.style.left + app.style.width - size.width > 0
                    ? app.style.left + app.style.width - size.width
                    : 0
                  : app.style.left,
              top:
                handle === "nw" || handle === "n" || handle === "ne"
                  ? app.style.top + app.style.height - size.height > 0
                    ? app.style.top + app.style.height - size.height
                    : 0
                  : app.style.top,
              isMax: false,
            },
          }));
        }
      }}
      resizeHandles={["sw", "se", "nw", "ne", "w", "e", "n", "s"]}
      handle={(h) => (
        <Handle
          className={`handle-${h} ${runningApp.style.isMax ? "is-max" : ""}`}
          isVisible={true}
          onDoubleClick={() => onResizeHandle(h)}
        />
      )}
    >
      {/* @ts-ignore */}
      {children}
    </ReactResizable>
  );
};

const Handle = styled.span<{ isVisible: boolean }>`
  position: absolute;
  width: 10px;
  height: 10px;
  opacity: 0;
  pointer-events: none;
  transition: 0.1s opacity ease-in-out;

  ${(props) =>
    props.isVisible &&
    css`
      opacity: 1;
      pointer-events: initial;
    `}
  &.is-max {
    cursor: default !important;
  }

  &.handle-sw {
    bottom: 0;
    left: 0;
    cursor: sw-resize;
  }

  &.handle-se {
    bottom: 0;
    right: 0;
    cursor: se-resize;
  }

  &.handle-nw {
    top: 0;
    left: 0;
    cursor: nw-resize;
  }

  &.handle-ne {
    top: 0;
    right: 0;
    cursor: ne-resize;
  }

  &.handle-w,
  &.handle-e {
    top: 3%;
    height: 96%;
    cursor: ew-resize;
  }

  &.handle-w {
    left: -6px;
  }

  &.handle-e {
    right: -6px;
  }

  &.handle-n,
  &.handle-s {
    left: 3%;
    width: 96%;
    cursor: ns-resize;
  }

  &.handle-n {
    top: -6px;
  }

  &.handle-s {
    bottom: -6px;
  }
`;
