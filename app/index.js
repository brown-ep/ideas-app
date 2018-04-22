import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import store from './config/store'
import Home from './screens/Home'
import Onboard from './screens/Onboard'
import IdeaDetail from './screens/IdeaDetail'

const RootStack = StackNavigator({
  Home: {
    screen: Home
  },
  Onboard: {
    screen: Onboard
  },
  IdeaDetails: {
    screen: IdeaDetail
  }
})

export default () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
)
