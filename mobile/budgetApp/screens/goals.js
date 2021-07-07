import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, StatusBar, SafeAreaView, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import CustomButton from '../components/Button'
import Header from '../components/Header'
import Space from '../components/Space'
import CustomTextInput from '../components/CustomTextInput';
import CustomStatusBar from '../components/CustomStatusBar';
import CurrencyInput from 'react-native-currency-input';
import { MMKV } from 'react-native-mmkv';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid'

// import { ThemeProvider, TextField } from 'react-native-ios-kit';

function store(goalText, saveText, navigation) {
    if (goalText == undefined || saveText == undefined || goalText == "" || saveText == "" || "" + saveText == "0") {
        Alert.alert('Make sure you enter values for both fields! & that fields are not 0')
    } else {
        saveText = "" + saveText
        var writeData = {
            goalText: goalText,
            goalSaveAmount: saveText.includes('.') ? saveText : saveText + '.00',
            fieldsSet: true,
            // balance: 0,
            balance: 400,
            // totalIncome: 0,
            totalIncome: 500,
            // totalExpense: 0,
            totalExpense: 100,
            // transactionHistory: []
            transactionHistory: [{
                // key: uuidv4(),
                key: uuidv4(),
                title: "cash",
                amount: 500
            }, {
                // key: uuidv4(),
                key: uuidv4(),
                title: "arrested",
                amount: -100
            }]
        }
        MMKV.set('applicationData', JSON.stringify(writeData))
        console.log('set')
        console.log(JSON.parse(MMKV.getString('applicationData')))
        // MMKV.set('goalText', goalText) // goals
        // console.log(`set ${goalText}`)
        // MMKV.set('saveText', "" + saveText) // amount to save
        // console.log(`set ${saveText}`)
        // MMKV.set('goalsSet', true)  // whether goals & amoutn to save have been set
        // console.log(`set ${true}`)
        // console.log(MMKV.getString('goalText'))
        // console.log(MMKV.getString('saveText'))
        // // console.log(MMKV.getString('saveText'))
        // console.log(MMKV.getBoolean('goalsSet'))
        navigation.navigate('Expenses')
    }
}

const Goals = ({ navigation }) => {

    const [goalText, goalSetText] = useState('');
    const [saveText, saveSetText] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <CustomStatusBar></CustomStatusBar>
            <Header title="Goals"></Header>
            <Space props={{
                width: 40,
                height: 40
            }}></Space>
            <Text style={styles.inputHeaderText}>
                set your goals
            </Text>

            {/* <CustomTextInput placeholder="What is your Goal?"></CustomTextInput> */}
            {/* <CustomTextInput placeholder="Amount to Save?"></CustomTextInput> */}
            <TextInput
                style={styles.input}
                placeholder="What is your Goal?"
                placeholderTextColor="#EBEBF54D"
                onChangeText={goalSetText}
                value={goalText}
                clearButtonMode="always"
            />
            <CurrencyInput
                style={styles.input}
                placeholder="Amount to Save?"
                placeholderTextColor="#EBEBF54D"
                value={saveText}
                onChangeValue={saveSetText}
                prefix="$"
                delimiter=","
                separator="."
                precision={2}
                clearButtonMode="always"
                onChangeText={(formattedValue) => {
                    console.log(`FORMATTED: ${formattedValue}`); // $2,310.46
                }}
            />

            {/* <CustomButton title="Next"></CustomButton> */}
            <Space props={{
                width: 40,
                height: 40
            }}></Space>
            <View>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={.7}
                    onPress={() => store(goalText, saveText, navigation, Alert)}
                >
                    <Text style={styles.text}>Next</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

// console.log(layoutHeight)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D1D1D'
    },
    inputHeaderText: {
        color: "#EBEBF599",
        textTransform: 'uppercase',
        paddingLeft: 15.5,
        paddingRight: 15.5,
        paddingBottom: 12
    },
    input: {
        height: 40,
        borderWidth: 1,
        color: "#FFFFFF",
        backgroundColor: "#000000"
    },
    button: {
        width: 200,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#275D01',
        position: 'absolute',
        alignSelf: "center"
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textAlign: "center"
    }
})

export default Goals;