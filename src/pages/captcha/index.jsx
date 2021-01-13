import React, { useState, useContext, useEffect } from "react";
import { View, reLaunch } from "remax/one";
import styles from "./index.less";
import Code from "./components/Code";
import Keyboard from "./components/Keyboard";
import { CommonContext } from "@/app";
import { validateCaptcha } from "./service";
import PageLoading from "@/components/PageLoading";
import { InitialStateContext } from "@/app";

const Captcha = () => {
  const {
    initialState,
    initialState: { table },
    setInitialState,
  } = useContext(InitialStateContext);
  const [number, setNumber] = useState({
    one: -1,
    two: -1,
    three: -1,
    four: -1,
  });
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    const captcha = `${number.one}${number.two}${number.three}${number.four}`;
    const res = await validateCaptcha(captcha, table.id);
    if (res) {
      setInitialState({
        ...initialState,
        captcha,
        dinner_code: res.dinner_code,
      });
      reLaunch({
        url: "/pages/menu/index",
      });
    }
    setLoading(false);
    setNumber({
      one: -1,
      two: -1,
      three: -1,
      four: -1,
    });
  };

  useEffect(() => {
    if (
      number.one !== -1 &&
      number.two !== -1 &&
      number.three !== -1 &&
      number.four !== -1
    )
      submit();
  }, [number]);

  return (
    <>
      {loading && <PageLoading text="验证中" />}
      <View className={styles.container}>
        <View>
          <View className={styles["tip-text"]}>
            <View>从开台用户处获取验证码，</View>
            <View>或联系商家处理</View>
          </View>
          <Code number={number} />
        </View>
        <CommonContext.Provider value={{ setNumber }}>
          <Keyboard />
        </CommonContext.Provider>
      </View>
    </>
  );
};

export default Captcha;
