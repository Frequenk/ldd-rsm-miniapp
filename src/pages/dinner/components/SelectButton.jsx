import React, { useContext } from "react";
import styles from "./SelectButton.less";
import { Button } from "annar";
import { CommonContext } from "@/app";

const SelectButton = ({ number, type = "number" }) => {
  const { selectedNumber, setNumber } = useContext(CommonContext);
  return type === "more" ? (
    <Button
      className={`${styles["select-button"]} ${
        selectedNumber >= 12 && styles["selected-button"]
      }`}
      size={"large "}
      disabled
    >
      更多
    </Button>
  ) : (
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
