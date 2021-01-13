import axios from 'axios'

// 获取菜单
export const getMenu = (table_id) => axios.get(`user/getMenu?table_id=${table_id}`);
