import React from "react";
import { View, Button } from "remax/one";
import OrderSteps from "@/components/OrderSteps";
import { Loading } from "annar";
import styles from "./index.less";
import { hideHomeButton } from "remax/wechat";
import { usePageEvent } from "remax/macro";

const WaitCompanyConfirm = () => {
  usePageEvent("onLoad", () => hideHomeButton());
  return (
    <>
      <OrderSteps current={1} />
      <View className={styles.container}>
        <View className={styles.content}>
          <Button>确定支付</Button>
        </View>
      </View>
    </>
  );
};

export default WaitCompanyConfirm;
