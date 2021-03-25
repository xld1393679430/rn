import React, { useState } from 'react';
import {
    Alert,
    View,
    Button,
    TouchableHighlight,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform,
    StyleSheet
} from 'react-native';

const Page = () => {
    const [btnText, setBtnText] = useState('tap me');
    const [touchText, setTouchText] = useState('touch text');

    const _onPressButton = () => {
        Alert.alert('You tapped the button!')
    }

    const _onLongPressButton = () => {
        Alert.alert('You long-pressed the button!')
    }

    return (
        <View style={styles.container}>

            <View style={{margin: 20}}>
                <Text>text one</Text>
                <Text>text two</Text>
            </View>


            <View accessible={true} style={{margin: 20}}>
                <Text>text one</Text>
                <Text>text two</Text>
            </View>

            <Button title={btnText} onPress={() => setBtnText('taped')}></Button>
            <TouchableHighlight onPress={() => setTouchText('touched text')}
                                underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{touchText}</Text>
                </View>
            </TouchableHighlight>

            <TouchableNativeFeedback>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                </View>
            </TouchableNativeFeedback>

            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableOpacity</Text>
                </View>
            </TouchableOpacity>


            <TouchableNativeFeedback
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                </View>
            </TouchableNativeFeedback>


            <TouchableHighlight onPress={_onPressButton}
                                onLongPress={_onLongPressButton}
                                underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Touchable with Long Press</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};


export default Page;

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
    }
})
