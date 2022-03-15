import {
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  runningAppsState,
  runningAppState,
  defaultWindowStyle,
  selectedAppIdState,
  isSelectedState,
  isRunningAppState,
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
      return (title: string, appId: number) => {
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
          style: defaultWindowStyle,
          title,
        });
      };
    },
    [runningApps]
  );
};
