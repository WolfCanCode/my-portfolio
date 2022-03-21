import { MyCV, Calculator } from "~/components/apps";

export const listApp = [
  {
    id: 0,
    title: "MyCV",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135800.png",
    comp: MyCV(),
    style: {
      width: 600,
      height: 800,
    },
  },
  {
    id: 1,
    title: "Calculator",
    icon: "https://help.apple.com/assets/5FF90A5FC596485AAD3C37A4/5FF90A60C596485AAD3C37AB/en_US/f19c7e914f0adb59c0833d00d09f1ea7.png",
    comp: Calculator(),
    style: {
      width: 365,
      height: 485,
    },
  },
];
