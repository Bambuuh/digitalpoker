import React, { FunctionComponent } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './navigation'

// TODO(you): import any additional firebase services that you require for your app, e.g for auth:
//    1) install the npm package: `yarn add @react-native-firebase/auth@alpha` - you do not need to
//       run linking commands - this happens automatically at build time now
//    2) rebuild your app via `yarn run run:android` or `yarn run run:ios`
//    3) import the package here in your JavaScript code: `import '@react-native-firebase/auth';`
//    4) The Firebase Auth service is now available to use here: `firebase.auth().currentUser`

const App: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}

export default App
