import { Text, View, Button, Alert } from 'react-native';
import React from 'react';

const Page = ({navigation}) => {
    return (
        <View>
            <Text>Home Page1</Text>
            <Button title={'to Page1'} onPress={() => {
                navigation.navigate('Page1');
            }}></Button>
            <Button title={'to Page2'} onPress={() => navigation.navigate('Page2')}></Button>
            <Button title={'title'}></Button>

        </View>
    );
};

export default Page;
