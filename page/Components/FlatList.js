import { FlatList, Text, TouchableHighlight, View } from 'react-native';
import React from 'react';

const Page = () => {
    return (
        <FlatList
            ItemSeparatorComponent={
                Platform.OS === 'android' &&
                (({ highlighted }) => {
                    console.log(highlighted, 'highlighted')
                    return (
                        <View
                            style={[
                                highlighted && { marginLeft: 0 }
                            ]}
                        >{highlighted}</View>
                    )
                })
            }
            data={[{ title: 'Title Text', key: 'item1' }]}
            renderItem={({ item, index, separators }) => {
                console.log(separators, 'separators')
                return (
                    <TouchableHighlight
                        onPress={() => {}}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight}>
                        <View style={{ backgroundColor: 'white' }}>
                            <Text>{item.title}</Text>
                        </View>
                    </TouchableHighlight>
                )
            }}
        />
    )
}

export default Page
