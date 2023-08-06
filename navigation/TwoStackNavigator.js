import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

const TwoStack = () => (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>TwoStackNavigator Screen!</Text>
    </View>
)

const TwoStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: true,
        }}>
            <Stack.Screen name="twoStack" component={TwoStack}/>
        </Stack.Navigator>
    )
}

export default TwoStackNavigator