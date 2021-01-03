import React, { createContext, useState } from "react";
import "./app.less";
import "annar/dist/annar.css";
import { useAppEvent } from "remax/macro";
import { queryUpgradePackages } from "@/services/commons";
import io from '@holytiny/wxmp-socket.io-client';

export const CommonContext = createContext({});
export const ShoppingCarContext = createContext({});

const App = (props) => {
  const [shoppingCarDishes, setShoppingCarDishes] = useState([]);
  useAppEvent("onLaunch", async () => {
    // const res = await queryUpgradePackages();
    // console.log("res", res);
    var socket = io(`http://localhost:3000?roomid=1`, { transports: ['websocket'] });
    console.log('socket', socket)
    socket.on('connect', () => {
      console.log('连接上了呀呀呀呀')
    });
    socket.on('addCart', function (data) {
      console.log(data);
    });
    socket.emit('addCart', 'addCart');
    console.log('666666666666', 666666666666)
  });
  return (
    <ShoppingCarContext.Provider value={{ shoppingCarDishes, setShoppingCarDishes }}>
      {props.children}
    </ShoppingCarContext.Provider>
  )
};

export default App;
