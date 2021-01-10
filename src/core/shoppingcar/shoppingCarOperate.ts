import sk from "./socket";

let count = 0;
var timerId = null;
let lastDishId;
const shoppingCarOperate = (
  tableId: number,
  userName: string,
  setMsg: any,
  setDishes: any
) => {
  const socket = sk.connect(tableId);

  socket.on("shoppingCar", function (data) {
    console.log("shoppingCar", data);
    console.log("是这里的问题8888888888888");
    setMsg(data.msg);
    setDishes(data.data);
  });

  const setShoppingCarDishes = (val, dish) => {
    // 如果是清空购物车
    if (val?.length === 0) {
      socket.emit("shoppingCar", { data: [], msg: `${userName}清空了购物车` });
      setDishes([]);
      setMsg("");
      return;
    }
    let shoppingCarDishes;
    setDishes((item) => {
      shoppingCarDishes = item;
      return item;
    });

    if (timerId && lastDishId === dish.id) {
      clearTimeout(timerId);
      count = count + 1;
    }
    timerId = setTimeout(() => {
      count = 0;
      timerId = null;
    }, 3000);
    if (lastDishId !== dish.id) count = 0;
    lastDishId = dish.id;
    console.log("count666666", count);
    console.log("触发了这个函数");

    // 编辑购物车内的菜品信息
    for (let i = 0; i < shoppingCarDishes.length; i++) {
      // 如果菜品已在购物车中
      if (shoppingCarDishes[i].dish.id === dish.id) {
        // 如果菜品数量为0，从购物车中删除该菜品
        if (val === 0) {
          const data = [
            ...shoppingCarDishes.slice(0, i),
            ...shoppingCarDishes.slice(i + 1),
          ];
          socket.emit("shoppingCar", {
            data,
            msg: `${userName}从购物车中删除了${dish.name}`,
          });
          setDishes(data);
          setMsg("");
          return;
        }
        // 更改购物车中该菜品的数量
        const data = [
          ...shoppingCarDishes.slice(0, i),
          { dish: dish, number: val },
          ...shoppingCarDishes.slice(i + 1),
        ];
        // 如果菜品是减少
        if (shoppingCarDishes[i].number - val > 0)
          socket.emit("shoppingCar", {
            data,
            msg: `${userName}移除了${
              shoppingCarDishes[i].number - val + count
            }份${dish.name}`,
          });
        // 如果菜品是增多
        else
          socket.emit("shoppingCar", {
            data,
            msg: `${userName}添加了${
              val - shoppingCarDishes[i].number + count
            }份${dish.name}`,
          });
        setDishes(data);
        setMsg("");
        return;
      }
    }
    // 向购物车添加菜品
    const data = [...shoppingCarDishes, { dish: dish, number: val }];
    socket.emit("shoppingCar", {
      data,
      msg: `${userName}向购物车中新增了${dish.name}`,
    });
    setDishes(data);
    setMsg("");
  };

  return setShoppingCarDishes;
};

export default shoppingCarOperate;
