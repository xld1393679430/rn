import { View, ActivityIndicator, StatusBar } from 'react-native'
import React from 'react'

const Page = () => {
    console.log(StatusBar.currentHeight, 'StatusBar.currentHeight')
    return (
        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', padding: 10}}>
            <ActivityIndicator size={'large'} color={'#0000ff'} />
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    )
}

export default Page
