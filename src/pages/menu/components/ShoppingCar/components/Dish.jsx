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
  const onChange = (val) => {
    // 编辑购物车内的菜品信息
    for (let i = 0; i < shoppingCarDishes.length; i++) {
      // 如果菜品已在购物车中
      if (shoppingCarDishes[i].dish.id === dish.id) {
        // 如果菜品数量为0，从购物车中删除该菜品
        if (val === 0) {
          setShoppingCarDishes([
            ...shoppingCarDishes.slice(0, i),
            ...shoppingCarDishes.slice(i + 1),
          ]);
          return;
        }
        // 更改购物车中该菜品的数量
        setShoppingCarDishes([
          ...shoppingCarDishes.slice(0, i),
          { dish: dish, number: val },
          ...shoppingCarDishes.slice(i + 1),
        ]);
        return;
      }
    }
    // 向购物车添加菜品
    setShoppingCarDishes([...shoppingCarDishes, { dish: dish, number: val }]);
  };
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
              onChange={(val) => onChange(val)}
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
