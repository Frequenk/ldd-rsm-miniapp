import React from "react";
import { View } from "remax/wechat";
import styles from "./Tab.less";
const Tab = ({ tab, selectedTab, setSelectedTab }) => {
  const { id, name } = tab;
  return (
    <View
      className={`${styles.tab} ${
        id === selectedTab && styles["tab-selected"]
      }`}
      onTap={setSelectedTab}
    >
      {name}
    </View>
  );
};

export default Tab;
