import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import FeedAdd from '../../component/FeedAdd2'

const Stack = createStackNavigator()

const FeedAdd2 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>FeedAdd screen!</Text>
  </View>
)

const FeedAddStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="feedAddStack" component={FeedAdd} />
    </Stack.Navigator>
  )
}

export default FeedAddStackNavigator