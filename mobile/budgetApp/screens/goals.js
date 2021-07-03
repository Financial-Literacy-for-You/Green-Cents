import React, { useState } from 'react';
import { ViewBase, StyleSheet, Text, View, Alert, StatusBar, SafeAreaView, Dimensions, TextInput } from 'react-native';
import CustomButton from '../components/Button'
import { ThemeProvider, TextField } from 'react-native-ios-kit';

const { height } = Dimensions.get('window')



const Goals = () => {
    const [text, setText] = useState('Text');

    // const changeHandler = (val) => {
    //     setText(val)
    //     // console.log('oin')
    // }

    return (
        // <ThemeProvider>
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#1D1D1D"
                barStyle="default"
            />
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Goals
                </Text>
            </View>
            <View style={styles.space}></View>
            <Text style={styles.inputHeaderText}>
                set your goals
            </Text>
            {/* <TextField 
                placeholder={'What is Your Goal?'}
                onValueChange={changeHandler()}
                /> */}

            <TextInput
                style={styles.input}
                placeholder='What is Your Goal'
                onChangeText={setText}
                value = {text}
            />

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
    header: {
        backgroundColor: "#1D1D1D",
        height: height * 0.173,
        // borderBottomColor: "#00ff00",
        borderBottomColor: "#FFFFFF26",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    headerText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 38,
        paddingLeft: 16,
        paddingTop: height * 0.17 * 0.55
    },
    inputHeaderText: {
        color: "#EBEBF599",
        textTransform: 'uppercase',
        paddingLeft: 15.5,
        paddingRight: 15.5
    },
    space: {
        width: 40,
        height: 40
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        color: "#FFF"
    }
})

export default Goals;