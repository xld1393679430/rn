import React, { useState } from 'react';
import {
    Keyboard, KeyboardAvoidingView,
    Platform, StyleSheet, TouchableWithoutFeedback,
    View, Text, TextInput, Button,
} from 'react-native';

const Page = () => {
    const [flag, setFlag] = useState(false);

    return (
        <View style={{flex: 1}}>
            <Button title={`toggle-${flag}`} onPress={() => setFlag(!flag)}></Button>
            {
                flag ? (
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                                          style={styles.container}>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={styles.inner}>
                                <Text style={styles.header}>Header</Text>
                                <TextInput placeholder={'username'} style={styles.textInput}></TextInput>
                                <View style={styles.btnContainer}>
                                    <Button title={'submit'} onPress={() => {
                                    }}></Button>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                ) : (
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.inner}>
                            <Text style={styles.header}>Header</Text>
                            <TextInput placeholder={'username'} style={styles.textInput}></TextInput>
                            <View style={styles.btnContainer}>
                                <Button title={'submit'} onPress={() => {
                                }}></Button>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                )
            }
        </View>
    );
};


export default Page;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    },
});
