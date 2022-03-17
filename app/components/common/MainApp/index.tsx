import React from "react";
import { TaskBar } from "~/components/common/TaskBar";
import { AppIcon } from "~/components/common/AppIcon";
import { runningAppsState, selectedAppIdState } from "~/atoms";
import { Window } from "~/components/common/Window";
import { useOpenApp } from "~/components/common/MainApp/useOpenApp";
import { useRecoilValue } from "recoil";
import { listApp } from "~/components/common/MainApp/configs";

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
          {listApp.map((app) => (
            <AppIcon
              key={app.id}
              id={app.id}
              icon={app.icon}
              onClick={() => openApp(app.title, app.id, app.comp, app.style)}
            />
          ))}
        </TaskBar>
      </div>
      <div className={"lg:hidden block text-center text-red-500"}>
        Sorry but this app doesn't support for mobile
      </div>
    </>
  );
};
