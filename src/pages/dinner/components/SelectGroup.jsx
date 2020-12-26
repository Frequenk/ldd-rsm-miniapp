import React from "react";
import { View, Text, Image } from "remax/wechat";
import styles from "./styles.less";
import { Icon, Button, Form, Input, Stepper } from "annar";
import { Divider } from "@/components";
import SelectButton from "./SelectButton";

const SelectGroup = ({ selectedNumber, setNumber }) => {
  return (
    <View className={styles["select-group"]}>
      <SelectButton
        number={1}
        selectedNumber={selectedNumber}
        setNumber={setNumber}
      />
      <SelectButton
        number={2}
        selectedNumber={selectedNumber}
        setNumber={setNumber}
      />
      <SelectButton
        number={3}
        selectedNumber={selectedNumber}
        setNumber={setNumber}
      />
      <SelectButton
        number={4}
        selectedNumber={selectedNumber}
        setNumber={setNumber}
      />
      <SelectButton
        number={5}
        selectedNumber={selectedNumber}
        setNumber={setNumber}
      />
      <SelectButton
        number={6}
        selectedNumber={selectedNumber}
        setNumber={setNumber}
      />
      <SelectButton
        number={7}
        selectedNumber={selectedNumber}
        setNumber={setNumber}
      />
      <SelectButton
        number={8}
        selectedNumber={selectedNumber}
        setNumber={setNumber}
      />
      <SelectButton
        number={9}
        selectedNumber={selectedNumber}
        setNumber={setNumber}
      />
      <SelectButton
        number={10}
        selectedNumber={selectedNumber}
        setNumber={setNumber}
      />
      <SelectButton
        number={11}
        selectedNumber={selectedNumber}
        setNumber={setNumber}
      />
      <Button
        className={`${styles["select-button"]} ${
          selectedNumber >= 12 && styles["selected-button"]
        }`}
        size={"large "}
        disabled
      >
        更多
      </Button>
    </View>
  );
};

export default SelectGroup;
