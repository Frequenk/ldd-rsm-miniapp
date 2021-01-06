import React, { createContext, useState, useRef } from "react";
import "./app.less";
import "annar/dist/annar.css";
import { useAppEvent } from "remax/macro";
import { queryUpgradePackages } from "@/services/commons";
import io from '@holytiny/wxmp-socket.io-client';

export const CommonContext = createContext({});
export const ShoppingCarContext = createContext({});


let socket;
let count = 0;
var timerId = null
let lastDishId;
const App = (props) => {
  const [shoppingCarDishes, setDishes] = useState([]);
  const [shoppingCarMsg, setMsg] = useState('');

  useAppEvent("onLaunch", async () => {
    // const res = await queryUpgradePackages();
    // console.log("res", res);
    socket = io(`http://192.168.137.1:3000?tableid=1`, { transports: ['websocket'] });
    console.log('socket', socket)
    socket.on('connect', () => {
      console.log('连接上了呀呀呀呀')
    });
    socket.on('shoppingCar', function (data) {
      console.log('shoppingCar', data);
      setMsg(data.msg)
      setDishes(data.data);
    });

  });
  const userName = '王小明';
  const setShoppingCarDishes = (val, dish) => {
    if (timerId && lastDishId === dish.id) {
      clearTimeout(timerId)
      count = count + 1;
    }
    timerId = setTimeout(() => {
      count = 0;
      timerId = null
    }, 3000)
    if (lastDishId !== dish.id)
      count = 0;
    lastDishId = dish.id;
    console.log('count666666', count)
    console.log('触发了这个函数')
    // 如果是清空购物车
    if (val?.length === 0) {
      socket.emit('shoppingCar', { data: [], msg: `${userName}清空了购物车` });
      setDishes([]);
      return;
    }
    // 编辑购物车内的菜品信息
    for (let i = 0; i < shoppingCarDishes.length; i++) {
      // 如果菜品已在购物车中
      if (shoppingCarDishes[i].dish.id === dish.id) {
        // 如果菜品数量为0，从购物车中删除该菜品
        if (val === 0) {
          const data = [
            ...shoppingCarDishes.slice(0, i),
            ...shoppingCarDishes.slice(i + 1),
          ];
          socket.emit('shoppingCar', { data, msg: `${userName}从购物车中删除了${dish.name}` });
          setDishes(data);
          return;
        }
        // 更改购物车中该菜品的数量
        const data = [
          ...shoppingCarDishes.slice(0, i),
          { dish: dish, number: val },
          ...shoppingCarDishes.slice(i + 1),
        ]
        // 如果菜品是减少
        if (shoppingCarDishes[i].number - val > 0)
          socket.emit('shoppingCar', { data, msg: `${userName}移除了${shoppingCarDishes[i].number - val + count}份${dish.name}` });
        else// 如果菜品是增多
          socket.emit('shoppingCar', { data, msg: `${userName}添加了${val - shoppingCarDishes[i].number + count}份${dish.name}` });
        setDishes(data);
        return;
      }
    }
    // 向购物车添加菜品
    const data = [...shoppingCarDishes, { dish: dish, number: val }]
    socket.emit('shoppingCar', { data, msg: `${userName}向购物车中新增了${dish.name}` });
    setDishes(data);
  }

  return (
    <ShoppingCarContext.Provider value={{ shoppingCarDishes, setShoppingCarDishes, shoppingCarMsg }}>
      {props.children}
    </ShoppingCarContext.Provider>
  )
};

export default App;
