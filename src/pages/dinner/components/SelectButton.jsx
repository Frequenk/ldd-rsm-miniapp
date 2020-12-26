import React from "react";
import { View, Text, Image } from "remax/wechat";
import styles from "./styles.less";
import { Icon, Button, Form, Input, Stepper } from "annar";
import { Divider } from "@/components";

const SelectButton = ({ number, selectedNumber, setNumber }) => {
  return (
    <Button
      className={`${styles["select-button"]} ${
        selectedNumber === number ? styles["selected-button"] : ""
      }`}
      size={"large"}
      onTap={() => setNumber(number)}
    >
      {number}人
    </Button>
  );
};

export default SelectButton;
