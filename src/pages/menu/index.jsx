import React from "react";
import { View } from "remax/one";
import Tabs from "./components/Tabs";
import styles from "./index.less";
import { leftData, rightData } from "./fakeData.js";
import ShoppingCar from "./components/ShoppingCar";
import { usePageEvent } from "remax/macro";
import { hideHomeButton } from "remax/wechat";
import MenuHeader from "./components/MenuHeader";
const Menu = () => {
  usePageEvent("onLoad", () => hideHomeButton());
  return (
    <View className={styles.container}>
      <MenuHeader />
      <Tabs leftData={leftData} rightData={rightData} />
      <ShoppingCar />
    </View>
  );
};

export default Menu;
