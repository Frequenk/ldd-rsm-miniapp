import React, { useState, useContext } from "react";
import { View, Image } from "remax/one";
import styles from "./Dish.less";
import { Stepper, Icon } from "annar";
import { ShoppingCarContext } from "@/app";

const Dish = ({ data: { dish } }) => {
  const { name, img, price, dish_num } = dish;
  const { shoppingCarDishes, setShoppingCarDishes } = useContext(
    ShoppingCarContext
  );
  const number =
    shoppingCarDishes.find((item) => item.dish.id === dish.id)?.number || 0;
  return (
    <View className={styles.dish}>
      <Image src={img} className={styles.img} />
      <View className={styles.detail}>
        <View className={styles.name}>{name}</View>
        <View className={styles.bottom}>
          <View className={styles.price}>￥{price}</View>
          <View>
            <View className={styles["dish_num"]}>库存：{dish_num}</View>
            <Stepper
              min={0}
              max={dish_num}
              shape="circle"
              value={number}
              onChange={(val) => setShoppingCarDishes(val, dish)}
              bgColor="#F56330"
              color="#ffffff"
              size="small"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dish;
