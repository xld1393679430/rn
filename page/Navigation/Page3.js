import React from 'react'
import {
    Button,
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native'

const Page = ({ navigation }) => {
    const {setParams, state} = navigation
    const {params} = state
    const showText = params && params.mode === 'edit' ? '正在编辑' : '编辑已完成'
    return (
        <View style={{flex: 1, backgroundColor: 'gray', paddingTop: 20}}>
            <Text style={styles.pageName}>Page3</Text>
            <Text style={styles.showText}>{ showText }</Text>
            <TextInput onChangeText={(text) => setParams({name: text})}
                       placeholder={'请输入'}
                       style={styles.input}
            />
            <Button title={'返回上一页'}
                    onPress={() => {
                        navigation.goBack()
                    }}
            ></Button>
        </View>
    )
}

export default Page

const styles = StyleSheet.create({
    pageName: {
        margin: 10,
        fontSize: 20,
    },
    showText: {
        margin: 10,
        fontSize: 20,
    },
    input: {
        margin: 20,
        borderWidth: 1,
        borderColor: '#ccc'
    }
})
