import React, { useState } from 'react'
import {View, Text, TextInput} from 'react-native'

const Page = () => {
    const [text, setText] = useState('')
    return (
        <View style={{padding: 10}}>
            <TextInput onChangeText={val => setText(val) }
                       placeholder={'请输入'}
                       defaultValue={text}
            />
            <Text style={{padding: 10, fontSize: 42}}>
                {text.split(' ').map(item => item && '🍕').join(' ')}
            </Text>
        </View>
    )
}

export default Page
