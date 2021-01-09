import React, { createContext, useState, useRef } from "react";
import "./app.less";
import "annar/dist/annar.css";
import { useAppEvent } from "remax/macro";
// import { queryUpgradePackages } from "@/services/commons";
import { shoppingCarOperate } from '@/core/shoppingcar';
import axios from 'axios'
import mpAdapter from 'axios-miniprogram-adapter'
axios.defaults.adapter = mpAdapter

export const CommonContext = createContext({});
export const ShoppingCarContext = createContext({});

let setShoppingCarDishes;

const App = (props) => {
  const [shoppingCarDishes, setDishes] = useState([]);
  const [shoppingCarMsg, setMsg] = useState('');


  axios.get('http://leiduoduo.free.idcfengye.com/user/getUserList')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  useAppEvent("onLaunch", async () => {
    setShoppingCarDishes = shoppingCarOperate(1, '王小明', setMsg, setDishes);


  });


  return (
    <ShoppingCarContext.Provider value={{ shoppingCarDishes, setShoppingCarDishes, shoppingCarMsg }}>
      {props.children}
    </ShoppingCarContext.Provider>
  )
};

export default App;
