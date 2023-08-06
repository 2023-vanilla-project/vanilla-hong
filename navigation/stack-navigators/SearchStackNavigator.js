import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import ListFeed from '../../component/SearchFeed';
import SearchFeed from '../../component/SearchFeed';


const Stack = createStackNavigator()

const Search = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Search screen!</Text>
  </View>
)

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="searchStack" component={SearchFeed} />
    </Stack.Navigator>
  )
}

export default SearchStackNavigator

