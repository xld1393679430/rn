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
            <Text>Page1</Text>
            <Button title={'返回上一页'}
                    onPress={() => {
                        navigation.goBack()
                    }}
            ></Button>
        </View>
    )
}

export default Page

const stlyes = StyleSheet.create({

})
