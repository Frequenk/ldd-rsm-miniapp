import React from "react";
import { View } from "remax/wechat";

const Divider = ({ type = "horizontal", style = {} }) => {
  return type === "vertical" ? (
    <View style={{ borderRight: "1px dashed", ...style }} />
  ) : (
    <View
      style={{ borderBottom: "1px dashed gray", margin: "30px 0px", ...style }}
    />
  );
};

export default Divider;
