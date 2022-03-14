import { useRecoilCallback, useRecoilState } from "recoil";
import { runningAppsState, runningAppState, defaultWindowStyle } from "~/atoms";

/**
 * A hook that returns a function that can be called
 * to insert a new Element of a given type.
 */
export const useOpenApp = () => {
  const [runningApps, setRunningApps] = useRecoilState(runningAppsState);

  return useRecoilCallback(
    ({ set }) => {
      return (title: string, appId: number) => {
        setRunningApps((runningApps) => [...runningApps, appId]);

        set(runningAppState(appId), {
          style: defaultWindowStyle,
          title,
        });
      };
    },
    [runningApps]
  );
};
