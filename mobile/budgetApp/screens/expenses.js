import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Dimensions, FlatList, Modal, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native'
import Header from '../components/Header'
import CustomStatusBar from '../components/CustomStatusBar'
import CustomButton from '../components/Button'
import Space from '../components/Space'
import TransactionItem from '../components/TransactionItem'
import { MMKV } from 'react-native-mmkv';
import CurrencyInput from 'react-native-currency-input';
import SegmentedControlTab from "react-native-segmented-control-tab";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid'
import ConfettiCannon from 'react-native-confetti-cannon';
import Icon from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get('window')

const Expenses = ({ navigation }) => {
    const [appData, setAppData] = useState(JSON.parse(MMKV.getString('applicationData')))
    // setAppData(JSON.parse(MMKV.getString('applicationData')))
    const [modalOpen, setModalOpen] = useState(false)
    const [modalTransacName, setModalTransacName] = useState('')
    const [modalTransacAmount, setModalTransacAmount] = useState('')
    const [modalTransacType, setModalTransacType] = useState(null)
    const [confettiVisible, setConfettiVisible] = useState(false)
    const [successModal, setSuccessModalVisible] = useState(false)

    function deleteHandler(key, appData) {
        var toBeDeleted = appData.transactionHistory.filter(transac => transac.key == key)[0]
        appData.transactionHistory = appData.transactionHistory.filter(transac => transac.key != key)
        appData.balance -= toBeDeleted.amount
        appData.balance = Math.round((appData.balance + Number.EPSILON) * 100) / 100
        toBeDeleted.amount = "" + toBeDeleted.amount
        if (toBeDeleted.amount.includes('-')) {
            appData.totalExpense -= Math.abs(toBeDeleted.amount)
            appData.totalExpense = Math.round((appData.totalExpense + Number.EPSILON) * 100) / 100
        } else if (!toBeDeleted.amount.includes('-')) {
            appData.totalIncome -= Math.abs(toBeDeleted.amount)
            appData.totalIncome = Math.round((appData.totalIncome + Number.EPSILON) * 100) / 100
        }
        MMKV.set('applicationData', JSON.stringify(appData))
        console.log('set')
        setAppData(JSON.parse(MMKV.getString('applicationData')))
        console.log('state set')
        console.log(MMKV.getString('applicationData'))

        if ((appData.balance == appData.goalSaveAmount)) {
            if (appData.balance != null && appData.balance != 0) {
                setSuccessModalVisible(true)
                setConfettiVisible(true)
            }
        }
    }

    function addTransacHandler(appData, modalTransacName, modalTransacAmount, modalTransacType, setModalOpen) {
        if (modalTransacAmount === 0) {
            Alert.alert(
                'Check Your Values!',
                'Make sure you enter values for both fields and that fields are not 0!',
                [
                    {
                        text: "OK",
                        style: 'default'
                    }
                ]
            )
            return;
        }
        var amountCleaned = 0
        console.log(modalTransacType) // 0, 1
        if (modalTransacType == 0) { // income
            amountCleaned = Math.abs(modalTransacAmount)
            appData.totalIncome += amountCleaned
            appData.totalIncome = Math.round((appData.totalIncome + Number.EPSILON) * 100) / 100

        } else if (modalTransacType == 1) {
            amountCleaned = parseFloat("-" + Math.abs(modalTransacAmount))
            appData.totalExpense += Math.abs(amountCleaned)
            appData.totalExpense = Math.round((appData.totalExpense + Number.EPSILON) * 100) / 100
        }
        appData.balance += amountCleaned
        appData.balance = Math.round((appData.balance + Number.EPSILON) * 100) / 100
        appData.transactionHistory.push({
            key: uuidv4(),
            title: modalTransacName,
            amount: amountCleaned
        })
        MMKV.set('applicationData', JSON.stringify(appData))
        console.log('set')
        setAppData(JSON.parse(MMKV.getString('applicationData')))
        console.log('state set')
        console.log(MMKV.getString('applicationData'))
        setModalOpen(false)
        setModalTransacName("")
        setModalTransacAmount("")
        setModalTransacType(null)
        if ((appData.balance == appData.goalSaveAmount)) {
            if (appData.balance != null && appData.balance != 0) {
                setSuccessModalVisible(true)
                setConfettiVisible(true)
            }
        }
    }

    function resetData(appData, navigation) {
        Alert.alert(
            "Reset Confirmation",
            "Do you want to erase all data & start over? This action is destructive and cannot be undone.",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Start Over",
                    style: 'destructive',
                    onPress: () => {
                        appData.goalText = null
                        appData.goalSaveAmount = null
                        appData.fieldsSet = false
                        appData.balance = null
                        appData.totalIncome = null
                        appData.totalExpense = null
                        appData.transactionHistory = []
                        MMKV.set('applicationData', JSON.stringify(appData))
                        console.log('MMKV set')
                        setAppData(JSON.parse(MMKV.getString('applicationData')))
                        console.log('state set')
                        navigation.push('Home')
                    }
                }
            ]
        )
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

            <View style={styles.btnContainer}>
                <View style={styles.transacBtn}>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={.7}
                        onPress={() => setModalOpen(true)}
                    >
                        <Text style={styles.btnText}>Add Transaction</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.transacBtn}>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={.7}
                        onPress={() => resetData(appData, navigation)}
                    >
                        <Text style={styles.btnText}>Start Over</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text style={{ textTransform: "uppercase", color: "#EBEBF599", paddingLeft: "3%", fontSize: 25 }}>History</Text>
                <Space props={{
                    width: 10,
                    height: 10
                }}></Space>
                <View style={{ height: height * 0.32 }}>
                    <FlatList
                        data={appData.transactionHistory}
                        scrollEnabled={true}
                        // style={{}}
                        renderItem={({ item }) => (
                            <TransactionItem item={item} onPress={() => deleteHandler(item.key, appData)}></TransactionItem>
                        )}
                    />
                </View>
            </View>

                {confettiVisible && <ConfettiCannon
                    count={200}
                    origin={{ x: -10, y: 0 }}
                    fadeOut={true}
                />}
                <View style={styles.modalCenteredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={successModal}
                        // visible={true}
                    >
                        <View style={styles.successModalView}>
                            <Icon
                            style={{marginLeft: "auto"}}
                            name='ios-close'
                            size={30}
                            color="#FFF"
                            onPress={() => setSuccessModalVisible(false)}
                            />
                            <Text style={{textAlign: "center", color: "#FFF"}}>
                                <Text style={{fontWeight: "bold", fontSize: 20}}>Success!</Text>{"\n\n"}Congratulations on reaching your goal:{"\n"}<Text style={{fontWeight: "bold"}}>{appData.goalText}</Text>{"\n\n"}Press the "Start Over" button to set another goal!
                            </Text>
                        </View>
                    </Modal>
                </View>

            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContainer}>
                    <View style={styles.appleModalHeader}>
                        <View style={{ width: 0.33 * width }}>
                            <TouchableOpacity style={styles.cancelBtn} onPress={() => setModalOpen(false)}>
                                <Text style={styles.cancelBtnText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: 0.33 * width }}>
                            <Text style={styles.modalTitle}>Add Transaction</Text>
                        </View>
                        <View style={{ width: 0.33 * width }}>
                            <TouchableOpacity style={styles.doneBtn} onPress={() => addTransacHandler(appData, modalTransacName, modalTransacAmount, modalTransacType, setModalOpen)}>
                                <Text style={styles.doneBtnText}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Space props={{
                        width: 40,
                        height: 40
                    }}></Space>
                    <Text style={styles.inputHeaderText}>
                        Transaction Details
                    </Text>
                    <TextInput
                        style={styles.modalInput}
                        placeholder="Transaction Name"
                        placeholderTextColor="#EBEBF54D"
                        onChangeText={setModalTransacName}
                        value={modalTransacName}
                        clearButtonMode="always"
                    />
                    <CurrencyInput
                        style={styles.modalInput}
                        placeholder="Transaction Amount"
                        placeholderTextColor="#EBEBF54D"
                        value={modalTransacAmount}
                        onChangeValue={setModalTransacAmount}
                        prefix="$"
                        delimiter=","
                        separator="."
                        precision={2}
                        clearButtonMode="always"
                        onChangeText={(formattedValue) => {
                            console.log(`FORMATTED: ${formattedValue}`); // $2,310.46
                        }}
                    />
                    <Space props={{
                        width: 10,
                        height: 10
                    }}></Space>
                    <SegmentedControlTab
                        values={["Income", "Expense"]}
                        selectedIndex={modalTransacType}
                        onTabPress={setModalTransacType}
                        tabStyle={{ backgroundColor: "#1D1D1D" }}
                    />
                </View>
            </Modal>

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
        alignItems: 'center',
        flex: 1
    },
    verticalLine: {
        marginTop: "5%",
        height: "100%",
        width: 1,
        backgroundColor: "#707070"
    },
    boxExpense: {
        paddingTop: height * 0.20 * 0.2,
        alignItems: "center",
        flex: 1
    },
    btnContainer: {
        flexDirection: 'row'
    },
    transacBtn: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center",
        flex: 1
    },
    button: {
        width: 180,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#275D01',
    },
    btnText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textAlign: "center"
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "#1D1D1D",
        paddingTop: "5%",
    },
    appleModalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: "3%",
        borderBottomColor: "#FFFFFF26",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    cancelBtn: {
        // backgroundColor: "blue",
        width: 60,
        flexDirection: "row",
        marginRight: "auto"
    },
    cancelBtnText: {
        color: "#007AFF",
        paddingLeft: "5%",
        flexDirection: "row",
        marginRight: "auto",
        fontSize: 17
    },
    modalTitle: {
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 17
    },
    doneBtn: {
        // backgroundColor: "blue",
        width: 60,
        flexDirection: "row",
        marginLeft: "auto"
    },
    doneBtnText: {
        color: "#007AFF",
        flexDirection: "row",
        marginLeft: "auto",
        paddingRight: "5%",
        fontSize: 17
    },
    inputHeaderText: {
        color: "#EBEBF599",
        textTransform: 'uppercase',
        paddingLeft: 15.5,
        paddingRight: 15.5,
        paddingBottom: 12
    },
    modalInput: {
        height: 40,
        borderWidth: 1,
        color: "#FFFFFF",
        backgroundColor: "#000000"
    },
    modalCenteredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    successModalView: {
        margin: 20,
        // backgroundColor: "#9B9B9B",
        backgroundColor: "#000",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#FFF",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
        
    }
})
export default Expenses;