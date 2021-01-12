import axios from 'axios'

// 生成就餐表
export const startDinner = (userInfo, dinner) => axios.post(`user/startDinner`, { dinner, userInfo });
