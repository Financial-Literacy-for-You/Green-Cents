import React from 'react';
import { View, StyleSheet, Image, Alert, SafeAreaView, NativeAppEventEmitter, } from 'react-native'
import CustomButton from '../components/Button'
import CustomStatusBar from '../components/CustomStatusBar'
import Space from '../components/Space'
import { MMKV } from 'react-native-mmkv';

// render elemtn conditionally: https://stackoverflow.com/questions/44046037/if-else-statement-inside-jsx-reactjs

const Home = ({ navigation }) => {
  const navigationHandler = (nav) => {
    if (nav === "goals") {
      navigation.navigate('Goals')
    } else if (nav === 'flydesc') {
      navigation.navigate('FlyDesc')
    } else if (nav === 'budgeting') {
      navigation.navigate('Budgeting')
    } else if (nav === 'expenses') {
      navigation.navigate('Expenses')
    } else if (nav === 'about') {
      navigation.navigate('About')
    }
  }
  function getStartedSelector() {
    var appData = undefined
    if (MMKV.getString('applicationData') != undefined) appData = JSON.parse(MMKV.getString('applicationData'))

    if (appData != undefined && appData.fieldsSet == true) {
      return (
        <CustomButton title="View Expenses" onPress={() => navigationHandler('expenses')}></CustomButton>
      )
    } else if (appData == undefined || appData.fieldsSet == false) {
      return (
        <CustomButton title="Get Started" onPress={() => navigationHandler('goals')}></CustomButton>
      )
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar></CustomStatusBar>
      <View style={styles.imgContainer}>
        <Image source={require('../assets/flyWhiteLogo.png')} style={styles.img}></Image>
      </View>
      <View style={styles.btnContainer}>
        {getStartedSelector(navigationHandler)}
      </View>
      <View style={styles.bottomBtnContainer}>
        <CustomButton title="Who are We?" onPress={() => navigationHandler('flydesc')}></CustomButton>
        <Space props={{
          width: 20,
          height: 20
        }}></Space>
        <CustomButton title="What is Budgeting?" onPress={() => navigationHandler('budgeting')}></CustomButton>
        <Space props={{
          width: 20,
          height: 20
        }}></Space>
        <CustomButton title="About this App" onPress={() => navigationHandler('about')}></CustomButton>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#1D1D1D'
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: "15%", // 144/926
  },
  img: {
    width: 249,
    height: 189,
  },
  btnContainer: {
    alignItems: "center",
    marginTop: "35%"
  },
  bottomBtnContainer: {
    alignItems: "center",
    marginTop: "25%"
  }
})

export default Home;