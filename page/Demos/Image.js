import React from 'react';
import { Image, ImageBackground, View, Text } from 'react-native';

const Page = () => {
    return (
        <View>
            <Image source={require('./../../assets/images/2.jpg')} />
            <ImageBackground source={require('./../../assets/images/3.jpg')} style={{width: 100, height: 100}}>
                <Text>123</Text>
            </ImageBackground>
        </View>
    )
}

export default Page
