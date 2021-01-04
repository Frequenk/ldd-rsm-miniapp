import React, { useState, useContext } from "react";
import { View, Image } from "remax/one";
import styles from "./Dish.less";
import { Stepper, Icon } from "annar";
import { ShoppingCarContext } from "@/app";

const Dish = ({ data: { dish } }) => {
  const { name, img, price } = dish;
  const { shoppingCarDishes } = useContext(ShoppingCarContext);
  const number =
    shoppingCarDishes.find((item) => item.dish.id === dish.id)?.number || 0;
  return (
    <View className={styles.dish}>
      <Image src={img} className={styles.img} />
      <View className={styles.detail}>
        <View className={styles.top}>
          <View className={styles.name}>{name}</View>
          <View className={styles.price}>
            ￥{(number * (price * 100)) / 100}
          </View>
        </View>
        <View className={styles.bottom}>
          <View className={styles.number}>x{number}</View>
        </View>
      </View>
    </View>
  );
};

export default Dish;
