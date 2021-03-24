import React from 'react'
import {
    Button,
    View,
    Text,
    StyleSheet,
} from 'react-native'

const Page = ({ navigation }) => {
    return (
        <View style={{flex: 1, backgroundColor: 'gray', paddingTop: 20}}>
            <Text>home page</Text>
            <Button title={'返回上一页'}
                    onPress={() => {
                        navigation.goBack()
                    }}
            ></Button>
            <Button title={'to page1'}
                    onPress={() => {
                        navigation.navigate('NavigationPage1', {name: '动态的页面名'})
                    }}
            ></Button>

            <Button title={'to page2'}
                    onPress={() => {
                        navigation.navigate('NavigationPage2')
                    }}
            ></Button>

            <Button title={'to page3'}
                    onPress={() => {
                        navigation.navigate('NavigationPage3', {name: 'new Page3'})
                    }}
            ></Button>
        </View>
    )
}

export default Page

const stlyes = StyleSheet.create({

})
