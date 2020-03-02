import React, { FunctionComponent } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './navigation'
import { Provider } from 'react-redux'
import { store } from './store/store'

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App
