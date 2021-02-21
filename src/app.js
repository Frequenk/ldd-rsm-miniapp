import React, { createContext, useState, useEffect } from "react";
import "./app.less";
import "annar/dist/annar.css";
import { useAppEvent } from "remax/macro";
// import { queryUpgradePackages } from "@/services/commons";
import axios from 'axios'
import mpAdapter from 'axios-miniprogram-adapter'
import { login, setStorageSync, getStorageSync, showToast } from "remax/wechat";
import { reLaunch } from "remax/one";
import { tableStatusType } from '@/utils/constants'
axios.defaults.adapter = mpAdapter

export const InitialStateContext = createContext({});
export const CommonContext = createContext({});
export const ShoppingCarContext = createContext({});
export const PageLoadingContext = createContext({});



const App = (props) => {
  const tableId = 1;
  const [initialState, setInitialState] = useState({ table: { id: tableId } });
  const [shoppingCarDishes, setDishes] = useState([]);
  const [shoppingCarMsg, setMsg] = useState('');
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() =>
    setInitialState(item => ({ ...item, user: { name: '王小明' }, table: { id: tableId } })), [])


  useAppEvent("onLaunch", async () => {
    // 初始化请求工具
    // axios.defaults.baseURL = 'http://leiduoduo.free.idcfengye.com';
    axios.defaults.baseURL = 'http://192.168.137.52:9005/';

    // 添加响应拦截器
    axios.interceptors.response.use(function (response) {
      const { data: { data, errorcode, msg } } = response;
      if (errorcode !== 0)
        showToast({ title: msg, icon: 'none' })

      return data;
    }, function (error) {
      return Promise.reject(error);
    });

    // 获取桌子和餐馆信息
    const restaurantAndTableData = await axios.get(`user/getRestaurantTable?tableId=${initialState.table.id}`);
    setInitialState(item => ({ ...item, ...restaurantAndTableData }));
    console.log('restaurantAndTableData', restaurantAndTableData)

    // 如果桌子不存在这不允许进入小程序
    if (!restaurantAndTableData) {
      reLaunch({
        url: "/pages/no-table/index",
      });
      return;
    }
    const { table, restaurant } = restaurantAndTableData






    const { code } = await login();
    const token = await axios.post(`user/userToken?code=${code}`);
    await setStorageSync('token', token)
    const tokens = await getStorageSync('token')
    console.log('getStorage(token)', tokens)

    // 添加请求拦截器
    axios.interceptors.request.use(function (config) {
      console.log('config', config)
      config.headers.Authorization = `Bearer ${tokens}`
      return config;
    }, function (error) {
      return Promise.reject(error);
    });

    // // 如果桌子未开台则进入开台页面
    // if (tableStatusType[table.state] === '空闲') {
    //   reLaunch({
    //     url: "/pages/dinner/index",
    //   });
    //   return;
    // }

    // // 如果桌子已开台则进入验证码页面
    // if (tableStatusType[table.state] === '使用中') {
    //   reLaunch({
    //     url: "/pages/captcha/index",
    //   });
    //   return;
    // }
    reLaunch({
      url: "/pages/index/index",
    });
  });


  return (
    <InitialStateContext.Provider value={{ initialState, setInitialState }}>
      <PageLoadingContext.Provider value={{ pageLoading, setPageLoading }}>
        <ShoppingCarContext.Provider value={{ shoppingCarDishes, shoppingCarMsg, setMsg, setDishes }}>
          {props.children}
        </ShoppingCarContext.Provider>
      </PageLoadingContext.Provider>
    </InitialStateContext.Provider>
  )
};

export default App;
