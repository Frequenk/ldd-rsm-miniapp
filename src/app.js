import React, { createContext, useState } from "react";
import "./app.less";
import "annar/dist/annar.css";
import { useAppEvent } from "remax/macro";
import { queryUpgradePackages } from "@/services/commons";

export const CommonContext = createContext({});
export const ShoppingCarContext = createContext({});

const App = (props) => {
  const [shoppingCarDishes, setShoppingCarDishes] = useState([]);
  useAppEvent("onLaunch", async () => {
    const res = await queryUpgradePackages();
    console.log("res", res);
  });
  return (
    <ShoppingCarContext.Provider value={{ shoppingCarDishes, setShoppingCarDishes }}>
      {props.children}
    </ShoppingCarContext.Provider>
  )
};

export default App;
