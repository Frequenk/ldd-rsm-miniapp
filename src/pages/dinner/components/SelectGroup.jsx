import React from "react";
import { View } from "remax/one";
import styles from "./SelectGroup.less";
import SelectButton from "./SelectButton";

const SelectGroup = () => {
  return (
    <View className={styles["select-group"]}>
      <SelectButton number={1} />
      <SelectButton number={2} />
      <SelectButton number={3} />
      <SelectButton number={4} />
      <SelectButton number={5} />
      <SelectButton number={6} />
      <SelectButton number={7} />
      <SelectButton number={8} />
      <SelectButton number={9} />
      <SelectButton number={10} />
      <SelectButton number={11} />
      <SelectButton type="more" />
    </View>
  );
};

export default SelectGroup;
