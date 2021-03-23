import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    RefreshControl,
    ActivityIndicator,
} from 'react-native';

const Page: () => Node = (props) => {
    const Bytes = Array.from({length: 26}, (v, k) => k)
        .map(item => String.fromCharCode(item + 97))

    const [refreshing, setRefreshing] = useState(false)
    const [list, setList] = useState(Bytes)
    const _renderItem = (data) => {
        console.log(data, 'data')
        return (
            <View style={styles.item} key={data.item}>
                <Text style={styles.text}>{data.item}</Text>
            </View>
        )
    }

    const _keyExtractor = (item, index) => {
        return `${item}${index}`;
    }

    const loadData = (refreshing) => {
        console.log(refreshing, 'refreshing')
        if (refreshing) {
            setRefreshing(true)
            setTimeout(() => {
                setList([1, ...list])
                setRefreshing(false)
            }, 1000)
        } else {
            setTimeout(() => {
                setList((pre) => pre.reverse())
            }, 1000)
        }
    }

    const handleListFooterComponent = () => {
        // return <Text>meiyoule</Text>
        return (
            <View style={styles.indicatorContainer}>
                <ActivityIndicator
                    size={'large'}
                    animating={true}
                    color={"red"}
                    style={styles.indicator}
                ></ActivityIndicator>
                <Text>正在加载...</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text>FlatList</Text>
            {/*<FlatList*/}
            {/*    data={list}*/}
            {/*    renderItem={(data) => renderItem(data)}*/}
            {/*    refreshing={refreshing}*/}
            {/*    onRefresh={loadData}*/}
            {/*>*/}

            {/*</FlatList>*/}


            <FlatList
                data={list}
                keyExtractor={_keyExtractor}
                renderItem={(data) => _renderItem(data)}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={() => loadData(true)}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        size={0}
                        progressViewOffset={30}
                        colors={['#0000ff', '#ff0000', '#00ff00']}
                    />
                }
                ListFooterComponent={handleListFooterComponent}
                onEndReached={() => loadData(false)}
            >

            </FlatList>
        </View>
    );
};
export default Page


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        backgroundColor: '#169',
        height: 200,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20
    },
    indicatorContainer: {
        alignItems: 'center'
    }
})
