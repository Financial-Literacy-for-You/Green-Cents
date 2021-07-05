import React from 'react'
import { Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import CustomStatusBar from '../components/CustomStatusBar'
import Header from '../components/Header'
import Space from '../components/Space'
import CustomButton from '../components/Button'

const flyDesc = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <CustomStatusBar></CustomStatusBar>
            <Header title="Who Are We?" back={true} onPressAction={() => navigation.navigate('Home')}></Header>
            <Space props={{
                width: 20,
                height: 20
            }}></Space>
            <Text style={styles.text}>
                Financial Literacy for You (FLY) is a 501(c)3 non-profit started in 2018 that teaches basic money management skills to thousands of youth across the country.{"\n\n"}To learn more, please visit our website by clicking the button below.
            </Text>
            <Space props={{
                width: 40,
                height: 40
            }}></Space>
            <View style={styles.btnContainer}>
                <CustomButton title="Visit Our Website" onPress={() => Linking.openURL('https://www.financialliteracyforyou.org/')}
                ></CustomButton>
            </View>
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
    },
    btnContainer: {
        alignSelf: "center"
    }
})
export default flyDesc;