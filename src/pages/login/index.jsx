import React from "react"
import { getUserInfo, login } from 'remax/wechat';
import { View, Text, Image, Button } from 'remax/wechat';


const Login = () => {

  const getLogin = () => {
    login().then(
      (loginData) => console.log('loginData', loginData)
    )
  }

  const getUser = () => {
    getUserInfo().then(
      (userData) => console.log('userData', userData)
    )
  }
  return (
    <>
      <View style={{ color: 'red' }}>这里是登录页面</View>
      <Button onClick={getLogin}> 获取登录信息</Button>
      <Button onClick={getUser}> 获取用户信息</Button>
      <Button openType="getUserInfo" onClick={getUser}> 获取用户信息授权</Button>

    </>
  )
}

export default Login;