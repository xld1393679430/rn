import React, { useState, useEffect, useRef } from 'react';
import {
    SafeAreaView, SectionList, Text, ActivityIndicator,
    StyleSheet, View, Button,
} from 'react-native';

const Page = () => {
    const sectionListRef = useRef();
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    let timer;

    const getList = () => {
        setLoading(true);
        timer = setTimeout(async () => {
            let data = await fetch('https://api.github.com/').then(res => {
                return res.json();
            });
            data = Object.keys(data).map(item => {
                return {
                    [item]: data[item],
                };
            });
            console.log(data, 112312);
            const len = Math.ceil(data.length / 3);
            let list = [];
            for (let i = 0; i < len; i++) {
                list.push({
                    title: `当前index: ${i}`,
                    data: data.slice(i, i + 3),
                });
            }
            console.log(data, list, 'list');
            setList(list);
            setLoading(false);
        }, 1500);
    };

    useEffect(() => {
        getList();
        return () => {
            timer && clearTimeout(timer);
        };
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Button title={'scroll index'}
                    onPress={() => {
                        console.log(sectionListRef, 'sectionListRef')
                        sectionListRef.current.scrollToLocation({
                            sectionIndex: 2,
                            itemIndex: 2,
                            viewOffset: 30,
                        });
                    }}
            ></Button>
            {
                loading ? <ActivityIndicator size={'large'} color={'#f16c1c'} /> : (
                    <SectionList sections={list}
                                 ref={sectionListRef}
                                 style={{flex: 1}}
                                 keyExtractor={(item) => {
                                     return Object.values(item)[0];
                                 }}
                                 renderItem={({item}) => {
                                     return <Text style={styles.item}>{Object.values(item)[0]}</Text>;
                                 }}
                                 renderSectionHeader={({section: {title}}) => {
                                     return <Text style={styles.header}>{title}</Text>;
                                 }}
                                 getItemLayout={(data, index) => {
                                     console.log(data, index);
                                     return {
                                         index,
                                         offset: 10,
                                         length: 30 * index
                                     };
                                 }}
                                 ListFooterComponent={() => {
                                     return list.length ? <Text style={styles.header}>footer</Text> : null;
                                 }}
                                 ListEmptyComponent={() => (
                                     <View style={styles.noData}>
                                         <Text style={styles.noDataText}>暂无数据</Text>
                                     </View>
                                 )}
                    >

                    </SectionList>
                )
            }
        </SafeAreaView>
    );
};

export default Page;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
    header: {
        paddingVertical: 5,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9fe058',
    },
    item: {
        paddingVertical: 10,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#19f1c1',
    },
    noData: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '50%',
    },
    noDataText: {},
});
