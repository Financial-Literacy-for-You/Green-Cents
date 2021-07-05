import React from 'react';
import { View, StyleSheet, Image, Alert, SafeAreaView, } from 'react-native'
import CustomButton from '../components/Button'
import CustomStatusBar from '../components/CustomStatusBar'
import Space from '../components/Space'

// render elemtn conditionally: https://stackoverflow.com/questions/44046037/if-else-statement-inside-jsx-reactjs

const Home = ({ navigation }) => {
  const navigationHandler = (nav) => {
    if (nav === "goals") {
      navigation.navigate('Goals')
    } else if (nav === 'flydesc') {
      navigation.navigate('FlyDesc')
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar></CustomStatusBar>
      <View style={styles.imgContainer}>
        <Image source={require('../assets/flyWhiteLogo.png')} style={styles.img}></Image>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton style={styles.button} title="Get Started" onPress={() => navigationHandler('goals')}></CustomButton>
      </View>
      <View style={styles.bottomBtnContainer}>
        <CustomButton style={styles.button} title="Who are We?" onPress={() => navigationHandler('flydesc')}></CustomButton>
        <Space props={{
          width: 20,
          height: 20
        }}></Space>
        <CustomButton style={styles.button} title="What is Budgeting?" onPress={() => Alert.alert('who are we page')}></CustomButton>
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
    marginTop: "30%"
  },






})

export default Home;