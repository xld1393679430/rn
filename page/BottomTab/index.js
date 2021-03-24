import React from 'react'
import {View, Text} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Page1 from './Page1'
import Page2 from './Page2'
import Ionicons from 'react-native-vector-icons/Ionicons'



// const BottomTabNavigator = createBottomTabNavigator({
//     Page1: {
//         screen: Page1,
//         navigationOptions: {
//             tabBarLabel: 'Page1',
//             tabBarIcon: ({tintColor, focused}) => {
//                 return (
//                     <Ionicons name={'ios-home'}
//                               size={20}
//                               style={{color: tintColor}}
//                               />
//                 )
//             }
//         }
//     },
//     Page2: {
//         screen: Page2,
//         navigationOptions: {
//             tabBarLabel: 'Page2',
//             tabBarIcon: ({tintColor, focused}) => {
//                 return (
//                     <Ionicons name={'ios-home'}
//                               size={20}
//                               style={{color: tintColor}}
//                     />
//                 )
//             }
//         }
//     }
// })
//
//
// export default createStackNavigator({
//     HomePage: {
//         screen: BottomTabNavigator,
//         navigationOptions: {
//             title: '底部导航' ,
//             headerRight: null
//         }
//     },
//     Page1: {
//         screen: Page1
//     },
//     Page2: {
//         screen: Page2
//     }
// })

const Page = () => {
    return (
        <View>
            <Text>Page</Text>
        </View>
    )
}

export default Page


// export default BottomTabDemo
