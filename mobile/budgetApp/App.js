import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert, StatusBar, SafeAreaView, } from 'react-native'
import CustomButton from './components/Button'
// render elemtn conditionally: https://stackoverflow.com/questions/44046037/if-else-statement-inside-jsx-reactjs

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#1D1D1D"
        barStyle="default"
      />
      <View style={styles.imgContainer}>
        <Image source={require('./assets/flyWhiteLogo.png')} style={styles.img}></Image>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton style={styles.button} title="Get Started" onPress={() => Alert.alert('next page')}></CustomButton>
      </View>
      <View style={styles.bottomBtnContainer}>
        <CustomButton style={styles.button} title="Who are We?" onPress={() => Alert.alert('who are we page')}></CustomButton>
        <View style={styles.space}></View>
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
  space: {
    width: 20,
    height: 20
  }
})

export default App;