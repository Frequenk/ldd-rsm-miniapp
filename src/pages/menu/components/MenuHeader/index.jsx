import React, { useContext } from "react";
import { View, Text, Image } from "remax/one";
import styles from "./index.less";
import { InitialStateContext } from "@/app";

const MenuHeader = () => {
  const {
    initialState: { captcha },
  } = useContext(InitialStateContext);
  return (
    <View className={styles.container}>
      <View className={styles.left}>
        当前在线：
        <Image
          className={styles.img}
          src={
            "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLZjmhUBExfj2jiaPTksltUfFNzYsiaclppLvGFtQHfullIoia2WBKWl18aZ19Rp1dpBmBQcQaPBCArw/132"
          }
        />
        <Image
          className={styles.img}
          src={
            "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLZjmhUBExfj2jiaPTksltUfFNzYsiaclppLvGFtQHfullIoia2WBKWl18aZ19Rp1dpBmBQcQaPBCArw/132"
          }
        />
        <Image
          className={styles.img}
          src={
            "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLZjmhUBExfj2jiaPTksltUfFNzYsiaclppLvGFtQHfullIoia2WBKWl18aZ19Rp1dpBmBQcQaPBCArw/132"
          }
        />
        <Image
          className={styles.img}
          src={
            "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLZjmhUBExfj2jiaPTksltUfFNzYsiaclppLvGFtQHfullIoia2WBKWl18aZ19Rp1dpBmBQcQaPBCArw/132"
          }
        />
      </View>
      <View className={styles.right}>
        验证码：<Text className={styles.captcha}>{captcha}</Text>
      </View>
    </View>
  );
};

export default MenuHeader;
