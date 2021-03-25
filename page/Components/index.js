import { createStackNavigator } from 'react-navigation-stack'
import HomePage from './Home'
import ActivityIndicatorPage from './ActivityIndicator'
import FlatListPage from './FlatList'
import KeyboardAvoidingViewPage from './KeyboardAvoidingView'
import ModalPage from './Modal'
import RefreshControlPage from './RefreshControl'
import SectionListPage from './SectionList'
import TextPage from './Text'

export default createStackNavigator({
    Home: {
        screen: HomePage,
    },
    ActivityIndicatorPage: {
        screen: ActivityIndicatorPage
    },
    FlatListPage: {
        screen: FlatListPage
    },
    KeyboardAvoidingViewPage: {
        screen: KeyboardAvoidingViewPage
    },
    ModalPage: {
        screen: ModalPage
    },
    RefreshControlPage: {
        screen: RefreshControlPage
    },
    SectionListPage: {
        screen: SectionListPage
    },
    TextPage: {
        screen: TextPage
    }

})
