import React, { createContext } from "react";
import "./app.less";
import "annar/dist/annar.css";
import { useAppEvent } from "remax/macro";
import { queryUpgradePackages } from "@/services/commons";

export const CommonContext = createContext({});

const App = (props) => {
  useAppEvent("onLaunch", async () => {
    const res = await queryUpgradePackages();
    console.log("res", res);
  });
  return props.children;
};

export default App;
