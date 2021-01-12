import React from "react";
import { View, Text } from "remax/one";
import { Loading } from "annar";
import styles from "./index.less";
import { hideHomeButton } from "remax/wechat";
import { usePageEvent } from "remax/macro";

const StartLoading = () => {
  usePageEvent("onLoad", () => hideHomeButton());
  return (
    <>
      <View className={styles.container}>
        <View className={styles.content}>
          <Loading type="anna" color="#f56330" />
          <Text>正在载入中</Text>
        </View>
      </View>
    </>
  );
};

export default StartLoading;
