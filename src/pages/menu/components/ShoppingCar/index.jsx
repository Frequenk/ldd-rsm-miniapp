import React, { useContext, useState } from "react";
import { View } from "remax/wechat";
import styles from "./index.less";
import { ShoppingCarContext } from "@/app";
import { Icon } from "annar";
import ShoppingCarList from "./components/ShoppingCarList";

const ShoppingCar = () => {
  const [shoppingCarList, setShoppingCarList] = useState(false);
  const { shoppingCarDishes, setShoppingCarDishes } = useContext(
    ShoppingCarContext
  );
  console.log("shoppingCarDishes", shoppingCarDishes);

  return (
    <>
      <View className={styles.container}>
        <View
          className={styles.left}
          onTap={() => setShoppingCarList((item) => !item)}
        >
          <View className={styles.content}>
            <Icon type="cart" color="#ffffff" size="10vw" />
            <View className={styles.detail}>
              <View className={styles.price}>
                ￥
                {shoppingCarDishes.reduce(
                  (price, item) =>
                    price + item.dish.price * 100 * (item.number * 100),
                  0
                ) / 10000}
              </View>
              <View className={styles.number}>
                {shoppingCarDishes.reduce((sum, item) => sum + item.number, 0)}
              </View>
            </View>
          </View>
        </View>
        <View className={styles.checkout}>去结算</View>
      </View>
      <ShoppingCarList
        visible={shoppingCarList}
        onCancel={() => setShoppingCarList(false)}
        data={shoppingCarDishes}
      />
    </>
  );
};

export default ShoppingCar;
