import React from "react";

import {createDrawerNavigator} from '@react-navigation/drawer'
import MainStackNavigator from "./stackNavigator";
import DetailScreen from "../screens/Details";
import CoinDataScreen from "../screens/coindataScreen";

const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="HomePage" component={MainStackNavigator} />
            <Drawer.Screen name="Details" component={DetailScreen}/>
            <Drawer.Screen name="Coin Data" component={CoinDataScreen}/>
        </Drawer.Navigator>
    )
}