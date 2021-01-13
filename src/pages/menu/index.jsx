import React, { useState, useContext, useEffect } from "react";
import { View } from "remax/one";
import Tabs from "./components/Tabs";
import styles from "./index.less";
import { leftData, rightData } from "./fakeData.js";
import ShoppingCar from "./components/ShoppingCar";
import { usePageEvent } from "remax/macro";
import { hideHomeButton } from "remax/wechat";
import MenuHeader from "./components/MenuHeader";
import { getMenu } from "./service";
import { InitialStateContext } from "@/app";
import PageLoading from "@/components/PageLoading";

const Menu = () => {
  const {
    initialState: { table },
  } = useContext(InitialStateContext);
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
  usePageEvent("onLoad", () => hideHomeButton());
  usePageEvent("onLoad", () => refreshMenuList());

  return (
    <>
      {loading && <PageLoading text="菜单加载中" />}
      <View className={styles.container}>
        <MenuHeader />
        <Tabs leftData={data.leftData} rightData={data.rightData} />
        <ShoppingCar />
      </View>
    </>
  );
};

export default Menu;
