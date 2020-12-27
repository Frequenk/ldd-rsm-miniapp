import React, { useState } from "react";
import { View, Image } from "remax/wechat";
import styles from "./Dish.less";
import { Stepper } from "annar";

const Dish = ({ dish }) => {
  const { name, img, price, dish_num } = dish;
  const [number, setNumber] = useState(1);

  return (
    <View className={styles.dish}>
      <Image src={img} className={styles.img} />
      <View className={styles.detail}>
        <View className={styles.name}>{name}</View>
        <View className={styles["dish_num"]}>库存：{dish_num}</View>
        <View className={styles.bottom}>
          <View className={styles.price}>￥{price}</View>
          <Stepper
            min={1}
            ma={99}
            shape="circle"
            value={number}
            onChange={(val) => setNumber(val)}
            bgColor="#F56330"
            color="#ffffff"
            size="small"
          />
        </View>
      </View>
    </View>
  );
};

export default Dish;
