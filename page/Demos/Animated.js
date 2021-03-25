import React, { useEffect, useRef } from 'react';
import { Animated, View, Text } from 'react-native';

const FadeInView = (props) => {
    const fadeIn = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
            fadeIn,
            {
                toValue: 1,
                duration: 2000,
            }
        ).start()
    }, [fadeIn])

    return (
        <Animated.View style={{...props.style, opacity: fadeIn}}>
            {props.children}
        </Animated.View>
    )
}

const Page = () => {
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <FadeInView style={{ padding: 20, backgroundColor: 'pink'}}>
                <Text style={{fontSize: 30, color: '#fff'}}>animated</Text>
            </FadeInView>
        </View>
    )
}

export default Page
