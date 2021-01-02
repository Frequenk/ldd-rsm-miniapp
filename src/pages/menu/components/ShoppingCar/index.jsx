import React, { useContext, useState, useRef } from "react";
import styles from "./index.less";
import { ShoppingCarContext } from "@/app";
import { Icon, Ling } from "annar";
import ShoppingCarList from "./components/ShoppingCarList";
import { navigateTo, View } from "remax/one";
import { hideHomeButton } from "remax/wechat";
// import { usePageEvent } from "remax/macro";

const ShoppingCar = () => {
  const [shoppingCarList, setShoppingCarList] = useState(false);
  const { shoppingCarDishes, setShoppingCarDishes } = useContext(
    ShoppingCarContext
  );
  const ling = useRef();
  // usePageEvent("onLoad", () => hideHomeButton());
  console.log("shoppingCarDishes", shoppingCarDishes);

  return (
    <>
      <Ling ref={ling} />
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
        <View
          className={styles.checkout}
          onTap={() => {
            if (shoppingCarDishes.length > 0)
              navigateTo({
                url: "/pages/confirm-order/index",
              });
            else {
              ling.current.show({
                title: "购物车不能为空！",
                icon: "roundclosefill",
                iconColor: "#666",
              });
            }
          }}
        >
          去结算
        </View>
      </View>
      <ShoppingCarList
        visible={shoppingCarList}
        onCancel={() => setShoppingCarList(false)}
      />
    </>
  );
};

export default ShoppingCar;
