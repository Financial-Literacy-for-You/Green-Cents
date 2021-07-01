import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/flyWhiteLogo.png')} style={styles.img}></Image>
      <Button style={styles.button}
        title="Get Started"
        onPress={() => Alert.alert('Move to next page')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1D1D1D'
  },
  img: {
    width: 249,
    height: 189,
    top: "15%"
  },
  button: {
    flex: 2,
    top: "48%"
  }
})

export default App;