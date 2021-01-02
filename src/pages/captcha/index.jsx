import React, { useState } from "react";
import { View } from "remax/one";
import styles from "./index.less";
import Code from "./components/Code";
import Keyboard from "./components/Keyboard";
import { CommonContext } from "@/app";

const Captcha = () => {
  const [number, setNumber] = useState({
    one: -1,
    two: -1,
    three: -1,
    four: -1,
  });
  return (
    <View className={styles.container}>
      <View>
        <View className={styles["tip-text"]}>
          <View>从开台用户处获取验证码，</View>
          <View>如果是他人开台请联系商家处理</View>
        </View>
        <Code number={number} />
      </View>
      <CommonContext.Provider value={{ setNumber }}>
        <Keyboard />
      </CommonContext.Provider>
    </View>
  );
};

export default Captcha;
