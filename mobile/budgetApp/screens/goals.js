import React, { useState } from 'react';
import { ViewBase, StyleSheet, Text, View, Alert, StatusBar, SafeAreaView, Dimensions, TextInput } from 'react-native';
import CustomButton from '../components/Button'
import Header from '../components/Header'
import Space from '../components/Space'
import CustomTextInput from '../components/CustomTextInput';

// import { ThemeProvider, TextField } from 'react-native-ios-kit';



const Goals = () => {


    return (
        // <ThemeProvider>
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
            <CustomTextInput placeholder="What is your Goal?"></CustomTextInput>
        </SafeAreaView>
        // </ThemeProvider>
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
        paddingRight: 15.5
    }
})

export default Goals;