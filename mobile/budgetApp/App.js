import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert, StatusBar, SafeAreaView, } from 'react-native'
import CustomButton from './components/Button'
// import Navigator from './routes/homeStack'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'react-native-ios-kit';
import Home from './screens/home'
import Goals from './screens/goals'
// render elemtn conditionally: https://stackoverflow.com/questions/44046037/if-else-statement-inside-jsx-reactjs

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Stack.Navigator>
          {/* <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/> */}
          <Stack.Screen name="Goals" component={Goals} options={{
            headerShown: false, // true -> false
            headerLargeTitle: true,
            headerLargeTitleStyle: {
              fontSize: 38,
              color: "#1D1D1DF0"
            },
            headerStyle: {
              backgroundColor: "#1D1D1DF0",
              height: 100
            },
            headerTitleStyle: {
              fontSize: 30,
              color: "#FFFFFF",
              fontWeight: "bold",
              paddingTop: 30
            },
          }} />

        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};



export default App;