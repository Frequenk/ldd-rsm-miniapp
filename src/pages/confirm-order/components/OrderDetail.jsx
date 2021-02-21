import React from "react";
import { View } from "remax/one";
import styles from "./OrderDetail.less";
import Dish from "./Dish";

const OrderDetail = ({ shoppingCarDishes }) => {
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
