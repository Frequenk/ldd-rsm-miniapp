import React, { useState, useContext } from "react";
import { View, Image, reLaunch } from "remax/one";
import styles from "./index.less";
import { Icon, Button, Input, Stepper } from "annar";
import Divider from "@/components/Divider";
import SelectGroup from "./components/SelectGroup";
import { CommonContext } from "@/app";
import { startDinner } from "./service";
import { getUserInfo, showModal } from "remax/wechat";
import { InitialStateContext, PageLoadingContext } from "@/app";
import PageLoading from "@/components/PageLoading";

let note = "";

const Dinner = () => {
  const [number, setNumber] = useState(1);
  const {
    initialState,
    initialState: { table, restaurant },
    setInitialState,
  } = useContext(InitialStateContext);
  const { pageLoading, setPageLoading } = useContext(PageLoadingContext);
  const submit = async () => {
    setPageLoading(true);
    const { userInfo: userData } = await getUserInfo();
    const userInfo = { name: userData.nickName, avatar: userData.avatarUrl };
    const dinner = { table_id: table.id, people_number: number, note };
    const res = await startDinner(userInfo, dinner);
    if (res.status === "success") {
      setInitialState({
        ...initialState,
        captcha: res.captcha,
        dinner_code: res.dinner_code,
      });
      reLaunch({
        url: "/pages/menu/index",
      });
    }
    if (res.status === "error") {
      showModal({
        title: "该桌子已被占用,请前往输入验证码页面。",
        showCancel: false,
        confirmText: "前往",
        success: () =>
          reLaunch({
            url: "/pages/captcha/index",
          }),
        confirmColor: "#F56330",
      });
    }
    setPageLoading(false);
  };

  return (
    <>
      {pageLoading && <PageLoading />}
      <View className={styles.container}>
        <View className={styles["padding-container"]}>
          <View className={styles.company}>
            <View className={styles.avatar}>
              {restaurant.avatar ? (
                <Image className={styles.img} src={restaurant.avatar} />
              ) : (
                <Icon type="round_shop_fill" size="150px" color="#F56330" />
              )}
            </View>
            <View className={styles.name}>{restaurant.name}</View>
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
            <CommonContext.Provider
              value={{ selectedNumber: number, setNumber }}
            >
              <SelectGroup />
            </CommonContext.Provider>
          </View>
          <View className={styles["form-item"]}>
            <View>桌台：</View>
            <View>{table.name}</View>
          </View>
          <View className={styles["form-item"]}>
            备注：
            <Input
              prefix={<Icon type="write" color="gray" />}
              placeholder="口味要求、忌口等（可不填）"
              style={{
                backgroundColor: "#181d1f",
                border: "none",
                width: "450px",
              }}
              inputStyle={{ color: "#ffffff" }}
              onChange={(text) => {
                note = text.target.value;
              }}
            />
          </View>
          <Button
            type="primary"
            size="large"
            square
            block
            style={{ backgroundColor: "#F56330", border: "1px solid #F56330" }}
            openType="getUserInfo"
            onTap={submit}
            loading={pageLoading}
          >
            开始点餐
          </Button>
        </View>
      </View>
    </>
  );
};

export default Dinner;
