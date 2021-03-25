import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home'
import TextInputDemo from './TextInput'
import ScrollViewDemo from './ScrollView'
import PlatformSelectDemo from './PlatformSelect'
import FlexDemo from './Flex'
import ImageDemo from './Image'
import ButtonDemo from './Button'
import AnimatedDemo from './Animated'

export default createStackNavigator({
    Home: {
        screen: Home,
    },
    TextInputDemo: {
        screen: TextInputDemo
    },
    ScrollViewDemo: {
        screen: ScrollViewDemo
    },
    PlatformSelectDemo: {
        screen: PlatformSelectDemo
    },
    FlexDemo: {
        screen: FlexDemo
    },
    ImageDemo: {
        screen: ImageDemo
    },
    ButtonDemo: {
        screen: ButtonDemo
    },
    AnimatedDemo: {
        screen: AnimatedDemo
    },
})
