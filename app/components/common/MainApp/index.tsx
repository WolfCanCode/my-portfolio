import { ContextMenu, ContextMenuTrigger } from "react-contextmenu";
import { DropdownState, runningAppsState } from "~/atoms";
import { useRecoilState, useRecoilValue } from "recoil";

import { AppIcon } from "~/components/common/AppIcon";
import { HeaderDropdown } from "../HeaderDropdown";
import { MainDropdown } from "../MainDropdown";
import React from "react";
import { TaskBar } from "~/components/common/TaskBar";
import { TopBar } from "../TopBar";
import { Window } from "~/components/common/Window";
import { listApp } from "~/configs/configs";
import { useOpenApp } from "~/components/common/MainApp/useOpenApp";

export const MainApp = () => {
  const runningApps = useRecoilValue<number[]>(runningAppsState);
  const [dropdownStatus, setDropdownStatus] =
    useRecoilState<string>(DropdownState);

  const openApp = useOpenApp();

  const clearDropdown = () => {
    setDropdownStatus("");
  };

  const setMainDropdown = () => {
    setDropdownStatus("main");
  };

  return (
    <>
      {/*@ts-ignore*/}
      <ContextMenuTrigger>
        <div
          className={"hidden lg:block h-screen w-screen bg-wallpaper"}
          onClick={setMainDropdown}
        >
          <TopBar />
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
                onClick={(e: any) => {
                  e.stopPropagation();
                  setDropdownStatus("header");
                  openApp(app.title, app.id, app.comp, app.style);
                }}
              />
            ))}
          </TaskBar>
        </div>
        <div className={"lg:hidden block text-center text-red-500"}>
          Sorry but this app doesn't support for mobile
        </div>
      </ContextMenuTrigger>
      {/*@ts-ignore*/}
      <ContextMenu onHide={clearDropdown} className="z-100">
        {dropdownStatus === "main" && <MainDropdown />}
        {dropdownStatus === "header" && <HeaderDropdown />}
      </ContextMenu>
    </>
  );
};
