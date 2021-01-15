import React, { useContext } from "react";
import { View } from "remax/one";
import { Button } from "annar";
import styles from "./GetAuth.less";
import { getUserInfo } from "remax/wechat";
import { InitialStateContext } from "@/app";

const GetAuth = ({ onCancel }) => {
  const { initialState, setInitialState } = useContext(InitialStateContext);
  const submit = async () => {
    const { userInfo: userData } = await getUserInfo();
    const userInfo = { name: userData.nickName, avatar: userData.avatarUrl };
    setInitialState({
      ...initialState,
      user: userInfo,
    });
    onCancel();
  };
  return (
    <View className={styles.container}>
      <View className={styles.content} />
      <View className={styles.text}>
        我们需要获取您的微信昵称和微信头像，
        <br />
        以便为您提供更好的服务
      </View>
      <View className={styles.button}>
        <Button
          type="primary"
          size="large"
          square
          block
          style={{ backgroundColor: "#F56330", border: "1px solid #F56330" }}
          openType="getUserInfo"
          onTap={submit}
        >
          授权获取用户信息
        </Button>
      </View>
    </View>
  );
};

export default GetAuth;
