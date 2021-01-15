import React, { useState, useContext, useEffect } from "react";
import { View } from "remax/one";
import Tabs from "./components/Tabs";
import styles from "./index.less";
import ShoppingCar from "./components/ShoppingCar";
import { usePageEvent } from "remax/macro";
import { hideHomeButton } from "remax/wechat";
import MenuHeader from "./components/MenuHeader";
import { getMenu } from "./service";
import { InitialStateContext, ShoppingCarContext } from "@/app";
import PageLoading from "@/components/PageLoading";
import { shoppingCarOperate } from "@/core/shoppingcar";

let setShoppingCarDishes;

const Menu = () => {
  const {
    initialState: { table, user },
  } = useContext(InitialStateContext);
  const ShoppingCarContextValue = useContext(ShoppingCarContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ leftData: [], rightData: [] });

  const refreshMenuList = async () => {
    setLoading(true);
    const res = await getMenu(table.id);
    if (res) {
      setData({ leftData: res.dishType, rightData: res.dish });
    }
    setLoading(false);
  };
  usePageEvent("onLoad", () => {
    hideHomeButton();
    refreshMenuList();
    // 初始化socket及购物车函数
    setShoppingCarDishes = shoppingCarOperate(
      table.id,
      user.name,
      ShoppingCarContextValue.setMsg,
      ShoppingCarContextValue.setDishes
    );
  });

  return (
    <>
      {loading && <PageLoading text="菜单加载中" />}
      <ShoppingCarContext.Provider
        value={{ ...ShoppingCarContextValue, setShoppingCarDishes }}
      >
        <View className={styles.container}>
          <MenuHeader />
          <Tabs leftData={data.leftData} rightData={data.rightData} />
          <ShoppingCar />
        </View>
      </ShoppingCarContext.Provider>
    </>
  );
};

export default Menu;
