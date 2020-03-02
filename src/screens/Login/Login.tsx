import React from 'react'
import { View, Text } from 'react-native'
import DeviceInfo from 'react-native-device-info'

const Login = () => {
  return (
    <View>
      <Text>{DeviceInfo.getUniqueId()}</Text>
    </View>
  )
}

export default Login
