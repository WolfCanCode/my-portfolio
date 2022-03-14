import { atomFamily, atom, selectorFamily, selector } from "recoil";

export type RunningAppState = {
  title: string;
  style: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
};

export const defaultWindowStyle = {
  top: 20,
  left: 20,
  width: 500,
  height: 400,
};

/**
 * An atom that stores the IDs of all RunningApps on the canvas.
 *
 * https://recoiljs.org/docs/api-reference/core/atom
 */
export const runningAppsState = atom<number[]>({
  key: "runningApps",
  default: [],
});

/**
 * An atomFamily that stores the states for all RunningApps.
 *
 * https://recoiljs.org/docs/api-reference/utils/atomFamily
 */
export const runningAppState = atomFamily<RunningAppState, number>({
  key: "runningApp",
  default: () => ({
    style: defaultWindowStyle,
    title: "",
  }),
});

/**
 * An atom that stores which RunningApp is currently selected.
 */
export const selectedAppIdState = atom<number>({
  key: "selectedRunningAppId",
  default: -1,
});

/**
 * A selector that returns the selected RunningApp's state.
 */
export const selectedRunningAppState = selector<RunningAppState | undefined>({
  key: "selectedRunningApp",
  get: ({ get }) => {
    const id = get(selectedAppIdState);

    if (id !== -1) {
      return get(runningAppState(id));
    }
  },
  set: ({ set, get }, newAppValue) => {
    const id = get(selectedAppIdState);

    if (id !== -1 && newAppValue) {
      set(runningAppState(id), newAppValue);
    }
  },
});

/**
 * A selectorFamily that returns true if the provided
 * RunningApp is currently selected.
 *
 * https://recoiljs.org/docs/api-reference/utils/selectorFamily
 */
export const isSelectedState = selectorFamily({
  key: "isSelected",
  get:
    (id: number) =>
    ({ get }) => {
      const selectedRunningAppIds = get(selectedAppIdState);
      return selectedRunningAppIds === id;
    },
});
