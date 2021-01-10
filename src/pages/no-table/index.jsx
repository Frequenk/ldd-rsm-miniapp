import React from "react";
import { View } from "remax/one";
import { hideHomeButton } from "remax/wechat";
import { usePageEvent } from "remax/macro";
import { Result } from "annar";
const NoTable = () => {
  usePageEvent("onLoad", () => hideHomeButton());
  return (
    <Result
      height="100vh"
      status="warning"
      title="无法进入小程序"
      subTitle={
        <>
          <View>您没有通过扫描二维码进入本小程序，</View>
          <View>或扫描的二维码已失效</View>
        </>
      }
    />
  );
};

export default NoTable;
