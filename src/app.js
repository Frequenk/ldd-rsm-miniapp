import React, { createContext, useState, useRef } from "react";
import "./app.less";
import "annar/dist/annar.css";
import { useAppEvent } from "remax/macro";
// import { queryUpgradePackages } from "@/services/commons";
import { shoppingCarOperate } from '@/core/shoppingcar';
import axios from 'axios'
import mpAdapter from 'axios-miniprogram-adapter'
import { login, setStorageSync, getStorageSync } from "remax/wechat";

axios.defaults.adapter = mpAdapter

export const CommonContext = createContext({});
export const ShoppingCarContext = createContext({});
export const PageLoadingContext = createContext({});


let setShoppingCarDishes;

const App = (props) => {
  console.log('props', props)
  const [shoppingCarDishes, setDishes] = useState([]);
  const [shoppingCarMsg, setMsg] = useState('');
  const [pageLoading, setPageLoading] = useState(false);
  const user = {};
  user.name = '王小明'



  useAppEvent("onLaunch", async () => {
    setPageLoading(true)
    // 初始化socket及购物车函数
    setShoppingCarDishes = shoppingCarOperate(1, user?.name, setMsg, setDishes);

    // 初始化请求工具
    axios.defaults.baseURL = 'http://leiduoduo.free.idcfengye.com';

    // 添加响应拦截器
    axios.interceptors.response.use(function (response) {
      const { data: { data } } = response;
      return data;
    }, function (error) {
      return Promise.reject(error);
    });

    const { code } = await login();
    const token = await axios.post(`user/userToken?code=${code}`);
    await setStorageSync('token', token)
    const tokens = await getStorageSync('token')
    console.log('getStorage(token)', tokens)

    // 添加请求拦截器
    axios.interceptors.request.use(function (config) {
      console.log('config', config)
      config.headers.Authorization = `Bearer 666`
      return config;
    }, function (error) {
      return Promise.reject(error);
    });

    const users = await axios.get(`user/token`);
    console.log('users', users)
    setPageLoading(false)
  });


  return (
    <PageLoadingContext.Provider value={{ pageLoading, setPageLoading }}>
      <ShoppingCarContext.Provider value={{ shoppingCarDishes, setShoppingCarDishes, shoppingCarMsg }}>
        {props.children}
      </ShoppingCarContext.Provider>
    </PageLoadingContext.Provider>
  )
};

export default App;
