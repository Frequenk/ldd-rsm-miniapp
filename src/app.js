import React, { createContext, useState } from "react";
import "./app.less";
import "annar/dist/annar.css";
import { useAppEvent } from "remax/macro";
import { queryUpgradePackages } from "@/services/commons";
import io from '@holytiny/wxmp-socket.io-client';

export const CommonContext = createContext({});
export const ShoppingCarContext = createContext({});

const App = (props) => {
  const [shoppingCarDishes, setDishes] = useState([]);
  const setShoppingCarDishes = (val, dish) => {
    // 如果是清空购物车
    if (val?.length === 0) {
      setDishes([]);
      return;
    }
    // 编辑购物车内的菜品信息
    for (let i = 0; i < shoppingCarDishes.length; i++) {
      // 如果菜品已在购物车中
      if (shoppingCarDishes[i].dish.id === dish.id) {
        // 如果菜品数量为0，从购物车中删除该菜品
        if (val === 0) {
          setDishes([
            ...shoppingCarDishes.slice(0, i),
            ...shoppingCarDishes.slice(i + 1),
          ]);
          return;
        }
        // 更改购物车中该菜品的数量
        setDishes([
          ...shoppingCarDishes.slice(0, i),
          { dish: dish, number: val },
          ...shoppingCarDishes.slice(i + 1),
        ]);
        return;
      }
    }
    // 向购物车添加菜品
    setDishes([...shoppingCarDishes, { dish: dish, number: val }]);
  }
  useAppEvent("onLaunch", async () => {
    // const res = await queryUpgradePackages();
    // console.log("res", res);
    const socket = io(`http://localhost:3000?tableid=1`, { transports: ['websocket'] });
    console.log('socket', socket)
    socket.on('connect', () => {
      console.log('连接上了呀呀呀呀')
    });
    socket.on('shoppingCar', function (data) {
      console.log(data);
    });
    socket.emit('shoppingCar', 'shoppingCar');
    console.log('666666666666', 666666666666)
  });
  return (
    <ShoppingCarContext.Provider value={{ shoppingCarDishes, setShoppingCarDishes }}>
      {props.children}
    </ShoppingCarContext.Provider>
  )
};

export default App;
