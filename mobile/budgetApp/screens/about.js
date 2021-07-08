import React from 'react';
import { View, StyleSheet, SafeAreaView, Image, Text, Linking } from 'react-native';
import CustomStatusBar from '../components/CustomStatusBar'
import Header from '../components/Header'
import Space from '../components/Space'
import pkg from '../package.json'
import build from '../build.json'
import CustomButton from '../components/Button';

const About = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <CustomStatusBar></CustomStatusBar>
            <Header title="About" back={true} onPressAction={() => navigation.navigate('Home')}></Header>
            <Space props={{
                width: 20,
                height: 20
            }}></Space>
            <Image source={require('../assets/appLogos/white_logo_transparent_background.png')} style={styles.img}></Image>
            <Text style={styles.text}>
                Financial Literacy for You Green Cents{"\n\n"}
                Version {pkg.version} (Software Build {build.build}){"\n"}
                © Financial Literacy for You. All rights reserved.{"\n\n"}
            </Text>
            <View style={styles.btnContainer}>
                <CustomButton title="Privacy Policy" onPress={() => Linking.openURL('https://www.financialliteracyforyou.org/')}></CustomButton>
                <Space props={{
                    width: 20,
                    height: 20
                }}></Space>
                <CustomButton title="Terms of Use" onPress={() => Linking.openURL('https://www.financialliteracyforyou.org/')}></CustomButton>
                <Space props={{
                    width: 20,
                    height: 20
                }}></Space>
                <CustomButton title="Support" onPress={() => Linking.openURL('mailto:jfang.cv.ca.us@gmail.com')}></CustomButton>
                <Space props={{
                    width: 20,
                    height: 20
                }}></Space>
                <CustomButton title="Open Source Acknowledgements" onPress={() => Linking.openURL('https://www.financialliteracyforyou.org/app-licenses')}></CustomButton>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1D1D1D"
    },
    img: {
        width: 329,
        height: 180,
        alignSelf: "center"
    },
    text: {
        color: "#FFF",
        paddingLeft: "5%"
    },
    btnContainer: {
        alignItems: "center"
    }
})

export default About