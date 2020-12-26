import React from "react";
import { View } from "remax/wechat";
import Key from "./Key";
import styles from "./styles.less";
import { Icon } from "annar";

const Keyboard = ({ setNumber }) => {
  return (
    <View className={styles.keyboard}>
      <Key keyNumber={1} setNumber={setNumber} />
      <Key keyNumber={2} setNumber={setNumber} />
      <Key keyNumber={3} setNumber={setNumber} />
      <Key keyNumber={4} setNumber={setNumber} />
      <Key keyNumber={5} setNumber={setNumber} />
      <Key keyNumber={6} setNumber={setNumber} />
      <Key keyNumber={7} setNumber={setNumber} />
      <Key keyNumber={8} setNumber={setNumber} />
      <Key keyNumber={9} setNumber={setNumber} />
      <Key />
      <Key keyNumber={0} setNumber={setNumber} />
      <Key
        keyNumber={<Icon type="back_android" color="#707474" size="50px" />}
        setNumber={setNumber}
        type="delete"
      />
    </View>
  );
};

export default Keyboard;
