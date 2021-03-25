import React from 'react'
import { Button, Platform, View, StyleSheet } from 'react-native';

const Page = ({ navigation }) => {
    console.log(Platform.OS, 'Platform.OS')
    return (
        <View style={styles.container}>
            <Button title={'to TextInputDemo'}
                    onPress={() => {
                        navigation.navigate('TextInputDemo')
                    }}
            ></Button>

            <Button title={'to ScrollViewDemo'}
                    onPress={() => {
                        navigation.navigate('ScrollViewDemo')
                    }}
            ></Button>

            <Button title={'to PlatformSelectDemo'}
                    onPress={() => {
                        navigation.navigate('PlatformSelectDemo')
                    }}
            ></Button>

            <Button title={'to FlexDemo'}
                    onPress={() => {
                        navigation.navigate('FlexDemo')
                    }}
            ></Button>

            <Button title={'to ImageDemo'}
                    onPress={() => {
                        navigation.navigate('ImageDemo')
                    }}
            ></Button>

            <Button title={'to ButtonDemo'}
                    onPress={() => {
                        navigation.navigate('ButtonDemo')
                    }}
            ></Button>

            <Button title={'to AnimatedDemo'}
                    onPress={() => {
                        navigation.navigate('AnimatedDemo')
                    }}
            ></Button>

            <Button title={'to FetchDemo'}
                    onPress={() => {
                        navigation.navigate('FetchDemo')
                    }}
            ></Button>


        </View>
    )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                backgroundColor: 'red'
            },
            android: {
                backgroundColor: 'blue'
            }
        })
    },
})
