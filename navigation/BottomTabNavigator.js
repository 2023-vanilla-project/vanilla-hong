import React from 'react'
import AccountStackNavigator from './stack-navigators/AccountStackNavigator';
import FeedAddStackNavigator from './stack-navigators/FeedAddStackNavigator';
import MainPageStackNavigator from './stack-navigators/MainPageStackNavigator';
import SearchStackNavigator from './stack-navigators/SearchStackNavigator';
import { Ionicons } from '@expo/vector-icons';
import ReelsStackNavigator from './stack-navigators/ReelsStackNavigator';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const BottomTabNavigator = ({navigation}) => {
    return (
        <Tab.Navigator
            initialRouteName="main"
            tabBarPosition='bottom'
            screenOptions={{
                tabBarStyle: {
                    display: 'flex',
                    position: 'absolute',
                    bottom: 8,
                    left: 10,
                    right: 10,
                    backgroundColor: '#5352ed',
                    borderRadius: 30,
                    height: 60,
                },
                lazy:true,
                tabBarIndicatorStyle: { height:0 },
                tabBarActiveTintColor: '#7bed9f',
                tabBarInactiveTintColor: '#ffffff',
                tabBarShowLabel: false,
                headerShown: true,
            }}
            >
            <Tab.Screen name="main" component={MainPageStackNavigator}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        return (
                            <Ionicons
                                name={focused ? "home" : "home-outline"}
                                size={25}
                                color={color}
                                onPress={() => navigation.openDrawer()} />)
                    }
                }} />
            <Tab.Screen name="serach" component={SearchStackNavigator}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            < Ionicons
                                name={focused ? "search" : "search-outline"}
                                size={25}
                                color={color} />)
                    }
                }} />
            <Tab.Screen name="feedAdd" component={FeedAddStackNavigator}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name={focused ? "add-circle" : "add-circle-outline"}
                                size={25}
                                color={color} />)
                    }
                }} />
            <Tab.Screen name="Reels" component={ReelsStackNavigator}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name={focused ? "rocket" : "rocket-outline"}
                                size={25}
                                color={color} />)
                    }
                }} />
            <Tab.Screen name="account" component={AccountStackNavigator}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name={focused ? "person-circle" : "person-circle-outline"}
                                size={25}
                                color={color} />)
                    }
                }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator