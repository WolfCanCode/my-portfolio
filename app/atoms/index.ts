import { atomFamily, atom, selectorFamily, selector } from "recoil";
import { ReactNode } from "react";

export type RunningAppState = {
  title: string;
  style: {
    top: number;
    left: number;
    width: number;
    height: number;
    isMin?: boolean;
    isMax?: boolean;
    isInitial?: boolean;
  };
  rootStyle: {
    top: number;
    left: number;
    width: number;
    height: number;
    isMin?: boolean;
    isMax?: boolean;
    isInitial?: boolean;
  };
  comp?: ReactNode;
};

export const defaultWindowStyle = {
  top: 20,
  left: 20,
  width: 500,
  height: 400,
  isMin: false,
  isMax: false,
  isInitial: true,
};

export const runningAppsState = atom<number[]>({
  key: "runningApps",
  default: [],
});

export const runningAppState = atomFamily<RunningAppState, number>({
  key: "runningApp",
  default: () => ({
    style: defaultWindowStyle,
    rootStyle: defaultWindowStyle,
    title: "",
  }),
});

export const selectedAppIdState = atom<number>({
  key: "selectedRunningAppId",
  default: -1,
});

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

export const isSelectedState = selectorFamily({
  key: "isSelected",
  get:
    (id: number) =>
    ({ get }) => {
      const selectedRunningAppIds = get(selectedAppIdState);
      return selectedRunningAppIds === id;
    },
});

export const isRunningAppState = selectorFamily({
  key: "isRunningApp",
  get:
    (id: number) =>
    ({ get }) => {
      const runningApps = get(runningAppsState);
      return runningApps.includes(id);
    },
});
