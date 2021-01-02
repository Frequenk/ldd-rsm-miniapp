import React from "react";
import { View } from "remax/one";
import OrderDetail from "./components/OrderDetail";
import OptionButton from "./components/OptionButton";
import OrderSteps from "@/components/OrderSteps";

const ConfirmOrder = () => {
  return (
    <>
      <OrderSteps />
      <OrderDetail />
      <OptionButton />
    </>
  );
};

export default ConfirmOrder;
