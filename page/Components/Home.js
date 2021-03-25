import React from 'react'
import {View, Button} from 'react-native'

const Page = ({ navigation }) => {
    return (
        <View>
            <Button title={'ActivityIndicatorPage'}
                    onPress={() => navigation.navigate('ActivityIndicatorPage')}
            ></Button>

            <Button title={'FlatListPage'}
                    onPress={() => navigation.navigate('FlatListPage')}
            ></Button>

            <Button title={'KeyboardAvoidingViewPage'}
                    onPress={() => navigation.navigate('KeyboardAvoidingViewPage')}
            ></Button>

            <Button title={'ModalPage'}
                    onPress={() => navigation.navigate('ModalPage')}
            ></Button>

            <Button title={'RefreshControlPage'}
                    onPress={() => navigation.navigate('RefreshControlPage')}
            ></Button>

            <Button title={'SectionListPage'}
                    onPress={() => navigation.navigate('SectionListPage')}
            ></Button>

            <Button title={'TextPage'}
                    onPress={() => navigation.navigate('TextPage')}
            ></Button>


        </View>
    )
}

export default Page
