import wxRequest from 'wechat-request';

// 升级管理 - 场所可用升级包列表
export const queryUpgradePackages = (code) => wxRequest.get(`https://testcompanyapi.iot.evideocloud.com.cn/api/upgrade-service/remote-upgrade/company/107402/upgrade-package/can-use`);
