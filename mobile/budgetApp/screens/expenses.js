import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header'
import CustomStatusBar from '../components/CustomStatusBar'
import CustomButton from '../components/Button'
import Space from '../components/Space'
import { MMKV } from 'react-native-mmkv';

const Expenses = () => {
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
                        $100000000000.00
                    </Text>
                </View>


                <View style={styles.goalTextGroup}>
                    <Text style={styles.goalTextHeader}>
                        your goal
                    </Text>
                    <Text style={styles.goalText}>
                        ${MMKV.getString('saveText').includes('.') ? MMKV.getString('saveText') : MMKV.getString('saveText') + '.00'}
                    </Text>
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
    }
})
export default Expenses;