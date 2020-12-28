import React, { useContext } from "react";
import { View } from "remax/wechat";
import styles from "./index.less";
import { ShoppingCarContext } from "@/app";
import { Icon, Tag } from "annar";

const ShoppingCar = () => {
  const { shoppingCarDishes, setShoppingCarDishes } = useContext(
    ShoppingCarContext
  );
  console.log("shoppingCarDishes", shoppingCarDishes);

  return (
    <View className={styles.container}>
      <View className={styles.left}>
        <View className={styles.content}>
          <Icon type="cart" color="#ffffff" size="10vw" />
          <View className={styles.detail}>
            <View className={styles.price}>￥56.5</View>
            <View className={styles.number}>2</View>
          </View>
        </View>
      </View>
      <View className={styles.checkout}>去结算</View>
    </View>
  );
};

export default ShoppingCar;
