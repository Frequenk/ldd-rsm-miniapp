import React, { useState } from "react";
import { View, Text } from "remax/wechat";
import styles from "./Code.less";

const Code = ({ number }) => {
  return (
    <View className={styles.container}>
      <View className={styles.item}>
        <View className={`${number.one === -1 ? styles.dot : styles.number}`}>
          {number.one !== -1 && number.one}
        </View>
      </View>
      <View className={styles.item}>
        <View className={`${number.two === -1 ? styles.dot : styles.number}`}>
          {number.two !== -1 && number.two}
        </View>
      </View>
      <View className={styles.item}>
        <View className={`${number.three === -1 ? styles.dot : styles.number}`}>
          {number.three !== -1 && number.three}
        </View>
      </View>
      <View className={styles.item}>
        <View className={`${number.four === -1 ? styles.dot : styles.number}`}>
          {number.four !== -1 && number.four}
        </View>
      </View>
    </View>
  );
};

export default Code;
