import React, { useContext } from "react";
import { View, Text, Image, reLaunch } from "remax/one";
import styles from "./index.less";
import { Button } from "annar";
// import PageLoading from "@/components/PageLoading";
import { PageLoadingContext } from "@/app";

export default () => {
  const { pageLoading, setPageLoading } = useContext(PageLoadingContext);
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
      {/* {pageLoading && <PageLoading />} */}

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
        <Button
          size="superlarge"
          onTap={() => {
            reLaunch({
              url: "/pages/confirm-order/index",
            });
          }}
        >
          去确认订单页面
        </Button>
        <Button
          size="superlarge"
          onTap={() => {
            reLaunch({
              url: "/pages/wait-company-confirm/index",
            });
          }}
        >
          去等待商家确认页面
        </Button>
        <Button
          size="superlarge"
          onTap={() => {
            reLaunch({
              url: "/pages/pay/index",
            });
          }}
        >
          去支付页面
        </Button>
        <Button
          size="superlarge"
          onTap={() => {
            reLaunch({
              url: "/pages/start-loading/index",
            });
          }}
        >
          去开屏加载页面
        </Button>
        <Button
          size="superlarge"
          onTap={() => {
            reLaunch({
              url: "/pages/no-table/index",
            });
          }}
        >
          去no-table页面
        </Button>
      </View>

      {gogo()}
    </View>
  );
};
