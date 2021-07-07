import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';

const TransactionItem = (props) => {
    const { item, appData, onPress} = props
    var strAmount = "" + item.amount
    // function deleteHandler(key, appData) {
    //     appData.transactionHistory = appData.transactionHistory.filter(transac => transac.key != key)
    //     MMKV.set('applicationData', JSON.stringify(appData))
    //     console.log('set')
    //     console.log(MMKV.getString('applicationData'))
    // }
    return (
        <TouchableOpacity style={styles.box} onPress={onPress}>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.boxTextView}>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>
                    <Text style={styles.desc}>
                        {strAmount.includes('-') ? strAmount : "+" + strAmount}
                    </Text>
                </View>
                <View style={strAmount.includes('-') ? styles.verticalLineRed : styles.verticalLineGreen}></View>
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
    },
    verticalLineRed: {
        width: 1,
        backgroundColor: "#B84A48",
    }
})
export default TransactionItem;