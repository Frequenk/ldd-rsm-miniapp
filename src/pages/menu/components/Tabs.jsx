import React, { useState } from "react";
import { View } from "remax/one";
import styles from "./Tabs.less";
import Tab from "./Tab";
import Dish from "./Dish";

const Tabs = ({ leftData, rightData }) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const filterRightData = rightData.filter(
    (data) => data.dish_type_id === selectedTab
  );
  return (
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
      </View>
    </View>
  );
};

export default Tabs;
