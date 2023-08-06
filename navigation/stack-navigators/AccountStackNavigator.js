import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

const Account = () => (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>Account Screen!</Text>
    </View>
)

const AccountStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="accountStack" component={Account}/>
        </Stack.Navigator>
    )
}

export default AccountStackNavigator