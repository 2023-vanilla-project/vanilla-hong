import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import BottomTabNavigator from './BottomTabNavigator';
import TwoStackNavigator from "./TwoStackNavigator";
import ThreeStackNavigator from './ThreeStackNavigator';

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name="mainDrawer" component={BottomTabNavigator} />
            <Drawer.Screen name="twoDrawer" component={TwoStackNavigator}/>
            <Drawer.Screen name="threeDrawer" component={ThreeStackNavigator}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator