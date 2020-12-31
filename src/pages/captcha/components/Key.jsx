import React, { useContext } from "react";
import { View } from "remax/one";
import styles from "./styles.less";
import { CommonContext } from "@/app";

const Key = ({ keyNumber, type = "number" }) => {
  const { setNumber } = useContext(CommonContext);

  const handleSetNumber = () => {
    setNumber((number) => {
      if (number.one === -1) {
        return { ...number, one: keyNumber };
      }
      if (number.two === -1) {
        return { ...number, two: keyNumber };
      }
      if (number.three === -1) {
        return { ...number, three: keyNumber };
      }
      if (number.four === -1) {
        return { ...number, four: keyNumber };
      }
      return { ...number };
    });
  };
  const handleDelete = () => {
    setNumber((number) => {
      if (number.four !== -1) {
        return { ...number, four: -1 };
      }
      if (number.three !== -1) {
        return { ...number, three: -1 };
      }
      if (number.two !== -1) {
        return { ...number, two: -1 };
      }
      if (number.one !== -1) {
        return { ...number, one: -1 };
      }
      return { ...number };
    });
  };
  return (
    <View
      className={styles.key}
      onTap={type === "delete" ? handleDelete : handleSetNumber}
    >
      {keyNumber}
    </View>
  );
};

export default Key;
