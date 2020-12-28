import React from "react";
import { View } from "remax/wechat";
import Key from "./Key";
import styles from "./styles.less";
import { Icon } from "annar";

const Keyboard = () => {
  return (
    <View className={styles.keyboard}>
      <Key keyNumber={1} />
      <Key keyNumber={2} />
      <Key keyNumber={3} />
      <Key keyNumber={4} />
      <Key keyNumber={5} />
      <Key keyNumber={6} />
      <Key keyNumber={7} />
      <Key keyNumber={8} />
      <Key keyNumber={9} />
      <Key />
      <Key keyNumber={0} />
      <Key
        keyNumber={<Icon type="back_android" color="#707474" size="50px" />}
        type="delete"
      />
    </View>
  );
};

export default Keyboard;
