import React from 'react'
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import MyTabs from '../pages/BottomTab';
import Home from '../pages/Home';
import Videos from '../pages/Videos';
import My from '../pages/My';

enableScreens();
const NativeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <NativeStackNavigator.Navigator>
            <NativeStackNavigator.Screen name="MyTabs" component={MyTabs} />
            <NativeStackNavigator.Screen name="Home" component={Home} />
            <NativeStackNavigator.Screen name="Videos" component={Videos} />
            <NativeStackNavigator.Screen name="My" component={My} />
        </NativeStackNavigator.Navigator>
    );
}

export default MyStack
