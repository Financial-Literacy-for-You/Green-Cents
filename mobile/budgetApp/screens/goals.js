import React, { useState } from 'react';
import { ViewBase, StyleSheet, Text, View, Alert, StatusBar, SafeAreaView, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import CustomButton from '../components/Button'
import Header from '../components/Header'
import Space from '../components/Space'
import CustomTextInput from '../components/CustomTextInput';
import { MMKV } from 'react-native-mmkv';

// import { ThemeProvider, TextField } from 'react-native-ios-kit';

function store(text) {
    MMKV.set('goal', text)
    console.log(`set ${text}`)
    console.log(MMKV.getString(('goal')))

}

const Goals = () => {

    const [text, setText] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#1D1D1D"
                barStyle="default"
            />
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
                onChangeText={setText}
                value={text}
                clearButtonMode="always"
            />
            {/* <CustomButton title="Next"></CustomButton> */}

            <TouchableOpacity
                style={styles.button}
                activeOpacity={.7}
                onPress={() => store(text)}
            >
                <Text style={styles.text}>Next</Text>
            </TouchableOpacity>


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
        width: 242,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#275D01',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textAlign: "center"
    },
})

export default Goals;