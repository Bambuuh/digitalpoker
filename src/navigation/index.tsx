import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FunctionComponent } from 'react'
import Home from '../screens/Home'
import Login from '../screens/Login'
import theme from '../theme'

const MainStack = createStackNavigator()

const Navigation: FunctionComponent = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerTitleStyle: { color: theme.background.onColor },
        cardStyle: { backgroundColor: theme.background.color },
        headerStyle: { backgroundColor: theme.background.color }
      }}
    >
      <MainStack.Screen name="home" component={Home} />
    </MainStack.Navigator>
  )
}

export default Navigation
