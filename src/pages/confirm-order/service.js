import axios from 'axios'

// 提交订单
export const submitOrder = (params) => axios.post(`submitOrder`, { ...params }, { baseURL: 'http://192.168.137.1:3000/', });
