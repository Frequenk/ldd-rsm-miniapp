import React, { useContext } from "react";
import { View, reLaunch } from "remax/one";
import styles from "./OptionButton.less";
import { ShoppingCarContext } from "@/app";

const OptionButton = () => {
  const { shoppingCarDishes } = useContext(ShoppingCarContext);
  return (
    <View className={styles.container}>
      <View className={styles.left}>
        <View className={styles.content}>
          <View className={styles.detail}>
            <View className={styles.price}>
              ￥
              {shoppingCarDishes.reduce(
                (price, item) =>
                  price + item.dish.price * 100 * (item.number * 100),
                0
              ) / 10000}
            </View>
          </View>
        </View>
      </View>
      <View
        className={styles.checkout}
        onTap={() => {
          reLaunch({
            url: "/pages/wait-company-confirm/index",
          });
        }}
      >
        确认订单
      </View>
    </View>
  );
};

export default OptionButton;
