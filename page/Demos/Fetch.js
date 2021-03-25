import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';

const Page = () => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    async function getData() {
        const data = await fetch('https://api.github.com/').then(res => {
            console.log(res)
            return res.json()
        })

        setLoading(false)
        setList(Object.values(data))
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(getData, 1000)
    }, [])

    return (
        <View style={{padding: 20, flex: 1}}>
            {
                loading ? <ActivityIndicator size="small" color="#0000ff" /> : (
                    <FlatList data={list}
                              keyExtractor={(index) => index}
                              renderItem={({item}) => {
                                  return <Text key={item}>{item}</Text>
                              }}
                    />
                )
            }
            <Text>Fetch</Text>
        </View>
    )
}

export default Page
