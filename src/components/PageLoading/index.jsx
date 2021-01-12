import React from "react";
import { View } from "remax/one";
import { Loading } from "annar";
import styles from "./index.less";

const PageLoading = () => {
  return (
    <View className={styles.container}>
      <View className={styles.content} />
      <View className={styles.loading}>
        <Loading type="anna" color="#f56330" />
      </View>
    </View>
  );
};

export default PageLoading;
