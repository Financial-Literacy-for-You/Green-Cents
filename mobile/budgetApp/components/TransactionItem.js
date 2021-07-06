import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
const { width } = Dimensions.get('window')

const TransactionItem = (props) => {
    const { onPress, title, amount, type } = props
    return (
        <TouchableOpacity style={styles.box} onPress={onPress}>
            <View style={{flexDirection: "row"}}>
                <View style={styles.boxTextView}>
                    <Text style={styles.title}>
                        Cash
                    </Text>
                    <Text style={styles.desc}>
                        +500
                    </Text>
                </View>
                <View style={styles.verticalLineGreen}></View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title: {
        color: "#FFF",
        paddingLeft: "2%"
    },
    desc: {
        color: "#EBEBF599",
        marginLeft: "2%"
    },
    boxTextView: {
        marginRight: "90%"
    },
    box: {
        backgroundColor: "#000000",
        borderWidth: 5,
        borderRadius: 1,
        marginLeft: "3%",
        marginRight: "3%"
    },
    verticalLineGreen: {
        width: 1,
        backgroundColor: "#62CA8E",
    }
})
export default TransactionItem;