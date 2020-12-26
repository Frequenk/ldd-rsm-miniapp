import * as React from "react";
import { View, Text, Image } from "remax/wechat";
import styles from "./index.less";
import { redirectTo } from "remax/one";
import { Button } from "annar";

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
          alt="logo"
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.js</Text>{" "}
          开始1
        </View>
        <Button
          onTap={() => {
            redirectTo({
              url: "/pages/login/index",
            });
          }}
        >
          去登录页面
        </Button>
        <Button
          onTap={() => {
            redirectTo({
              url: "/pages/dinner/index",
            });
          }}
        >
          去开台页面
        </Button>
      </View>

      {redirectTo({
        url: "/pages/captcha/index",
      })}
    </View>
  );
};
