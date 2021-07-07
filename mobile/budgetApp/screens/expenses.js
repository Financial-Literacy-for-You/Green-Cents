import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import Header from '../components/Header'
import CustomStatusBar from '../components/CustomStatusBar'
import CustomButton from '../components/Button'
import Space from '../components/Space'
import TransactionItem from '../components/TransactionItem'
import { MMKV } from 'react-native-mmkv';

const { height } = Dimensions.get('window')

const Expenses = () => {
    const [appData, setAppData] = useState(JSON.parse(MMKV.getString('applicationData')))
    // setAppData(JSON.parse(MMKV.getString('applicationData')))
    function deleteHandler(key, appData) {
        var toBeDeleted = appData.transactionHistory.filter(transac => transac.key == key)[0]
        appData.transactionHistory = appData.transactionHistory.filter(transac => transac.key != key)
        appData.balance -= toBeDeleted.amount
        toBeDeleted.amount = "" + toBeDeleted.amount
        if (toBeDeleted.amount.includes('-')) {
            appData.totalExpense -= Math.abs(toBeDeleted.amount)
        } else if (!toBeDeleted.amount.includes('-')) {
            appData.totalIncome -= Math.abs(toBeDeleted.amount)
        }
        MMKV.set('applicationData', JSON.stringify(appData))
        console.log('set')
        setAppData(JSON.parse(MMKV.getString('applicationData')))
        console.log('state set')
        console.log(MMKV.getString('applicationData'))
    }
    return (
        <SafeAreaView style={styles.container}>
            <CustomStatusBar></CustomStatusBar>
            <Header title="Expenses"></Header>
            <Space props={{
                width: 20,
                height: 20
            }}></Space>

            <View style={{ flexDirection: "row" }}>
                <View style={styles.balanceTextGroup}>
                    <Text style={styles.balTextHeader}>
                        your balance
                    </Text>
                    <Text style={styles.balText}>
                        ${appData.balance}
                    </Text>
                </View>


                <View style={styles.goalTextGroup}>
                    <Text style={styles.goalTextHeader}>
                        your goal
                    </Text>
                    <Text style={styles.goalText}>
                        ${appData.goalSaveAmount}
                    </Text>
                </View>
            </View>

            <Space props={{
                width: 30,
                height: 30
            }}></Space>


            <View style={styles.box}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.boxIncome}>
                        <Text style={{ textTransform: "uppercase", fontSize: 16, color: "#FFF" }}>Total Income</Text>
                        <Space props={{
                            width: 20,
                            height: 20
                        }}></Space>
                        <Text style={{ fontSize: 25, color: "#62CA8E" }}>${appData.totalIncome}</Text>
                    </View>
                    <View style={styles.verticalLine}></View>
                    <View style={styles.boxExpense}>
                        <Text style={{ textTransform: "uppercase", fontSize: 16, color: "#FFF" }}>Total Expense</Text>
                        <Space props={{
                            width: 20,
                            height: 20
                        }}></Space>
                        <Text style={{ fontSize: 25, color: "#B84A48" }}>${appData.totalExpense}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.transacBtn}>
                <CustomButton title="Add Transaction"></CustomButton>
            </View>

            <View>
                <Text style={{ textTransform: "uppercase", color: "#EBEBF599", paddingLeft: "3%", fontSize: 25 }}>History</Text>
                <Space props={{
                    width: 10,
                    height: 10
                }}></Space>
                <View>
                    <FlatList
                        data={appData.transactionHistory}
                        renderItem={({ item }) => (
                            <TransactionItem item={item} onPress={() => deleteHandler(item.key, appData)}></TransactionItem>
                        )}
                    />

                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1D1D1D"
    },
    balTextHeader: {
        color: "#FFF",
        textTransform: 'uppercase',
        paddingLeft: "5%",
        fontWeight: "bold"
    },
    balText: {
        color: "#FFF",
        paddingLeft: "5%",
        fontSize: 28
    },
    goalTextHeader: {
        color: "#FFF",
        textTransform: 'uppercase',
        paddingRight: "5%",
        fontWeight: "bold",
        alignSelf: 'flex-end'
    },
    goalText: {
        color: "#FFF",
        paddingRight: "5%",
        fontSize: 28,
        alignSelf: 'flex-end'
    },
    balanceTextGroup: {
        width: "50%",
        maxHeight: 56,
        overflow: 'hidden',
        // backgroundColor: 'blue'
    },
    goalTextGroup: {
        // backgroundColor: 'blue',
        overflow: 'hidden',
        maxHeight: 56,
        width: "50%"
    },
    box: {
        marginLeft: "3%",
        marginRight: "3%",
        height: "20%",
        borderColor: "#E0E0E0",
        borderStyle: "solid",
        borderRadius: 6,
        borderWidth: 2
    },
    boxIncome: {
        // color: "#FFF",
        paddingTop: height * 0.20 * 0.2,
        paddingLeft: "8%",
        paddingRight: "10%",
        alignItems: 'center'
    },
    verticalLine: {
        marginTop: "5%",
        height: "100%",
        width: 1,
        backgroundColor: "#707070"
    },
    boxExpense: {
        paddingTop: height * 0.20 * 0.2,
        paddingLeft: "10%",
        alignItems: "center"
    },
    transacBtn: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center"
    }
})
export default Expenses;