import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import Header from '../components/Header'
import Space from '../components/Space'
import CustomStatusBar from '../components/CustomStatusBar'

const Budgeting = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <CustomStatusBar></CustomStatusBar>
            <Header title="What Is Budgeting?" back={true} onPressAction={() => navigation.navigate('Home')}></Header>
            <Space props={{
                width: 20,
                height: 20
            }}></Space>
            <Text style={styles.text}>
                A budget is a spending plan for income and expenses over a certain period of time for reaching financial goals. {"\n\n"}Use this app to help you set up a budget and track your spending.
            </Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1D1D1D"
    },
    text: {
        color: "#FFFFFF",
        paddingLeft: "5%",
        paddingRight: "5%",
        lineHeight: 20
    }
})

export default Budgeting;