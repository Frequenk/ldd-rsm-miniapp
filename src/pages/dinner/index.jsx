import React from "react";
import { View, Text, Image } from "remax/wechat";
import styles from "./index.less";
import { Icon, Button, Form, Input, Stepper } from "annar";
import { Divider } from "@/components";
import SelectGroup from "./components/SelectGroup";

const Dinner = () => {
  const [number, setNumber] = React.useState(1);

  return (
    <View className={styles.container}>
      <View className={styles["padding-container"]}>
        <View className={styles.company}>
          <View className={styles.avatar}>
            <Icon type="round_shop_fill" size="150px" color="#F56330" />
          </View>
          <View className={styles.name}>沙县小吃</View>
        </View>
        <Divider />
        <View className={styles["form-item"]}>
          就餐人数：
          <Stepper
            min={1}
            ma={99}
            shape="circle"
            value={number}
            onChange={(val) => setNumber(val)}
            bgColor="#F56330"
            color="#ffffff"
          />
          <SelectGroup selectedNumber={number} setNumber={setNumber} />
        </View>
        <View className={styles["form-item"]}>
          <View>桌台：</View>
          <View>大厅区 桌台003</View>
        </View>
        <View className={styles["form-item"]}>
          备注：
          <Input
            prefix={<Icon type="write" color="gray" />}
            placeholder="口味要求、忌口等（可不填）"
            style={{
              backgroundColor: "#2f2f2f",
              border: "none",
              width: "450px",
            }}
            inputStyle={{ color: "#ffffff" }}
          />
        </View>
        <Button
          type="primary"
          size="large"
          square
          block
          style={{ backgroundColor: "#F56330", border: "1px solid #F56330" }}
        >
          开始点餐
        </Button>
      </View>
    </View>
  );
};

export default Dinner;
