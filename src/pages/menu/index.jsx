import React from "react";
import { View } from "remax/wechat";
import Tabs from "./components/Tabs";
import styles from "./index.less";
import { leftData, rightData } from "./fakeData.js";
import ShoppingCar from "@/components/ShoppingCar";

const Menu = () => {
  return (
    <View className={styles.container}>
      <Tabs leftData={leftData} rightData={rightData} />
      <ShoppingCar />
    </View>
  );
};

export default Menu;
