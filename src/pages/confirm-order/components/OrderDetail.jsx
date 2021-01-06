import React, { useContext } from "react";
import { View } from "remax/one";
import styles from "./OrderDetail.less";
import { ShoppingCarContext } from "@/app";
import { Icon } from "annar";
import Dish from "./Dish";

const OrderDetail = () => {
  const { shoppingCarDishes } = useContext(ShoppingCarContext);
  const data = shoppingCarDishes || [];
  return (
    <View className={styles["dish-list"]}>
      {data.map((item) => (
        <Dish key={item.dish.id} data={item} />
      ))}
      <View className={styles.bottom}>
        <View className={styles.text}>我是有底线的~</View>
      </View>
    </View>
  );
};

export default OrderDetail;
