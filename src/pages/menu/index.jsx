import React from "react";
import { View, Text } from "remax/wechat";
// import {  } from "annar";
import Tabs from "./components/Tabs";

import styles from "./index.less";

const Menu = () => {
  const url =
    "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLZjmhUBExfj2jiaPTksltUfFNzYsiaclppLvGFtQHfullIoia2WBKWl18aZ19Rp1dpBmBQcQaPBCArw/132";
  const leftData = [
    { id: 1, name: "推荐" },
    { id: 6, name: "闽菜" },
    { id: 2, name: "粤菜" },
    { id: 3, name: "河南菜" },
    { id: 4, name: "四川菜" },
    { id: 5, name: "东北菜" },
  ];
  const rightData = [
    {
      id: 0,
      name: "招牌小牛肉",
      img: url,
      price: 46.8,
      dish_num: 20,
      dish_type_id: 1,
    },
    {
      id: 1,
      name: "沙县扁肉",
      img: url,
      price: 4,
      dish_num: 99,
      dish_type_id: 6,
    },
    { id: 2, name: "虾饺", img: url, price: 5, dish_num: 13, dish_type_id: 2 },
    {
      id: 3,
      name: "炒白菜",
      img: url,
      price: 15.5,
      dish_num: 99,
      dish_type_id: 3,
    },
    {
      id: 4,
      name: "麻辣小猪腿",
      img: url,
      price: 96.8,
      dish_num: 5,
      dish_type_id: 4,
    },
    {
      id: 5,
      name: "酸菜五花肉",
      img: url,
      price: 46.6,
      dish_num: 45,
      dish_type_id: 5,
    },
  ];
  return (
    <View className={styles.container}>
      <Tabs leftData={leftData} rightData={rightData} />
    </View>
  );
};

export default Menu;
