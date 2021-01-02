import React from "react";
import { View } from "remax/one";
import { Steps } from "annar";
import styles from "./index.less";

const OrderSteps = ({ current }) => {
  return (
    <View className={styles.container}>
      <Steps
        current={current}
        steps={[
          {
            title: "提交订单",
          },
          {
            title: "商家确认",
          },
          {
            title: "支付成功",
          },
        ]}
      />
    </View>
  );
};

export default OrderSteps;
