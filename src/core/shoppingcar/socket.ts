import io from "@holytiny/wxmp-socket.io-client";

const socket = {
  connect: (tableid: number) => {
    const socket = io(`http://192.168.137.1:3000?tableid=${tableid}`, {
      transports: ["websocket"],
    });
    console.log("socket", socket);
    socket.on("connect", () => {
      console.log("连接上了呀呀呀呀");
    });
    return socket;
  },
};

export default socket;
