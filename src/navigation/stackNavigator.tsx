import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from "../screens/Home";
import AboutScreen from "../screens/About";

const Stack = createStackNavigator()

export default function MainStackNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="About" component={AboutScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}