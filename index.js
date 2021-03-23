/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import FlatListDemo from './page/FlatList'
import { name as appName } from './app.json';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator({
    App: {
        screen: App,
    },
    FlatListDemo: {
        screen: FlatListDemo,
        navigationOptions: {
            title: 'FlatListDemo'
        }
    }
});


const Root = createAppContainer(AppNavigator)

AppRegistry.registerComponent(appName, () => Root);
