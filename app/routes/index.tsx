import React from "react";
import { MainApp } from "~/components/MainApp";
import { RecoilRoot } from "recoil";

export default function Index() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}
