import React from 'react';
import { Text, Platform } from 'react-native';

const Page = () => {
    console.log('Platform--', Platform.Version);

    const Component = Platform.select({
        ios: () => <Text>platform :ios</Text>,
        android: () => <Text>platform: android</Text>
    })
    return (
        <Component />
    )
}

export default Page
