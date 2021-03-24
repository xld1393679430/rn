import React, { useState } from 'react';
import {
    View,
    Text,
    SectionList,
    StyleSheet,
    RefreshControl,
    ActivityIndicator,
} from 'react-native';

const Page: () => Node = (props) => {
    const Cities = [
        {
            data: ['北京', '上海', '广州', '深证'],
            title: '一线'
        },
        {
            data: ['杭州', '苏州', '成都', '武汉', '郑州'],
            title: '二线'
        },
        {
            data: ['洛阳', '厦门', '合肥', '青岛'],
            title: '三线'
        },

    ]

    const [refreshing, setRefreshing] = useState(false)
    const [list, setList] = useState(Cities)

    const _renderItem = (data) => {
        return (
            <View style={styles.item} key={data.item}>
                <Text style={styles.text}>{data.item}</Text>
            </View>
        )
    }

    const _keyExtractor = (item, index) => {
        return `${item}${index}`;
    }

    const _renderSectionHeader = ({section}) => {
        return (
            <View style={styles.sectionHeader}>
                <Text>{section.title}</Text>
            </View>
        )
    }

    const loadData = (refreshing) => {
        if (refreshing) {
            setRefreshing(true)
            setTimeout(() => {
                setList([...Cities, ...list])
                setRefreshing(false)
            }, 1000)
        } else {
            setTimeout(() => {
                setList([...list, ...Cities])
            }, 1000)
        }
    }

    const handleListFooterComponent = () => {
        return (
            <View style={styles.indicatorContainer}>
                <ActivityIndicator
                    size={'large'}
                    animating={true}
                    color={"red"}
                ></ActivityIndicator>
                <Text>正在加载...</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <SectionList
                sections={list}
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
                renderSectionHeader={(data) => _renderSectionHeader(data)}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            >

            </SectionList>
        </View>
    );
};
export default Page


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    item: {
        height: 100,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20
    },
    indicatorContainer: {
        alignItems: 'center'
    },
    sectionHeader: {
        height: 50,
        backgroundColor: "#93ebbe",
        alignItems: "center",
        justifyContent: 'center',
    },
    separator: {
        height: 1,
        backgroundColor: 'gray',
        flex: 1
    }
})
