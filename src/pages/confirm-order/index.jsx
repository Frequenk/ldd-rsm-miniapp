import React from "react";
import { View } from "remax/one";
import OrderDetail from "./components/OrderDetail";
import OptionButton from "./components/OptionButton";

const ConfirmOrder = () => {
  return (
    <>
      <OrderDetail />
      <OptionButton />
    </>
  );
};

export default ConfirmOrder;
