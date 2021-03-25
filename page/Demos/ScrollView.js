import React from 'react';
import { ScrollView, Image, Text } from 'react-native';

const Page = () => {
    const logo = {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        width: 64,
        height: 64
    }
    return (
        <ScrollView>
        <Text style={{fontSize: 48}}>scroll me</Text>
        {
            Array.from({length: 30}, (v, k) => k).map(item => {
                return <Image source={logo} key={item}></Image>
            })
        }
    </ScrollView>
    )
}

export default Page
