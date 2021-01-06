import React from "react";
import { View, Text } from "remax/one";
import OrderSteps from "@/components/OrderSteps";
import { Loading } from "annar";
import styles from "./index.less";
import { hideHomeButton } from "remax/wechat";
import { usePageEvent } from "remax/macro";

const WaitCompanyConfirm = () => {
  usePageEvent("onLoad", () => hideHomeButton());
  return (
    <>
      <OrderSteps current={0} />
      <View className={styles.container}>
        <View className={styles.content}>
          <Loading type="anna" color="#f56330" />
          <Text>等待商家确认中</Text>
        </View>
      </View>
    </>
  );
};

export default WaitCompanyConfirm;
