import React from "react";
import { View, Text } from "remax/wechat";
// import {  } from "annar";
import Tabs from "./components/Tabs";
import styles from "./index.less";
import { leftData, rightData } from "./fakeData.js";

const Menu = () => {
  return (
    <View className={styles.container}>
      <Tabs leftData={leftData} rightData={rightData} />
    </View>
  );
};

export default Menu;
