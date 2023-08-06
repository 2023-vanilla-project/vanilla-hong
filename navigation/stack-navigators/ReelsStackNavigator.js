import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

const Reels = () => (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>Reels Screen!</Text>
    </View>
)

const ReelsStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="ReelsStack" component={Reels}/>
        </Stack.Navigator>
    )
}

export default ReelsStackNavigator