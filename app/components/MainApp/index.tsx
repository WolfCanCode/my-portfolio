import React from "react";
import { TaskBar } from "~/components/TaskBar";
import { AppIcon } from "~/components/AppIcon";
import { runningAppsState, selectedAppIdState } from "~/atoms";
import { Window } from "~/components/Window";
import { useOpenApp } from "~/components/MainApp/useOpenApp";
import { useRecoilValue } from "recoil";

export const MainApp = () => {
  const runningApps = useRecoilValue<number[]>(runningAppsState);
  const openApp = useOpenApp();
  return (
    <>
      <div
        className={
          "hidden lg:block h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500"
        }
      >
        {(runningApps &&
          runningApps.length &&
          runningApps.map((id: number) => <Window key={id} id={id} />)) ||
          null}
        <TaskBar>
          <AppIcon id={0} onClick={() => openApp("New Window", 0)} />
          <AppIcon id={1} onClick={() => openApp("New Window 1", 1)} />
          <AppIcon id={2} onClick={() => openApp("New Window 2", 2)} />
          <AppIcon id={3} onClick={() => openApp("New Window 3", 3)} />
        </TaskBar>
      </div>
      <div className={"lg:hidden block text-center text-red-500"}>
        Sorry but this app doesn't support for mobile
      </div>
    </>
  );
};
