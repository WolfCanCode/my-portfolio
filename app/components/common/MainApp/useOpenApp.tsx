import React from "react";
import { useRecoilCallback, useRecoilState, useSetRecoilState } from "recoil";
import {
  defaultWindowStyle,
  runningAppsState,
  runningAppState,
  selectedAppIdState,
} from "~/atoms";

/**
 * A hook that returns a function that can be called
 * to insert a new Element of a given type.
 */
export const useOpenApp = () => {
  const [runningApps, setRunningApps] = useRecoilState(runningAppsState);
  const setSelected = useSetRecoilState(selectedAppIdState);
  return useRecoilCallback(
    ({ set, snapshot }) => {
      return (
        title: string,
        appId: number,
        comp?: React.ReactNode,
        style?: { width?: number; height?: number; top?: number; left?: number }
      ) => {
        const currentApp = snapshot.getLoadable(runningAppState(appId));
        setSelected(appId);

        if (currentApp.contents.title) {
          set(runningAppState(appId), {
            ...currentApp.contents,
            style: {
              ...currentApp.contents.style,
              isMin: false,
            },
          });

          return;
        }
        setRunningApps((runningApps) => [...runningApps, appId]);
        set(runningAppState(appId), {
          style: { ...defaultWindowStyle, ...style },
          rootStyle: { ...defaultWindowStyle, ...style },
          title,
          comp,
        });
      };
    },
    [runningApps]
  );
};
