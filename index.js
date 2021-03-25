/**
 * @format
 */
import React from 'react';
import { AppRegistry, Button } from 'react-native';
import App from './App';
import FlatListDemo from './page/FlatList';
import SectionListDemo from './page/SectionList';
import NavigationDemo from './page/Navigation';
import NavigationPage1 from './page/Navigation/Page1';
import NavigationPage2 from './page/Navigation/Page2';
import NavigationPage3 from './page/Navigation/Page3';
import Demos from './page/Demos'
import { name as appName } from './app.json';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
    {
        App: {
            screen: App,
        },
        FlatListDemo: {
            screen: FlatListDemo,
            navigationOptions: {
                title: 'FlatListDemo',
            },
        },
        SectionListDemo: {
            screen: SectionListDemo,
            navigationOptions: {
                title: 'SectionListDemo',
            },
        },
        NavigationDemo: {
            screen: NavigationDemo,
            navigationOptions: {
                title: 'home page',
                headerBackTitle: '返回提示'
            },
        },
        NavigationPage1: {
            screen: NavigationPage1,
            navigationOptions: ({navigation}) => {
                if (navigation.state.params) {
                    return {
                        title: `${navigation.state.params.name}`
                    }
                }
            }
        },
        NavigationPage2: {
            screen: NavigationPage2,
            navigationOptions: {
                title: 'page2',
                headerBackTitle: '返回提示'
            },
        },
        NavigationPage3: {
            screen: NavigationPage3,
            navigationOptions: ({ navigation }) => {
                const {state: { params = {} }, setParams} = navigation
                return {
                    title: params.name ? params.name : 'this is page3',
                    headerRight: () => (
                        <Button title={params.mode === 'edit' ? '保存' : '编辑'}
                                onPress={() => {
                                    const mode = params.mode === 'edit' ? '' : 'edit'
                                    setParams({mode})
                                }}
                        />
                    )
                }
            }
        },
        Demos: {
            screen: Demos,
        },
    },
    {
        defaultNavigationOptions: {}
    }
);


const Root = createAppContainer(AppNavigator);

AppRegistry.registerComponent(appName, () => Root);
