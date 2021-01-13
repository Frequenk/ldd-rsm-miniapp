import React, { useState, useEffect } from "react";
import { View } from "remax/one";
import styles from "./Tabs.less";
import Tab from "./Tab";
import Dish from "./Dish";

const Tabs = ({ leftData, rightData }) => {
  const [selectedTab, setSelectedTab] = useState(false);
  const filterRightData = rightData.filter(
    (data) => data.dish_type_id === selectedTab
  );
  useEffect(() => {
    if (leftData.length > 0) setSelectedTab(leftData[0].id);
  }, [leftData]);
  return (
    selectedTab && (
      <View className={styles.container}>
        <View className={styles.left}>
          {leftData.map((tab) => (
            <Tab
              key={tab.id}
              selectedTab={selectedTab}
              setSelectedTab={() => setSelectedTab(tab.id)}
              tab={tab}
            />
          ))}
        </View>
        <View className={styles.right}>
          {filterRightData.map((dish) => (
            <Dish key={dish.id} dish={dish} />
          ))}
          <View className={styles.bottom}>
            <View className={styles.text}>我是有底线的~</View>
          </View>
        </View>
      </View>
    )
  );
};

export default Tabs;
