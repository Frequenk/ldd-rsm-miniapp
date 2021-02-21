import React, { useContext } from "react";
import { View, reLaunch } from "remax/one";
import OrderDetail from "./components/OrderDetail";
import OptionButton from "./components/OptionButton";
import OrderSteps from "@/components/OrderSteps";
import { ShoppingCarContext, InitialStateContext } from "@/app";
import { submitOrder } from "./service";
const ConfirmOrder = () => {
  const {
    initialState: { table, dinner_code },
  } = useContext(InitialStateContext);
  const { shoppingCarDishes } = useContext(ShoppingCarContext);
  console.log("shoppingCarDishes", shoppingCarDishes);
  const dishes = shoppingCarDishes.map((item) => ({
    id: item.dish.id,
    dish_num: item.number,
  }));
  console.log("dishes", dishes);
  const submit = async () => {
    const res = await submitOrder({
      dishes,
      table_id: table.id,
      dinner_code,
    });
    console.log("res", res);
    // reLaunch({
    //   url: "/pages/wait-company-confirm/index",
    // });
  };
  return (
    <>
      <OrderSteps current={-1} />
      <OrderDetail shoppingCarDishes={shoppingCarDishes} />
      <OptionButton submit={submit} />
    </>
  );
};

export default ConfirmOrder;
