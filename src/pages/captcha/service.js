import axios from 'axios'

// 验证验证码
export const validateCaptcha = (captcha, table_id) => axios.post(`user/validateCaptcha`, { captcha, table_id });
