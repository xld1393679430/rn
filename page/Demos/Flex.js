import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity  } from 'react-native';
const BtnItem = ({title, handleClick, currentFlexDirection}) => {
    console.log(title, currentFlexDirection, 222)
    return (
        <View style={styles.btnItemBox}>
            <TouchableOpacity onPress={() => handleClick(title)}
                    style={[
                        styles.btnItem,
                        title === currentFlexDirection && styles.btnItemActivity
                    ]}
            >
                <Text>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const Page = () => {
    const flexDirections = ["column", "row", "row-reverse", "column-reverse"]
    const [currentFlexDirection, setCurrentFlexDirection]  = useState(flexDirections[0])

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {
                    flexDirections.map(item => (
                        <BtnItem key={item}
                                 title={item}
                                 currentFlexDirection={currentFlexDirection}
                                 handleClick={(val) => setCurrentFlexDirection(val)}
                        />
                    ))
                }
            </View>
            <View style={[
                styles.content,
                {
                    flexDirection: currentFlexDirection
                }
            ]}>
                <View style={{width: 60, height: 60, backgroundColor: '#4682b4'}}></View>
                <View style={{width: 60, height: 60, backgroundColor: '#87ceeb'}}></View>
                <View style={{width: 60, height: 60, backgroundColor: '#b0e0e6'}}></View>
            </View>

        </View>
    );
};

export default Page;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: 'pink'
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    btnItemBox: {
        margin: '1%',
        minWidth: '48%',
    },
    btnItem: {
        borderRadius: 4,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        color: '#ff8052',
        backgroundColor: '#fdf5e6',
        padding: 10,
    },
    btnItemActivity: {
        backgroundColor: '#ff7f50',
        color: '#fff'
    },
    content: {
        flex: 1,
        paddingTop: 20,
    }
})
