import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Videos from '../Videos';
import My from '../My';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home"
                        component={Home}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => (
                                <AntDesign name="home" color={color} size={size} />
                            ),
                        }}
            />
            <Tab.Screen name="Videos"
                        component={Videos}
                        options={{
                            tabBarLabel: 'Videos',
                            tabBarIcon: ({ color, size }) => (
                                <AntDesign name="videocamera" color={color} size={size} />
                            ),
                        }}
            />
            <Tab.Screen name="My"
                        component={My}
                        options={{
                            tabBarLabel: 'My',
                            tabBarIcon: ({ color, size }) => (
                                <AntDesign name="user" color={color} size={size} />
                            ),
                        }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs
