import React, { useContext } from "react";
import { View } from "remax/wechat";
import styles from "./ShoppingCarList.less";
import { ShoppingCarContext } from "@/app";
import { Icon } from "annar";
import Dish from "./Dish";

const ShoppingCarList = ({ visible, onCancel, data }) => {
  const { shoppingCarDishes, setShoppingCarDishes } = useContext(
    ShoppingCarContext
  );
  console.log("shoppingCarDishes", shoppingCarDishes);

  return (
    <View className={styles.container}>
      <View
        className={`${styles.background} ${
          !visible && styles["background-close"]
        }`}
        onTap={onCancel}
      >
        66
      </View>
      <View className={`${styles.down} ${!visible && styles["down-close"]}`}>
        <View className={styles.header}>
          <View>已选商品</View>
          <View onTap={() => setShoppingCarDishes([])}>
            <Icon type="delete" />
            清空购物车
          </View>
        </View>
        <View className={styles["dish-list"]}>
          <View>
            {data.map((item) => (
              <Dish key={item.dish.id} data={item} />
            ))}
            <View className={styles.bottom}>
              <View className={styles.text}>
                {data.length === 0 ? "购物车为空" : "我是有底线的~"}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ShoppingCarList;
