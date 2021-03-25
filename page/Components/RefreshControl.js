import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, ScrollView, RefreshControl, Text } from 'react-native';

const Page = () => {
    const [refreshing, setRefreshing] = useState(false)

    const handleRefresh = () => {
        setRefreshing(true)

        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}
                        refreshControl={<RefreshControl refreshing={refreshing}
                                                        // progressBackgroundColor={'#12eebd'}
                                                        progressViewOffset={100}
                                                        title="Loading..."
                                                        onRefresh={handleRefresh}/>}>
                <Text style={styles.text}>refresh me</Text>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    }
})
