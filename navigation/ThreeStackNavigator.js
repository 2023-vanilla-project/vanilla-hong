import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

const ThreeStack = () => (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>ThreeStackNavigator Screen!</Text>
    </View>
)

const ThreeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: true,
        }}>
            <Stack.Screen name="threeStack" component={ThreeStack}/>
        </Stack.Navigator>
    )
}

export default ThreeStackNavigator