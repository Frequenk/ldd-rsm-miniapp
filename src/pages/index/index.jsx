import * as React from "react";
import { View, Text, Image, reLaunch } from "remax/one";
import styles from "./index.less";
import { Button } from "annar";

export default () => {
  const gogo = () => {
    // if (1) {
    //   {
    //     reLaunch({
    //       url: "/pages/confirm-order/index",
    //     });
    //   }
    // }
  };

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
          size="superlarge"
          onTap={() => {
            reLaunch({
              url: "/pages/login/index",
            });
          }}
        >
          去登录页面
        </Button>
        <Button
          size="superlarge"
          onTap={() => {
            reLaunch({
              url: "/pages/dinner/index",
            });
          }}
        >
          去开台页面
        </Button>
        <Button
          size="superlarge"
          onTap={() => {
            reLaunch({
              url: "/pages/captcha/index",
            });
          }}
        >
          去验证页面
        </Button>
        <Button
          size="superlarge"
          onTap={() => {
            reLaunch({
              url: "/pages/menu/index",
            });
          }}
        >
          去菜单页面
        </Button>
      </View>

      {gogo()}
    </View>
  );
};
